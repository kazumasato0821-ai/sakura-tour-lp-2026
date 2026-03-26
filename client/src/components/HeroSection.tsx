import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/hero_sakura_main-bsVJqBkmErE3Wnfpg6Vohi.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="桜が咲く春の風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-white/80 text-sm md:text-base tracking-[0.3em] mb-4 font-sans font-light">
            福島県県南地域
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-wider mb-6"
        >
          文化と食体験ツアー
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="space-y-3"
        >
          <p className="text-white/90 text-base md:text-lg font-sans font-light tracking-wide">
            陶芸・着物・呈茶・白河ラーメン
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["4/11(土)", "4/17(金)", "4/19(日)", "4/24(金)"].map((date) => (
              <span
                key={date}
                className="bg-white/20 backdrop-blur-sm text-white text-sm md:text-base px-4 py-1.5 rounded-full border border-white/30"
              >
                {date}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#cta"
            className="inline-block bg-sakura-500 hover:bg-sakura-600 text-white font-medium px-8 py-3.5 rounded-full text-base tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-sakura-500/30 hover:-translate-y-0.5"
          >
            参加を申し込む
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#intro" className="flex flex-col items-center text-white/60 hover:text-white/90 transition-colors">
          <span className="text-xs tracking-widest mb-2">SCROLL</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
