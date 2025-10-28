const img = "http://localhost:3845/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";
const img2 = "http://localhost:3845/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
const img1 = "http://localhost:3845/assets/3eaa63b80913e4fbfc1a39d9b21c98119bab03af.svg";
const img3 = "http://localhost:3845/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg";
const img4 = "http://localhost:3845/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg";

export default function Header() {
  return (
    <div className="relative w-full h-131" data-name="Component 22" data-node-id="677:5047">
      {/* 상단 보라색 배경 */}
      <div className="absolute bottom-1 left-0 right-0 top-30 bg-white" data-node-id="I677:5047;677:4400" />
      <div className="absolute bottom-101 left-0 right-0 top-0" data-node-id="I677:5047;677:4401">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full object-center" src={img} />
      </div>

      {/* 메인 네비게이션 메뉴 */}
      <p className="absolute left-400 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4402">
        한국외식산업연구원
      </p>
      <p className="absolute left-580 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4403">
        외식정보
      </p>
      <p className="absolute left-683 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4404">
        알림마당
      </p>
      <p className="absolute left-777 top-73 text-18 font-medium text-[#888888] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4405">
        ㅣ
      </p>
      <p className="absolute left-823 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4406">
        패널설문조사
      </p>
      <p className="absolute left-957 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4407">
        정부지원
      </p>
      <p className="absolute left-1061 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4408">
        교육
      </p>
      <p className="absolute left-1131 top-73 text-18 font-medium text-[#333333] leading-14 whitespace-nowrap" data-node-id="I677:5047;677:4409">
        부가혜택몰
      </p>

      {/* 상단 로그인/회원가입 링크 */}
      <p className="absolute left-1212 top-9 text-12 font-medium text-white leading-12 text-right whitespace-nowrap" data-node-id="I677:5047;677:4411">
        로그인/회원가입
      </p>
      <p className="absolute left-1275 top-9 text-12 font-medium text-white leading-12 text-right whitespace-nowrap" data-node-id="I677:5047;677:4412">
        회원정보찾기
      </p>

      {/* 햄버거 메뉴 버튼 */}
      <div className="absolute left-100 top-59 w-40 h-40 bg-[#222222] rounded-10 flex items-center justify-center" data-node-id="I677:5047;677:4413">
        <div className="w-24 h-24 flex items-center justify-center" data-node-id="I677:5047;677:4415">
          <img alt="햄버거 메뉴" className="w-[17.6px] h-[14px]" src={img1} />
        </div>
      </div>

      {/* 로고 */}
      <div className="absolute left-100 top-60 w-217 h-40" data-name="(로고) 한국외식산업연구원 로고 2" data-node-id="I677:5047;677:4416">
        <div className="relative w-full h-full overflow-hidden">
          <img alt="한국외식산업연구원 로고" className="absolute w-[230px] h-[47.7px] left-[-13.2px] top-[-3.4px]" src={img2} />
        </div>
      </div>

      {/* 알림 버튼 - ON 상태 */}
      <div className="absolute right-100 top-59 w-40 h-40 bg-[#e7e7e7] border-2 border-[#e7e7e7] rounded-10 flex items-center justify-center" data-node-id="I677:5047;677:4417">
        <div className="w-24 h-24 flex items-center justify-center" data-node-id="I677:5047;677:4419">
          <div className="w-[18px] h-[19.8px]" data-node-id="I677:5047;677:4420">
            <img alt="알림 ON" className="w-full h-full" src={img3} />
          </div>
        </div>
      </div>

      {/* 알림 버튼 - OFF 상태 (숨김) */}
      <div className="hidden" data-node-id="I677:5047;677:4425">
        <div className="w-24 h-24 flex items-center justify-center" data-node-id="I677:5047;677:4427">
          <div className="w-[14.4px] h-[16.2px]" data-node-id="I677:5047;677:4428">
            <img alt="알림 OFF" className="w-full h-full" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}