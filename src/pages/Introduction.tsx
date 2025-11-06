import React from 'react';
import Header from '../components/Header';

// 이미지 가져오기
const imgBanner = '/src/assets/dcf333679af90eb679b4e6c0f1df43f9052773fe.png';
const imgCeo = '/src/assets/73500b0a55084f30e265d527aab733b446ea6b36.png';

const Introduction: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* 헤더 */}
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <div className="relative">
        <p className="text-[#666666] text-[18px] font-medium leading-[18px] text-center pt-[61px]">
          한국외식산업연구원
        </p>
        <h1 className="text-[#333333] text-[30px] font-bold leading-[30px] text-center pt-[28px]">
          인사말
        </h1>
      </div>
      
      {/* 탭 네비게이션 */}
      <div className="flex gap-[40px] items-start justify-center pt-[68px]">
        <div className="flex flex-col gap-[14px] items-start">
          <div className="text-[#5a33be] text-[20px] font-bold leading-[18px]">인사말</div>
          <div className="bg-[#5a33be] border border-[#5a33be] h-[2px] w-full"></div>
        </div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">연구원소개</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">조직도</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">주요연혁</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">찾아오시는길</div>
      </div>

      {/* 배너 이미지 */}
      <div className="relative mt-[42px] mx-[100px] h-[250px] overflow-hidden">
        <img 
          alt="배너 이미지" 
          className="absolute inset-0 w-full h-full object-cover object-center" 
          src={imgBanner} 
        />
      </div>

      {/* 환영 인사말 */}
      <div className="text-center pt-[97px]">
        <div className="text-[#333333] text-[30px] font-normal leading-[44px]">
          <p className="mb-0">안녕하십니까?</p>
          <p className="mb-0">
            <span className="font-bold">한국외식산업연구원 </span>홈페이지 방문을
          </p>
          <p>진심으로 환영합니다.</p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="bg-[#d8dde5] h-[1px] mx-[100px] mt-[45px]"></div>

      {/* 소개 메시지 */}
      <div className="px-[100px] pt-[66px]">
        <div className="text-center">
          <div className="text-[#333333] text-[20px] font-semibold leading-[30px] mb-[30px]">
            <p className="font-normal mb-0">한국외식산업연구원은 한국외식업중앙회 소속 연구기관으로서</p>
            <p>한국 외식산업의 발전을 위해 산업 경쟁력 강화에 기여해왔습니다.</p>
          </div>
          
          <div className="text-[#333333] text-[16px] font-normal leading-[28px] max-w-[800px] mx-auto">
            <p className="mb-0">외식산업의 산업구조 고도화 달성에 기여할 수 있는 미래비전 제시를 위해 </p>
            <p className="mb-0">관련 분야 연구의 질을 높이는 것은 물론, 끊임없는 교육과 연구를 통해</p>
            <p className="mb-0">새로운 기회를 창출해 나가고자 합니다.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">한국외식산업연구원의 축적된 전문 연구역량을 바탕으로 </p>
            <p className="mb-0">미래 외식산업 발전에 중추적인 역할수행을 위해 </p>
            <p className="mb-0">지속가능한 미래 외식산업 발전의 씽크탱크로서 역할을 강화하겠습니다.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">한국외식산업연구원이 국내 외식산업의 1위 연구기관으로 </p>
            <p className="mb-0">한 단계 더 도약하도록 언제나 최선의 노력을 다하겠습니다.</p>
            <p className="mb-0">늘 변함없는 성원과 관심 부탁드립니다.</p>
            <p>감사합니다.</p>
          </div>
        </div>
      </div>

      {/* CEO 사진 */}
      <div className="flex justify-center pt-[45px]">
        <div className="w-[140px] h-[196px]">
          <img 
            alt="원장 사진" 
            className="w-full h-full object-cover object-center" 
            src={imgCeo} 
          />
        </div>
      </div>

      {/* CEO 서명 */}
      <div className="text-left px-[100px] pt-[24px] max-w-[800px] mx-auto">
        <div className="text-[#333333] leading-[30px]">
          <p className="text-[16px] font-normal mb-0">
            <span>한국외식산업연구원 원장 </span>
            <span>(조리외식경영학 박사) </span>
          </p>
          <p className="text-[20px] font-semibold">박영수</p>
        </div>
      </div>

      {/* 푸터 */}
      <div className="mt-[219px] border-t border-[#ececec]">
        <div className="bg-white h-[190px] px-[100px]">
          <div className="pt-[25px]">
            <p className="text-[#444444] text-[12px] font-semibold leading-[12px] mb-[24px]">
              <span className="mr-[103px]">개인정보처리방침</span>
              <span>사이트이용약관</span>
            </p>
            <p className="text-[#222222] text-[10px] font-light leading-[16px] mb-[27px]">
              (사)한국외식업중앙회 한국외식산업연구원 
            </p>
            <div className="text-[#444444] text-[10px] font-light leading-[16px] mb-[16px]">
              <p className="mb-0">
                <span className="font-bold">주소 </span>
                <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">사업자등록번호</span>
                <span>  203-82-32145 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">대표자</span>
                <span> 전강식 </span>
              </p>
              <p>
                <span className="font-bold">TEL  </span>
                <span>02-6191-2908  </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">FAX</span>
                <span>  02-6191-2998 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">E-mail</span>
                <span> isaacsgod@kfiri.org </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">개인정보보호정책 책임자</span>
                <span>  김삼희</span>
              </p>
            </div>
            <p className="text-[#b6b6b6] text-[10px] font-normal leading-[15px]">
              Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;