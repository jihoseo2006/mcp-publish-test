import React from "react";

// 이미지 URL들 (Figma에서 추출)
const headerBgImg =
  "http://localhost:3845/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";
const logoImg =
  "http://localhost:3845/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
const menuIcon =
  "http://localhost:3845/assets/3eaa63b80913e4fbfc1a39d9b21c98119bab03af.svg";
const bellIcon =
  "http://localhost:3845/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg";

const menuItems = [
  "한국외식산업연구원",
  "외식정보",
  "알림마당",
  "패널설문조사",
  "정부지원",
  "교육",
  "부가혜택몰",
];

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* 상단 보라색 배경 영역 */}
      <div className="relative w-full">
        {/* 배경 이미지 */}
        <div className="w-full h-[100.76px]">
          <img
            src={headerBgImg}
            alt="header background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 상단 마이페이지/로그아웃 - 배경 위 절대 위치 */}
        <div className="absolute top-[9px] right-[100px] flex gap-[55px] text-[12px] text-white font-['Pretendard:Medium',_sans-serif]">
          <span className="cursor-pointer hover:text-gray-200 transition-colors">
            마이페이지
          </span>
          <span className="cursor-pointer hover:text-gray-200 transition-colors">
            로그아웃
          </span>
        </div>
      </div>

      {/* 하단 흰색 영역 - 플렉스 레이아웃 */}
      <div className="bg-white px-[100px] py-[31px] flex items-end justify-between gap-4">
        {/* 로고 */}
        <div className="flex-shrink-0 w-[210px] h-[40px]">
          <img
            src={logoImg}
            alt="한국외식산업연구원 로고"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 메인 네비게이션 */}
        <nav className="flex items-center justify-center gap-6 flex-1 min-w-0">
          {menuItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-['Pretendard:Bold',_sans-serif] text-[18px] text-[#5a33be] cursor-pointer hover:text-[#4427a0] transition-colors whitespace-nowrap">
                {item}
              </span>
              {index < menuItems.length - 1 && index === 2 && (
                <span className="font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#888888]">
                  ㅣ
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* 우측 버튼들 */}
        <div className="flex items-center gap-[10px] flex-shrink-0">
          {/* 알림 버튼 */}
          <button className="bg-[#e7e7e7] border-2 border-[#e7e7e7] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-[#d0d0d0] transition-colors">
            <img src={bellIcon} alt="알림" className="w-[24px] h-[24px]" />
          </button>

          {/* 햄버거 메뉴 버튼 */}
          <button className="bg-[#222222] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center hover:bg-[#333333] transition-colors">
            <img src={menuIcon} alt="메뉴" className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>

      {/* 하단 구분선 */}
      <div className="bg-[#e6e6e6] h-px w-full" />
    </header>
  );
}
