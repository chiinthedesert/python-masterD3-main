import { Users, CreditCard, Wallet, UserX, Target } from "lucide-react"

import { kpiData } from "@/lib/mock-data"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { RegistrationTrendChart } from "@/components/dashboard/registration-trend-chart"
import { RegistrationFunnelChart } from "@/components/dashboard/registration-funnel-chart"

const kpiIcons = {
  registrations: Users,
  conversion: CreditCard,
  revenue: Wallet,
  leads: UserX,
  "target-gap": Target,
}

export function OverviewTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.id} data={kpi} icon={kpiIcons[kpi.id as keyof typeof kpiIcons]} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RegistrationTrendChart />
        </div>
        <div className="lg:col-span-2">
          <RegistrationFunnelChart />
        </div>
      </div>
    </div>
  )
}
