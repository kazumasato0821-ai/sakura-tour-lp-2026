import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

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

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi";

const VIDEO_URL = `${CDN}/tour_video_720p_e47f0ddd.mp4`;

const galleryImages = [
  { src: `${CDN}/a6400052_513b6e4e.jpg`, alt: "陶芸体験の様子", category: "体験" },
  { src: `${CDN}/a6400062_373db512.jpg`, alt: "陶芸作品づくり", category: "体験" },
  { src: `${CDN}/a6400076_ff2e86d9.jpg`, alt: "着物体験", category: "着物" },
  { src: `${CDN}/a6400089_257207f5.jpg`, alt: "着物で散策", category: "着物" },
  { src: `${CDN}/a6400092_4416151b.jpg`, alt: "着物で記念撮影", category: "着物" },
  { src: `${CDN}/a6400101_a2e78536.jpg`, alt: "呈茶体験", category: "体験" },
  { src: `${CDN}/a6400106_e737cba2.jpg`, alt: "お茶を楽しむ", category: "体験" },
  { src: `${CDN}/a6400112_81e0f373.jpg`, alt: "地元グルメ", category: "食事" },
  { src: `${CDN}/a6400118_a00a220f.jpg`, alt: "散策の様子", category: "散策" },
  { src: `${CDN}/a6400134_32673a30.jpg`, alt: "風景を楽しむ", category: "風景" },
  { src: `${CDN}/a6400142_77768d37.jpg`, alt: "秋の風景", category: "風景" },
  { src: `${CDN}/a6400150_eae7b749.jpg`, alt: "集合写真", category: "風景" },
  { src: `${CDN}/20251022_143916_e7c4d4d2.jpg`, alt: "ツアーの一コマ", category: "スナップ" },
  { src: `${CDN}/20251022_102006_63dcbec3.jpg`, alt: "朝の集合", category: "スナップ" },
  { src: `${CDN}/dji_0253_b4bfca12.jpg`, alt: "空撮写真", category: "空撮" },
  { src: `${CDN}/dji_0247_f2a6ffe6.jpg`, alt: "上空からの風景", category: "空撮" },
  { src: `${CDN}/pottery_experience_fccc57f4.jpg`, alt: "陶芸体験", category: "体験" },
  { src: `${CDN}/suirakuen_garden_cd372f98.jpg`, alt: "翠楽苑の日本庭園", category: "風景" },
  { src: `${CDN}/suirakuen_autumn_4c266ac7.jpg`, alt: "翠楽苑の茶室", category: "風景" },
  { src: `${CDN}/kimono_walk_real_0b6d8f42.jpg`, alt: "着物で茶室へ", category: "着物" },
];

export default function GallerySection() {
  const { ref, isVisible } = useInView(0.05);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-24 md:py-32 bg-sakura-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sakura-400 text-sm tracking-[0.3em] mb-3 font-sans">GALLERY</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-sumi font-bold tracking-wider mb-6">
            過去開催の様子
            <span className="text-lg md:text-xl font-sans font-normal">（2024年秋に開催したものです）</span>
          </h2>
          <div className="w-16 h-px bg-sakura-300 mx-auto mb-6" />
          <p className="text-muted-foreground text-sm md:text-base font-light max-w-xl mx-auto">
            前回（秋）開催時の写真と動画です。春はさらに桜が彩りを添えます。
          </p>
        </div>

        {/* Video player */}
        <div
          className={`mb-12 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
            {!isVideoPlaying ? (
              /* Video thumbnail / poster with play button */
              <div
                className="relative cursor-pointer group"
                onClick={handlePlayVideo}
              >
                <img
                  src={`${CDN}/a6400052_513b6e4e.jpg`}
                  alt="ツアー紹介動画"
                  className="w-full aspect-video object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                {/* Play button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-sakura-500 ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white text-sm md:text-base mt-4 font-light tracking-wider">
                    県南悠然陶芸紀行
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    5:19
                  </p>
                </div>
              </div>
            ) : (
              /* Actual video player */
              <video
                ref={videoRef}
                src={VIDEO_URL}
                controls
                className="w-full aspect-video"
                preload="metadata"
              >
                お使いのブラウザは動画再生に対応していません。
              </video>
            )}
          </div>
        </div>

        {/* Gallery grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                i === 0 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 || i === 4 ? "h-48 md:h-80" : "h-40 md:h-48"
                }`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs bg-sakura-500/80 px-2 py-0.5 rounded-full">
                    {img.category}
                  </span>
                  <p className="text-white text-sm mt-1 font-light">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white p-2 transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white p-2 transition-colors"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-center">
            <p className="text-white/80 text-sm">{galleryImages[lightboxIndex].alt}</p>
            <p className="text-white/50 text-xs mt-1">{lightboxIndex + 1} / {galleryImages.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
