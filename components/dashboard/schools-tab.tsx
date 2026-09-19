"use client"

import { Download, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { schoolRankings } from "@/lib/mock-data"

export function SchoolsTab() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>Trường học cần thúc đẩy</CardTitle>
          <CardDescription>Xếp hạng theo số lượng còn thiếu so với mục tiêu đăng ký trong tuần</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Download data-icon="inline-start" />
          Xuất báo cáo
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">#</TableHead>
              <TableHead>Trường</TableHead>
              <TableHead>Khu vực</TableHead>
              <TableHead className="text-right">Thiếu mục tiêu tuần</TableHead>
              <TableHead className="text-right">Tỷ lệ chuyển đổi</TableHead>
              <TableHead className="text-right">Quá hạn (ngày)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schoolRankings.map((school, index) => (
              <TableRow key={school.school}>
                <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                <TableCell className="font-medium">{school.school}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{school.region}</Badge>
                </TableCell>
                <TableCell className="text-right font-medium text-destructive">
                  {school.weeklyTargetGap.toLocaleString("vi-VN")}
                </TableCell>
                <TableCell className="text-right">{school.conversionRate}%</TableCell>
                <TableCell className="text-right">
                  {school.overdueDays > 0 ? (
                    <span className="inline-flex items-center justify-end gap-1 text-destructive">
                      <TriangleAlert className="size-3.5" />
                      {school.overdueDays}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
