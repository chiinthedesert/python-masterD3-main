import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { provinceDetails, regionProgress } from "@/lib/mock-data"

function progressTone(percent: number) {
  if (percent >= 75) return "text-success"
  if (percent >= 55) return "text-chart-4"
  return "text-destructive"
}

export function RegionTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {regionProgress.map((region) => (
          <Card key={region.region}>
            <CardHeader>
              <CardTitle className="text-base">{region.region}</CardTitle>
              <CardDescription>
                {region.registrations.toLocaleString("vi-VN")} / {region.target.toLocaleString("vi-VN")} chỉ tiêu
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Progress value={region.percent} />
              <span className={`text-sm font-medium ${progressTone(region.percent)}`}>{region.percent}% hoàn thành</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chi tiết theo tỉnh / thành</CardTitle>
          <CardDescription>Tiến độ đăng ký so với chỉ tiêu từng địa phương</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tỉnh / Thành</TableHead>
                <TableHead>Khu vực</TableHead>
                <TableHead className="text-right">Đăng ký</TableHead>
                <TableHead className="text-right">Chỉ tiêu</TableHead>
                <TableHead>Tiến độ</TableHead>
                <TableHead className="text-right">Tỷ lệ chuyển đổi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {provinceDetails.map((province) => (
                <TableRow key={province.province}>
                  <TableCell className="font-medium">{province.province}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{province.region}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{province.registrations.toLocaleString("vi-VN")}</TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {province.target.toLocaleString("vi-VN")}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={province.percent} className="h-1.5 w-24" />
                      <span className="text-xs text-muted-foreground">{province.percent}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{province.conversionRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
