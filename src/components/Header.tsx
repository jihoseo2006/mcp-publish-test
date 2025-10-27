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
      <div className="w-full h-30 relative">
        {/* 배경 이미지 */}
        <img
          src={headerBgImg}
          alt="header background"
          className="w-full h-full object-cover"
        />
        
        {/* 상단 우측 텍스트 */}
        <div className="absolute top-2 right-25 flex gap-16">
          <span className="font-['Pretendard:Medium',_sans-serif] text-3 text-white cursor-pointer">
            마이페이지
          </span>
          <span className="font-['Pretendard:Medium',_sans-serif] text-3 text-white cursor-pointer">
            로그아웃
          </span>
        </div>
      </div>

      {/* 하단 흰색 영역 */}
      <div className="bg-white w-full flex items-center px-25 py-8">
        {/* 좌측 로고 */}
        <div className="w-52 h-10 flex-shrink-0">
          <img
            src={logoImg}
            alt="한국외식산업연구원 로고"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 중앙 메뉴 네비게이션 - flex-1로 가운데 정렬 */}
        <nav className="flex-1 flex items-center justify-center gap-8">
          {menuItems.map((item, index) => (
            <React.Fragment key={item}>
              <span className="font-['Pretendard:Bold',_sans-serif] text-[18px] text-[#5a33be] cursor-pointer whitespace-nowrap">
                {item}
              </span>
              {index < menuItems.length - 1 && index === 2 && (
                <span className="font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#888888] px-1">
                  ㅣ
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* 우측 버튼들 */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* 알림 버튼 */}
          <button className="bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid rounded-[10px] w-10 h-10 flex items-center justify-center">
            <img src={bellIcon} alt="알림" className="w-6 h-6" />
          </button>

          {/* 햄버거 메뉴 버튼 */}
          <button className="bg-[#222222] rounded-[10px] w-10 h-10 flex items-center justify-center">
            <img src={menuIcon} alt="메뉴" className="w-18 h-18" />
          </button>
        </div>
      </div>
    </header>
  );
}
