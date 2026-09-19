"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { registrationTrend } from "@/lib/mock-data"

const chartConfig: ChartConfig = {
  registrations: {
    label: "Lượt đăng ký",
    color: "var(--color-chart-1)",
  },
}

export function RegistrationTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Xu hướng đăng ký theo ngày</CardTitle>
        <CardDescription>Số lượt đăng ký mới trong 17 ngày gần nhất</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <LineChart data={registrationTrend} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              width={36}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="registrations"
              stroke="var(--color-registrations)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
