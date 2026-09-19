export type PartnerKind = "partner" | "company"

export interface Partner {
  id: number
  name: string
  kind: PartnerKind
  contactName: string
  email: string
  phone: string
  note: string
}

export const partnerKindMeta: Record<PartnerKind, string> = {
  partner: "Đối tác",
  company: "Doanh nghiệp",
}

export const partners: Partner[] = [
  {
    id: 2001,
    name: "Công ty TNHH Công nghệ Sao Việt",
    kind: "company",
    contactName: "Nguyễn Minh Anh",
    email: "minhanh@saoviet.vn",
    phone: "0901234567",
    note: "Nhà tài trợ chính, ưu tiên trao đổi về truyền thông.",
  },
  {
    id: 2002,
    name: "Đại học Bách Khoa Hà Nội",
    kind: "partner",
    contactName: "Trần Quốc Huy",
    email: "huy.tq@hust.edu.vn",
    phone: "0912345678",
    note: "Đối tác địa điểm và phối hợp tuyển sinh khu vực miền Bắc.",
  },
  {
    id: 2003,
    name: "Công ty Cổ phần Giáo dục NextGen",
    kind: "company",
    contactName: "Lê Thu Hà",
    email: "ha.le@nextgen.edu.vn",
    phone: "0987654321",
    note: "Đang trao đổi gói đồng hành mùa thi 2026.",
  },
  {
    id: 2004,
    name: "Học viện Công nghệ Bưu chính Viễn thông",
    kind: "partner",
    contactName: "Phạm Hoàng Long",
    email: "longph@ptit.edu.vn",
    phone: "0938123456",
    note: "Đầu mối giới thiệu thí sinh và hỗ trợ chuyên môn.",
  },
]
