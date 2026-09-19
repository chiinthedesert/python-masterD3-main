"use client"

import {
  Activity,
  Users,
  Handshake,
  Settings,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export type AppView = "dashboard" | "candidates" | "partners" | "settings"

const navItems: { label: string; icon: typeof Activity; view: AppView }[] = [
  { label: "Dashboard Vận hành", icon: Activity, view: "dashboard" },
  { label: "Quản lý Thí sinh", icon: Users, view: "candidates" },
  { label: "Quản lý Đối tác", icon: Handshake, view: "partners" },
  { label: "Cấu hình", icon: Settings, view: "settings" },
]

interface AppSidebarProps {
  activeView: AppView
  onNavigate: (view: AppView) => void
}

export function AppSidebar({ activeView, onNavigate }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="cursor-default hover:bg-transparent active:bg-transparent">
              <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white">
                <img src="/sotatek-logo.svg" alt="SOTATEK" className="h-8 w-8 object-cover object-left" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">Python Master</span>
                <span className="text-xs text-muted-foreground">Ban tổ chức</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Điều hướng</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.view === activeView}
                    tooltip={item.label}
                    onClick={() => onNavigate(item.view)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
