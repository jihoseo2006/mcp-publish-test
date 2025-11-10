import HamburgerIcon from "~/assets/66dabbf745f04725102281e9a3e1e6414a5f4ae7.svg?react";
import BellOnIcon from "~/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg?react";
import BellOffIcon from "~/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg?react";

export default function Header() {
  return (
    <div className="relative w-[1440px] h-[131px]">
      {/* 배경 색상 영역 */}
      <div className="absolute bottom-[0.76%] left-0 right-0 top-[22.9%] bg-white" />
      
      {/* 상단 그라데이션 배경 */}
      <div className="absolute bottom-[77.1%] left-0 right-0 top-0">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src="/src/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png" 
        />
      </div>

      {/* 메뉴 항목들 */}
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_62.43%_33.59%_27.78%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        한국외식산업연구원
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_55.28%_33.59%_40.35%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        외식정보
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_48.13%_33.59%_47.5%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        알림마당
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_44.93%_33.59%_53.96%] leading-[14px] not-italic text-[#888888] text-[18px] text-nowrap whitespace-pre">
        ㅣ
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_36.32%_33.59%_57.15%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        패널설문조사
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_29.17%_33.59%_66.46%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        정부지원
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_24.17%_33.59%_73.61%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        교육
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[55.73%_15.97%_33.59%_78.61%] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre">
        부가혜택몰
      </p>

      {/* 우측 상단 링크 */}
      <p className="absolute font-['Pretendard'] font-medium inset-[6.87%_12.71%_83.97%_84.38%] leading-[12px] not-italic text-[12px] text-nowrap text-right text-white whitespace-pre">
        로그인/회원가입
      </p>
      <p className="absolute font-['Pretendard'] font-medium inset-[6.87%_6.94%_83.97%_88.68%] leading-[12px] not-italic text-[12px] text-nowrap text-right text-white whitespace-pre">
        회원정보찾기
      </p>

      {/* 햄버거 메뉴 버튼 */}
      <div className="absolute inset-[45.04%_7.29%_24.43%_89.93%]">
        <div className="absolute bg-[#222222] inset-[45.04%_7.29%_24.43%_89.93%] rounded-[10px]" />
        <div className="absolute inset-[51.15%_7.85%_30.53%_90.49%] overflow-clip">
          <div className="absolute inset-[21.77%_13.65%_21.98%_13.44%]">
            <HamburgerIcon className="block max-w-none size-full" />
          </div>
        </div>
      </div>

      {/* 로고 */}
      <div className="absolute inset-[45.8%_78.89%_23.66%_6.94%]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="한국외식산업연구원 로고" 
            className="absolute h-[119.21%] left-[-6.1%] max-w-none top-[-8.47%] w-[106.1%]" 
            src="/src/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png" 
          />
        </div>
      </div>

      {/* 알림 버튼 - On 상태 */}
      <div className="absolute left-[1240px] top-[59px]">
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid inset-[45.04%_11.11%_24.43%_86.11%] rounded-[10px]" />
        <div className="absolute left-[calc(50%+540px)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute left-[calc(50%+540px)] size-[24px] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute inset-[5%_4.17%_12.51%_20%]">
              <div className="absolute bottom-[-5.05%] left-[-5.49%] right-0 top-0">
                <BellOnIcon className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 알림 버튼 - Off 상태 (숨김 처리 가능) */}
      <div className="absolute left-[1240px] top-[59px] hidden">
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid inset-[45.04%_11.11%_24.43%_86.11%] rounded-[10px]" />
        <div className="absolute left-[calc(50%+540px)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute left-[calc(50%+540px)] size-[24px] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute inset-[20.83%_20%_12.51%_20%]">
              <div className="absolute inset-[-6.25%_-6.94%]">
                <BellOffIcon className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
