'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { useLang } from '@/context/LanguageContext'

interface ManualSection {
  id: string
  vi: { title: string; content: string[] }
  en: { title: string; content: string[] }
}

const sections: ManualSection[] = [
  {
    id: 'checkin',
    vi: {
      title: 'Check-in & Check-out',
      content: [
        'Nhận phòng sớm hoặc trả phòng muộn có thể được sắp xếp tùy thuộc vào lịch phòng — vui lòng liên hệ trước.',
        'Quy trình tự nhận phòng/ trả phòng 24/7 thuận tiện theo hướng dẫn chi tiết được gửi trước ngày nhận phòng',
        'Mã khóa phòng sẽ được gửi qua tin nhắn trước ngày nhận phòng.',
      ],
    },
    en: {
      title: 'Check-in & Check-out',
      content: [
        'Check-in: from 14:00 | Check-out: before 12:00',
        'Early check-in or late check-out may be possible depending on the schedule — please contact us in advance.',
        'When you arrive, message Hải or Thanh — we will greet you and guide you to your room.',
        'The door code will be sent by message before your arrival date.',
      ],
    },
  },
  {
    id: 'wifi',
    vi: {
      title: 'WiFi & Thiết Bị',
      content: [
        'WiFi | Mật khẩu: được cung cấp cùng với thông tin nhận phòng',
        'Mỗi phòng có điều hòa nhiệt độ riêng — điều chỉnh theo nhiệt độ thoải mái của bạn.',
        'Ổ cắm điện ở Việt Nam: 220V / 50Hz.',
        'Nếu gặp sự cố với thiết bị điện, liên hệ ngay với Hải hoặc Thanh.',
      ],
    },
    en: {
      title: 'WiFi & Devices',
      content: [
        'WiFi: SpiceHome_Guest | Password: provided at check-in',
        'Each room has its own air conditioning — adjust to your preferred temperature.',
        'Vietnamese power sockets: 220V / 50Hz. Type A, C and F plugs all work.',
        'If you experience any electrical issues, contact Hải or Thanh immediately.',
      ],
    },
  },
  {
    id: 'kitchen',
    vi: {
      title: 'Bếp & Ăn Uống (áp dụng với Chi nhánh 2)',
      content: [
        'Bếp chung được sử dụng cho việc nấu ăn nhẹ — đun nước, hâm nóng thức ăn.',
        'Vui lòng rửa sạch và cất đồ dùng sau khi sử dụng.',
        'Không nấu ăn có mùi nặng (cá, mắm) trong phòng riêng.',
        'Đặt đồ ăn giao tận nơi qua Grab Food hoặc ShopeeFood — cực kỳ tiện lợi!',
      ],
    },
    en: {
      title: 'Kitchen & Food',
      content: [
        'The shared kitchen is available for light cooking — boiling water, reheating food.',
        'Please wash and put away dishes after use.',
        'Please avoid cooking strongly smelling food (fish sauce, fermented items) in your private room.',
        'Order food delivery through Grab Food or ShopeeFood — extremely convenient!',
        'Bottled drinking water is provided in the room at check-in.',
      ],
    },
  },
  {
    id: 'parking',
    vi: {
      title: 'Đỗ Xe',
      content: [
        'Có chỗ đỗ xe máy trong nhà — miễn phí cho khách.',
        'Đỗ xe ô tô: có thể sắp xếp tại bãi đỗ gần nhà với phí hàng ngày. Liên hệ host để biết thêm chi tiết.',
        'Khách đến bằng Grab hoặc taxi: dừng trước cổng chính.',
      ],
    },
    en: {
      title: 'Parking',
      content: [
        'Indoor motorbike parking is available — free of charge for guests.',
        'Car parking: can be arranged at a nearby lot for a daily fee. Contact the host for details.',
        'Arriving by Grab or taxi: stop at the main entrance.',
      ],
    },
  },
  {
    id: 'rules',
    vi: {
      title: 'Nội Quy Nhà',
      content: [
        'Không hút thuốc trong phòng và trong nhà — khu vực hút thuốc ở ngoài trời.',
        'Không mang thú cưng.',
        'Giữ yên tĩnh sau 22:00 — tôn trọng các khách khác và cư dân xung quanh.',
        'Không tổ chức tiệc hoặc tụ tập đông người trong phòng.',
        'Khách thăm bên ngoài không được ở lại qua đêm.',
        'Vui lòng tắt điều hòa và đèn khi ra ngoài.',
        'Không mang đồ ăn có mùi mạnh (sầu riêng) vào phòng.',
        'Cung cấp ảnh chụp Căn cước công dân (đối với người Việt Nam) / hộ chiếu và tem nhập cảnh Việt Nam (đối với người quốc tịch nước ngoài) để chúng tôi thông báo lưu trú theo quy định của pháp luật hiện hành.',
      ],
    },
    en: {
      title: 'House Rules',
      content: [
        'No smoking inside the rooms or building — designated outdoor smoking area.',
        'No pets allowed.',
        'Keep noise down after 22:00 — out of respect for other guests and neighbours.',
        'No parties or large gatherings in the rooms.',
        'Outside guests may not stay overnight.',
        'Please turn off the A/C and lights when leaving the room.',
        'No strongly smelling food (e.g. durian) in the rooms.',
      ],
    },
  },
  {
    id: 'amenities',
    vi: {
      title: 'Tiện Ích Chung',
      content: [
        'Máy giặt: dùng chung, không sử dụng trong khung giờ yên tĩnh 22:00 - 6:00',
        'Dịch vụ dọn phòng: đối với đặt phòng dài ngày từ 2 tuần trở lên, dọn phòng hàng tuần miễn phí',
        'Hành lý: có thể gửi trước hoặc sau giờ check-in/out nếu cần.',
      ],
    },
    en: {
      title: 'Shared Amenities',
      content: [
        'Washing machine: shared, book a time slot — contact the host to arrange.',
        'Towels and basic bathroom supplies are provided and regularly refreshed.',
        'Room cleaning: on request or on a scheduled basis.',
        'Luggage storage: available before check-in or after check-out if needed.',
      ],
    },
  },
  {
    id: 'emergency',
    vi: {
      title: 'Liên Hệ Khẩn Cấp',
      content: [
        'Host Hải (Hailey): +84 904 955 479 — WhatsApp / Viber / Zalo (tiếng Việt & tiếng Anh)',
        'Host Thanh: 0979 80 4343 — Zalo',
        'Cảnh sát: 113 | Cứu thương: 115 | Cứu hỏa: 114',
        'Bệnh viện gần nhất: Bệnh viện Đa Khoa Phú Nhuận — 8 Phan Đình Phùng, Phú Nhuận',
        'Email: spicehomevn@gmail.com',
      ],
    },
    en: {
      title: 'Emergency Contacts',
      content: [
        'Host Hải (Hailey): +84 904 955 479 — WhatsApp / Viber / Zalo (Vietnamese & English)',
        'Host Thanh: 0979 80 4343 — Zalo',
        'Police: 113 | Ambulance: 115 | Fire: 114',
        'Nearest hospital: Phú Nhuận General Hospital — 8 Phan Đình Phùng, Phú Nhuận',
        'Email: spicehomevn@gmail.com',
      ],
    },
  },
]

