"use client"

import { useEffect, useState } from "react"
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
import { Textarea } from "@/components/ui/textarea"
import { type Partner, type PartnerKind, partnerKindMeta } from "@/lib/partners-data"

interface PartnerDialogProps {
  partner?: Partner
  onSave: (partner: Omit<Partner, "id">) => void
  trigger?: React.ReactNode
}

const emptyForm: Omit<Partner, "id"> = {
  name: "",
  kind: "partner",
  contactName: "",
  email: "",
  phone: "",
  note: "",
}

export function PartnerDialog({ partner, onSave, trigger }: PartnerDialogProps) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Omit<Partner, "id">>(partner ?? emptyForm)

  useEffect(() => {
    if (open) setForm(partner ?? emptyForm)
  }, [open, partner])

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((previous) => ({ ...previous, [key]: value }))
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    onSave({
      name: form.name.trim(),
      kind: form.kind,
      contactName: form.contactName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      note: form.note.trim(),
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!partner ? (
        <DialogTrigger render={trigger ?? <Button />}>
          <Plus />
          Thêm đối tác
        </DialogTrigger>
      ) : (
        <DialogTrigger render={trigger} />
      )}
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{partner ? "Chỉnh sửa thông tin" : "Thêm đối tác hoặc doanh nghiệp"}</DialogTitle>
          <DialogDescription>
            Lưu thông tin liên hệ và ghi chú phân loại để đội vận hành dễ theo dõi.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="partner-name">Tên đối tác / doanh nghiệp</Label>
              <Input id="partner-name" required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Tên đơn vị" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="partner-kind">Phân loại</Label>
              <select
                id="partner-kind"
                value={form.kind}
                onChange={(event) => update("kind", event.target.value as PartnerKind)}
                className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground"
              >
                {Object.entries(partnerKindMeta).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="partner-contact">Người liên hệ</Label>
              <Input id="partner-contact" required value={form.contactName} onChange={(event) => update("contactName", event.target.value)} placeholder="Họ và tên" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="partner-email">Email</Label>
              <Input id="partner-email" type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="email@donvi.vn" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="partner-phone">Số điện thoại</Label>
              <Input id="partner-phone" required value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="09xxxxxxxx" />
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="partner-note">Ghi chú phân loại</Label>
              <Textarea id="partner-note" value={form.note} onChange={(event) => update("note", event.target.value)} placeholder="Ví dụ: nhà tài trợ, trường phối hợp, đối tác truyền thông..." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>Hủy</DialogClose>
            <Button type="submit">{partner ? "Lưu thay đổi" : "Thêm đơn vị"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
