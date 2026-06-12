// SpiceHome — room-detail template data.
// Real per-room content (bilingual) + Airbnb links. Swap ROOM_ID in index.html
// to render any room with the same 4-section structure.
window.SH_ROOMS = {
  '101': {
    number: '101', floor: 1, branch: 1, capacity: 2,
    name: { vi: 'Phòng 101', en: 'Room 101' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Không gian rộng rãi với cửa kính nhìn ra ban công', en: 'Spacious room with glass doors opening to a balcony' },
    opening: {
      vi: ['Phòng rộng rãi tầng 1 với giường đôi êm ái, rèm xanh lam sang trọng và cửa kính lùa nhìn ra khu vực ngoài trời.', 'Ánh sáng tự nhiên ngập tràn, thiết kế hiện đại ấm cúng — nơi bạn có thể thực sự thư giãn sau một ngày khám phá Sài Gòn.'],
      en: ['A spacious ground-floor room with a queen-size bed, elegant blue curtains, and sliding glass doors leading to an outdoor seating area.', 'Flooded with natural light and finished with warm, modern décor — a place to truly unwind after a day exploring Saigon.'],
    },
    images: ['../../assets/images/rooms/room-101/main.jpg', '../../assets/images/rooms/room-101/img2.jpg', '../../assets/images/rooms/room-101/img3.jpg', '../../assets/images/rooms/room-101/img4.jpg', '../../assets/images/rooms/room-101/img5.jpg'],
    highlights: [{ vi: 'Ban công', en: 'Balcony access' }, { vi: 'Cửa kính lùa', en: 'Sliding glass doors' }, { vi: 'Ánh sáng tự nhiên', en: 'Natural light' }, { vi: 'Tầng 1', en: 'Ground floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Ban công / khu vực ngoài trời', en: 'Balcony / outdoor area' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }, { vi: 'Máy sấy tóc', en: 'Hair dryer' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome101',
  },
  '203': {
    number: '203', floor: 2, branch: 1, capacity: 2,
    name: { vi: 'Phòng 203', en: 'Room 203' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Ban công riêng, cửa kính rộng — ánh sáng tự nhiên ngập tràn', en: 'Private balcony, floor-to-ceiling windows — bathed in natural light' },
    opening: {
      vi: ['Phòng đón nhiều ánh sáng tự nhiên cùng ban công riêng được bố trí bàn ghế để thư giãn và tận hưởng không gian yên tĩnh.', 'Kết hợp cùng tông màu beige ấm áp mang lại cảm giác tinh tế, thoải mái và dễ chịu trong suốt thời gian lưu trú.'],
      en: ['Filled with natural light and featuring a private balcony furnished with seating for relaxing and enjoying the peaceful atmosphere.', 'Warm beige tones create a refined, cozy, and comfortable stay experience.'],
    },
    images: ['../../assets/images/rooms/room-203/main.jpg', '../../assets/images/rooms/room-203/img2.jpg', '../../assets/images/rooms/room-203/img3.jpg', '../../assets/images/rooms/room-203/img4.jpg'],
    highlights: [{ vi: 'Ban công riêng', en: 'Private balcony' }, { vi: 'Cửa kính sàn trần', en: 'Floor-to-ceiling windows' }, { vi: 'View thành phố', en: 'City view' }, { vi: 'Tầng 2', en: '2nd floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Ban công riêng với bàn ghế', en: 'Private balcony with seating' }, { vi: 'Cửa kính từ sàn đến trần', en: 'Floor-to-ceiling windows' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }, { vi: 'Máy sấy tóc', en: 'Hair dryer' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome203',
  },
  '121': {
    number: '121', floor: 1, branch: 2, capacity: 2,
    name: { vi: 'Phòng 121', en: 'Room 121' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Điểm nhấn xanh tươi mát, thiết kế compact hiện đại', en: 'Fresh green accent, modern compact design' },
    opening: {
      vi: ['Phòng gọn gàng với điểm nhấn tường xanh lá độc đáo và giường platform phong cách.', 'Không gian nhỏ gọn nhưng đầy đủ tiện nghi — lý tưởng cho khách du lịch một mình hoặc cặp đôi.'],
      en: ['A compact room with a distinctive green accent wall and a stylish platform bed.', 'Small but fully equipped — ideal for solo travellers or couples looking for value and comfort.'],
    },
    images: ['../../assets/images/rooms/room-121/main.jpg', '../../assets/images/rooms/room-121/img2.jpg'],
    highlights: [{ vi: 'Phong cách hiện đại', en: 'Modern style' }, { vi: 'Compact', en: 'Compact' }, { vi: 'Điểm nhấn xanh lá', en: 'Green accent wall' }, { vi: 'Tầng 1', en: 'Ground floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome121',
  },
  '102': {
    number: '102', floor: 1, branch: 1, capacity: 2,
    name: { vi: 'Phòng 102', en: 'Room 102' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Thoải mái, đầy đủ tiện nghi cho kỳ nghỉ lý tưởng', en: 'Comfortable and fully equipped for the perfect stay' },
    opening: {
      vi: ['Phòng tiêu chuẩn tầng 1 với đầy đủ tiện nghi cần thiết.', 'Thiết kế gọn gàng, hiện đại — lý tưởng cho những chuyến đi công tác hoặc du lịch ngắn ngày.'],
      en: ['A well-appointed ground-floor room with all the essentials.', 'Clean, modern layout — ideal for business trips or short stays.'],
    },
    images: ['../../assets/images/rooms/room-102/main.jpg', '../../assets/images/rooms/room-102/img2.jpg', '../../assets/images/rooms/room-102/img3.jpg', '../../assets/images/rooms/room-102/img4.jpg'],
    highlights: [{ vi: 'Yên tĩnh', en: 'Quiet' }, { vi: 'Tiện nghi đầy đủ', en: 'Fully equipped' }, { vi: 'Tầng 1', en: 'Ground floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome102',
  },
  '103': {
    number: '103', floor: 1, branch: 1, capacity: 2,
    name: { vi: 'Phòng 103', en: 'Room 103' },
    bed: { vi: 'Giường King (180×200cm)', en: 'King bed (180×200cm)' },
    tagline: { vi: 'Không gian yên tĩnh, ấm cúng cho kỳ nghỉ trọn vẹn', en: 'Quiet, cozy space for a complete rest' },
    opening: {
      vi: ['Phòng tầng 1 yên tĩnh với không gian ấm cúng. Thiết kế đơn giản tinh tế với gỗ tự nhiên và ánh sáng nhẹ nhàng.', 'Phù hợp với du khách thích sự bình yên giữa lòng thành phố.'],
      en: ['A quiet ground-floor room with a cozy atmosphere. Simple, refined design using natural wood tones and soft lighting.', 'Perfect for travellers who value tranquillity in the middle of the city.'],
    },
    images: ['../../assets/images/rooms/room-103/main.jpg', '../../assets/images/rooms/room-103/img2.jpg', '../../assets/images/rooms/room-103/img3.jpg', '../../assets/images/rooms/room-103/img4.jpg'],
    highlights: [{ vi: 'Giường King', en: 'King bed' }, { vi: 'Không gian rộng', en: 'Spacious' }, { vi: 'Tầng 1', en: 'Ground floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome103',
  },
  '201': {
    number: '201', floor: 2, branch: 1, capacity: 2,
    name: { vi: 'Phòng 201', en: 'Room 201' },
    bed: { vi: 'Giường đôi (140×200cm)', en: 'Double bed (140×200cm)' },
    tagline: { vi: 'Không gian yên tĩnh, riêng tư', en: 'Quiet and private space' },
    opening: {
      vi: ['Phòng tầng 2 thoáng đãng với view dễ chịu nhìn ra khu vực xung quanh.', 'Nội thất hiện đại, tông màu ấm áp tạo cảm giác thư thái. Vị trí thuận tiện gần các tiện ích chung của tòa nhà.'],
      en: ['A spacious second-floor room with pleasant views of the surroundings.', 'Modern furnishings in warm tones create a relaxing ambiance, conveniently located near shared building amenities.'],
    },
    images: ['../../assets/images/rooms/room-201/main.jpg', '../../assets/images/rooms/room-201/img2.jpg', '../../assets/images/rooms/room-201/img3.jpg', '../../assets/images/rooms/room-201/img4.jpg'],
    highlights: [{ vi: 'View đường phố', en: 'Street view' }, { vi: 'Thoáng đãng', en: 'Airy' }, { vi: 'Tầng 2', en: '2nd floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome201',
  },
  '221': {
    number: '221', floor: 2, branch: 2, capacity: 2,
    name: { vi: 'Phòng 221', en: 'Room 221' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Thiết kế compact tinh tế, tầng 2 yên tĩnh', en: 'Refined compact design on the quiet second floor' },
    opening: {
      vi: ['Phòng tầng 2 gọn gàng với thiết kế hiện đại, tông màu trung tính.', 'Không gian yên tĩnh, thích hợp cho du khách cần nghỉ ngơi sau những ngày khám phá Sài Gòn.'],
      en: ['A neat second-floor room with a modern design and neutral tones.', 'A quiet setting, perfect for travellers who need rest after exploring Saigon.'],
    },
    images: ['../../assets/images/rooms/room-221/main.jpg', '../../assets/images/rooms/room-221/img2.jpg', '../../assets/images/rooms/room-221/img3.jpg', '../../assets/images/rooms/room-221/img4.jpg'],
    highlights: [{ vi: 'Yên tĩnh', en: 'Quiet' }, { vi: 'Tông màu trung tính', en: 'Neutral tones' }, { vi: 'Tầng 2', en: '2nd floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome221',
  },
  '222': {
    number: '222', floor: 2, branch: 2, capacity: 2,
    name: { vi: 'Phòng 222', en: 'Room 222' },
    bed: { vi: 'Giường Queen (160×200cm)', en: 'Queen bed (160×200cm)' },
    tagline: { vi: 'Tiện nghi cao cấp, không gian thoáng đãng tầng 2', en: 'Premium amenities in an airy second-floor setting' },
    opening: {
      vi: ['Phòng Deluxe tầng 2 với nội thất cao cấp và không gian thoáng đãng.', 'Thiết kế hiện đại, tối giản nhưng vẫn ấm áp và tiện nghi — lý tưởng cho cả kỳ nghỉ và công tác.'],
      en: ['A second-floor Deluxe room with premium furnishings and open space.', 'Modern, minimalist design that remains warm and comfortable — perfect for both leisure and business.'],
    },
    images: ['../../assets/images/rooms/room-222/main.jpg', '../../assets/images/rooms/room-222/img2.jpg', '../../assets/images/rooms/room-222/img3.jpg'],
    highlights: [{ vi: 'Cao cấp', en: 'Premium' }, { vi: 'Không gian mở', en: 'Open space' }, { vi: 'Tầng 2', en: '2nd floor' }],
    amenities: [{ vi: 'Điều hòa nhiệt độ', en: 'Air conditioning' }, { vi: 'WiFi tốc độ cao', en: 'High-speed WiFi' }, { vi: 'Phòng tắm riêng', en: 'Private bathroom' }, { vi: 'Tủ quần áo', en: 'Wardrobe' }, { vi: 'Bàn làm việc', en: 'Work desk' }, { vi: 'Máy sấy tóc', en: 'Hair dryer' }],
    airbnbUrl: 'https://airbnb.com.vn/h/spicehome222',
  },
}

// Shared practical notes — apply to every room (Lưu ý / Good to Know).
window.SH_NOTES = [
  { vi: 'Nhận phòng từ 14:00 · Trả phòng trước 11:00', en: 'Check-in from 2:00 PM · Check-out by 11:00 AM' },
  { vi: 'Nhắn tin trước cho host để được hỗ trợ nhận phòng thuận tiện nhất', en: 'Message your host ahead of time for the smoothest check-in' },
  { vi: 'Không hút thuốc trong phòng · Giữ yên lặng sau 22:00', en: 'No smoking indoors · Quiet hours after 10:00 PM' },
  { vi: 'Mang theo CCCD/hộ chiếu để đăng ký lưu trú', en: 'Bring your ID/passport for stay registration' },
]

window.SH_CONTACTS = ['(+84) 0904 955 479', '(+84) 0355 608 623', '(+84) 0979 80 4343']
