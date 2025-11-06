import React from 'react';
// 아이콘을 컴포넌트 형태로 import
import HamburgerIcon from '~/assets/66dabbf745f04725102281e9a3e1e6414a5f4ae7.svg?react';
import NotificationOnIcon from '~/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg?react';
import NotificationOffIcon from '~/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg?react';

// 이미지 가져오기
const imgLogo = '/src/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png';
const imgBg = '/src/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png';

const Header: React.FC = () => {
  return (
    <div className="relative w-full h-[131px]">
      {/* 배경 영역 */}
      <div className="absolute w-full h-[30px] top-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={imgBg} />
      </div>
      
      {/* 메인 헤더 영역 */}
      <div className="absolute w-full bg-white" style={{ top: '30px', height: '101px' }}>
        {/* 로그인/회원가입 메뉴 (상단 우측) */}
        <div className="absolute top-[9px] right-[100px] text-right">
          <span className="text-white text-[12px] font-medium mr-[40px] leading-[12px]">로그인/회원가입</span>
          <span className="text-white text-[12px] font-medium leading-[12px]">회원정보찾기</span>
        </div>

        {/* 로고 */}
        <div className="absolute left-[100px] top-[30px] w-[213px] h-[41px]">
          <img alt="한국외식산업연구원 로고" className="w-full h-full object-contain" src={imgLogo} />
        </div>

        {/* 메인 메뉴 */}
        <nav className="absolute right-[100px] top-[37px] flex items-center gap-[30px]">
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">한국외식산업연구원</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">외식정보</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">알림마당</span>
          <span className="text-[#888888] text-[18px] font-medium leading-[14px]">ㅣ</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">패널설문조사</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">정부지원</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">교육</span>
          <span className="text-[#333333] text-[18px] font-medium leading-[14px]">부가혜택몰</span>
          
          {/* 알림 버튼 */}
          <div className="bg-[#e7e7e7] border-2 border-[#e7e7e7] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center ml-[20px]">
            <NotificationOnIcon className="w-[24px] h-[24px]" />
          </div>

          {/* 햄버거 메뉴 */}
          <div className="bg-[#222222] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center">
            <HamburgerIcon className="w-[24px] h-[24px]" />
          </div>
        </nav>
      </div>
      
      {/* 하단 구분선 */}
      <div className="absolute bottom-0 w-full h-[1px] bg-[#e6e6e6]"></div>
    </div>
  );
};

export default Header;