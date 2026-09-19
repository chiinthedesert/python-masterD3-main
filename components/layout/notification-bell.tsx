"use client"

import { useState } from "react"
import { Bell, Check, CheckCheck, CreditCard, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "cn"

type NotificationType = "registration" | "payment"

interface NotificationItem {
  id: number
  type: NotificationType
  title: string
  description: string
  time: string
  read: boolean
}

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    type: "registration",
    title: "Thí sinh mới đăng ký",
    description: "Nguyễn Minh Khôi vừa hoàn tất đăng ký dự thi.",
    time: "2 phút trước",
    read: false,
  },
  {
    id: 2,
    type: "payment",
    title: "Thanh toán thành công",
    description: "Lê Hoàng Nam đã thanh toán lệ phí dự thi.",
    time: "18 phút trước",
    read: false,
  },
  {
    id: 3,
    type: "registration",
    title: "Thí sinh mới đăng ký",
    description: "Trần Ngọc Anh vừa đăng ký từ Đại học FPT.",
    time: "1 giờ trước",
    read: true,
  },
]

export function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((notification) => !notification.read).length

  function markAllAsRead() {
    setNotifications((current) => current.map((notification) => ({ ...notification, read: true })))
  }

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative size-9 text-muted-foreground"
        aria-label={`Thông báo${unreadCount ? `, ${unreadCount} chưa đọc` : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
      >
        <Bell />
        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex min-w-4 translate-x-1/4 -translate-y-1/4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold leading-4 text-destructive-foreground">
            {unreadCount}
          </span>
        )}
      </Button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <h2 className="text-sm font-semibold">Thông báo</h2>
              <p className="text-xs text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} thông báo chưa đọc` : "Bạn đã xem hết thông báo"}
              </p>
            </div>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                <CheckCheck />
                Đã đọc hết
              </Button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-muted-foreground">Chưa có thông báo nào.</p>
            ) : (
              notifications.map((notification) => {
                const isRegistration = notification.type === "registration"
                const Icon = isRegistration ? UserPlus : CreditCard
                return (
                  <button
                    key={notification.id}
                    type="button"
                    className={cn(
                      "flex w-full gap-3 border-b border-border px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-muted/60",
                      !notification.read && "bg-primary/5",
                    )}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <span className={cn("mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full", isRegistration ? "bg-blue-500/10 text-blue-500" : "bg-emerald-500/10 text-emerald-500")}>
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        {notification.title}
                        {!notification.read && <span className="size-1.5 rounded-full bg-primary" />}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-muted-foreground">{notification.description}</span>
                      <span className="mt-1 block text-[11px] text-muted-foreground">{notification.time}</span>
                    </span>
                    {notification.read && <Check className="mt-1 size-3.5 shrink-0 text-muted-foreground" />}
                  </button>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
