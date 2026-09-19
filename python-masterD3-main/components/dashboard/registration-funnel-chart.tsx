"use client"

import { Funnel, FunnelChart, LabelList } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { funnelData } from "@/lib/mock-data"

const chartConfig: ChartConfig = {
  value: {
    label: "Số lượng",
  },
}

export function RegistrationFunnelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Phễu chuyển đổi</CardTitle>
        <CardDescription>Tiếp cận → Đăng ký → Tham gia</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-72 w-full">
          <FunnelChart margin={{ top: 8, bottom: 8 }}>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList
                dataKey="stage"
                position="right"
                fill="var(--foreground)"
                stroke="none"
                fontSize={12}
              />
              <LabelList
                dataKey="value"
                position="center"
                fill="var(--card)"
                stroke="none"
                fontSize={13}
                fontWeight={600}
                formatter={(value: number) => value.toLocaleString("vi-VN")}
              />
            </Funnel>
          </FunnelChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
