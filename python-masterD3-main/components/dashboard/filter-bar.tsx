"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { dateRangeOptions, examBoardOptions, regionOptions } from "@/lib/mock-data"

interface FilterBarProps {
  region: string
  onRegionChange: (value: string) => void
  examBoard: string
  onExamBoardChange: (value: string) => void
  dateRange: string
  onDateRangeChange: (value: string) => void
}

export function FilterBar({
  region,
  onRegionChange,
  examBoard,
  onExamBoardChange,
  dateRange,
  onDateRangeChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center">
      <span className="text-sm font-medium text-muted-foreground">Bộ lọc</span>
      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
        <Select value={region} onValueChange={onRegionChange}>
          <SelectTrigger className="w-full sm:w-44">
            <SelectValue placeholder="Khu vực" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {regionOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={examBoard} onValueChange={onExamBoardChange}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Bảng thi" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {examBoardOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={dateRange} onValueChange={onDateRangeChange}>
          <SelectTrigger className="w-full sm:w-52">
            <SelectValue placeholder="Khoảng thời gian" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {dateRangeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
