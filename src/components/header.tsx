import Logo from "~/assets/99092354c834b9f51ca53ff2576334d67429c242.png";
import MenuIcon from "~/assets/556559325fe5918ca2259c0e94337cb2835c4caf.svg?react";

const Header = () => {
  return (
    <header className="w-full h-80 bg-white border-b-1 border-[#E5E8EB] flex items-center justify-between px-80">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="한국외식산업연구원 로고" className="h-30" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-40" role="navigation" aria-label="Main navigation">
        <a href="#" className="text-16 font-medium text-[#1C1B1F] hover:text-[#193DD0]">
          연구원 소개
        </a>
        <a href="#" className="text-16 font-medium text-[#1C1B1F] hover:text-[#193DD0]">
          연구 보고서
        </a>
        <a href="#" className="text-16 font-medium text-[#1C1B1F] hover:text-[#193DD0]">
          정책 제안
        </a>
        <a href="#" className="text-16 font-medium text-[#1C1B1F] hover:text-[#193DD0]">
          정보 센터
        </a>
        <a href="#" className="text-16 font-medium text-[#1C1B1F] hover:text-[#193DD0]">
          알림
        </a>
      </nav>

      {/* Right Side Actions */}
      <div className="flex items-center gap-20">
        {/* Login / Sign Up */}
        <div className="flex items-center gap-12">
          <button 
            className="text-14 text-[#555555] hover:text-[#193DD0]"
            aria-label="로그인"
          >
            로그인
          </button>
          <div className="w-1 h-12 bg-[#D8DDE5]" />
          <button 
            className="text-14 text-[#555555] hover:text-[#193DD0]"
            aria-label="회원가입"
          >
            회원가입
          </button>
        </div>

        {/* Notification Bell */}
        <button 
          className="w-40 h-40 flex items-center justify-center hover:bg-[#F5F5F5] rounded-4"
          aria-label="알림"
        >
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C7.23858 2 5 4.23858 5 7V12L3 14V15H17V14L15 12V7C15 4.23858 12.7614 2 10 2Z" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18C8 19.1046 8.89543 20 10 20C11.1046 20 12 19.1046 12 18" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Menu Button */}
        <button 
          className="w-40 h-40 flex items-center justify-center hover:bg-[#F5F5F5] rounded-4"
          aria-label="메뉴 열기"
        >
          <MenuIcon className="w-18 h-14" />
        </button>
      </div>
    </header>
  );
};

export default Header;
