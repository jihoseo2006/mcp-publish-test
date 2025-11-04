const logo = "/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";
const logoMain = "/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
const hamburgerIcon = "/3eaa63b80913e4fbfc1a39d9b21c98119bab03af.svg";
const bellOnIcon = "/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg";

export default function Header() {
  return (
    <div className="relative w-full h-[131px]" data-name="Component 22" data-node-id="677:5047">
      {/* 하단 백그라운드 */}
      <div className="absolute bg-white bottom-1 left-0 right-0 top-[30px]" data-node-id="I677:5047;677:4400" />
      
      {/* 상단 이미지 백그라운드 */}
      <div className="absolute bottom-[101px] left-0 right-0 top-0" data-node-id="I677:5047;677:4401">
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full" 
          src={logo} 
        />
      </div>
      
      {/* 네비게이션 메뉴 */}
      <p className="absolute font-medium inset-[73px_90px_44px_400px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4402">
        한국외식산업연구원
      </p>
      <p className="absolute font-medium inset-[73px_192px_44px_581px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4403">
        외식정보
      </p>
      <p className="absolute font-medium inset-[73px_294px_44px_684px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4404">
        알림마당
      </p>
      <p className="absolute font-medium inset-[73px_340px_44px_776px] leading-[14px] not-italic text-[#888888] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4405">
        ㅣ
      </p>
      <p className="absolute font-medium inset-[73px_383px_44px_822px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4406">
        패널설문조사
      </p>
      <p className="absolute font-medium inset-[73px_464px_44px_956px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4407">
        정부지원
      </p>
      <p className="absolute font-medium inset-[73px_527px_44px_1060px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4408">
        교육
      </p>
      <p className="absolute font-medium inset-[73px_608px_44px_1131px] leading-[14px] not-italic text-[#333333] text-[18px] text-nowrap whitespace-pre" data-node-id="I677:5047;677:4409">
        부가혜택몰
      </p>
      
      {/* 로그인/회원가입 링크 */}
      <p className="absolute font-medium inset-[9px_183px_110px_1213px] leading-[12px] not-italic text-[12px] text-nowrap text-right text-white whitespace-pre" data-node-id="I677:5047;677:4411">
        로그인/회원가입
      </p>
      <p className="absolute font-medium inset-[9px_100px_110px_1275px] leading-[12px] not-italic text-[12px] text-nowrap text-right text-white whitespace-pre" data-node-id="I677:5047;677:4412">
        회원정보찾기
      </p>
      
      {/* 햄버거 메뉴 버튼 */}
      <div className="absolute inset-[59px_105px_32px_1295px]" data-node-id="I677:5047;677:4413">
        <div className="absolute bg-[#222222] inset-0 rounded-[10px]" data-node-id="I677:5047;677:4414" />
        <div className="absolute inset-[8px_3px_8px_4px] overflow-clip" data-name="Base/hamburger-button" data-node-id="I677:5047;677:4415">
          <div className="absolute inset-[5px_3px_5px_3px]" data-name="Vector" data-node-id="I677:5047;677:4415;9496:3837">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none w-full h-full" src={hamburgerIcon} />
            </div>
          </div>
        </div>
      </div>
      
      {/* 메인 로고 */}
      <div className="absolute inset-[60px_100px_31px_100px]" data-name="(로고) 한국외식산업연구원 로고 2" data-node-id="I677:5047;677:4416">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            alt="한국외식산업연구원 로고" 
            className="absolute h-[119.21%] left-[-6.1%] max-w-none top-[-8.47%] w-[106.1%]" 
            src={logoMain} 
          />
        </div>
      </div>
      
      {/* 알림 버튼 on/off */}
      <div className="absolute inset-[59px_160px_32px_1240px]" data-name="알림on" data-node-id="I677:5047;677:4417">
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] border-solid inset-0 rounded-[10px]" data-node-id="I677:5047;677:4418" />
        <div className="absolute inset-[8px_8px_8px_8px]" data-node-id="I677:5047;677:4419">
          <div className="absolute w-[24px] h-[24px] inset-0" data-node-id="I677:5047;677:4420">
            <div className="absolute inset-[1px_1px_3px_5px]" data-node-id="I677:5047;677:4421">
              <div className="absolute bottom-[-1px] left-[-1px] right-0 top-0">
                <img alt="알림 온" className="block max-w-none w-full h-full" src={bellOnIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}