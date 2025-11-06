import HamburgerIcon from "~/assets/66dabbf745f04725102281e9a3e1e6414a5f4ae7.svg?react";
import LogoImage from "~/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
import AlarmOnIcon from "~/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg?react";
import AlarmOffIcon from "~/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg?react";

function BaseHamburgerButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Base/hamburger-button" data-node-id="165:29">
      <div className="absolute inset-[21.77%_13.65%_21.98%_13.44%]" data-name="Vector" data-node-id="165:30">
        <HamburgerIcon className="block max-w-none size-full" />
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative w-full h-131" data-name="Component 22" data-node-id="677:5047">
      {/* 상단 배경 - 그라데이션 */}
      <div className="absolute bottom-[77.1%] left-0 right-0 top-0" data-node-id="I677:5047;677:4401">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 max-w-none object-50%-50% object-cover pointer-events-none size-full" />
      </div>
      
      {/* 하단 배경 - 화이트 */}
      <div className="absolute bg-white bottom-[0.76%] left-0 right-0 top-[22.9%]" data-node-id="I677:5047;677:4400" />
      
      {/* 상단 로그인/회원가입 링크들 */}
      <p className="absolute font-pretendard font-medium text-12 leading-12 left-[calc(50%-82px)] not-italic text-nowrap text-right text-white top-9 whitespace-pre" data-node-id="I677:5047;677:4411">
        로그인/회원가입
      </p>
      <p className="absolute font-pretendard font-medium text-12 leading-12 left-[calc(50%-100px)] not-italic text-nowrap text-right text-white top-9 whitespace-pre" data-node-id="I677:5047;677:4412">
        회원정보찾기
      </p>
      
      {/* 메인 네비게이션 */}
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%-400px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4402">
        한국외식산업연구원
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%-250px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4403">
        외식정보
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%-100px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4404">
        알림마당
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%-40px)] not-italic text-[#888888] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4405">
        ㅣ
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%+20px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4406">
        패널설문조사
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%+180px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4407">
        정부지원
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%+280px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4408">
        교육
      </p>
      <p className="absolute font-pretendard font-medium text-18 leading-14 left-[calc(50%+380px)] not-italic text-[#333333] text-nowrap top-73 whitespace-pre" data-node-id="I677:5047;677:4409">
        부가혜택몰
      </p>
      
      {/* 햄버거 메뉴 버튼 */}
      <div className="absolute inset-[45.04%_7.29%_24.43%_89.93%]" data-node-id="I677:5047;677:4413">
        <div className="absolute bg-[#222222] inset-[45.04%_7.29%_24.43%_89.93%] rounded-10" data-node-id="I677:5047;677:4414" />
        <BaseHamburgerButton className="absolute inset-[51.15%_7.85%_30.53%_90.49%] overflow-clip" />
      </div>
      
      {/* 로고 */}
      <div className="absolute inset-[45.8%_78.89%_23.66%_6.94%]" data-name="(로고) 한국외식산업연구원 로고 2" data-node-id="I677:5047;677:4416">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="한국외식산업연구원 로고" className="absolute h-[119.21%] left-[-6.1%] max-w-none top-[-8.47%] w-[106.1%]" src={LogoImage} />
        </div>
      </div>
      
      {/* 알림 버튼들 */}
      <div className="absolute left-1240 top-59" data-name="알림on" data-node-id="I677:5047;677:4417">
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid inset-[45.04%_11.11%_24.43%_86.11%] rounded-10" data-node-id="I677:5047;677:4418" />
        <div className="absolute left-[calc(50%+540px)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I677:5047;677:4419">
          <div className="absolute left-[calc(50%+540px)] size-24 top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I677:5047;677:4420">
            <div className="absolute inset-[5%_4.17%_12.51%_20%]" data-node-id="I677:5047;677:4421">
              <div className="absolute bottom-[-5.05%] left-[-5.49%] right-0 top-0">
                <AlarmOnIcon className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-1240 top-59" data-name="알림off" data-node-id="I677:5047;677:4425">
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid inset-[45.04%_11.11%_24.43%_86.11%] rounded-10" data-node-id="I677:5047;677:4426" />
        <div className="absolute left-[calc(50%+540px)] top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I677:5047;677:4427">
          <div className="absolute left-[calc(50%+540px)] size-24 top-[calc(50%+13.5px)] translate-x-[-50%] translate-y-[-50%]" data-node-id="I677:5047;677:4428">
            <div className="absolute inset-[20.83%_20%_12.51%_20%]" data-node-id="I677:5047;677:4429">
              <div className="absolute inset-[-6.25%_-6.94%]">
                <AlarmOffIcon className="block max-w-none size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}