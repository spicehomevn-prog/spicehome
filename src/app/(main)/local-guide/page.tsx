'use client'

import { Utensils, ShoppingBag, Landmark, Bus, Leaf, Coffee, Sparkles } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { GuideCard } from '@/components/sections/GuideCard'
import { guideByCategory } from '@/lib/data/guide'
import { useLang } from '@/context/LanguageContext'

const categories = [
  {
    key: 'food' as const,
    icon: Utensils,
    vi: { label: 'Ăn uống', title: 'Ăn & Uống', desc: 'Những quán ngon ngay gần nhà mà người địa phương hay lui tới.' },
    en: { label: 'Food & Drinks', title: 'Where to Eat', desc: 'Great local spots that the neighbourhood regulars go to.' },
  },
  {
    key: 'cafes' as const,
    icon: Coffee,
    vi: { label: 'Cà phê', title: 'Quán Cà Phê', desc: 'Những quán cà phê nổi bật gần homestay — từ không gian độc đáo đến quán mở cửa cả đêm.' },
    en: { label: 'Cafés', title: 'Cafés', desc: 'Standout coffee spots near the homestay — from unique concept cafés to places open all night.' },
  },
  {
    key: 'vegetarian' as const,
    icon: Leaf,
    vi: { label: 'Quán Chay', title: 'Ăn Chay', desc: 'Những quán chay ngon trong khu vực — thích hợp cho ngày chay, khách ăn chay trường, hoặc ai muốn thử ẩm thực thuần chay Việt.' },
    en: { label: 'Vegetarian', title: 'Vegetarian Eats', desc: 'Good vegetarian spots in the neighbourhood — ideal for veggie travellers or anyone wanting to try Vietnamese plant-based food.' },
  },
  {
    key: 'shopping' as const,
    icon: ShoppingBag,
    vi: { label: 'Mua sắm', title: 'Mua Sắm', desc: 'Siêu thị, chợ truyền thống và nhà thuốc gần homestay.' },
    en: { label: 'Shopping', title: 'Shopping', desc: 'Supermarkets, local markets, and pharmacies near the homestay.' },
  },
  {
    key: 'attractions' as const,
    icon: Landmark,
    vi: { label: 'Tham quan', title: 'Địa Điểm Tham Quan', desc: 'Những nơi không thể bỏ qua khi ở Sài Gòn.' },
    en: { label: 'Attractions', title: 'Places to Visit', desc: 'Must-see spots you cannot miss while in Saigon.' },
  },
  {
    key: 'beauty' as const,
    icon: Sparkles,
    vi: { label: 'Làm đẹp & Spa', title: 'Làm Đẹp & Spa', desc: 'Tiệm tóc, nail, gội đầu dưỡng sinh và spa thư giãn trong khu vực.' },
    en: { label: 'Beauty & Spa', title: 'Beauty & Spa', desc: 'Hair salons, nail studios, therapeutic head spas and relaxation spas in the neighbourhood.' },
  },
  {
    key: 'transport' as const,
    icon: Bus,
    vi: { label: 'Di chuyển', title: 'Di Chuyển', desc: 'Cách dễ nhất để khám phá Sài Gòn và các tỉnh lân cận.' },
    en: { label: 'Getting Around', title: 'Getting Around', desc: 'The easiest ways to explore Saigon and beyond.' },
  },
]

