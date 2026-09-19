import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { KpiDatum } from "@/lib/mock-data"

interface KpiCardProps {
  data: KpiDatum
  icon: LucideIcon
}

export function KpiCard({ data, icon: Icon }: KpiCardProps) {
  const isPositive = data.sentiment === "positive"

  return (
    <Card className="gap-3">
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <Icon className="size-4" />
          </div>
          <Badge
            variant="outline"
            className={cn(
              "gap-1 border-transparent font-medium",
              isPositive ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
            )}
          >
            {data.trend === "up" ? (
              <ArrowUpRight className="size-3" />
            ) : (
              <ArrowDownRight className="size-3" />
            )}
            {Math.abs(data.changePercent)}%
          </Badge>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold tracking-tight text-foreground">{data.value}</span>
          <span className="text-sm text-muted-foreground">{data.label}</span>
        </div>
        <span className="text-xs text-muted-foreground">{data.helperText}</span>
      </CardContent>
    </Card>
  )
}
