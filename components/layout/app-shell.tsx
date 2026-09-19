"use client"

import { useState } from "react"

import { AdminLogin } from "@/components/auth/admin-login"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar, type AppView } from "@/components/layout/app-sidebar"
import { Topbar } from "@/components/layout/topbar"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { CandidatesPage } from "@/components/candidates/candidates-page"
import { PartnersPage } from "@/components/partners/partners-page"

const viewMeta: Record<AppView, { title: string; subtitle: string }> = {
  dashboard: {
    title: "Dashboard Vận hành",
    subtitle: "Theo dõi đăng ký, thanh toán và tiến độ vận hành cuộc thi Python Master",
  },
  candidates: {
    title: "Quản lý Thí sinh",
    subtitle: "Quản lý hồ sơ dự thi tập trung của cuộc thi Python Master",
  },
  partners: {
    title: "Quản lý Đối tác",
    subtitle: "Theo dõi hợp tác và tài trợ cho cuộc thi Python Master",
  },
  settings: {
    title: "Cấu hình",
    subtitle: "Thiết lập hệ thống và tùy chọn vận hành",
  },
}

export function AppShell() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [view, setView] = useState<AppView>("dashboard")
  const meta = viewMeta[view]

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <SidebarProvider>
      <AppSidebar activeView={view} onNavigate={setView} />
      <SidebarInset>
        <Topbar title={meta.title} subtitle={meta.subtitle} onLogout={() => setIsAuthenticated(false)} />
        {view === "candidates" ? (
          <CandidatesPage />
        ) : view === "partners" ? (
          <PartnersPage />
        ) : (
          <DashboardShell />
        )}
      </SidebarInset>
    </SidebarProvider>
  )
}
