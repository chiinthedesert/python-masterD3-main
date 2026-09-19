"use client"

import { useMemo, useState } from "react"
import { Pencil, Search, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PartnerDialog } from "@/components/partners/partner-dialog"
import { partnerKindMeta, partners as initialPartners, type Partner, type PartnerKind } from "@/lib/partners-data"

export function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>(initialPartners)
  const [query, setQuery] = useState("")
  const [kind, setKind] = useState<"all" | PartnerKind>("all")

  const filteredPartners = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return partners.filter((partner) => {
      const matchesKind = kind === "all" || partner.kind === kind
      const matchesQuery = !normalizedQuery || [partner.name, partner.contactName, partner.email, partner.phone, partner.note]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
      return matchesKind && matchesQuery
    })
  }, [kind, partners, query])

  function savePartner(partner: Omit<Partner, "id">, id?: number) {
    setPartners((previous) => {
      if (id) return previous.map((item) => (item.id === id ? { id, ...partner } : item))
      const nextId = previous.reduce((max, item) => Math.max(max, item.id), 2000) + 1
      return [{ id: nextId, ...partner }, ...previous]
    })
  }

  function deletePartner(partner: Partner) {
    if (window.confirm(`Xóa ${partner.name} khỏi danh sách đối tác?`)) {
      setPartners((previous) => previous.filter((item) => item.id !== partner.id))
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-1 border-b border-border p-4 md:p-6">
          <h2 className="text-lg font-semibold text-foreground">Danh sách đối tác và doanh nghiệp</h2>
          <p className="text-sm text-muted-foreground">Quản lý đơn vị phối hợp, tài trợ và các đầu mối liên hệ của cuộc thi.</p>
        </div>
        <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm tên, liên hệ, ghi chú..." className="pl-9" aria-label="Tìm đối tác hoặc doanh nghiệp" />
            </div>
            <select value={kind} onChange={(event) => setKind(event.target.value as "all" | PartnerKind)} aria-label="Lọc theo loại đơn vị" className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground sm:w-44">
              <option value="all">Tất cả loại</option>
              <option value="partner">Đối tác</option>
              <option value="company">Doanh nghiệp</option>
            </select>
          </div>
          <PartnerDialog onSave={(partner) => savePartner(partner)} />
        </div>
        <div className="border-t border-border">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="pl-4 md:pl-6">Tên đơn vị</TableHead>
                <TableHead>Phân loại</TableHead>
                <TableHead>Người liên hệ</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Ghi chú</TableHead>
                <TableHead className="pr-4 text-right md:pr-6">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPartners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell className="pl-4 font-medium text-foreground md:pl-6">{partner.name}</TableCell>
                  <TableCell><Badge variant="secondary">{partnerKindMeta[partner.kind]}</Badge></TableCell>
                  <TableCell>{partner.contactName}</TableCell>
                  <TableCell className="text-muted-foreground">{partner.email || "-"}</TableCell>
                  <TableCell className="text-muted-foreground">{partner.phone}</TableCell>
                  <TableCell className="max-w-xs whitespace-normal text-muted-foreground">{partner.note || "-"}</TableCell>
                  <TableCell className="pr-4 md:pr-6">
                    <div className="flex items-center justify-end gap-1">
                      <PartnerDialog partner={partner} onSave={(updated) => savePartner(updated, partner.id)} trigger={<Button variant="ghost" size="icon" className="size-8 text-muted-foreground" aria-label={`Chỉnh sửa ${partner.name}`}><Pencil /></Button>} />
                      <Button variant="ghost" size="icon" className="size-8 text-destructive" onClick={() => deletePartner(partner)} aria-label={`Xóa ${partner.name}`}><Trash2 /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPartners.length === 0 && <TableRow className="hover:bg-transparent"><TableCell colSpan={7} className="py-10 text-center text-sm text-muted-foreground">Không tìm thấy đối tác hoặc doanh nghiệp phù hợp.</TableCell></TableRow>}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
