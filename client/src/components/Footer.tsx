const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663428387136/YigJYeeXazuHMpDuQtzPYi/logo_header_e868147f.png";

export default function Footer() {
  return (
    <footer className="bg-sumi py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          {/* Logo and title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src={LOGO_URL}
              alt="文化と食体験ツアー"
              className="h-12 w-12 rounded-full object-cover"
            />
            <h3 className="font-serif text-lg text-sakura-200 tracking-wider">
              福島県南地域 文化と食体験ツアー
            </h3>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-6 font-light max-w-md mx-auto">
            福島県県南地域の魅力を体感する特別なツアー。
            <br />
            陶芸・着物・呈茶・白河ラーメンなど、春の福島を満喫してください。
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 mb-8">
            <a href="#overview" className="hover:text-sakura-300 transition-colors">ツアー概要</a>
            <a href="#schedule" className="hover:text-sakura-300 transition-colors">行程表</a>
            <a href="#gallery" className="hover:text-sakura-300 transition-colors">過去の様子</a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3i2dGmoRsrVzCkhKJY_lWlMCLhG2jEplCFl0RFfZAPd_LHg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sakura-300 transition-colors"
            >
              お申し込み
            </a>
          </div>
          <div className="w-16 h-px bg-gray-700 mx-auto mb-6" />
          {/* 主催者情報 */}
          <p className="text-gray-300 text-sm font-medium mb-2">
            主催：西郷村地域モノづくりの会
          </p>
          <p className="text-gray-500 text-xs mb-6">
            本企画はふくしまデスティネーションキャンペーンの造成企画です。
          </p>
          <div className="w-16 h-px bg-gray-700 mx-auto mb-6" />
          <p className="text-gray-600 text-xs">
            &copy; 2026 福島県南地域 文化と食体験ツアー
          </p>
        </div>
      </div>
    </footer>
  );
}
