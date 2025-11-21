import BellOffIcon from "~/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg?react";
import BellOnIcon from "~/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg?react";
import HamburgerIcon from "~/assets/66dabbf745f04725102281e9a3e1e6414a5f4ae7.svg?react";
import Logo from "~/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
import HeaderBg from "~/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";

function BaseHamburgerButton({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-[21.77%_13.65%_21.98%_13.44%]">
        <HamburgerIcon className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative h-[131px] w-full">
      <div className="absolute top-[30px] right-0 bottom-1 left-0 bg-white" />
      <div className="absolute top-0 right-0 bottom-[101px] left-0">
        <img
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover object-center"
          src={HeaderBg}
        />
      </div>
      <p className="text-18 absolute inset-[73px_900px_44px_400px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        한국외식산업연구원
      </p>
      <p className="text-18 absolute inset-[73px_797px_44px_581px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        외식정보
      </p>
      <p className="text-18 absolute inset-[73px_694px_44px_684px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        알림마당
      </p>
      <p className="text-18 absolute inset-[73px_648px_44px_777px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#888888] not-italic">
        ㅣ
      </p>
      <p className="text-18 absolute inset-[73px_524px_44px_824px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        패널설문조사
      </p>
      <p className="text-18 absolute inset-[73px_421px_44px_958px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        정부지원
      </p>
      <p className="text-18 absolute inset-[73px_349px_44px_1061px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        교육
      </p>
      <p className="text-18 absolute inset-[73px_230px_44px_1133px] font-['Pretendard'] leading-[14px] font-medium text-nowrap whitespace-pre text-[#333333] not-italic">
        부가혜택몰
      </p>
      <p className="text-12 absolute inset-9 right-[183px] bottom-[110px] left-[1216px] text-right font-['Pretendard'] leading-[12px] font-medium text-nowrap whitespace-pre text-white not-italic">
        로그인/회원가입
      </p>
      <p className="text-12 absolute inset-9 right-[100px] bottom-[110px] left-[1278px] text-right font-['Pretendard'] leading-[12px] font-medium text-nowrap whitespace-pre text-white not-italic">
        회원정보찾기
      </p>
      <div className="absolute inset-[59px_105px_32px_1296px] contents">
        <div className="rounded-10 absolute inset-[59px_105px_32px_1296px] bg-[#222222]" />
        <BaseHamburgerButton className="absolute inset-[67px_113px_40px_1304px] overflow-clip" />
      </div>
      <div className="absolute inset-[60px_1137px_31px_100px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt="한국외식산업연구원 로고"
            className="absolute top-[-8.47%] left-[-6.1%] h-[119.21%] w-[106.1%] max-w-none"
            src={Logo}
          />
        </div>
      </div>
      <div className="absolute top-[59px] left-[1240px] contents">
        <div className="rounded-10 absolute inset-[59px_160px_32px_1240px] border-2 border-solid border-[#e7e7e7] bg-[#e7e7e7]" />
        <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] contents translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] size-24 translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute inset-[5%_4.17%_12.51%_20%]">
              <div className="absolute top-0 right-0 bottom-[-5.05%] left-[-5.49%]">
                <BellOnIcon className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[59px] left-[1240px] contents">
        <div className="rounded-10 absolute inset-[59px_160px_32px_1240px] border-2 border-solid border-[#e7e7e7] bg-[#e7e7e7]" />
        <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] contents translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute top-[calc(50%+13.5px)] left-[calc(50%+540px)] size-24 translate-x-[-50%] translate-y-[-50%]">
            <div className="absolute inset-[20.83%_20%_12.51%_20%]">
              <div className="absolute inset-[-6.25%_-6.94%]">
                <BellOffIcon className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
