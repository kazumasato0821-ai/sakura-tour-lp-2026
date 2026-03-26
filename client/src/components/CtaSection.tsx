import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

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

const KIMONO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/kimono_sakura_walk-57vWMUvVg5u2u4HUgxEVGP.webp";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc3i2dGmoRsrVzCkhKJY_lWlMCLhG2jEplCFl0RFfZAPd_LHg/viewform";

export default function CtaSection() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={KIMONO_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sakura-600/85 to-sakura-500/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/70 text-sm tracking-[0.3em] mb-4 font-sans">RESERVATION</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wider mb-6 leading-relaxed">
            春の福島で、<br className="sm:hidden" />
            特別なひとときを
          </h2>
          <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-light mb-4 max-w-xl mx-auto">
            桜の下で着物を纏い、お茶を嗜み、地元の味に舌鼓を打つ。
            <br />
            春だけの贅沢な体験を、ぜひご一緒に。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["4/11(土)", "4/17(金)", "4/19(日)", "4/24(金)"].map((date) => (
              <span
                key={date}
                className="text-white/90 text-sm border border-white/30 px-4 py-1.5 rounded-full"
              >
                {date}
              </span>
            ))}
          </div>

          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sakura-600 font-bold px-10 py-4 rounded-full text-base md:text-lg tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-sakura-50"
          >
            申し込みはこちら
            <ExternalLink size={18} />
          </a>

          <p className="text-white/60 text-xs mt-6 font-light">
            Googleフォームでのお申し込みとなります
          </p>
        </div>
      </div>
    </section>
  );
}
