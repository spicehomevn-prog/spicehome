import type { BilingualText } from '@/context/LanguageContext'

export type GuideCategory = 'food' | 'cafes' | 'shopping' | 'attractions' | 'transport' | 'vegetarian' | 'beauty'

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
    address: '413 Huỳnh Văn Bánh, Phú Nhuận, HCMC',
    hours: '6:00 – 10:00',
    mapsUrl: 'https://g.co/kgs/dzxmcah',
    photo: '/images/guide/com-tam-phuong.jpg',
  },

  // Cafes
  {
    id: 'oasis-cafe',
    category: 'cafes',
    name: { vi: 'Oasis Cafe – Koi Fish Cafe', en: 'Oasis Cafe – Koi Fish Cafe' },
    description: {
      vi: 'Quán cà phê độc đáo với hồ cá koi và kiến trúc làng châu Âu — không gian xanh mát, yên tĩnh giữa lòng thành phố.',
      en: 'A one-of-a-kind café featuring koi fish ponds and European village-inspired architecture — a peaceful green escape in the city.',
    },
    address: '176/1B Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: '7:00 – 23:00',
    tip: {
      vi: 'Lý tưởng cho buổi sáng hoặc chiều tà — đông vào cuối tuần, nên đến sớm.',
      en: 'Ideal for a morning or afternoon visit — busy on weekends, so come early.',
    },
    mapsUrl: 'https://share.google/9XRIWBBb2Tii7YHPl',
    photo: '/images/guide/oasis-cafe.jpg',
  },
  {
    id: 'den-da-coffee',
    category: 'cafes',
    name: { vi: 'Đen Đá Coffee (24/24)', en: 'Đen Đá Coffee (Open 24/7)' },
    description: {
      vi: 'Quán cà phê mở cửa 24/24 — cà phê đen đá, trà sữa, bánh mì nướng và đồ ngọt. Lý tưởng cho những đêm muộn hoặc sáng sớm.',
      en: 'A 24-hour café serving Vietnamese black iced coffee, milk tea, toasted bread and desserts. Perfect for late nights or early mornings.',
    },
    address: '110 Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: 'Mở cửa 24/24',
    mapsUrl: 'https://share.google/Qeuz9Ht0thNrQ9KtR',
    photo: '/images/guide/den-da-coffee.jpg',
  },
  {
    id: 'c-fleur-cafe',
    category: 'cafes',
    name: { vi: 'C.Fleur Cafe', en: 'C.Fleur Cafe' },
    description: {
      vi: 'Quán cà phê nhỏ xinh với hoa tươi và không gian ấm cúng — cà phê, trà, bánh ngọt và boutique thời trang ngay trong quán.',
      en: 'A charming little café with fresh florals and cosy décor — coffee, tea, pastries and a small fashion boutique tucked in the back.',
    },
    address: '10L Trần Hữu Trang, Phú Nhuận, HCMC',
    hours: '8:00 – 21:00',
    photo: '/images/guide/c-fleur-cafe.jpg',
  },
  {
    id: 'phuong-ca-phe',
    category: 'cafes',
    name: { vi: 'Phường Cà Phê', en: 'Phường Cà Phê' },
    description: {
      vi: 'Quán cà phê quen thuộc của người dân Phú Nhuận — không gian thoải mái, giá bình dân, mở cửa từ sáng sớm.',
      en: 'A neighbourhood staple for Phú Nhuận locals — relaxed atmosphere, affordable prices, open from early morning.',
    },
    address: '115/102 Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: '7:30 – 22:00',
    photo: '/images/guide/phuong-ca-phe.jpg',
  },
  {
    id: 'nho-cafe',
    category: 'cafes',
    name: { vi: 'NHỎ Cafe', en: 'NHỎ Cafe' },
    description: {
      vi: 'Quán cà phê hoài cổ với không gian trang trí thập niên 80-90 — nằm ven đường tàu, yên tĩnh và đầy cá tính.',
      en: 'A nostalgic café decorated in 1980s–90s vintage style — tucked alongside the railway line, quiet and full of character.',
    },
    address: '115/30 Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: '8:00 – 22:00',
    tip: {
      vi: 'Chụp ảnh điện thoại thoải mái — không chụp máy DSLR chuyên nghiệp trong quán.',
      en: 'Smartphone photos are welcome — professional camera shoots are not allowed inside.',
    },
    photo: '/images/guide/nho-cafe.jpg',
  },
  {
    id: 'mien-dong-thao',
    category: 'cafes',
    name: { vi: 'Cà Phê Miền Đồng Thảo', en: 'Miền Đồng Thảo Café' },
    description: {
      vi: 'Quán cà phê vườn rộng lớn với không gian xanh mát như đồng cỏ — lý tưởng cho nhóm bạn hoặc buổi họp mặt gia đình.',
      en: 'A large garden café with the feel of a peaceful meadow — ideal for groups, family outings or a long lazy afternoon.',
    },
    address: '221A Nguyễn Trọng Tuyển, Phú Nhuận, HCMC',
    hours: '7:00 – 23:00',
    photo: '/images/guide/mien-dong-thao.jpg',
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
    photo: '/images/guide/bach-hoa-xanh.jpg',
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
    photo: '/images/guide/winmart.jpg',
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
    photo: '/images/guide/circle-k.jpg',
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
    photo: '/images/guide/cho-tran-huu-trang.webp',
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
    photo: '/images/guide/nguyen-hue.jpg',
  },
  {
    id: 'bach-dang-wharf',
    category: 'attractions',
    name: { vi: 'Công viên Bến Bạch Đằng', en: 'Bach Dang Wharf Park' },
    description: {
      vi: 'Cuối đường Nguyễn Huệ, ngắm view sông Sài Gòn và thư giãn tại các quán cà phê ven sông.',
      en: 'At the end of Nguyễn Huệ Street — enjoy Saigon River views and relax at riverside cafes.',
    },
    photo: '/images/guide/bach-dang.webp',
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
    photo: '/images/guide/bui-vien.jpg',
  },
  {
    id: 'independence-palace',
    category: 'attractions',
    name: { vi: 'Dinh Độc Lập', en: 'Independence Palace' },
    description: {
      vi: 'Di tích lịch sử quan trọng — bảo tàng mở cửa cho công chúng tham quan, kiến trúc độc đáo thập niên 60.',
      en: 'Significant historical landmark — open as a public museum with distinctive 1960s architecture.',
    },
    photo: '/images/guide/independence-palace.jpg',
  },
  {
    id: 'city-post-office',
    category: 'attractions',
    name: { vi: 'Bưu điện Thành phố', en: 'Saigon Central Post Office' },
    description: {
      vi: 'Kiến trúc thuộc địa Pháp đặc sắc — ngay cạnh Nhà thờ Đức Bà, điểm check-in nổi tiếng.',
      en: 'Stunning French colonial architecture — located next to Notre Dame Cathedral, a popular photo spot.',
    },
    photo: '/images/guide/post-office.jpg',
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
    photo: '/images/guide/cu-chi.jpg',
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

  // Vegetarian
  {
    id: 'quan-chay-120',
    category: 'vegetarian',
    name: { vi: 'Quán Chay 120', en: 'Quán Chay 120' },
    description: {
      vi: 'Quán cơm chay bình dân ngay gần homestay — thực đơn đa dạng, giá cả phải chăng, phù hợp bữa trưa hoặc ăn nhẹ.',
      en: 'Affordable vegetarian rice restaurant just a short walk away — varied menu, reasonable prices, great for lunch or a light meal.',
    },
    address: '120 Trương Quốc Dung, Phú Nhuận, HCMC',
    mapsUrl: 'https://maps.app.goo.gl/mfAinvTnbwE4dutB8',
    photo: '/images/guide/quan-chay-120.jpg',
  },
  {
    id: 'hoa-uu-dam',
    category: 'vegetarian',
    name: { vi: 'Quán Chay Hoa Ưu Đàm', en: 'Hoa Uu Dam Vegetarian' },
    description: {
      vi: 'Quán chay truyền thống với món ăn từ nấm và rau củ tươi — cơm tấm chay buổi sáng và các món miền Nam thanh đạm.',
      en: 'Traditional vegetarian eatery with mushroom and fresh vegetable dishes — breakfast cơm tấm and Southern-style mains.',
    },
    address: '127/36 Cô Giang, Phú Nhuận, HCMC',
    hours: '7:00 – 13:00  &  17:00 – 20:00',
    tip: {
      vi: 'Đóng cửa vào mùng 2 và 16 âm lịch — nên kiểm tra lịch trước khi đến.',
      en: 'Closed on the 2nd and 16th of the lunar calendar — check the date before visiting.',
    },
    mapsUrl: 'https://maps.app.goo.gl/16p66tAHAyZz9FyK9',
    photo: '/images/guide/hoa-uu-dam.jpg',
  },
  {
    id: 'sanite',
    category: 'vegetarian',
    name: { vi: 'Sanité Restaurant', en: 'Sanité Restaurant' },
    description: {
      vi: 'Nhà hàng chay phong cách hiện đại — thực đơn sáng tạo từ nguyên liệu tự nhiên, phù hợp cả ăn chay và thực khách muốn thử.',
      en: 'Contemporary vegetarian restaurant with a creative menu from natural ingredients — welcoming for vegetarians and curious meat-eaters alike.',
    },
    address: '46 Trương Quốc Dung, Phú Nhuận, HCMC',
    hours: '8:00 – 22:00',
    mapsUrl: 'https://maps.app.goo.gl/sHfuu3zZZ6wYnwzp6',
    photo: '/images/guide/sanite.jpg',
  },
  {
    id: 'bep-chay-de-thinh',
    category: 'vegetarian',
    name: { vi: 'Bếp Chay Đế Thính', en: 'Bếp Chay Đế Thính' },
    description: {
      vi: 'Quán cơm chay ấm cúng phục vụ bữa trưa và chiều tối — món ăn miền Nam thanh đạm, giá bình dân.',
      en: 'Cosy vegetarian rice spot serving lunch and dinner — Southern-style clean eating at budget-friendly prices.',
    },
    address: '305/7/7 Lê Văn Sỹ, Tân Bình, HCMC',
    hours: 'T2–T7: 10:00–13:30  &  17:00–20:00',
    tip: {
      vi: 'Nghỉ Chủ nhật — mở cửa Thứ 2 đến Thứ 7.',
      en: 'Closed Sundays — open Monday to Saturday.',
    },
    mapsUrl: 'https://maps.app.goo.gl/vid5v6V478wtWQQK6',
    photo: '/images/guide/bep-chay-de-thinh.jpg',
  },
  {
    id: 'tami-chay',
    category: 'vegetarian',
    name: { vi: 'Tami Coffee & Chay', en: 'Tami Coffee & Chay' },
    description: {
      vi: 'Nhà hàng chay hiện đại kết hợp quán cà phê — phục vụ từ bữa sáng đến tối, có đồ uống và nước ép tươi.',
      en: 'Modern vegetarian restaurant and café — great from breakfast through dinner, with drinks and fresh-pressed juices.',
    },
    address: '33 Hoàng Diệu, Phú Nhuận, HCMC',
    hours: '7:00 – 22:00',
    mapsUrl: 'https://maps.app.goo.gl/StZosQqtJWjKPWVJ6',
    photo: '/images/guide/tami-chay.jpg',
  },

  // Beauty & Spa
  {
    id: 'jun-for-hair',
    category: 'beauty',
    name: { vi: 'JUN for Hair', en: 'JUN for Hair' },
    description: {
      vi: 'Tiệm tóc phong cách với không gian xanh mát, cửa kính và ánh sáng tự nhiên — cắt, nhuộm và tạo kiểu chuyên nghiệp.',
      en: 'A stylish hair salon with lush plants, glass facade and natural light — professional cuts, colouring and styling.',
    },
    address: '77B Huỳnh Tịnh Của, Phú Nhuận, HCMC',
    hours: 'T3–CN: 9:30 – 20:00',
    tip: {
      vi: 'Nghỉ thứ Hai hàng tuần.',
      en: 'Closed every Monday.',
    },
    mapsUrl: 'https://share.google/gLSlDl5SUa6QB8UmR',
    photo: '/images/guide/jun-for-hair.jpg',
  },
  {
    id: '893-hair-style',
    category: 'beauty',
    name: { vi: '893 Hair Style', en: '893 Hair Style' },
    description: {
      vi: 'Tiệm làm tóc phong cách trong hẻm Lê Văn Sỹ — cắt, nhuộm, tạo kiểu theo lịch hẹn.',
      en: 'A stylish hair salon tucked off Lê Văn Sỹ — cuts, colour and styling by appointment.',
    },
    address: '182/5 Lê Văn Sỹ, Phú Nhuận, HCMC',
    mapsUrl: 'https://share.google/TqV4rEiCp5VfJsdZy',
    photo: '/images/guide/893-hair-style.jpg',
  },
  {
    id: 'mia-goi-dau',
    category: 'beauty',
    name: { vi: 'MIA Gội Đầu Dưỡng Sinh', en: 'MIA Head Spa' },
    description: {
      vi: 'Dịch vụ gội đầu dưỡng sinh kết hợp massage thư giãn — thư giãn đầu óc sau một ngày dài khám phá thành phố.',
      en: 'Therapeutic hair-washing with relaxing scalp and shoulder massage — the perfect wind-down after a day exploring the city.',
    },
    address: '417 Huỳnh Văn Bánh, Phú Nhuận, HCMC',
    hours: '7:00 – 21:00',
    mapsUrl: 'https://maps.app.goo.gl/6KBjTiJxJBQ3AL2ZA',
    photo: '/images/guide/mia-goi-dau.jpg',
  },
  {
    id: 'nha-xun',
    category: 'beauty',
    name: { vi: 'Tiệm Gội Nhà Xưn', en: 'Nhà Xưn Hair Wash' },
    description: {
      vi: 'Tiệm gội đầu nhỏ ấm cúng trong hẻm — giá bình dân, chăm sóc chu đáo kiểu gia đình.',
      en: 'A cosy little hair-wash spot tucked in an alley — affordable prices and attentive, homely service.',
    },
    address: '137/18/16 Lê Văn Sỹ, Phú Nhuận, HCMC',
    mapsUrl: 'https://maps.app.goo.gl/Sxg9xMty8otfLPps8',
    photo: '/images/guide/nha-xun.jpg',
  },
  {
    id: 'tyni-nail',
    category: 'beauty',
    name: { vi: 'Tyni Nail – Gội Đầu', en: 'Tyni Nail & Head Spa' },
    description: {
      vi: 'Tiệm nail và gội đầu dưỡng sinh — làm móng, dưỡng tóc và thư giãn trong một địa điểm.',
      en: 'Nail and therapeutic hair-wash studio — manicures, scalp care and relaxation all in one place.',
    },
    address: '180B Lê Văn Sỹ, Phú Nhuận, HCMC',
    mapsUrl: 'https://maps.app.goo.gl/7NGd9jeCpqVuZR1b6',
    photo: '/images/guide/tyni-nail.jpg',
  },
  {
    id: 'mam-spa',
    category: 'beauty',
    name: { vi: 'Mầm Spa', en: 'Mầm Spa' },
    description: {
      vi: 'Spa trị liệu chất lượng cao với massage toàn thân, chăm sóc da và gội đầu thảo mộc — không gian yên tĩnh, dịch vụ chuyên nghiệp.',
      en: 'Quality therapeutic spa offering full-body massage, skincare and herbal hair treatment — quiet space, professional service.',
    },
    address: '184/4B Lê Văn Sỹ, Phú Nhuận, HCMC',
    hours: '10:00 – 21:00',
    tip: {
      vi: 'Dịch vụ tốt, giá cao hơn mức trung bình — xứng đáng cho một buổi thư giãn đặc biệt.',
      en: 'High-quality service at above-average prices — worth it for a special treat.',
    },
    mapsUrl: 'https://maps.app.goo.gl/aEuWF6QCfqVX3DYU7',
    photo: '/images/guide/mam-spa.jpg',
  },
]

export const guideByCategory = {
  food: guideItems.filter(i => i.category === 'food'),
  cafes: guideItems.filter(i => i.category === 'cafes'),
  shopping: guideItems.filter(i => i.category === 'shopping'),
  attractions: guideItems.filter(i => i.category === 'attractions'),
  transport: guideItems.filter(i => i.category === 'transport'),
  vegetarian: guideItems.filter(i => i.category === 'vegetarian'),
  beauty: guideItems.filter(i => i.category === 'beauty'),
}