export default function LocalGuidePage() {
  const { lang } = useLang()

  return (
    <>
      {/* Page header */}
      <div className="bg-dark pt-32 pb-16 px-6 text-center">
        <SectionLabel className="text-accent/80">SpiceHome</SectionLabel>
        <h1 className="font-playfair italic text-white text-4xl md:text-5xl">
          {lang === 'vi' ? 'Hướng Dẫn Địa Phương' : 'Local Guide'}
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
          {lang === 'vi'
            ? 'Được tuyển chọn bởi host Hải — những địa điểm yêu thích và lời khuyên thực tế cho chuyến đi của bạn.'
            : 'Curated by host Hải — favourite spots and practical tips for your stay in Saigon.'}
        </p>
      </div>

      {/* About Phu Nhuan */}
      <section className="bg-surface py-16 md:py-20">
        <AnimateOnScroll className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>
            {lang === 'vi' ? 'Khu vực của chúng tôi' : 'Our neighbourhood'}
          </SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary-text mb-6">
            {lang === 'vi' ? 'Quận Phú Nhuận' : 'Phú Nhuận District'}
          </h2>
          <p className="text-muted-text leading-relaxed mb-4">
            {lang === 'vi'
              ? 'Phú Nhuận nằm cách trung tâm Sài Gòn 4.7 km về phía tây bắc — đủ gần để tiện đi lại, đủ xa để tránh ồn ào. Khu phố sôi động với hơn 220 quán ăn trên phố Phan Xích Long, công viên Gia Định xanh mát và những con hẻm đậm chất Sài Gòn xưa.'
              : 'Phú Nhuận lies 4.7 km northwest of central Saigon — close enough for easy access, far enough to escape the noise. A vibrant district with 220+ eateries on Phan Xích Long Street, the leafy Gia Định Park, and narrow alleyways full of old Saigon character.'}
          </p>
          <p className="text-muted-text leading-relaxed">
            {lang === 'vi'
              ? 'Nhà ga xe lửa chỉ cách 5 phút đi bộ. Nhiều tuyến xe buýt kết nối trực tiếp đến sân bay và trung tâm thành phố.'
              : 'The railway station is just 5 minutes on foot. Multiple bus routes connect directly to the airport and city centre.'}
          </p>
        </AnimateOnScroll>
      </section>

      {/* Category nav */}
      <nav className="sticky top-[64px] z-30 bg-dark">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-y-1.5 py-3">
            {categories.map(cat => {
              const label = lang === 'vi' ? cat.vi.label : cat.en.label
              const Icon = cat.icon
              return (
                <li key={cat.key} className="basis-1/4 px-1">
                  <a
                    href={`#${cat.key}`}
                    className="flex w-full h-10 items-center justify-center text-center gap-1.5 px-1.5
                               text-[11px] font-medium uppercase tracking-wide
                               text-white/75 bg-white/10 border border-white/15 rounded-md
                               hover:bg-accent hover:text-white hover:border-accent
                               transition-colors duration-150"
                  >
                    <Icon size={11} className="shrink-0 hidden md:block" />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Guide categories */}
      {categories.map((cat, catIdx) => {
        const Icon = cat.icon
        const content = lang === 'vi' ? cat.vi : cat.en
        const items = guideByCategory[cat.key]
        const bgColor = catIdx % 2 === 0 ? 'bg-background' : 'bg-surface'

        return (
          <section key={cat.key} id={cat.key} className={`${bgColor} py-16 md:py-20`}>
            <div className="max-w-6xl mx-auto px-6">
              <AnimateOnScroll className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {content.label}
                  </p>
                  <h2 className="font-playfair text-2xl md:text-3xl text-primary-text">
                    {content.title}
                  </h2>
                </div>
              </AnimateOnScroll>

              <p className="text-muted-text text-sm mb-8 -mt-4 pl-[52px]">{content.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => (
                  <AnimateOnScroll key={item.id} delay={i * 80}>
                    <GuideCard item={item} />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Contact hosts */}
      <section className="bg-dark py-16 px-6 text-center">
        <AnimateOnScroll>
          <p className="font-playfair text-2xl md:text-3xl text-white mb-4">
            {lang === 'vi' ? 'Cần thêm gợi ý?' : 'Need more recommendations?'}
          </p>
          <p className="text-white/60 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
            {lang === 'vi'
              ? 'Hải (Hailey) có thể tư vấn về ẩm thực, điểm vui chơi và mọi thứ bạn muốn trải nghiệm ở Sài Gòn.'
              : 'Hải (Hailey) can advise on food, activities, and everything you want to experience in Saigon.'}
          </p>
          <a
            href="https://wa.me/84904955479"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent text-accent text-xs font-medium uppercase tracking-widest
                       px-8 py-3 hover:bg-accent hover:text-white transition-colors duration-200"
          >
            {lang === 'vi' ? 'Nhắn tin với Host' : 'Message the Host'}
          </a>
        </AnimateOnScroll>
      </section>
    </>
  )
}
