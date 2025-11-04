import Header from '../components/Header';

const backgroundImg = "/dcf333679af90eb679b4e6c0f1df43f9052773fe.png";
const profileImg = "/73500b0a55084f30e265d527aab733b446ea6b36.png";

const Introduction = () => {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="C0101_한국외식산업연구원_인사말" data-node-id="448:1326">
      {/* Header Component */}
      <Header />
      
      {/* Separator line */}
      <div className="bg-[#e6e6e6] h-px w-full" data-node-id="677:4536" />
      
      {/* Main content */}
      <div className="pt-[61px]">
        {/* 상단 제목 */}
        <p className="font-medium leading-[18px] text-[#666666] text-[18px] text-center text-nowrap" data-node-id="448:1338">
          한국외식산업연구원
        </p>
        <p className="font-bold leading-[30px] text-[#333333] text-[30px] text-center text-nowrap mt-[28px]" data-node-id="448:1337">
          인사말
        </p>
        
        {/* 탭 네비게이션 */}
        <div className="flex gap-[40px] items-start justify-center mt-[38px]" data-node-id="448:1340">
          <div className="flex flex-col gap-[14px] items-start" data-node-id="448:1341">
            <div className="font-bold text-[#5a33be] text-[20px] text-nowrap" data-node-id="448:1342">
              <p className="leading-[18px] whitespace-pre">인사말</p>
            </div>
            <div className="bg-[#5a33be] border border-[#5a33be] border-solid h-[2px] w-full" data-node-id="448:1343" />
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="448:1344">
            <p className="leading-[18px] whitespace-pre">연구원소개</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="448:1345">
            <p className="leading-[18px] whitespace-pre">조직도</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="448:1346">
            <p className="leading-[18px] whitespace-pre">주요연혁</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="448:1347">
            <p className="leading-[18px] whitespace-pre">찾아오시는길</p>
          </div>
        </div>
        
        {/* 배경 이미지 섹션 */}
        <div className="h-[250px] w-full mt-[54px] relative" data-node-id="448:1350">
          <img alt="" className="absolute inset-0 w-full h-full object-center object-cover" src={backgroundImg} />
          
          {/* 환영 메시지 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#333333] text-[30px] text-center leading-[44px]" data-node-id="448:1352">
            <p className="mb-0">안녕하십니까?</p>
            <p className="mb-0">
              <span className="font-bold text-[#333333]">한국외식산업연구원 </span>홈페이지 방문을
            </p>
            <p className="mb-0">진심으로 환영합니다.</p>
          </div>
        </div>
        
        {/* 연구원 소개 텍스트 */}
        <div className="max-w-[1240px] mx-auto px-[20px] mt-[56px]">
          <div className="font-normal text-[20px] text-[#333333] text-center leading-[30px]" data-node-id="448:1348">
            <p className="mb-0">한국외식산업연구원은 한국외식업중앙회 소속 연구기관으로서</p>
            <p className="mb-0">한국 외식산업의 발전을 위해 산업 경쟁력 강화에 기여해왔습니다.</p>
          </div>
          
          <div className="font-normal text-[16px] text-[#333333] leading-[28px] mt-[48px]" data-node-id="448:1349">
            <p className="mb-0">외식산업의 산업구조 고도화 달성에 기여할 수 있는 미래비전 제시를 위해</p>
            <p className="mb-0">관련 분야 연구의 질을 높이는 것은 물론, 끊임없는 교육과 연구를 통해</p>
            <p className="mb-0">새로운 기회를 창출해 나가고자 합니다.</p>
            <br />
            <p className="mb-0">한국외식산업연구원의 축적된 전문 연구역량을 바탕으로</p>
            <p className="mb-0">미래 외식산업 발전에 중추적인 역할수행을 위해</p>
            <p className="mb-0">지속가능한 미래 외식산업 발전의 씽크탱크로서 역할을 강화하겠습니다.</p>
            <br />
            <p className="mb-0">한국외식산업연구원이 국내 외식산업의 1위 연구기관으로</p>
            <p className="mb-0">한 단계 더 도약하도록 언제나 최선의 노력을 다하겠습니다.</p>
            <p className="mb-0">늘 변함없는 성원과 관심 부탁드립니다.</p>
            <p className="mb-0">감사합니다.</p>
          </div>
          
          {/* 프로필 이미지와 서명 */}
          <div className="flex items-end gap-[60px] mt-[48px]">
            <div className="w-[140px] h-[196px]" data-name="image 105" data-node-id="448:1351">
              <img alt="원장 사진" className="w-full h-full object-center object-cover" src={profileImg} />
            </div>
            
            <div className="font-normal leading-[30px] text-[#333333]" data-node-id="448:1353">
              <p className="font-normal mb-0 text-[16px]">
                <span>한국외식산업연구원 원장 </span>
                <span>(조리외식경영학 박사) </span>
              </p>
              <p className="font-semibold text-[20px] mb-0">박영수</p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-[200px] relative" data-node-id="448:1329">
          <div className="bg-[#ececec] h-px w-full" data-node-id="448:1331" />
          <div className="bg-white h-[190px] w-full" data-node-id="448:1330">
            <div className="max-w-[1240px] mx-auto px-[100px] pt-[25px]">
              <div className="flex gap-[103px]">
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="448:1335">
                  개인정보처리방침
                </p>
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="448:1336">
                  사이트이용약관
                </p>
              </div>
              
              <p className="font-light text-[#222222] text-[10px] leading-[16px] mt-[22px]" data-node-id="448:1332">
                (사)한국외식업중앙회 한국외식산업연구원
              </p>
              
              <div className="font-light text-[#444444] text-[10px] leading-[16px] mt-[27px]" data-node-id="448:1333">
                <p className="leading-[16px] mb-0">
                  <span className="font-bold">주소 </span>
                  <span>(04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
                  <span className="text-[#d1d1d1]">ㅣ</span> 
                  <span className="font-bold"> 사업자등록번호</span>
                  <span> 203-82-32145 </span>
                  <span className="text-[#d1d1d1]">ㅣ</span> 
                  <span className="font-bold"> 대표자</span>
                  <span> 전강식 </span>
                </p>
                <p className="leading-[16px]">
                  <span className="font-bold">TEL </span>
                  <span>02-6191-2908 </span>
                  <span className="text-[#d1d1d1]">ㅣ</span> 
                  <span className="font-bold"> FAX</span>
                  <span> 02-6191-2998 </span>
                  <span className="text-[#d1d1d1]">ㅣ</span> 
                  <span className="font-bold"> E-mail</span>
                  <span> isaacsgod@kfiri.org </span>
                  <span className="text-[#d1d1d1]">ㅣ</span> 
                  <span className="font-bold"> 개인정보보호정책 책임자</span>
                  <span> 김삼희</span>
                </p>
              </div>
              
              <p className="font-normal text-[#b6b6b6] text-[10px] leading-[15px] mt-[27px]" data-node-id="448:1334">
                Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;