"use client"

import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { ageGroupDistribution, examBoardDistribution } from "@/lib/mock-data"

const examBoardConfig: ChartConfig = {
  value: { label: "Số lượng" },
  "Bảng A": { label: "Bảng A", color: "var(--color-chart-1)" },
  "Bảng B": { label: "Bảng B", color: "var(--color-chart-2)" },
}

const ageGroupConfig: ChartConfig = {
  count: { label: "Thí sinh", color: "var(--color-chart-3)" },
}

export function DemographicsTab() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Phân bổ theo bảng thi</CardTitle>
          <CardDescription>Tỷ trọng đăng ký Bảng A / Bảng B</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={examBoardConfig} className="mx-auto h-72 w-full max-w-xs">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={examBoardDistribution}
                dataKey="value"
                nameKey="board"
                innerRadius={60}
                strokeWidth={4}
              >
                {examBoardDistribution.map((entry) => (
                  <Cell key={entry.board} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="board" />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Phân bổ theo nhóm tuổi</CardTitle>
          <CardDescription>Số lượng thí sinh đăng ký theo nhóm tuổi</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={ageGroupConfig} className="h-72 w-full">
            <BarChart data={ageGroupDistribution} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="var(--border)" />
              <XAxis
                dataKey="ageGroup"
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
              <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
