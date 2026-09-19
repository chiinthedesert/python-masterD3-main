"use client"

import { useState } from "react"
import { ArrowRight, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AdminLoginProps {
  onLogin: () => void
}

const ADMIN_EMAIL = "admin@pythonmaster.vn"
const ADMIN_PASSWORD = "Admin@123"

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [password, setPassword] = useState(ADMIN_PASSWORD)
  const [error, setError] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim().toLowerCase() !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      setError("Email hoặc mật khẩu quản trị không chính xác.")
      return
    }
    setError("")
    onLogin()
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="gap-4 p-6 md:p-8">
          <div className="flex h-12 w-40 items-center overflow-hidden rounded-xl bg-white px-2">
            <img src="/sotatek-logo.svg" alt="SOTATEK" className="h-full w-full object-contain" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-xl">Đăng nhập quản trị</CardTitle>
            <CardDescription>Truy cập hệ thống vận hành Python Master</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0 md:p-8 md:pt-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-email">Email quản trị</Label>
              <Input id="admin-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="username" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="admin-password">Mật khẩu</Label>
              <Input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" />
            </div>
            {error && <p className="text-sm text-destructive" role="alert">{error}</p>}
            <Button type="submit" className="mt-2 w-full">
              Đăng nhập
              <ArrowRight data-icon="inline-end" />
            </Button>
          </form>
          <div className="mt-6 flex gap-2 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
            <p>Tài khoản demo: {ADMIN_EMAIL} / {ADMIN_PASSWORD}</p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
