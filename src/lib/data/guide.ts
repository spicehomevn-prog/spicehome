import type { BilingualText } from '@/context/LanguageContext'

export type GuideCategory = 'food' | 'shopping' | 'attractions' | 'transport'

export interface GuideItem {
  id: string
  category: GuideCategory
  name: BilingualText
  description: BilingualText
  address?: string
  hours?: string
  tip?: BilingualText
  mapsUrl?: string
  photo?: string
}

export const guideItems: GuideItem[] = [
  // Food
  {
    id: 'pho-tan-hiep',
    category: 'food',
    name: { vi: 'Phở Tân Hiệp', en: 'Phở Tân Hiệp' },
    description: {
      vi: 'Quán phở bò thảo mộc truyền thống — hương vị đậm đà, nước dùng ninh lâu. Cách nhà chỉ vài bước chân.',
      en: 'Traditional Vietnamese herbal beef noodle soup — rich, slow-simmered broth. Just a short walk from the homestay.',
    },
    address: '122 Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: '6:00 – 23:00',
    mapsUrl: 'https://g.co/kgs/6N6uc2o',
    photo: '/images/guide/pho-tan-hiep.jpg',
  },
  {
    id: 'hu-tieu-hoành-tam-ky',
    category: 'food',
    name: { vi: 'Hủ Tiếu Mì Hoành Tâm Ký', en: 'Hoành Tâm Ký Noodles' },
    description: {
      vi: 'Chuyên hủ tiếu và mì hoành thánh — một trong những địa chỉ ruột của người dân Phú Nhuận.',
      en: 'Specialises in rice noodles and wonton noodles — a neighbourhood staple beloved by locals.',
    },
    address: '51 Trần Hữu Trang, Phú Nhuận, HCMC',
    hours: '8:00 – 20:00',
    mapsUrl: 'https://g.co/kgs/aVHMiUa',
    photo: '/images/guide/hu-tieu-hoanh-tam-ky.jpg',
  },
  {
    id: 'bun-bo-trang',
    category: 'food',
    name: { vi: 'Bún Bò Trang', en: 'Bún Bò Trang' },
    description: {
      vi: 'Bún bò Huế cay nồng, nước dùng sánh ngọt — buổi sáng tuyệt vời để bắt đầu ngày mới.',
      en: 'Spicy Huế-style beef noodle soup with a rich, savoury broth — a great way to start the morning.',
    },
    address: '84/5 Trần Hữu Trang, Phú Nhuận, HCMC',
    hours: '6:00 – 12:00',
    mapsUrl: 'https://g.co/kgs/WbVjP5V',
    photo: '/images/guide/bun-bo-trang.jpg',
  },
  {
    id: 'grandmas-pork-noodles',
    category: 'food',
    name: { vi: 'Quán Hủ Tiếu Thả Dì Ba', en: 'Quán Hủ Tiếu Thả Dì Ba' },
    description: {
      vi: 'Quán hủ tiếu độc đáo — thức ăn được thả dây từ tầng trên xuống. Hủ tiếu thịt heo đậm đà, giá bình dân. Nên đến sớm vì hết rất nhanh!',
      en: 'One-of-a-kind noodle shop where food is lowered by rope from above. Rich pork hủ tiếu, very affordable. Come early — it sells out fast!',
    },
    address: '76A Trần Hữu Trang, HCMC',
    hours: '6:00 – 18:00',
    mapsUrl: 'https://g.co/kgs/gJWxHMw',
    photo: '/images/guide/hu-tieu-tha-di-ba.jpg',
  },
  {
    id: 'banh-can-ba-hai',
    category: 'food',
    name: { vi: 'Bánh Căn Bà Hai', en: 'Bánh Căn Bà Hai' },
    description: {
      vi: 'Bánh căn nướng giòn — bánh mini Việt Nam làm từ bột gạo và trứng cút, ăn kèm nước chấm đặc biệt.',
      en: 'Crispy Vietnamese mini pancakes made from rice flour and quail eggs, served with a special dipping sauce.',
    },
    address: '64 Trương Quốc Dung, Phú Nhuận, HCMC',
    hours: '8:00 – 20:00',
    mapsUrl: 'https://g.co/kgs/Sk4CFia',
    photo: '/images/guide/banh-can-ba-hai.jpg',
  },
  {
    id: 'com-tam-phuong',
    category: 'food',
    name: { vi: 'Cơm Tấm Phương', en: 'Cơm Tấm Phương' },
    description: {
      vi: 'Cơm tấm sườn nướng — đặc sản Sài Gòn không thể bỏ qua. Bữa sáng nhanh, ngon và đậm đà.',
      en: 'Broken rice with grilled pork chop — a quintessential Saigon dish. A quick, tasty and filling breakfast.',
    },
    address: '26 Hồ Biểu Chánh, Phú Nhuận, HCMC',
    hours: '6:00 – 10:00',
    mapsUrl: 'https://g.co/kgs/dzxmcah',
    photo: '/images/guide/com-tam-phuong.jpg',
  },

  // Shopping
  {
    id: 'bach-hoa-xanh',
    category: 'shopping',
    name: { vi: 'Bách Hóa Xanh', en: 'Bách Hóa Xanh Supermarket' },
    description: {
      vi: 'Siêu thị tiện lợi được đề nghị nhất cho khách nước ngoài — thực phẩm tươi, đồ thiết yếu, giá niêm yết rõ ràng.',
      en: 'Most recommended grocery store for foreign guests — fresh food, daily essentials, and clearly labelled prices.',
    },
    address: '123 Trần Hữu Trang, Phú Nhuận',
    hours: '6:00 – 21:00',
    tip: {
      vi: 'Giá niêm yết rõ ràng, không cần mặc cả. Chấp nhận thẻ và tiền mặt.',
      en: 'Fixed prices, no bargaining needed. Accepts cards and cash.',
    },
  },
  {
    id: 'winmart',
    category: 'shopping',
    name: { vi: 'WinMart Convenient Store', en: 'WinMart Convenient Store' },
    description: {
      vi: 'Cửa hàng tiện lợi gần nhà với đầy đủ đồ dùng hằng ngày.',
      en: 'Nearby convenience store with all daily necessities.',
    },
    address: '137 Trần Hữu Trang, Phú Nhuận',
    hours: '8:00 – 21:00',
  },
  {
    id: 'circle-k',
    category: 'shopping',
    name: { vi: 'Circle K (24/7)', en: 'Circle K (Open 24/7)' },
    description: {
      vi: 'Cửa hàng tiện lợi mở cửa 24/7 — lý tưởng cho những lúc cần mua đồ khuya.',
      en: 'Convenience store open around the clock — perfect for late-night essentials.',
    },
    address: '135 Lê Văn Sỹ, Phú Nhuận',
    hours: 'Open 24/7',
  },
  {
    id: 'cho-tran-huu-trang',
    category: 'shopping',
    name: { vi: 'Chợ Trần Hữu Trang', en: 'Trần Hữu Trang Local Market' },
    description: {
      vi: 'Chợ truyền thống địa phương — trải nghiệm văn hóa thú vị với rau củ tươi và đặc sản vùng.',
      en: 'Traditional local market — a vivid cultural experience with fresh produce and regional specialties.',
    },
    address: '84C Trần Hữu Trang, Phú Nhuận',
    hours: '6:00 – 17:00',
    tip: {
      vi: 'Nên đi cùng người Việt hoặc người nói được tiếng Việt để tránh bị tính giá cao.',
      en: 'Best visited with a Vietnamese speaker to avoid tourist pricing.',
    },
  },

  // Attractions
  {
    id: 'nguyen-hue',
    category: 'attractions',
    name: { vi: 'Phố đi bộ Nguyễn Huệ', en: 'Nguyễn Huệ Walking Street' },
    description: {
      vi: 'Phố đi bộ biểu tượng của Sài Gòn — nhìn thấy Nhà hát Thành phố và đặt xe bus 2 tầng tham quan từ đây.',
      en: "One of Saigon's signature landmarks — view the Opera House and board the double-deck sightseeing bus from here.",
    },
    tip: {
      vi: 'Rực rỡ nhất vào buổi tối cuối tuần — nhiều show trình diễn ngoài trời.',
      en: 'Most vibrant on weekend evenings — open-air performances and street entertainment.',
    },
  },
  {
    id: 'bach-dang-wharf',
    category: 'attractions',
    name: { vi: 'Công viên Bến Bạch Đằng', en: 'Bach Dang Wharf Park' },
    description: {
      vi: 'Cuối đường Nguyễn Huệ, ngắm view sông Sài Gòn và thư giãn tại các quán cà phê ven sông.',
      en: 'At the end of Nguyễn Huệ Street — enjoy Saigon River views and relax at riverside cafes.',
    },
  },
  {
    id: 'bui-vien',
    category: 'attractions',
    name: { vi: 'Phố đi bộ Bùi Viện', en: 'Bùi Viện Walking Street' },
    description: {
      vi: 'Trung tâm đời sống về đêm của Sài Gòn — bar, pub, nhạc live và street food sôi động.',
      en: "Saigon's nightlife hub — bars, pubs, live music, and vibrant street food.",
    },
    tip: {
      vi: 'Nên đến sau 8 giờ tối để trải nghiệm không khí đầy đủ nhất.',
      en: 'Best visited after 8 PM for the full atmosphere.',
    },
  },
  {
    id: 'independence-palace',
    category: 'attractions',
    name: { vi: 'Dinh Độc Lập', en: 'Independence Palace' },
    description: {
      vi: 'Di tích lịch sử quan trọng — bảo tàng mở cửa cho công chúng tham quan, kiến trúc độc đáo thập niên 60.',
      en: 'Significant historical landmark — open as a public museum with distinctive 1960s architecture.',
    },
  },
  {
    id: 'city-post-office',
    category: 'attractions',
    name: { vi: 'Bưu điện Thành phố', en: 'Saigon Central Post Office' },
    description: {
      vi: 'Kiến trúc thuộc địa Pháp đặc sắc — ngay cạnh Nhà thờ Đức Bà, điểm check-in nổi tiếng.',
      en: 'Stunning French colonial architecture — located next to Notre Dame Cathedral, a popular photo spot.',
    },
  },
  {
    id: 'cu-chi-tunnels',
    category: 'attractions',
    name: { vi: 'Địa đạo Củ Chi', en: 'Củ Chi Tunnels' },
    description: {
      vi: 'Hệ thống địa đạo huyền thoại từ thời kháng chiến — trải nghiệm lịch sử độc đáo, cách trung tâm khoảng 1.5 giờ xe.',
      en: 'Legendary underground tunnel network from wartime — a unique historical experience, about 1.5 hours from the city centre.',
    },
    tip: {
      vi: 'Đặt tour trên KLook để tránh bị lừa đảo. Có thể kết hợp với tour Đồng bằng sông Cửu Long.',
      en: 'Book through KLook to avoid scams. Can be combined with a Mekong Delta tour for a full day trip.',
    },
  },

  // Transport
  {
    id: 'grab',
    category: 'transport',
    name: { vi: 'Ứng dụng Grab', en: 'Grab App' },
    description: {
      vi: 'Ứng dụng đặt xe phổ biến nhất Việt Nam — giá rẻ, tiện lợi, có thể đặt đồ ăn giao tới phòng.',
      en: 'The most popular ride-hailing app in Vietnam — affordable, reliable, and also delivers food to your room.',
    },
    tip: {
      vi: 'Tải Grab trước khi đến — thanh toán bằng thẻ hoặc tiền mặt.',
      en: 'Download Grab before you arrive — pay by card or cash.',
    },
  },
  {
    id: 'public-bus',
    category: 'transport',
    name: { vi: 'Xe buýt công cộng', en: 'Public Bus' },
    description: {
      vi: 'Nhiều tuyến buýt gần nhà đến trung tâm và sân bay. Dùng Google Maps chế độ public transport để xem tuyến.',
      en: 'Multiple bus routes nearby to the city centre and airport. Use Google Maps in public transport mode for routes.',
    },
    tip: {
      vi: 'Nhà ga xe lửa cách homestay chỉ khoảng 5 phút đi bộ.',
      en: 'The railway station is approximately 5 minutes on foot from the homestay.',
    },
  },
  {
    id: 'vexere',
    category: 'transport',
    name: { vi: 'Xe khách liên tỉnh (Vexere)', en: 'Intercity Bus (Vexere)' },
    description: {
      vi: 'Đặt vé xe khách và xe giường nằm đi các tỉnh qua Vexere.com — tiện lợi và giá tốt.',
      en: 'Book intercity buses and sleeper buses through Vexere.com — convenient and affordable.',
    },
  },
]

export const guideByCategory = {
  food: guideItems.filter(i => i.category === 'food'),
  shopping: guideItems.filter(i => i.category === 'shopping'),
  attractions: guideItems.filter(i => i.category === 'attractions'),
  transport: guideItems.filter(i => i.category === 'transport'),
}
