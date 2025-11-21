import ProfileImage from "~/assets/73500b0a55084f30e265d527aab733b446ea6b36.png";
import BannerImage from "~/assets/dcf333679af90eb679b4e6c0f1df43f9052773fe.png";
import Header from "~/components/header";

export default function Introduction() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <div className="h-[131px] w-full">
        <Header />
      </div>

      <div className="h-[1px] w-full bg-[#e6e6e6]" />

      {/* Breadcrumb */}
      <p className="text-18 mt-60 text-center font-['Pretendard'] leading-[18px] font-medium text-nowrap whitespace-pre text-[#666666] not-italic">
        한국외식산업연구원
      </p>

      {/* Page Title */}
      <p className="text-30 mt-28 text-center font-['Pretendard'] leading-30 font-bold text-nowrap whitespace-pre text-[#333333] not-italic">
        인사말
      </p>

      {/* Tab Navigation */}
      <div className="mt-38 flex items-start justify-center gap-40">
        <div className="flex flex-col items-start gap-14">
          <div className="text-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-bold text-nowrap text-[#5a33be] not-italic">
            <p className="leading-[18px] whitespace-pre">인사말</p>
          </div>
          <div className="h-[2px] w-full border border-solid border-[#5a33be] bg-[#5a33be]" />
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">연구원소개</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">조직도</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">주요연혁</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">찾아오시는길</p>
        </div>
      </div>

      {/* Banner Image */}
      <div className="mt-16 h-[250px] w-full">
        <img alt="" className="h-full w-full object-cover object-center" src={BannerImage} />
      </div>

      {/* Welcome Message */}
      <div className="text-30 mt-120 text-center font-['Pretendard'] leading-[44px] font-normal whitespace-pre text-[#333333] not-italic">
        <p className="mb-0">안녕하십니까?</p>
        <p className="mb-0">
          <span className="font-['Pretendard'] font-bold text-[#333333] not-italic">한국외식산업연구원 </span>
          홈페이지 방문을
        </p>
        <p>진심으로 환영합니다.</p>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-10 h-[1px] w-[1240px] bg-[#d8dde5]" />

      {/* Main Content */}
      <div className="mx-auto mt-80 w-[1240px] font-['Pretendard'] text-[0px] leading-[0] font-semibold text-nowrap whitespace-pre text-[#333333] not-italic">
        <p className="text-20 mb-0 font-['Pretendard'] leading-30 font-normal">
          한국외식산업연구원은 한국외식업중앙회 소속 연구기관으로서
        </p>
        <p className="text-20 leading-30">한국 외식산업의 발전을 위해 산업 경쟁력 강화에 기여해왔습니다.</p>
      </div>

      {/* Profile Image */}
      <div className="mt-78 ml-[400px] h-[196px] w-[140px]">
        <img alt="" className="h-full w-full object-cover object-center" src={ProfileImage} />
      </div>

      {/* Description */}
      <div className="text-16 mx-auto mt-[-120px] w-[1240px] font-['Pretendard'] leading-28 font-normal whitespace-pre text-[#333333] not-italic">
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

      {/* Signature */}
      <div className="mx-auto mt-60 w-[1240px] font-['Pretendard'] text-[0px] leading-30 font-semibold whitespace-pre text-[#333333] not-italic">
        <p className="text-16 mb-0 font-['Pretendard'] font-normal">
          <span>한국외식산업연구원 원장 </span>
          <span>(조리외식경영학 박사) </span>
        </p>
        <p className="text-20">박영수</p>
      </div>

      {/* Footer */}
      <div className="mt-180">
        <div className="h-[190px] w-full bg-white" />
        <div className="absolute h-[1px] w-full bg-[#ececec]" />
        <p className="text-10 mt-73 ml-100 font-['Pretendard'] leading-16 font-light text-nowrap whitespace-pre text-[#222222] not-italic">
          (사)한국외식업중앙회 한국외식산업연구원{" "}
        </p>
        <div className="text-10 mt-27 ml-100 font-['Pretendard'] leading-[0] font-light text-nowrap whitespace-pre text-[#444444] not-italic">
          <p className="mb-0 leading-16">
            <span className="font-['Pretendard'] font-bold not-italic">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">사업자등록번호</span>
            <span> 203-82-32145 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">대표자</span>
            <span> 전강식 </span>
          </p>
          <p className="leading-16">
            <span className="font-['Pretendard'] font-bold not-italic">TEL </span>
            <span> 02-6191-2908 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">FAX</span>
            <span> 02-6191-2998 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">E-mail</span>
            <span> isaacsgod@kfiri.org </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">개인정보보호정책 책임자</span>
            <span> 김삼희</span>
          </p>
        </div>
        <p className="text-10 mt-27 ml-103 font-['Pretendard'] leading-[15px] font-normal text-nowrap whitespace-pre text-[#b6b6b6] not-italic">
          Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
        </p>
        <p className="text-12 absolute top-[1600px] ml-100 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          개인정보처리방침
        </p>
        <p className="text-12 absolute top-[1600px] ml-203 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          사이트이용약관
        </p>
      </div>
    </div>
  );
}
