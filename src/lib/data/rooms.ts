import type { BilingualText } from '@/context/LanguageContext'

export interface Room {
  id: string
  number: string
  name: BilingualText
  tagline: BilingualText
  description: BilingualText
  floor: number
  branch: 1 | 2
  highlights: BilingualText[]
  bed: BilingualText
  capacity: number
  images: string[]
  amenities: BilingualText[]
  airbnbUrl: string
  featured: boolean
}

export const rooms: Room[] = [
  {
    id: 'room-101',
    number: '101',
    name: { vi: 'Phòng 101', en: 'Room 101' },
    tagline: { vi: 'Không gian rộng rãi với cửa kính nhìn ra ban công', en: 'Spacious room with glass doors opening to a balcony' },
    description: {
      vi: 'Phòng rộng rãi tầng 1 với giường đôi êm ái, rèm xanh lam sang trọng và cửa kính lùa nhìn ra khu vực ngoài trời. Ánh sáng tự nhiên ngập tràn, thiết kế hiện đại ấm cúng.',
      en: 'Spacious ground-floor room featuring a queen-size bed, elegant blue curtains, and sliding glass doors leading to an outdoor seating area. Flooded with natural light and finished with warm modern décor.',
    },
    floor: 1,
    branch: 1,
    highlights: [
      { vi: 'Ban công', en: 'Balcony access' },
      { vi: 'Cửa kính lùa', en: 'Sliding glass doors' },
      { vi: 'Ánh sáng tự nhiên', en: 'Natural light' },
      { vi: 'Tầng 1', en: 'Ground floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-101/main.jpg',
      '/images/rooms/room-101/img2.jpg',
      '/images/rooms/room-101/img3.jpg',
      '/images/rooms/room-101/img4.jpg',
      '/images/rooms/room-101/img5.jpg',
      '/images/rooms/room-101/img6.jpg',
      '/images/rooms/room-101/img7.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Ban công / khu vực ngoài trời', en: 'Balcony / outdoor area' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
      { vi: 'Máy sấy tóc', en: 'Hair dryer' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome101',
    featured: true,
  },
  {
    id: 'room-102',
    number: '102',
    name: { vi: 'Phòng 102', en: 'Room 102' },
    tagline: { vi: 'Thoải mái, đầy đủ tiện nghi cho kỳ nghỉ lý tưởng', en: 'Comfortable and fully equipped for the perfect stay' },
    description: {
      vi: 'Phòng tiêu chuẩn tầng 1 với đầy đủ tiện nghi cần thiết. Thiết kế gọn gàng, hiện đại — lý tưởng cho những chuyến đi công tác hoặc du lịch ngắn ngày.',
      en: 'A well-appointed ground-floor room with all the essentials. Clean, modern layout — ideal for business trips or short stays.',
    },
    floor: 1,
    branch: 1,
    highlights: [
      { vi: 'Yên tĩnh', en: 'Quiet' },
      { vi: 'Tiện nghi đầy đủ', en: 'Fully equipped' },
      { vi: 'Tầng 1', en: 'Ground floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-102/main.jpg',
      '/images/rooms/room-102/img2.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome102',
    featured: false,
  },
  {
    id: 'room-103',
    number: '103',
    name: { vi: 'Phòng 103', en: 'Room 103' },
    tagline: { vi: 'Không gian yên tĩnh, ấm cúng cho kỳ nghỉ trọn vẹn', en: 'Quiet, cozy space for a complete rest' },
    description: {
      vi: 'Phòng tầng 1 yên tĩnh với không gian ấm cúng. Thiết kế đơn giản tinh tế với gỗ tự nhiên và ánh sáng nhẹ nhàng. Phù hợp với du khách thích sự bình yên.',
      en: 'A quiet ground-floor room with a cozy atmosphere. Simple, refined design using natural wood tones and soft lighting — perfect for travellers who value tranquillity.',
    },
    floor: 1,
    branch: 1,
    highlights: [
      { vi: 'Giường King', en: 'King bed' },
      { vi: 'Không gian rộng', en: 'Spacious' },
      { vi: 'Tầng 1', en: 'Ground floor' },
    ],
    bed: { vi: 'Giường King (180x200cm)', en: 'King bed (180x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-103/main.jpg',
      '/images/rooms/room-103/img2.jpg',
      '/images/rooms/room-103/img3.jpg',
      '/images/rooms/room-103/img4.jpg',
      '/images/rooms/room-103/img5.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome103',
    featured: false,
  },
  {
    id: 'room-121',
    number: '121',
    name: { vi: 'Phòng 121', en: 'Room 121' },
    tagline: { vi: 'Điểm nhấn xanh tươi mát, thiết kế compact hiện đại', en: 'Fresh green accent, modern compact design' },
    description: {
      vi: 'Phòng gọn gàng với điểm nhấn tường xanh lá độc đáo và giường platform phong cách. Không gian nhỏ gọn nhưng đầy đủ tiện nghi — lý tưởng cho khách du lịch một mình hoặc cặp đôi.',
      en: 'A compact room with a distinctive green accent wall and stylish platform bed. Small but fully equipped — ideal for solo travellers or couples looking for value and comfort.',
    },
    floor: 1,
    branch: 2,
    highlights: [
      { vi: 'Phong cách hiện đại', en: 'Modern style' },
      { vi: 'Compact', en: 'Compact' },
      { vi: 'Điểm nhấn xanh lá', en: 'Green accent wall' },
      { vi: 'Tầng 1', en: 'Ground floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-121/main.jpg',
      '/images/rooms/room-121/img2.jpg',
      '/images/rooms/room-121/img3.jpg',
      '/images/rooms/room-121/img4.jpg',
      '/images/rooms/room-121/img5.jpg',
      '/images/rooms/room-121/img6.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome121',
    featured: true,
  },
  {
    id: 'room-201',
    number: '201',
    name: { vi: 'Phòng 201', en: 'Room 201' },
    tagline: { vi: 'Không gian yên tĩnh, riêng tư', en: 'Quiet and private space' },
    description: {
      vi: 'Nội thất hiện đại, tông màu ấm áp tạo cảm giác thư thái. Vị trí thuận tiện gần các tiện ích chung của tòa nhà.',
      en: 'A spacious second-floor room with pleasant views of the surroundings. Modern furnishings in warm tones create a relaxing ambiance. Conveniently located near shared building amenities.',
    },
    floor: 2,
    branch: 1,
    highlights: [
      { vi: 'View đường phố', en: 'Street view' },
      { vi: 'Thoáng đãng', en: 'Airy' },
      { vi: 'Tầng 2', en: '2nd floor' },
    ],
    bed: { vi: 'Giường đôi (140x200cm)', en: 'Double bed (140x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-201/main.jpg',
      '/images/rooms/room-201/img2.jpg',
      '/images/rooms/room-201/img3.jpg',
      '/images/rooms/room-201/img4.jpg',
      '/images/rooms/room-201/img5.jpg',
      '/images/rooms/room-201/img6.jpg',
      '/images/rooms/room-201/img7.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome201',
    featured: false,
  },
  {
    id: 'room-203',
    number: '203',
    name: { vi: 'Phòng 203', en: 'Room 203' },
    tagline: { vi: 'Ban công riêng, cửa kính rộng — ánh sáng tự nhiên ngập tràn', en: 'Private balcony, floor-to-ceiling windows — bathed in natural light' },
    description: {
      vi: 'Phòng đón nhiều ánh sáng tự nhiên cùng ban công riêng được bố trí bàn ghế để thư giãn và tận hưởng không gian yên tĩnh.\n\nKết hợp cùng tông màu beige ấm áp mang lại cảm giác tinh tế, thoải mái và dễ chịu trong suốt thời gian lưu trú.',
      en: 'The room is filled with natural light and features a private balcony furnished with seating for relaxing and enjoying the peaceful atmosphere.\n\nWarm beige tones create a refined, cozy, and comfortable stay experience.',
    },
    floor: 2,
    branch: 1,
    highlights: [
      { vi: 'Ban công riêng', en: 'Private balcony' },
      { vi: 'Cửa kính sàn trần', en: 'Floor-to-ceiling windows' },
      { vi: 'View thành phố', en: 'City view' },
      { vi: 'Tầng 2', en: '2nd floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-203/main.jpg',
      '/images/rooms/room-203/img2.jpg',
      '/images/rooms/room-203/img3.jpg',
      '/images/rooms/room-203/img4.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Ban công riêng với bàn ghế', en: 'Private balcony with seating' },
      { vi: 'Cửa kính từ sàn đến trần', en: 'Floor-to-ceiling windows' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
      { vi: 'Máy sấy tóc', en: 'Hair dryer' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome203',
    featured: true,
  },
  {
    id: 'room-221',
    number: '221',
    name: { vi: 'Phòng 221', en: 'Room 221' },
    tagline: { vi: 'Thiết kế compact tinh tế, tầng 2 yên tĩnh', en: 'Refined compact design on the quiet second floor' },
    description: {
      vi: 'Phòng tầng 2 gọn gàng với thiết kế hiện đại, tông màu trung tính. Không gian yên tĩnh, thích hợp cho du khách cần nghỉ ngơi sau những ngày khám phá Sài Gòn.',
      en: 'A neat second-floor room with a modern design and neutral tones. Quiet setting, perfect for travellers who need rest after exploring Saigon.',
    },
    floor: 2,
    branch: 2,
    highlights: [
      { vi: 'Yên tĩnh', en: 'Quiet' },
      { vi: 'Tông màu trung tính', en: 'Neutral tones' },
      { vi: 'Tầng 2', en: '2nd floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-221/main.jpg',
      '/images/rooms/room-221/img2.jpg',
      '/images/rooms/room-221/img3.jpg',
      '/images/rooms/room-221/img4.jpg',
      '/images/rooms/room-221/img5.jpg',
      '/images/rooms/room-221/img6.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome221',
    featured: false,
  },
  {
    id: 'room-222',
    number: '222',
    name: { vi: 'Phòng 222', en: 'Room 222' },
    tagline: { vi: 'Tiện nghi cao cấp, không gian thoáng đãng tầng 2', en: 'Premium amenities in an airy second-floor setting' },
    description: {
      vi: 'Phòng Deluxe tầng 2 với nội thất cao cấp và không gian thoáng đãng. Thiết kế hiện đại, tối giản nhưng vẫn ấm áp và tiện nghi — lý tưởng cho cả kỳ nghỉ và công tác.',
      en: 'A second-floor Deluxe room with premium furnishings and open space. Modern, minimalist design that remains warm and comfortable — perfect for both leisure and business.',
    },
    floor: 2,
    branch: 2,
    highlights: [
      { vi: 'Cao cấp', en: 'Premium' },
      { vi: 'Không gian mở', en: 'Open space' },
      { vi: 'Tầng 2', en: '2nd floor' },
    ],
    bed: { vi: 'Giường Queen (160x200cm)', en: 'Queen bed (160x200cm)' },
    capacity: 2,
    images: [
      '/images/rooms/room-222/main.jpg',
      '/images/rooms/room-222/img2.jpg',
      '/images/rooms/room-222/img3.jpg',
    ],
    amenities: [
      { vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' },
      { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' },
      { vi: 'Phòng tắm riêng', en: 'Private bathroom' },
      { vi: 'Tủ quần áo', en: 'Wardrobe' },
      { vi: 'Bàn làm việc', en: 'Work desk' },
      { vi: 'Máy sấy tóc', en: 'Hair dryer' },
    ],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome222',
    featured: false,
  },
]

export const featuredRooms = rooms.filter(r => r.featured)
