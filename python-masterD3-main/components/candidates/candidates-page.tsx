"use client"

import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Eye, FileUp, Pencil, Search, Sheet, Trash2 } from "lucide-react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { AddCandidateDialog } from "@/components/candidates/add-candidate-dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  candidates as initialCandidates,
  candidateStatusMeta,
  candidateStatusOptions,
  candidateUniversityOptions,
  type Candidate,
} from "@/lib/candidates-data"

const PAGE_SIZE = 8

export function CandidatesPage() {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates)
  const [query, setQuery] = useState("")
  const [status, setStatus] = useState("all")
  const [university, setUniversity] = useState("all")
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<Set<number>>(new Set())

  function handleAddCandidate(candidate: Omit<Candidate, "id">) {
    setCandidates((prev) => {
      const nextId = prev.reduce((max, item) => Math.max(max, item.id), 1000) + 1
      return [{ id: nextId, ...candidate }, ...prev]
    })
    setPage(1)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return candidates.filter((candidate) => {
      const matchesQuery =
        !q ||
        candidate.name.toLowerCase().includes(q) ||
        candidate.email.toLowerCase().includes(q) ||
        candidate.phone.includes(q) ||
        candidate.university.toLowerCase().includes(q)
      const matchesStatus = status === "all" || candidate.status === status
      const matchesUniversity = university === "all" || candidate.university === university
      return matchesQuery && matchesStatus && matchesUniversity
    })
  }, [candidates, query, status, university])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const pageRows = filtered.slice(start, start + PAGE_SIZE)

  const allOnPageSelected = pageRows.length > 0 && pageRows.every((row) => selected.has(row.id))

  function resetPage() {
    setPage(1)
  }

  function toggleRow(id: number) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function toggleAllOnPage() {
    setSelected((prev) => {
      const next = new Set(prev)
      if (allOnPageSelected) {
        pageRows.forEach((row) => next.delete(row.id))
      } else {
        pageRows.forEach((row) => next.add(row.id))
      }
      return next
    })
  }

  const displayTotal = query || status !== "all" || university !== "all" ? filtered.length : candidates.length
  const rangeEnd = start + pageRows.length

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-1 border-b border-border p-4 md:p-6">
          <h2 className="text-lg font-semibold text-foreground">Bảng dữ liệu thí sinh tập trung</h2>
          <p className="text-sm text-muted-foreground">
            Quản lý toàn bộ hồ sơ thí sinh dự thi Python Master
          </p>
        </div>

        <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  resetPage()
                }}
                placeholder="Tìm tên, SĐT, email, trường..."
                className="pl-9"
                aria-label="Tìm kiếm thí sinh"
              />
            </div>

            <Select
              value={status}
              onValueChange={(value) => {
                setStatus(value)
                resetPage()
              }}
            >
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {candidateStatusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={university}
              onValueChange={(value) => {
                setUniversity(value)
                resetPage()
              }}
            >
              <SelectTrigger className="w-full sm:w-52">
                <SelectValue placeholder="Trường đại học" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {candidateUniversityOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <AddCandidateDialog onAdd={handleAddCandidate} />
            <Button variant="outline">
              <FileUp />
              Nhập file
            </Button>
            <Button variant="outline">
              <Sheet />
              Xuất Excel
            </Button>
          </div>
        </div>

        <div className="border-t border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-10 pl-4 md:pl-6">
                  <input
                    type="checkbox"
                    checked={allOnPageSelected}
                    onChange={toggleAllOnPage}
                    aria-label="Chọn tất cả thí sinh trên trang"
                    className="size-4 cursor-pointer rounded border-border accent-primary"
                  />
                </TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Họ và tên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Trường đại học</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="pr-4 text-right md:pr-6">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pageRows.map((candidate) => {
                const meta = candidateStatusMeta[candidate.status]
                return (
                  <TableRow key={candidate.id} data-state={selected.has(candidate.id) ? "selected" : undefined}>
                    <TableCell className="pl-4 md:pl-6">
                      <input
                        type="checkbox"
                        checked={selected.has(candidate.id)}
                        onChange={() => toggleRow(candidate.id)}
                        aria-label={`Chọn thí sinh ${candidate.name}`}
                        className="size-4 cursor-pointer rounded border-border accent-primary"
                      />
                    </TableCell>
                    <TableCell className="text-muted-foreground">{candidate.id}</TableCell>
                    <TableCell className="font-medium text-foreground">{candidate.name}</TableCell>
                    <TableCell className="text-muted-foreground">{candidate.email}</TableCell>
                    <TableCell className="text-muted-foreground">{candidate.phone}</TableCell>
                    <TableCell className="text-foreground">{candidate.university}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                          meta.badgeClass,
                        )}
                      >
                        <span className={cn("size-1.5 rounded-full", meta.dotClass)} />
                        {meta.label}
                      </span>
                    </TableCell>
                    <TableCell className="pr-4 md:pr-6">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label="Xem chi tiết">
                          <Eye />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label="Chỉnh sửa">
                          <Pencil />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8 text-destructive" aria-label="Xoá">
                          <Trash2 />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
              {pageRows.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={8} className="py-10 text-center text-sm text-muted-foreground">
                    Không tìm thấy thí sinh phù hợp với bộ lọc.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-3 border-t border-border p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <p className="text-sm text-muted-foreground">
            Hiển thị <span className="font-medium text-foreground">{pageRows.length === 0 ? 0 : start + 1}</span> -{" "}
            <span className="font-medium text-foreground">{rangeEnd}</span> trên tổng số{" "}
            <span className="font-medium text-foreground">{displayTotal.toLocaleString("vi-VN")}</span> kết quả
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            >
              <ChevronLeft />
              Trước
            </Button>
            <span className="text-sm text-muted-foreground">
              Trang <span className="font-medium text-foreground">{currentPage}</span> / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            >
              Sau
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
