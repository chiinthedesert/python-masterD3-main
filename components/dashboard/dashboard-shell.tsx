"use client"

import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilterBar } from "@/components/dashboard/filter-bar"
import { OverviewTab } from "@/components/dashboard/overview-tab"
import { RegionTab } from "@/components/dashboard/region-tab"
import { DemographicsTab } from "@/components/dashboard/demographics-tab"
import { SchoolsTab } from "@/components/dashboard/schools-tab"

export function DashboardShell() {
  const [region, setRegion] = useState("all")
  const [examBoard, setExamBoard] = useState("all")
  const [dateRange, setDateRange] = useState("30d")

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <FilterBar
        region={region}
        onRegionChange={setRegion}
        examBoard={examBoard}
        onExamBoardChange={setExamBoard}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
      />

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="region">Theo khu vực</TabsTrigger>
          <TabsTrigger value="demographics">Bảng thi & Nhân khẩu học</TabsTrigger>
          <TabsTrigger value="schools">Trường cần thúc đẩy</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="region" className="mt-4">
          <RegionTab />
        </TabsContent>
        <TabsContent value="demographics" className="mt-4">
          <DemographicsTab />
        </TabsContent>
        <TabsContent value="schools" className="mt-4">
          <SchoolsTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
