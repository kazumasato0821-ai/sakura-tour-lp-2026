import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock, Users, Banknote } from "lucide-react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

const dates = [
  { date: "4月11日", day: "土", status: "受付中" },
  { date: "4月17日", day: "金", status: "受付中" },
  { date: "4月19日", day: "日", status: "受付中" },
  { date: "4月24日", day: "金", status: "受付中" },
];

const features = [
  { icon: MapPin, label: "集合場所", value: "JR新白河駅" },
  { icon: Clock, label: "所要時間", value: "1日目: 約11時間" },
  { icon: Users, label: "定員", value: "少人数制" },
  { icon: Calendar, label: "開催期間", value: "2026年4月" },
];

const priceItems = [
  { item: "陶芸体験・呈茶体験料", price: "5,000円" },
  { item: "ラーメン", price: "約1,000円" },
  { item: "お鮨（小判寿司）", price: "約30,000円" },
  { item: "ガイド兼現地送迎費", price: "実費（約5,000円ほど）" },
];

const PETALS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/sakura_petals_overlay-93KzoSeR7HcprVU46BnEf6.webp";

export default function OverviewSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id="overview"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${PETALS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sakura-400 text-sm tracking-[0.3em] mb-3 font-sans">TOUR INFO</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-sumi font-bold tracking-wider mb-6">
            ツアー概要
          </h2>
          <div className="w-16 h-px bg-sakura-300 mx-auto" />
        </div>

        {/* Feature cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feat) => (
            <div
              key={feat.label}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-5 text-center shadow-sm border border-sakura-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <feat.icon className="w-6 h-6 text-sakura-400 mx-auto mb-3" />
              <p className="text-xs text-muted-foreground mb-1 font-sans">{feat.label}</p>
              <p className="text-sm font-medium text-sumi font-sans">{feat.value}</p>
            </div>
          ))}
        </div>

        {/* Dates */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-serif text-lg md:text-xl text-sumi font-bold text-center mb-8 tracking-wider">
            開催日程
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {dates.map((d) => (
              <div
                key={d.date}
                className="bg-white rounded-lg p-5 text-center shadow-sm border border-sakura-100 hover:border-sakura-300 hover:shadow-md transition-all duration-300 group"
              >
                <p className="font-serif text-lg md:text-xl text-sumi font-bold group-hover:text-sakura-500 transition-colors">
                  {d.date}
                </p>
                <p className="text-sakura-400 text-sm mt-1">({d.day})</p>
                <span className="inline-block mt-3 text-xs bg-sakura-50 text-sakura-500 px-3 py-1 rounded-full font-medium">
                  {d.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Banknote className="w-5 h-5 text-sakura-400" />
            <h3 className="font-serif text-lg md:text-xl text-sumi font-bold tracking-wider">
              料金目安
            </h3>
          </div>
          <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-sakura-100 overflow-hidden">
            <div className="divide-y divide-sakura-50">
              {priceItems.map((p) => (
                <div key={p.item} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <span className="text-sm text-sumi font-medium">{p.item}</span>
                    {p.note && (
                      <span className="block text-xs text-muted-foreground mt-0.5">
                        {p.note}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-sakura-500 whitespace-nowrap ml-4">
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 font-light">
            ※ 料金は目安です。詳細はお申し込みフォームをご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
}
