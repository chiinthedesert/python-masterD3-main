"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  candidateDivisionOptions,
  candidateSalesRepOptions,
  type Candidate,
  type CandidateStatus,
} from "@/lib/candidates-data"

const statusChoices: { label: string; value: CandidateStatus }[] = [
  { label: "Chờ hồ sơ", value: "waiting" },
  { label: "Đang xét duyệt", value: "reviewing" },
  { label: "Đã đóng phí", value: "paid" },
  { label: "Đã nộp bài", value: "submitted" },
  { label: "Bị loại", value: "rejected" },
]

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  citizenId: "",
  university: "",
  division: candidateDivisionOptions[0].value,
  salesRep: candidateSalesRepOptions[0].value,
  status: "waiting" as CandidateStatus,
}

interface AddCandidateDialogProps {
  onAdd: (candidate: Omit<Candidate, "id">) => void
}

export function AddCandidateDialog({ onAdd }: AddCandidateDialogProps) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(emptyForm)

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    onAdd({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      citizenId: form.citizenId.trim(),
      university: form.university.trim(),
      division: form.division,
      salesRep: form.salesRep,
      status: form.status,
    })
    setForm(emptyForm)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setForm(emptyForm)
      }}
    >
      <DialogTrigger render={<Button />}>
        <Plus />
        Thêm thí sinh
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Thêm thí sinh mới</DialogTitle>
          <DialogDescription>Điền thông tin hồ sơ thí sinh dự thi Python Master.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="cand-name">Họ và tên</Label>
              <Input
                id="cand-name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-email">Email</Label>
              <Input
                id="cand-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="email@example.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-phone">Số điện thoại</Label>
              <Input
                id="cand-phone"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="09xxxxxxxx"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-cccd">CCCD</Label>
              <Input
                id="cand-cccd"
                value={form.citizenId}
                onChange={(e) => update("citizenId", e.target.value)}
                placeholder="Số căn cước công dân"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-university">Trường / Đơn vị</Label>
              <Input
                id="cand-university"
                required
                value={form.university}
                onChange={(e) => update("university", e.target.value)}
                placeholder="Trường đại học hoặc đơn vị công tác"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-division">Bảng đấu</Label>
              <Select value={form.division} onValueChange={(v) => update("division", v)}>
                <SelectTrigger id="cand-division">
                  <SelectValue placeholder="Chọn bảng đấu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {candidateDivisionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-sales">Sale phụ trách</Label>
              <Select value={form.salesRep} onValueChange={(v) => update("salesRep", v)}>
                <SelectTrigger id="cand-sales">
                  <SelectValue placeholder="Chọn sale phụ trách" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {candidateSalesRepOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cand-status">Trạng thái hồ sơ</Label>
              <Select
                items={statusChoices}
                value={form.status}
                onValueChange={(v) => update("status", v as CandidateStatus)}
              >
                <SelectTrigger id="cand-status">
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {statusChoices.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>Huỷ</DialogClose>
            <Button type="submit">Lưu thí sinh</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
