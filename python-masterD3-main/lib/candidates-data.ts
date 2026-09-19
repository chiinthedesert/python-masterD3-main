// Candidate management (Quản lý Thí sinh) data.
// Sourced from the registrant spreadsheet provided by the organizers.

export type CandidateStatus = "paid" | "submitted" | "waiting" | "reviewing" | "rejected"

export interface Candidate {
  id: number
  name: string
  email: string
  phone: string
  university: string
  status: CandidateStatus
  citizenId?: string
  division?: string
  salesRep?: string
}

// Bảng đấu (competition divisions)
export const candidateDivisionOptions: { label: string; value: string }[] = [
  { label: "Bảng A - Sinh viên", value: "Bảng A - Sinh viên" },
  { label: "Bảng B - Học sinh THPT", value: "Bảng B - Học sinh THPT" },
  { label: "Bảng C - Chuyên nghiệp", value: "Bảng C - Chuyên nghiệp" },
  { label: "Bảng Mở rộng", value: "Bảng Mở rộng" },
]

// Sale phụ trách (assigned sales representatives)
export const candidateSalesRepOptions: { label: string; value: string }[] = [
  { label: "Nguyễn Thị Hương", value: "Nguyễn Thị Hương" },
  { label: "Trần Văn Đức", value: "Trần Văn Đức" },
  { label: "Lê Minh Tuấn", value: "Lê Minh Tuấn" },
  { label: "Phạm Thu Trang", value: "Phạm Thu Trang" },
  { label: "Đỗ Quang Huy", value: "Đỗ Quang Huy" },
]

export const candidateStatusMeta: Record<
  CandidateStatus,
  { label: string; dotClass: string; badgeClass: string }
> = {
  paid: {
    label: "Đã đóng phí",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  submitted: {
    label: "Đã nộp bài",
    dotClass: "bg-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  waiting: {
    label: "Chờ hồ sơ",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  },
  reviewing: {
    label: "Đang xét duyệt",
    dotClass: "bg-slate-400",
    badgeClass: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  },
  rejected: {
    label: "Bị loại",
    dotClass: "bg-rose-500",
    badgeClass: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  },
}

export const candidateStatusOptions: { label: string; value: string }[] = [
  { label: "Tất cả trạng thái", value: "all" },
  { label: "Đã đóng phí", value: "paid" },
  { label: "Đã nộp bài", value: "submitted" },
  { label: "Chờ hồ sơ", value: "waiting" },
  { label: "Đang xét duyệt", value: "reviewing" },
  { label: "Bị loại", value: "rejected" },
]

export const candidateUniversityOptions: { label: string; value: string }[] = [
  { label: "Tất cả trường", value: "all" },
  { label: "Đại học Công nghiệp Hà Nội", value: "Đại học Công nghiệp Hà Nội" },
  { label: "Đại học Kinh tế Quốc dân", value: "Đại học Kinh tế Quốc dân" },
  { label: "Đại học Bách Khoa TP.HCM", value: "Đại học Bách Khoa TP.HCM" },
  { label: "Đại học Duy Tân", value: "Đại học Duy Tân" },
  { label: "THPT Trần Hưng Đạo", value: "THPT Trần Hưng Đạo" },
  { label: "THPT Lương Thế Vinh", value: "THPT Lương Thế Vinh" },
  { label: "Đại học Sư phạm Kỹ thuật TP.HCM", value: "Đại học Sư phạm Kỹ thuật TP.HCM" },
  { label: "Đại học Công nghệ - ĐHQGHN", value: "Đại học Công nghệ - ĐHQGHN" },
  { label: "Đại học Khoa học Tự nhiên TP.HCM", value: "Đại học Khoa học Tự nhiên TP.HCM" },
  { label: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)", value: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)" },
  { label: "Đại học Bách Khoa Hà Nội", value: "Đại học Bách Khoa Hà Nội" },
  { label: "Đại học FPT", value: "Đại học FPT" },
  { label: "THPT Nguyễn Thị Minh Khai", value: "THPT Nguyễn Thị Minh Khai" },
  { label: "Đại học Việt - Hàn (Đà Nẵng)", value: "Đại học Việt - Hàn (Đà Nẵng)" },
  { label: "THPT Trần Phú", value: "THPT Trần Phú" },
  { label: "THPT Nguyễn Huệ", value: "THPT Nguyễn Huệ" },
  { label: "Đại học CNTT - ĐHQG TP.HCM", value: "Đại học CNTT - ĐHQG TP.HCM" },
  { label: "THPT Việt Đức", value: "THPT Việt Đức" },
  { label: "THPT Chu Văn An", value: "THPT Chu Văn An" },
  { label: "THPT Lê Quý Đôn", value: "THPT Lê Quý Đôn" },
  { label: "THPT Kim Liên", value: "THPT Kim Liên" },
]

