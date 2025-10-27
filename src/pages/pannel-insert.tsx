import Header from '../components/Header';
import Footer from '../components/Footer';
import Pannel from '../components/Pannel';

// 검색 아이콘
const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m19 19-3.5-3.5m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 페이지네이션 화살표 아이콘들
const ArrowLeftIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 30L15 20L25 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 30L25 20L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoubleArrowRightIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30L20 20L10 10M20 30L30 20L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PannelInsert = () => {
  // 패널 설문 조사 목록 데이터
  const surveyData = [
    {
      id: 1,
      title: '음식 가격 실제로 얼마나 올랐나?',
      status: '진행중' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 2,
      title: '장애인 키오스크 시행령, 외식업주에 대한 배려는?',
      status: '진행중' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 3,
      title: '외식업 인력난으로 인한 노동강도 조사',
      status: '진행중' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 4,
      title: '제로 칼로리 음식에 대한 조사',
      status: '진행중' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 5,
      title: '전통주 외식 산업 신성장에 대한 조사',
      status: '진행중' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 6,
      title: '외식 프랜차이즈 창업 조사',
      status: '진행완료' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 7,
      title: '코로나 19 사태 이후 비대면 서비스 조사',
      status: '진행완료' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    },
    {
      id: 8,
      title: '외식업계 실무조사',
      status: '진행완료' as const,
      startDate: '2023.01.01',
      endDate: '2023.01.30',
      organization: 'KFIRI',
      date: '2023.01.01',
      participants: 88
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      

      {/* 헤더 섹션 */}
      <div className="pt-[60px] text-center">
        <p className="font-['Pretendard:Medium',_sans-serif] text-[18px] leading-[18px] not-italic text-[#666666] mb-[30px]">
          패널설문조사
        </p>
        <h1 className="font-['Pretendard:Bold',_sans-serif] text-[30px] leading-[30px] not-italic text-[#333333]">
          패널설문조사
        </h1>
      </div>

      {/* 검색바 */}
      <div className="flex justify-center mt-[30px] mb-[50px]">
        <div className="relative">
          <div className="flex items-center border border-[#838383] border-solid rounded-[100px] px-[24px] py-[13px] w-[600px]">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              className="flex-1 font-['Pretendard:Regular',_sans-serif] text-[18px] leading-[18px] not-italic text-[#989898] bg-transparent outline-none placeholder:text-[#989898]"
            />
            <div className="w-[24px] h-[24px] text-[#989898]">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      {/* 패널 리스트 */}
  <div className="w-full px-4 mx-auto max-w-1240 pb-160">
        {/* 상단 구분선 */}
        <div className="h-[1px] bg-[#333333] mb-[31px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[20px]">
          {surveyData.map((survey) => (
            <Pannel
              key={survey.id}
              title={survey.title}
              status={survey.status}
              startDate={survey.startDate}
              endDate={survey.endDate}
              organization={survey.organization}
              date={survey.date}
              participants={survey.participants}
            />
          ))}
        </div>
        {/* 하단 구분선 추가 */}
        <div className="h-[1px] bg-[#d8dde5] my-[40px]" />
        {/* 페이지네이션 */}
        <div className="flex justify-center items-center gap-[5px] mb-[40px]">
          <button className="w-[40px] h-[40px] flex items-center justify-center text-[#9a9a9a] hover:text-[#333333]">
            <ArrowLeftIcon />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`
                w-[40px] h-[40px] flex items-center justify-center rounded-[6px]
                font-['Pretendard:${page === 1 ? 'ExtraBold' : 'SemiBold'}',_sans-serif] 
                text-[16px] leading-[14px] not-italic text-center
                ${page === 1 
                  ? 'text-[#5a33be] underline decoration-solid' 
                  : 'text-[#9a9a9a] hover:text-[#333333]'
                }
              `}
            >
              {page}
            </button>
          ))}
          <button className="w-[40px] h-[40px] flex items-center justify-center text-[#9a9a9a] hover:text-[#333333]">
            <ArrowRightIcon />
          </button>
          <button className="w-[40px] h-[40px] flex items-center justify-center text-[#9a9a9a] hover:text-[#333333]">
            <DoubleArrowRightIcon />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PannelInsert;