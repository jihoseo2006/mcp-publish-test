import Header from '../components/Header';
import IntroImage from '~/assets/dcf333679af90eb679b4e6c0f1df43f9052773fe.png';
import ProfileImage from '~/assets/73500b0a55084f30e265d527aab733b446ea6b36.png';

const Introduction = () => {
  return (
    <div className="bg-white relative min-h-screen" data-name="C0101_한국외식산업연구원_인사말" data-node-id="448:1326">
      {/* Header */}
      <Header />
      
      {/* Divider line */}
      <div className="bg-[#e6e6e6] h-px w-full" />
      
      {/* Breadcrumb and Title */}
      <div className="text-center pt-60 pb-30">
        <p className="font-pretendard font-medium text-18 leading-18 text-[#666666] mb-28">
          한국외식산업연구원
        </p>
        <h1 className="font-pretendard font-bold text-30 leading-30 text-[#333333]">
          인사말
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-40 mb-60">
        <div className="flex flex-col items-start gap-14">
          <div className="font-pretendard font-bold text-20 leading-18 text-[#5a33be]">
            인사말
          </div>
          <div className="bg-[#5a33be] border-[#5a33be] h-2 w-full" />
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          연구원소개
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          조직도
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          주요연혁
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          찾아오시는길
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-250 w-full">
        <img 
          alt="외식산업 연구원 소개 이미지" 
          className="w-full h-full object-cover" 
          src={IntroImage}
        />
      </div>

      {/* Welcome Message */}
      <div className="text-center py-80">
        <div className="font-pretendard text-30 leading-44 text-[#333333] mb-40">
          <p>안녕하십니까?</p>
          <p>
            <span className="font-bold">한국외식산업연구원</span> 홈페이지 방문을
          </p>
          <p>진심으로 환영합니다.</p>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-[#d8dde5] h-px w-1240 mx-auto mb-40" />

      {/* Main Content */}
      <div className="max-w-1240 mx-auto px-100 py-40">
        <div className="text-center mb-80">
          <p className="font-pretendard font-regular text-20 leading-30 text-[#333333] mb-20">
            한국외식산업연구원은 한국외식업중앙회 소속 연구기관으로서
          </p>
          <p className="font-pretendard font-semibold text-20 leading-30 text-[#333333]">
            한국 외식산업의 발전을 위해 산업 경쟁력 강화에 기여해왔습니다.
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex justify-center mb-80">
          <div className="w-140 h-196">
            <img 
              alt="원장 프로필" 
              className="w-full h-full object-cover" 
              src={ProfileImage}
            />
          </div>
        </div>

        {/* Message Content */}
        <div className="max-w-800 mx-auto">
          <div className="font-pretendard font-regular text-16 leading-28 text-[#333333] mb-60">
            <p>외식산업의 산업구조 고도화 달성에 기여할 수 있는 미래비전 제시를 위해</p>
            <p>관련 분야 연구의 질을 높이는 것은 물론, 끊임없는 교육과 연구를 통해</p>
            <p>새로운 기회를 창출해 나가고자 합니다.</p>
            <br />
            <p>한국외식산업연구원의 축적된 전문 연구역량을 바탕으로</p>
            <p>미래 외식산업 발전에 중추적인 역할수행을 위해</p>
            <p>지속가능한 미래 외식산업 발전의 씽크탱크로서 역할을 강화하겠습니다.</p>
            <br />
            <p>한국외식산업연구원이 국내 외식산업의 1위 연구기관으로</p>
            <p>한 단계 더 도약하도록 언제나 최선의 노력을 다하겠습니다.</p>
            <p>늘 변함없는 성원과 관심 부탁드립니다.</p>
            <p>감사합니다.</p>
          </div>

          {/* Signature */}
          <div className="text-left">
            <p className="font-pretendard font-regular text-16 leading-30 text-[#333333]">
              <span>한국외식산업연구원 원장</span>
              <span> (조리외식경영학 박사)</span>
            </p>
            <p className="font-pretendard font-semibold text-20 leading-30 text-[#333333]">
              박영수
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-[#d8dde5] h-px w-1240 mx-auto" />

      {/* Footer */}
      <div className="bg-white h-190 relative">
        <div className="bg-[#ececec] h-px w-full" />
        
        <div className="pt-25 px-100">
          <div className="flex gap-20 mb-25">
            <p className="font-pretendard font-semibold text-12 leading-12 text-[#444444]">
              개인정보처리방침
            </p>
            <p className="font-pretendard font-semibold text-12 leading-12 text-[#444444]">
              사이트이용약관
            </p>
          </div>
          
          <p className="font-pretendard font-light text-10 leading-16 text-[#222222] mb-25">
            (사)한국외식업중앙회 한국외식산업연구원
          </p>
          
          <div className="font-pretendard font-light text-10 leading-16 text-[#444444] mb-15">
            <p>
              <span className="font-bold">주소</span>
              <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원</span>
              <span className="text-[#d1d1d1]"> ㅣ </span>
              <span className="font-bold">사업자등록번호</span>
              <span> 203-82-32145</span>
              <span className="text-[#d1d1d1]"> ㅣ </span>
              <span className="font-bold">대표자</span>
              <span> 전강식</span>
            </p>
            <p>
              <span className="font-bold">TEL</span>
              <span> 02-6191-2908</span>
              <span className="text-[#d1d1d1]"> ㅣ </span>
              <span className="font-bold">FAX</span>
              <span> 02-6191-2998</span>
              <span className="text-[#d1d1d1]"> ㅣ </span>
              <span className="font-bold">E-mail</span>
              <span> isaacsgod@kfiri.org</span>
              <span className="text-[#d1d1d1]"> ㅣ </span>
              <span className="font-bold">개인정보보호정책 책임자</span>
              <span> 김삼희</span>
            </p>
          </div>
          
          <p className="font-pretendard font-regular text-10 leading-15 text-[#b6b6b6]">
            Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;