export const candidates: Candidate[] = [
  { id: 1001, name: "Nguyễn Kim Lan", email: "lankimnguyen105@gmail.com", phone: "0521819600", university: "Đại học Công nghiệp Hà Nội", status: "waiting" },
  { id: 1002, name: "Ngô Minh Phong", email: "phongminhngo990@gmail.com", phone: "0940265423", university: "Đại học Kinh tế Quốc dân", status: "waiting" },
  { id: 1003, name: "Võ Thị Quỳnh", email: "quynhthivo206@gmail.com", phone: "0916184959", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1004, name: "Hồ Kim Quỳnh", email: "quynhkimho556@gmail.com", phone: "0725534192", university: "Đại học Kinh tế Quốc dân", status: "paid" },
  { id: 1005, name: "Vũ Hồng Chi", email: "chihongvu227@gmail.com", phone: "0505641395", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1006, name: "Vũ Công Thắng", email: "thangcongvu515@gmail.com", phone: "0796965328", university: "THPT Trần Hưng Đạo", status: "waiting" },
  { id: 1007, name: "Ngô Ánh Diệp", email: "diepanhngo708@gmail.com", phone: "0869784801", university: "THPT Lương Thế Vinh", status: "paid" },
  { id: 1008, name: "Huỳnh Thành Anh", email: "anhthanhhuynh166@gmail.com", phone: "0782814893", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "paid" },
  { id: 1009, name: "Lý Thị Giang", email: "giangthily845@gmail.com", phone: "0743039117", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1010, name: "Huỳnh Quốc Sơn", email: "sonquochuynh931@gmail.com", phone: "0963834657", university: "Đại học Khoa học Tự nhiên TP.HCM", status: "waiting" },
  { id: 1011, name: "Vũ Xuân Hùng", email: "hungxuanvu253@gmail.com", phone: "0310310518", university: "Đại học Khoa học Tự nhiên TP.HCM", status: "waiting" },
  { id: 1012, name: "Lý Thu Thảo", email: "thaothuly894@gmail.com", phone: "0831165667", university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)", status: "waiting" },
  { id: 1013, name: "Phạm Thu Huyền", email: "huyenthupham905@gmail.com", phone: "0587262473", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1014, name: "Nguyễn Ngọc Lan", email: "lanngocnguyen12@gmail.com", phone: "0567736026", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1015, name: "Lý Thanh Huyền", email: "huyenthanhly608@gmail.com", phone: "0730980500", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1016, name: "Huỳnh Hữu Việt", email: "viethuuhuynh644@gmail.com", phone: "0336193990", university: "Đại học Công nghiệp Hà Nội", status: "waiting" },
  { id: 1017, name: "Phan Hồng Lan", email: "lanhongphan646@gmail.com", phone: "0762475107", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "waiting" },
  { id: 1018, name: "Đỗ Hữu Hùng", email: "hunghuudo693@gmail.com", phone: "0742784980", university: "Đại học Công nghệ - ĐHQGHN", status: "paid" },
  { id: 1019, name: "Hoàng Kim Mai", email: "maikimhoang104@gmail.com", phone: "0935348740", university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)", status: "waiting" },
  { id: 1020, name: "Võ Thanh Quỳnh", email: "quynhthanhvo864@gmail.com", phone: "0968011280", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1021, name: "Đỗ Văn Minh", email: "minhvando895@gmail.com", phone: "0531586923", university: "Đại học Kinh tế Quốc dân", status: "waiting" },
  { id: 1022, name: "Bùi Diễm Lan", email: "landiembui368@gmail.com", phone: "0721607337", university: "Đại học Khoa học Tự nhiên TP.HCM", status: "waiting" },
  { id: 1023, name: "Bùi Quốc Cường", email: "cuongquocbui192@gmail.com", phone: "0758685014", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1024, name: "Bùi Duy Việt", email: "vietduybui542@gmail.com", phone: "0916934060", university: "Đại học FPT", status: "waiting" },
  { id: 1025, name: "Bùi Ánh My", email: "myanhbui140@gmail.com", phone: "0348465648", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1026, name: "Hồ Bảo An", email: "anbaoho462@gmail.com", phone: "0743699577", university: "THPT Nguyễn Thị Minh Khai", status: "waiting" },
  { id: 1027, name: "Bùi Hữu Hùng", email: "hunghuubui880@gmail.com", phone: "0733200379", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1028, name: "Hồ Mỹ Nhi", email: "nhimyho61@gmail.com", phone: "0520163287", university: "THPT Nguyễn Thị Minh Khai", status: "waiting" },
  { id: 1029, name: "Bùi Mỹ Yến", email: "yenmybui870@gmail.com", phone: "0968727743", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1030, name: "Đặng Minh Khang", email: "khangminhdang733@gmail.com", phone: "0758122362", university: "Đại học Kinh tế Quốc dân", status: "waiting" },
  { id: 1031, name: "Trần Minh Phát", email: "phatminhtran781@gmail.com", phone: "0890967054", university: "THPT Trần Phú", status: "waiting" },
  { id: 1032, name: "Ngô Thành Anh", email: "anhthanhngo938@gmail.com", phone: "0856272980", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1033, name: "Hoàng Mỹ Hoa", email: "hoamyhoang294@gmail.com", phone: "0346537556", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1034, name: "Đỗ Minh Cường", email: "cuongminhdo494@gmail.com", phone: "0303309232", university: "Đại học Khoa học Tự nhiên TP.HCM", status: "waiting" },
  { id: 1035, name: "Đỗ Đức Việt", email: "vietducdo703@gmail.com", phone: "0912419049", university: "THPT Nguyễn Huệ", status: "waiting" },
  { id: 1036, name: "Đặng Ánh Giang", email: "gianganhdang22@gmail.com", phone: "0905865185", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1037, name: "Dương Thanh Phương", email: "phuongthanhduong284@gmail.com", phone: "0584987769", university: "Đại học Bách Khoa TP.HCM", status: "paid" },
  { id: 1038, name: "Hồ Hồng An", email: "anhongho911@gmail.com", phone: "0852735454", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "paid" },
  { id: 1039, name: "Lê Thu Phương", email: "phuongthule236@gmail.com", phone: "0883777014", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1040, name: "Đỗ Duy Thắng", email: "thangduydo333@gmail.com", phone: "0757444313", university: "Đại học CNTT - ĐHQG TP.HCM", status: "waiting" },
  { id: 1041, name: "Lý Quốc Tuấn", email: "tuanquocly319@gmail.com", phone: "0994134352", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1042, name: "Đặng Thanh Thảo", email: "thaothanhdang998@gmail.com", phone: "0309477752", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1043, name: "Trần Đức Đạt", email: "datductran819@gmail.com", phone: "0941318699", university: "Đại học Kinh tế Quốc dân", status: "waiting" },
  { id: 1044, name: "Ngô Quốc Tuấn", email: "tuanquocngo255@gmail.com", phone: "0909133412", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1045, name: "Lý Quốc Bảo", email: "baoquocly445@gmail.com", phone: "0544713493", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1046, name: "Lê Thị Hoa", email: "hoathile975@gmail.com", phone: "0799471746", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1047, name: "Ngô Hồng Yến", email: "yenhongngo51@gmail.com", phone: "0701399049", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1048, name: "Ngô Thành Cường", email: "cuongthanhngo720@gmail.com", phone: "0856551256", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "waiting" },
  { id: 1049, name: "Võ Anh Dũng", email: "dunganhvo380@gmail.com", phone: "0880876038", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1050, name: "Hoàng Quốc Phong", email: "phongquochoang575@gmail.com", phone: "0810932480", university: "THPT Trần Hưng Đạo", status: "waiting" },
  { id: 1051, name: "Hoàng Mỹ Mai", email: "maimyhoang402@gmail.com", phone: "0946773782", university: "Đại học CNTT - ĐHQG TP.HCM", status: "waiting" },
  { id: 1052, name: "Ngô Anh Sơn", email: "sonanhngo561@gmail.com", phone: "0704499727", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "waiting" },
  { id: 1053, name: "Bùi Minh Hùng", email: "hungminhbui689@gmail.com", phone: "0963605766", university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)", status: "waiting" },
  { id: 1054, name: "Bùi Ngọc Quỳnh", email: "quynhngocbui810@gmail.com", phone: "0387026217", university: "Đại học CNTT - ĐHQG TP.HCM", status: "waiting" },
  { id: 1055, name: "Bùi Công Nam", email: "namcongbui774@gmail.com", phone: "0778091343", university: "Đại học Duy Tân", status: "waiting" },
  { id: 1056, name: "Đặng Văn Bảo", email: "baovandang431@gmail.com", phone: "0704556238", university: "THPT Việt Đức", status: "waiting" },
  { id: 1057, name: "Hồ Ánh Lan", email: "lananhho930@gmail.com", phone: "0892374740", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1058, name: "Đặng Diễm Linh", email: "linhdiemdang377@gmail.com", phone: "0843671369", university: "THPT Chu Văn An", status: "waiting" },
  { id: 1059, name: "Trần Xuân Quân", email: "quanxuantran653@gmail.com", phone: "0739533942", university: "Đại học Bách Khoa TP.HCM", status: "paid" },
  { id: 1060, name: "Hoàng Ngọc Mai", email: "maingochoang945@gmail.com", phone: "0762328588", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1061, name: "Bùi Ngọc Quỳnh", email: "quynhngocbui280@gmail.com", phone: "0323685160", university: "Đại học FPT", status: "waiting" },
  { id: 1062, name: "Đỗ Hữu Hùng", email: "hunghuudo941@gmail.com", phone: "0809859317", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1063, name: "Đặng Mỹ Giang", email: "giangmydang611@gmail.com", phone: "0338267586", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1064, name: "Võ Thị Ngân", email: "nganthivo72@gmail.com", phone: "0577351585", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1065, name: "Nguyễn Thị My", email: "mythinguyen842@gmail.com", phone: "0529318393", university: "Đại học Công nghiệp Hà Nội", status: "paid" },
  { id: 1066, name: "Hoàng Thanh Trâm", email: "tramthanhhoang341@gmail.com", phone: "0721020539", university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)", status: "waiting" },
  { id: 1067, name: "Lê Thành Phong", email: "phongthanhle754@gmail.com", phone: "0789178390", university: "THPT Nguyễn Thị Minh Khai", status: "waiting" },
  { id: 1068, name: "Hồ Diễm Giang", email: "giangdiemho291@gmail.com", phone: "0871159212", university: "Đại học Sư phạm Kỹ thuật TP.HCM", status: "waiting" },
  { id: 1069, name: "Đặng Mỹ Trang", email: "trangmydang433@gmail.com", phone: "0961183673", university: "Đ���i học Kinh tế Quốc dân", status: "waiting" },
  { id: 1070, name: "Bùi Quốc Minh", email: "minhquocbui841@gmail.com", phone: "0571111615", university: "Đại học Công nghiệp Hà Nội", status: "waiting" },
  { id: 1071, name: "Phạm Duy Minh", email: "minhduypham227@gmail.com", phone: "0804945198", university: "Đại học Khoa học Tự nhiên TP.HCM", status: "waiting" },
  { id: 1072, name: "Đỗ Ngọc Linh", email: "linhngocdo961@gmail.com", phone: "0936899809", university: "THPT Chu Văn An", status: "paid" },
  { id: 1073, name: "Đặng Hồng Ngân", email: "nganhongdang774@gmail.com", phone: "0322961201", university: "THPT Lê Quý Đôn", status: "waiting" },
  { id: 1074, name: "Đặng Anh Tuấn", email: "tuananhdang463@gmail.com", phone: "0910229014", university: "Đại học Công nghiệp Hà Nội", status: "waiting" },
  { id: 1075, name: "Phạm Anh Phát", email: "phatanhpham623@gmail.com", phone: "0349784036", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1076, name: "Đặng Hồng Giang", email: "gianghongdang582@gmail.com", phone: "0376226838", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1077, name: "Dương Hữu Long", email: "longhuuduong999@gmail.com", phone: "0969664160", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "paid" },
  { id: 1078, name: "Phạm Minh Phát", email: "phatminhpham807@gmail.com", phone: "0968164535", university: "Đại học Duy Tân", status: "paid" },
  { id: 1079, name: "Đỗ Anh Đạt", email: "datanhdo191@gmail.com", phone: "0512432921", university: "THPT Lương Thế Vinh", status: "waiting" },
  { id: 1080, name: "Bùi Hồng Hà", email: "hahongbui529@gmail.com", phone: "0817744905", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "paid" },
  { id: 1081, name: "Đặng Hữu Cường", email: "cuonghuudang940@gmail.com", phone: "0998679807", university: "Đại học FPT", status: "waiting" },
  { id: 1082, name: "Trần Thành Dũng", email: "dungthanhtran545@gmail.com", phone: "0718203778", university: "Đại học FPT", status: "paid" },
  { id: 1083, name: "Bùi Xuân Bảo", email: "baoxuanbui904@gmail.com", phone: "0715186449", university: "Đại học Công nghiệp Hà Nội", status: "waiting" },
  { id: 1084, name: "Hồ Đức Việt", email: "vietducho530@gmail.com", phone: "0348652816", university: "Đại học Bách Khoa TP.HCM", status: "waiting" },
  { id: 1085, name: "Lý Minh Hùng", email: "hungminhly687@gmail.com", phone: "0521418880", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
  { id: 1086, name: "Huỳnh Xuân Duy", email: "duyxuanhuynh249@gmail.com", phone: "0806537947", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1087, name: "Dương Mỹ Mai", email: "maimyduong63@gmail.com", phone: "0888623924", university: "THPT Trần Phú", status: "paid" },
  { id: 1088, name: "Đặng Ngọc Hoa", email: "hoangocdang962@gmail.com", phone: "0778261375", university: "THPT Lê Quý Đôn", status: "waiting" },
  { id: 1089, name: "Lê Anh Hùng", email: "hunganhle722@gmail.com", phone: "0351522047", university: "THPT Nguyễn Thị Minh Khai", status: "waiting" },
  { id: 1090, name: "Phan Đức Thắng", email: "thangducphan254@gmail.com", phone: "0986143410", university: "Đại học Việt - Hàn (Đà Nẵng)", status: "waiting" },
  { id: 1091, name: "Lý Ánh Trâm", email: "tramanhly371@gmail.com", phone: "0389324609", university: "THPT Việt Đức", status: "waiting" },
  { id: 1092, name: "Lê Bảo Trâm", email: "trambaole269@gmail.com", phone: "0988067065", university: "Đại học FPT", status: "paid" },
  { id: 1093, name: "Bùi Thanh Chi", email: "chithanhbui743@gmail.com", phone: "0785277221", university: "THPT Kim Liên", status: "waiting" },
  { id: 1094, name: "Bùi Kim Trang", email: "trangkimbui896@gmail.com", phone: "0887403450", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1095, name: "Dương Diễm My", email: "mydiemduong450@gmail.com", phone: "0577584161", university: "THPT Trần Phú", status: "waiting" },
  { id: 1096, name: "Bùi Quốc Khôi", email: "khoiquocbui639@gmail.com", phone: "0896275705", university: "Đại học Bách Khoa Hà Nội", status: "waiting" },
  { id: 1097, name: "Huỳnh Văn Đạt", email: "datvanhuynh982@gmail.com", phone: "0970213556", university: "Đại học Công nghệ - ĐHQGHN", status: "waiting" },
]

export const candidateTotalCount = candidates.length
