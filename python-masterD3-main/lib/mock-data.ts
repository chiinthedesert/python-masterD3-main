// Mock data for the Python Master operations dashboard.
// All figures are illustrative and generated for demo purposes.

export type Region = 'Miền Bắc' | 'Miền Trung' | 'Miền Nam'
export type ExamBoard = 'A' | 'B'

export interface KpiDatum {
  id: string
  label: string
  value: string
  changePercent: number
  trend: 'up' | 'down'
  sentiment: 'positive' | 'negative'
  helperText: string
}

export const kpiData: KpiDatum[] = [
  {
    id: 'registrations',
    label: 'Tổng lượt đăng ký',
    value: '12.480',
    changePercent: 8.2,
    trend: 'up',
    sentiment: 'positive',
    helperText: 'So với kỳ trước',
  },
  {
    id: 'conversion',
    label: 'Tỷ lệ chuyển đổi thanh toán',
    value: '64,3%',
    changePercent: -2.1,
    trend: 'down',
    sentiment: 'negative',
    helperText: 'Trên tổng số đăng ký',
  },
  {
    id: 'revenue',
    label: 'Doanh thu tạm tính',
    value: '3,24 tỷ',
    changePercent: 12.4,
    trend: 'up',
    sentiment: 'positive',
    helperText: 'Đã quy đổi VNĐ',
  },
  {
    id: 'leads',
    label: 'Lead cần chăm sóc lại',
    value: '842',
    changePercent: 5.6,
    trend: 'up',
    sentiment: 'negative',
    helperText: 'Chưa hoàn tất thanh toán',
  },
  {
    id: 'target-gap',
    label: 'Target Gap',
    value: '-1.240',
    changePercent: -9.3,
    trend: 'down',
    sentiment: 'negative',
    helperText: 'So với mục tiêu tuần',
  },
]

export const registrationTrend = [
  { date: '01/09', registrations: 320 },
  { date: '02/09', registrations: 410 },
  { date: '03/09', registrations: 380 },
  { date: '04/09', registrations: 460 },
  { date: '05/09', registrations: 512 },
  { date: '06/09', registrations: 470 },
  { date: '07/09', registrations: 540 },
  { date: '08/09', registrations: 610 },
  { date: '09/09', registrations: 590 },
  { date: '10/09', registrations: 640 },
  { date: '11/09', registrations: 605 },
  { date: '12/09', registrations: 680 },
  { date: '13/09', registrations: 720 },
  { date: '14/09', registrations: 695 },
  { date: '15/09', registrations: 760 },
  { date: '16/09', registrations: 810 },
  { date: '17/09', registrations: 790 },
]

export const funnelData = [
  { stage: 'Tiếp cận', value: 50000, fill: 'var(--color-chart-1)' },
  { stage: 'Đăng ký', value: 12480, fill: 'var(--color-chart-2)' },
  { stage: 'Tham gia', value: 9800, fill: 'var(--color-chart-3)' },
]

export interface RegionProgress {
  region: Region
  registrations: number
  target: number
  percent: number
}

export const regionProgress: RegionProgress[] = [
  { region: 'Miền Bắc', registrations: 5620, target: 7000, percent: 80 },
  { region: 'Miền Nam', registrations: 4380, target: 6500, percent: 67 },
  { region: 'Miền Trung', registrations: 2480, target: 4500, percent: 55 },
]

export interface ProvinceDetail {
  province: string
  region: Region
  registrations: number
  target: number
  percent: number
  conversionRate: number
}

