import BellOffIcon from "~/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg?react";
import HamburgerIcon from "~/assets/66dabbf745f04725102281e9a3e1e6414a5f4ae7.svg?react";
import LogoImage from "~/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
import BackgroundImage from "~/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";

export default function Header() {
  return (
    <div className="relative h-[131px] w-full">
      {/* 배경 이미지 영역 */}
      <div className="absolute top-0 right-0 bottom-[77.1%] left-0">
        <img
          alt=""
          className="object-50%-50% pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          src={BackgroundImage}
        />
      </div>

      {/* 흰색 배경 */}
      <div className="absolute top-[22.9%] right-0 bottom-[0.76%] left-0 bg-white" />

      {/* 상단 우측 링크 */}
      <p className="absolute inset-[6.87%_12.71%_83.97%_84.38%] text-right font-['Pretendard'] text-[12px] leading-[12px] font-medium text-nowrap whitespace-pre text-white not-italic">
        로그인/회원가입
      </p>
      <p className="absolute inset-[6.87%_6.94%_83.97%_88.68%] text-right font-['Pretendard'] text-[12px] leading-[12px] font-medium text-nowrap whitespace-pre text-white not-italic">
        회원정보찾기
      </p>

      {/* 로고 */}
      <div className="absolute inset-[45.8%_78.89%_23.66%_6.94%]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt="한국외식산업연구원 로고"
            className="absolute top-[-8.47%] left-[-6.1%] h-[119.21%] w-[106.1%] max-w-none"
            src={LogoImage}
          />
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <p className="absolute inset-[55.73%_62.43%_33.59%_27.78%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        한국외식산업연구원
      </p>
      <p className="absolute inset-[55.73%_55.28%_33.59%_40.35%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        외식정보
      </p>
      <p className="absolute inset-[55.73%_48.12%_33.59%_47.5%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        알림마당
      </p>
      <p className="absolute inset-[55.73%_44.93%_33.59%_53.96%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#888888] not-italic">
        ㅣ
      </p>
      <p className="absolute inset-[55.73%_36.32%_33.59%_57.15%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        패널설문조사
      </p>
      <p className="absolute inset-[55.73%_29.17%_33.59%_66.46%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        정부지원
      </p>
      <p className="absolute inset-[55.73%_24.17%_33.59%_73.61%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        교육
      </p>
      <p className="absolute inset-[55.73%_15.97%_33.59%_78.61%] font-['Pretendard'] text-[18px] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        부가혜택몰
      </p>

      {/* 알림 버튼 (알림 off 상태) */}
      <div className="absolute top-[59px] left-[1240px] contents">
        <div className="absolute inset-[45.04%_11.11%_24.43%_86.11%] rounded-[10px] border-2 border-solid border-[#e7e7e7] bg-[#e7e7e7]" />
        <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] contents translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] size-[24px] translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute inset-[20.83%_20%_12.51%_20%]">
              <div className="absolute inset-[-6.25%_-6.94%]">
                <BellOffIcon className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 햄버거 메뉴 버튼 */}
      <div className="absolute inset-[45.04%_7.29%_24.43%_89.93%] contents">
        <div className="absolute inset-[45.04%_7.29%_24.43%_89.93%] rounded-[10px] bg-[#222222]" />
        <div className="absolute inset-[51.15%_7.85%_30.53%_90.49%] overflow-clip">
          <div className="absolute inset-[21.77%_13.65%_21.98%_13.44%]">
            <HamburgerIcon className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
