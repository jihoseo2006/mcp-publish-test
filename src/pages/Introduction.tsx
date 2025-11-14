import ProfileImage from "~/assets/73500b0a55084f30e265d527aab733b446ea6b36.png";
import BannerImage from "~/assets/dcf333679af90eb679b4e6c0f1df43f9052773fe.png";
import Header from "~/components/header";

const Introduction = () => {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* 헤더 */}
      <Header />

      {/* 구분선 */}
      <div className="h-[1px] w-full bg-[#e6e6e6]" />

      {/* 페이지 타이틀 */}
      <div className="relative">
        <p className="pt-[60px] text-center font-['Pretendard'] text-[18px] leading-[18px] font-medium text-[#666666]">
          한국외식산업연구원
        </p>
        <p className="pt-[9px] text-center font-['Pretendard'] text-[30px] leading-[30px] font-bold text-[#333333]">
          인사말
        </p>
      </div>

      {/* 탭 메뉴 */}
      <div className="flex items-start justify-center gap-[40px] pt-[38px]">
        <div className="flex shrink-0 flex-col items-start gap-[14px]">
          <div className="flex flex-col justify-center font-['Pretendard'] text-[20px] leading-[0] font-bold text-nowrap text-[#5a33be]">
            <p className="leading-[18px] whitespace-pre">인사말</p>
          </div>
          <div className="h-[2px] w-full shrink-0 border border-solid border-[#5a33be] bg-[#5a33be]" />
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">연구원소개</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">조직도</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">주요연혁</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">찾아오시는길</p>
        </div>
      </div>

      {/* 배너 이미지 */}
      <div className="mt-[54px] h-[250px] w-full">
        <img alt="" className="pointer-events-none h-full w-full object-cover" src={BannerImage} />
      </div>

      {/* 인사말 제목 */}
      <div className="pt-[70px] text-center">
        <p className="mb-0 font-['Pretendard'] text-[30px] leading-[44px] text-[#333333]">안녕하십니까?</p>
        <p className="mb-0 font-['Pretendard'] text-[30px] leading-[44px] text-[#333333]">
          <span className="font-bold">한국외식산업연구원 </span>홈페이지 방문을
        </p>
        <p className="font-['Pretendard'] text-[30px] leading-[44px] text-[#333333]">진심으로 환영합니다.</p>
      </div>

      {/* 구분선 */}
      <div className="mx-auto mt-[47px] h-[1px] w-[1240px] bg-[#d8dde5]" />

      {/* 인사말 본문 */}
      <div className="mx-auto max-w-[1240px] pt-[51px]">
        <p className="mb-0 font-['Pretendard'] text-[20px] leading-[30px] font-semibold text-[#333333]">
          한국외식산업연구원은 한국외식업중앙회 소속 연구기관으로서
        </p>
        <p className="font-['Pretendard'] text-[20px] leading-[30px] font-semibold text-[#333333]">
          한국 외식산업의 발전을 위해 산업 경쟁력 강화에 기여해왔습니다.
        </p>

        <div className="flex items-start gap-[60px] pt-[50px]">
          {/* 프로필 이미지 */}
          <div className="h-[196px] w-[140px] shrink-0">
            <img
              alt="한국외식산업연구원 원장"
              className="pointer-events-none h-full w-full object-cover"
              src={ProfileImage}
            />
          </div>

          {/* 본문 텍스트 */}
          <div className="flex-1">
            <div className="font-['Pretendard'] text-[16px] leading-[28px] text-[#333333]">
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

            <div className="pt-[96px] font-['Pretendard'] leading-[30px] font-semibold text-[#333333]">
              <p className="mb-0 text-[16px] font-normal">
                <span>한국외식산업연구원 원장 </span>
                <span>(조리외식경영학 박사) </span>
              </p>
              <p className="text-[20px]">박영수</p>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="relative mt-[220px]">
        <div className="h-[190px] w-full bg-white" />
        <div className="absolute top-0 h-[1px] w-full bg-[#ececec]" />

        <div className="absolute top-[25px] left-[100px]">
          <p className="mb-0 font-['Pretendard'] text-[12px] leading-[12px] font-semibold text-nowrap text-[#444444]">
            개인정보처리방침
          </p>
        </div>

        <div className="absolute top-[25px] left-[203px]">
          <p className="mb-0 font-['Pretendard'] text-[12px] leading-[12px] font-semibold text-nowrap text-[#444444]">
            사이트이용약관
          </p>
        </div>

        <div className="absolute top-[72px] left-[100px]">
          <p className="font-['Pretendard'] text-[10px] leading-[16px] font-light text-nowrap whitespace-pre text-[#222222]">
            (사)한국외식업중앙회 한국외식산업연구원
          </p>
        </div>

        <div className="absolute top-[99px] left-[100px] font-['Pretendard'] text-[10px] leading-[0] font-light text-nowrap whitespace-pre text-[#444444]">
          <p className="mb-0 leading-[16px]">
            <span className="font-bold">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
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

        <div className="absolute top-[146px] left-[103px]">
          <p className="font-['Pretendard'] text-[10px] leading-[15px] text-nowrap whitespace-pre text-[#b6b6b6]">
            Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
