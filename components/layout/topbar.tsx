"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { NotificationBell } from "@/components/layout/notification-bell"
import { LogOut } from "lucide-react"

interface TopbarProps {
  title: string
  subtitle: string
  onLogout: () => void
}

export function Topbar({ title, subtitle, onLogout }: TopbarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border px-4 md:px-6">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />
      <div className="flex flex-1 flex-col">
        <h1 className="text-base font-semibold text-foreground md:text-lg">{title}</h1>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        <NotificationBell />
        <Avatar className="size-9">
          <AvatarFallback className="bg-primary/15 text-primary text-sm font-medium">NT</AvatarFallback>
        </Avatar>
        <div className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-medium text-foreground">Nguyễn Thảo</span>
          <span className="text-xs text-muted-foreground">Trưởng phòng Vận hành</span>
        </div>
        <Button variant="ghost" size="icon" className="size-9 text-muted-foreground" onClick={onLogout} aria-label="Đăng xuất">
          <LogOut />
        </Button>
      </div>
    </header>
  )
}
