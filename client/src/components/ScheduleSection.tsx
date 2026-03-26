import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Train,
  Palette,
  UtensilsCrossed,
  Shirt,
  Coffee,
  Landmark,
  Moon,
  Sunrise,
  TreePine,
  HandPlatter,
  Hand,
} from "lucide-react";

function useInView(threshold = 0.1) {
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

interface ScheduleItem {
  time: string;
  title: string;
  note?: string;
  icon: ReactNode;
}

const iconClass = "w-5 h-5 text-sakura-500";

const day1: ScheduleItem[] = [
  { time: "10:00", title: "JR新白河駅集合", icon: <Train className={iconClass} /> },
  { time: "10:15", title: "松永窯", note: "陶芸体験", icon: <Palette className={iconClass} /> },
  { time: "11:35", title: "とら食堂", note: "白河ラーメンの名店", icon: <UtensilsCrossed className={iconClass} /> },
  { time: "12:30", title: "着物の着替え", note: "緑川呉服店", icon: <Shirt className={iconClass} /> },
  { time: "13:55", title: "呈茶体験", note: "翠楽苑 秋水庵（お茶体験・講話）", icon: <Coffee className={iconClass} /> },
  { time: "15:10", title: "南湖神社", note: "記念撮影・散策、団子屋・カフェで休憩", icon: <Landmark className={iconClass} /> },
  { time: "16:05", title: "着替え", note: "緑川呉服店", icon: <Shirt className={iconClass} /> },
  { time: "17:35", title: "小判鮨", note: "夕食", icon: <HandPlatter className={iconClass} /> },
  { time: "21:00", title: "ナイトスポット巡り", note: "希望者のみ", icon: <Moon className={iconClass} /> },
];

const day2: ScheduleItem[] = [
  { time: "09:00", title: "集合・挨拶・移動", icon: <Sunrise className={iconClass} /> },
  { time: "09:15", title: "白河朝ラーメン", note: "朝食", icon: <UtensilsCrossed className={iconClass} /> },
  { time: "10:35", title: "南湖公園散歩", note: "shozocafeでのんびり", icon: <TreePine className={iconClass} /> },
  { time: "12:20", title: "2代目いまのや", note: "昼食", icon: <UtensilsCrossed className={iconClass} /> },
  { time: "13:20", title: "解散", icon: <Hand className={iconClass} /> },
];

export default function ScheduleSection() {
  const { ref, isVisible } = useInView(0.05);
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const schedule = activeDay === 1 ? day1 : day2;

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-sakura-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sakura-400 text-sm tracking-[0.3em] mb-3 font-sans">SCHEDULE</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-sumi font-bold tracking-wider mb-6">
            行程表
          </h2>
          <div className="w-16 h-px bg-sakura-300 mx-auto" />
        </div>

        {/* Day tabs */}
        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => setActiveDay(1)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 1
                ? "bg-sakura-500 text-white shadow-md"
                : "bg-white text-sumi border border-sakura-200 hover:border-sakura-300"
            }`}
          >
            1日目
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeDay === 2
                ? "bg-sakura-500 text-white shadow-md"
                : "bg-white text-sumi border border-sakura-200 hover:border-sakura-300"
            }`}
          >
            2日目（希望者のみ）
          </button>
        </div>

        {/* Timeline */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-sakura-200 md:-translate-x-px" />

          <div className="space-y-6 md:space-y-8">
            {schedule.map((item, i) => (
              <TimelineItem key={`${activeDay}-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: ScheduleItem; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-4 md:gap-0 ${isEven ? "" : ""}`}>
      {/* Mobile layout */}
      <div className="md:hidden flex items-start gap-4 w-full">
        {/* Dot */}
        <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white rounded-full border-2 border-sakura-300 flex items-center justify-center shadow-sm">
          {item.icon}
        </div>
        {/* Content */}
        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-sakura-100 hover:shadow-md transition-shadow">
          <span className="text-sakura-500 text-xs font-medium tracking-wider">{item.time}</span>
          <h4 className="font-serif text-base text-sumi font-bold mt-1">{item.title}</h4>
          {item.note && (
            <p className="text-muted-foreground text-xs mt-1 font-light">{item.note}</p>
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center w-full">
        {/* Left side */}
        <div className={`w-[calc(50%-28px)] ${isEven ? "text-right pr-8" : ""}`}>
          {isEven && (
            <div className="bg-white rounded-lg p-5 shadow-sm border border-sakura-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 inline-block text-left">
              <span className="text-sakura-500 text-xs font-medium tracking-wider">{item.time}</span>
              <h4 className="font-serif text-base text-sumi font-bold mt-1">{item.title}</h4>
              {item.note && (
                <p className="text-muted-foreground text-xs mt-1 font-light">{item.note}</p>
              )}
            </div>
          )}
        </div>

        {/* Center dot */}
        <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white rounded-full border-2 border-sakura-300 flex items-center justify-center shadow-sm mx-auto">
          {item.icon}
        </div>

        {/* Right side */}
        <div className={`w-[calc(50%-28px)] ${!isEven ? "pl-8" : ""}`}>
          {!isEven && (
            <div className="bg-white rounded-lg p-5 shadow-sm border border-sakura-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 inline-block">
              <span className="text-sakura-500 text-xs font-medium tracking-wider">{item.time}</span>
              <h4 className="font-serif text-base text-sumi font-bold mt-1">{item.title}</h4>
              {item.note && (
                <p className="text-muted-foreground text-xs mt-1 font-light">{item.note}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