function AccordionItem({ section }: { section: ManualSection }) {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const content = lang === 'vi' ? section.vi : section.en

  return (
    <div className="border border-border bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="font-playfair text-lg text-primary-text group-hover:text-accent transition-colors">
          {content.title}
        </span>
        {open
          ? <ChevronUp size={18} className="text-accent shrink-0" />
          : <ChevronDown size={18} className="text-muted-text shrink-0" />
        }
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-border">
          <ul className="mt-4 space-y-2">
            {content.content.map((line, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-text leading-relaxed">
                <span className="text-accent mt-1 shrink-0">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function HouseManualPage() {
  const { lang } = useLang()

  return (
    <>
      {/* Page header */}
      <div className="bg-dark pt-32 pb-16 px-6 text-center">
        <SectionLabel className="text-accent/80">SpiceHome</SectionLabel>
        <h1 className="font-playfair italic text-white text-4xl md:text-5xl">
          {lang === 'vi' ? 'Hướng Dẫn' : 'House Manual'}
        </h1>
        <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          {lang === 'vi'
            ? 'Mọi thông tin bạn cần để có một kỳ lưu trú thoải mái tại SpiceHome.'
            : 'Everything you need for a comfortable stay at SpiceHome.'}
        </p>
      </div>

      {/* Accordion */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-3">
          {sections.map((section, i) => (
            <AnimateOnScroll key={section.id} delay={i * 60}>
              <AccordionItem section={section} />
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface border-t border-border py-14 px-6 text-center">
        <AnimateOnScroll>
          <p className="font-playfair text-2xl text-primary-text mb-3">
            {lang === 'vi' ? 'Có thắc mắc?' : 'Still have questions?'}
          </p>
          <p className="text-muted-text text-sm mb-7 max-w-sm mx-auto">
            {lang === 'vi'
              ? 'Đừng ngại nhắn tin cho chúng tôi bất cứ lúc nào.'
              : "Don't hesitate to reach out to us anytime."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/84904955479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white text-xs font-medium uppercase tracking-widest
                         px-7 py-3 hover:bg-accent-hover transition-colors duration-200"
            >
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/spicehomevn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border text-primary-text text-xs font-medium uppercase tracking-widest
                         px-7 py-3 hover:bg-dark hover:text-white hover:border-dark transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  )
}
