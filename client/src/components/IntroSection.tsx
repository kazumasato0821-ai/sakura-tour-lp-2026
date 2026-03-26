import { useEffect, useRef, useState } from "react";

// 動画から切り出した実際の体験写真
const TEA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/tea_ceremony_real_c3c2bb58.jpg";
const KIMONO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/shrine_kimono_2bc3e8e0.jpg";
const PARK_IMG = "/nanko_sakura.webp";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const highlights = [
  {
    title: "着物で桜を愛でる",
    desc: "緑川呉服店で本格的な着物に着替え、満開の桜の下を散策。春の装いで記念撮影をお楽しみください。",
    img: KIMONO_IMG,
  },
  {
    title: "呈茶で心を整える",
    desc: "翠楽苑 秋水庵にて、静寂の中でお抹茶と和菓子をいただく呈茶体験。茶道の心に触れるひとときを。",
    img: TEA_IMG,
  },
  {
    title: "南湖公園の春景色",
    desc: "日本最古の公園「南湖公園」で桜と新緑のコントラストを堪能。南湖神社での参拝や団子屋での休憩も。",
    img: PARK_IMG,
  },
];

export default function IntroSection() {
  const { ref: sectionRef, isVisible } = useInView(0.1);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-sakura-50 to-white"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0,60 C360,0 720,40 1080,20 C1260,10 1380,30 1440,60 L1440,0 L0,0 Z"
            fill="oklch(0.995 0.003 350)"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sakura-400 text-sm tracking-[0.3em] mb-3 font-sans">EXPERIENCE</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-sumi font-bold tracking-wider mb-6">
            春の福島で出会う、<br className="sm:hidden" />特別な体験
          </h2>
          <div className="w-16 h-px bg-sakura-300 mx-auto mb-6" />
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light">
            白河の歴史ある街並みを着物で歩き、桜の下でお茶を楽しむ。
            <br className="hidden md:block" />
            陶芸体験や地元グルメも満喫する、春だけの特別なツアーです。
          </p>
        </div>

        {/* Highlight cards */}
        <div className="space-y-16 md:space-y-24">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  item,
  index,
}: {
  item: (typeof highlights)[number];
  index: number;
}) {
  const { ref, isVisible } = useInView(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 md:gap-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className={`w-full md:w-1/2 ${isEven ? "md:pl-4" : "md:pr-4"}`}>
        <span className="text-sakura-300 font-display text-5xl md:text-6xl font-semibold opacity-40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-serif text-xl md:text-2xl text-sumi font-bold mt-2 mb-4 tracking-wider">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
