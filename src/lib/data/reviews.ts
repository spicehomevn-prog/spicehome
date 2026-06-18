export type Review = {
  name: string
  initial: string
  rating: number
  country: string | null
  date: string
  room: string
  text: string
  textVi?: string
}

// Real guest reviews from SpiceHome Airbnb listings (rooms 203 · 121 · 222).
export const REVIEWS: Review[] = [
  {
    name: 'Cairalyn', initial: 'C', rating: 5, country: 'Manila, Philippines', date: 'June 2026', room: '203',
    text: 'Our stay was great. The place was clean, cozy and exactly like the photos. The location was convenient and the host was very accommodating and responsive throughout the trip. Would definitely stay here again and highly recommend it to others.',
    textVi: 'Kỳ nghỉ của chúng tôi thật tuyệt. Căn phòng sạch sẽ, ấm cúng và đúng y như hình. Vị trí thuận tiện, chủ nhà rất chu đáo và phản hồi nhanh trong suốt chuyến đi. Chắc chắn sẽ quay lại và rất muốn giới thiệu cho mọi người.',
  },
  {
    name: 'Gemma', initial: 'G', rating: 5, country: null, date: 'June 2026', room: '203',
    text: "We thoroughly enjoyed our stay. The hosts were absolutely lovely, and the apartment was clean with plenty of extra touches — a laundry room, cleaning supplies, even umbrellas and rain jackets. It's a bit far from District 1, but Grab is cheap and quick, and there's some great shopping nearby we'd never have discovered otherwise. Highly recommend this place — thanks for having us.",
    textVi: 'Chúng tôi đã có một kỳ nghỉ thật trọn vẹn. Chủ nhà vô cùng dễ thương, căn hộ sạch sẽ với nhiều tiện ích nhỏ chu đáo — phòng giặt, đồ vệ sinh, thậm chí cả dù và áo mưa. Hơi xa Quận 1 một chút, nhưng Grab rẻ và nhanh, lại có khu mua sắm tuyệt vời gần đó mà nếu không ở đây chắc chúng tôi chẳng bao giờ biết tới. Rất đáng để giới thiệu — cảm ơn đã đón tiếp chúng tôi.',
  },
  {
    name: 'Yến', initial: 'Y', rating: 5, country: null, date: 'April 2026', room: '121',
    text: 'The place sits between the airport and the city centre, so it\'s easy to get around by motorbike. Our room was exactly like the photos — I love the smell of the room and everything was absolutely amazing. If I get the chance to visit again, I\'ll definitely choose Spice Home.',
    textVi: 'Chỗ ở nằm giữa sân bay và trung tâm thành phố nên di chuyển bằng xe máy rất dễ. Phòng đúng y như hình — mình thích mùi hương trong phòng và mọi thứ đều tuyệt vời. Nếu có dịp quay lại, mình nhất định sẽ chọn Spice Home.',
  },
  {
    name: 'Olivia', initial: 'O', rating: 5, country: null, date: 'April 2026', room: '203',
    text: "What a grab for the price. Hai was very communicative and her instructions were so clear that we had zero troubles all stay. The room was extra cosy and spotless, the aircon worked extremely well, hot water was fine and the beds were comfortable. There was literally nothing to fault — I'd happily stay at Hai's place again whenever I visit HCMC.",
    textVi: "Quá hời so với giá tiền. Hải nhắn tin rất nhiệt tình và hướng dẫn rõ ràng đến mức cả kỳ nghỉ chúng tôi không gặp một trục trặc nào. Phòng cực kỳ ấm cúng và sạch bong, máy lạnh chạy rất mát, nước nóng ổn và giường thì thoải mái. Thật sự không có gì để chê — mình nhất định sẽ ở lại chỗ của Hải mỗi khi đến TP.HCM.",
  },
  {
    name: 'Max', initial: 'M', rating: 5, country: null, date: 'April 2026', room: '222',
    text: "There are too many good things to say. Hai is a true professional who went above and beyond on many occasions, and her husband, mother and everyone I met were warm and kind. The house is cleaned every day, and it's tucked next to a bustling market yet still quiet and peaceful. The room and bed are actually bigger than they look in the photos. Honestly, probably the best Airbnb I've stayed in — thank you to Hai and her family for the month-long stay.",
    textVi: 'Có quá nhiều điều hay để nói. Hải là một người chủ nhà thật sự chuyên nghiệp, đã nhiều lần giúp đỡ tôi vượt cả mong đợi, và chồng, mẹ cùng mọi người tôi gặp đều ấm áp, tử tế. Nhà được dọn dẹp mỗi ngày, nằm ngay cạnh một khu chợ nhộn nhịp mà vẫn yên tĩnh, bình yên. Phòng và giường thực tế còn rộng hơn trong hình. Thành thật mà nói, đây có lẽ là Airbnb tuyệt nhất tôi từng ở — cảm ơn Hải và gia đình vì kỳ nghỉ kéo dài cả tháng.',
  },
  {
    name: 'Chloé', initial: 'C', rating: 5, country: null, date: 'March 2026', room: '121',
    text: "I spent a good two weeks here and it's one of the best Airbnbs I've ever stayed in. Far from District 1, but that's no issue since Grab is easy and affordable. The host is very friendly and replies immediately, and the housekeepers keep the common room impeccable — a weekly room clean with fresh sheets and water included. I'll definitely come back for my next stay in Ho Chi Minh.",
    textVi: 'Mình đã ở đây hai tuần và đây là một trong những Airbnb tuyệt nhất mình từng ở. Xa Quận 1 nhưng không thành vấn đề vì Grab tiện và giá tốt. Chủ nhà rất thân thiện và trả lời ngay lập tức, đội dọn phòng giữ khu sinh hoạt chung sạch bong — mỗi tuần dọn phòng một lần kèm ga giường mới và nước uống. Mình nhất định sẽ quay lại trong chuyến đi tới Hồ Chí Minh.',
  },
  {
    name: 'Trần Khánh Ngân', initial: 'N', rating: 5, country: null, date: 'June 2026', room: '203',
    text: 'The room was exactly as pictured, very clean and well maintained. The hosts were extremely responsive and helpful, which we really appreciated. A pleasant stay overall — I\'d recommend this Airbnb to anyone looking for a room around the area.',
    textVi: 'Phòng đúng y như hình, rất sạch sẽ và được bảo trì tốt. Chủ nhà phản hồi cực nhanh và nhiệt tình hỗ trợ, điều mà chúng tôi rất trân trọng. Một kỳ nghỉ dễ chịu nói chung — mình sẽ giới thiệu Airbnb này cho bất kỳ ai đang tìm phòng quanh khu vực.',
  },
  {
    name: 'Mariia', initial: 'M', rating: 5, country: null, date: 'January 2026', room: '121',
    text: 'The place is wonderful — you can really feel how much care the owners put into it. Everything you need is there, the design is lovely and the shared spaces feel cozy, with a washing machine and tumble dryer too. It\'s on a small, quiet lane with friendly neighbours, lots of cafés and restaurants around and close to the market. You really get a sense of how locals live. Loved staying there.',
    textVi: 'Chỗ ở thật tuyệt vời — bạn có thể cảm nhận được chủ nhà đã chăm chút đến nhường nào. Mọi thứ bạn cần đều có sẵn, thiết kế đẹp và khu sinh hoạt chung ấm cúng, lại có cả máy giặt và máy sấy. Nằm trên một con hẻm nhỏ yên tĩnh với hàng xóm thân thiện, nhiều quán cà phê và nhà hàng quanh đó, gần chợ. Bạn thật sự cảm nhận được nhịp sống của người dân địa phương. Thích mê khi ở đây.',
  },
  {
    name: 'Dhrupit', initial: 'D', rating: 5, country: null, date: 'March 2026', room: '121',
    text: "One of the best stays of my time in Vietnam. Hai goes beyond to help her guests — when our AC had an issue on check-in day, she brought technicians straight away and got it fixed. She recommended so many worthwhile places to visit and even gave us an early check-in unprompted. Her mother is wonderfully friendly too. Worth staying a month — we'll be back.",
    textVi: 'Một trong những kỳ nghỉ tuyệt nhất trong chuyến đi Việt Nam của tôi. Hải luôn đi xa hơn để giúp khách — khi máy lạnh gặp trục trặc ngay ngày nhận phòng, cô ấy gọi thợ tới ngay và sửa xong. Cô ấy giới thiệu rất nhiều địa điểm đáng ghé thăm và còn cho chúng tôi nhận phòng sớm mà không cần báo trước. Mẹ cô ấy cũng vô cùng thân thiện. Rất đáng để ở cả tháng — chúng tôi sẽ quay lại.',
  },
]