export const provinceDetails: ProvinceDetail[] = [
  { province: 'Hà Nội', region: 'Miền Bắc', registrations: 2840, target: 3200, percent: 89, conversionRate: 71 },
  { province: 'Hải Phòng', region: 'Miền Bắc', registrations: 1120, target: 1500, percent: 75, conversionRate: 62 },
  { province: 'Bắc Ninh', region: 'Miền Bắc', registrations: 860, target: 1200, percent: 72, conversionRate: 58 },
  { province: 'Thái Nguyên', region: 'Miền Bắc', registrations: 800, target: 1100, percent: 73, conversionRate: 55 },
  { province: 'Đà Nẵng', region: 'Miền Trung', registrations: 980, target: 1400, percent: 70, conversionRate: 60 },
  { province: 'Nghệ An', region: 'Miền Trung', registrations: 720, target: 1300, percent: 55, conversionRate: 48 },
  { province: 'Huế', region: 'Miền Trung', registrations: 480, target: 1000, percent: 48, conversionRate: 44 },
  { province: 'Khánh Hòa', region: 'Miền Trung', registrations: 300, target: 800, percent: 38, conversionRate: 41 },
  { province: 'TP. Hồ Chí Minh', region: 'Miền Nam', registrations: 2600, target: 3200, percent: 81, conversionRate: 68 },
  { province: 'Bình Dương', region: 'Miền Nam', registrations: 860, target: 1400, percent: 61, conversionRate: 52 },
  { province: 'Cần Thơ', region: 'Miền Nam', registrations: 560, target: 1100, percent: 51, conversionRate: 47 },
  { province: 'Đồng Nai', region: 'Miền Nam', registrations: 360, target: 800, percent: 45, conversionRate: 43 },
]

export const examBoardDistribution = [
  { board: 'Bảng A', value: 7680, fill: 'var(--color-chart-1)' },
  { board: 'Bảng B', value: 4800, fill: 'var(--color-chart-2)' },
]

export const ageGroupDistribution = [
  { ageGroup: 'Dưới 15', count: 1860 },
  { ageGroup: '15 - 17', count: 6420 },
  { ageGroup: '18 - 20', count: 3120 },
  { ageGroup: 'Trên 20', count: 1080 },
]

export interface SchoolRanking {
  school: string
  region: Region
  weeklyTargetGap: number
  conversionRate: number
  overdueDays: number
}

export const schoolRankings: SchoolRanking[] = [
  { school: 'THPT Chuyên Lê Hồng Phong', region: 'Miền Nam', weeklyTargetGap: 420, conversionRate: 38, overdueDays: 12 },
  { school: 'THPT Chuyên Hà Nội - Amsterdam', region: 'Miền Bắc', weeklyTargetGap: 310, conversionRate: 42, overdueDays: 8 },
  { school: 'THPT Chuyên Lê Quý Đôn', region: 'Miền Trung', weeklyTargetGap: 285, conversionRate: 35, overdueDays: 15 },
  { school: 'THPT Nguyễn Thị Minh Khai', region: 'Miền Nam', weeklyTargetGap: 260, conversionRate: 44, overdueDays: 6 },
  { school: 'THPT Chuyên Trần Đại Nghĩa', region: 'Miền Nam', weeklyTargetGap: 198, conversionRate: 47, overdueDays: 4 },
  { school: 'THPT Chu Văn An', region: 'Miền Bắc', weeklyTargetGap: 175, conversionRate: 51, overdueDays: 0 },
  { school: 'THPT Chuyên Quốc Học Huế', region: 'Miền Trung', weeklyTargetGap: 152, conversionRate: 49, overdueDays: 3 },
  { school: 'THPT Chuyên Lê Khiết', region: 'Miền Trung', weeklyTargetGap: 140, conversionRate: 46, overdueDays: 9 },
  { school: 'THPT Chuyên Nguyễn Bỉnh Khiêm', region: 'Miền Nam', weeklyTargetGap: 95, conversionRate: 53, overdueDays: 0 },
  { school: 'THPT Việt Đức', region: 'Miền Bắc', weeklyTargetGap: 60, conversionRate: 58, overdueDays: 0 },
]

export const regionOptions: { label: string; value: string }[] = [
  { label: 'Toàn quốc', value: 'all' },
  { label: 'Miền Bắc', value: 'Miền Bắc' },
  { label: 'Miền Trung', value: 'Miền Trung' },
  { label: 'Miền Nam', value: 'Miền Nam' },
]

export const examBoardOptions: { label: string; value: string }[] = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Bảng A', value: 'A' },
  { label: 'Bảng B', value: 'B' },
]

export const dateRangeOptions: { label: string; value: string }[] = [
  { label: '7 ngày qua', value: '7d' },
  { label: '30 ngày qua', value: '30d' },
  { label: 'Từ đầu chương trình', value: 'all' },
  { label: 'Tuỳ chọn', value: 'custom' },
]
