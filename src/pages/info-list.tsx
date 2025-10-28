
import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';

// Sample image URLs - these would typically come from Figma MCP server
const imgSample1 = "http://localhost:3845/assets/sample-report-1.jpg";
const imgSample2 = "http://localhost:3845/assets/sample-report-2.jpg";
const imgSample3 = "http://localhost:3845/assets/sample-report-3.jpg";
const iconSearch = "http://localhost:3845/assets/search-icon.svg";
const iconCalendar = "http://localhost:3845/assets/calendar-icon.svg";

const InfoList = () => {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="정기연구보고서_목록" data-node-id="401:1192">
      {/* 헤더 */}
      <Header />
      
      {/* 페이지 제목 영역 */}
      <div className="relative">
        <div className="bg-[#e6e6e6] h-1 left-0 top-130 w-full absolute" />
        
        {/* 페이지 제목 */}
        <p className="absolute font-bold text-30 leading-30 left-1/2 text-[#333333] text-center whitespace-nowrap top-219 -translate-x-1/2">
          정기연구보고서
        </p>
        <p className="absolute font-medium text-18 leading-18 left-1/2 text-[#666666] text-center whitespace-nowrap top-191 -translate-x-1/2">
          외식정보
        </p>

        {/* 탭 메뉴 */}
        <div className="absolute flex gap-40 items-start left-1/2 top-287 -translate-x-1/2">
          <div className="flex flex-col gap-14 items-start shrink-0">
            <div className="flex flex-col font-bold justify-center text-[#5a33be] text-20 whitespace-nowrap">
              <p className="leading-18">정기연구보고서</p>
            </div>
            <div className="bg-[#5a33be] border border-[#5a33be] h-2 shrink-0 w-full" />
          </div>
          <div className="flex flex-col font-normal justify-center text-[#888888] text-20 text-center whitespace-nowrap">
            <p className="leading-18">월간리포트</p>
          </div>
          <div className="flex flex-col font-normal justify-center text-[#888888] text-20 text-center whitespace-nowrap">
            <p className="leading-18">연구보고서</p>
          </div>
          <div className="flex flex-col font-normal justify-center text-[#888888] text-20 text-center whitespace-nowrap">
            <p className="leading-18">정책자료</p>
          </div>
          <div className="flex flex-col font-normal justify-center text-[#888888] text-20 text-center whitespace-nowrap">
            <p className="leading-18">통계자료</p>
          </div>
        </div>
      </div>

      {/* 검색 및 필터 영역 */}
      <div className="absolute left-1/2 top-377 -translate-x-1/2 w-1240">
        <div className="flex items-center justify-between">
          {/* 검색 박스 */}
          <div className="flex items-center gap-12">
            <div className="flex items-center bg-white border border-[#ddd] rounded-6 px-16 py-12 w-300">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                aria-label="연구보고서 검색"
                className="flex-1 text-14 text-[#333] outline-none bg-transparent"
                readOnly
              />
              <div className="w-20 h-20 ml-8">
                <img alt="검색" className="w-full h-full" src={iconSearch} />
              </div>
            </div>
            
            {/* 날짜 필터 */}
            <div className="flex items-center gap-8">
              <div className="flex items-center bg-white border border-[#ddd] rounded-6 px-12 py-10 w-120">
                <div className="w-16 h-16 mr-6">
                  <img alt="달력" className="w-full h-full" src={iconCalendar} />
                </div>
                <span className="text-14 text-[#666]">2024.01</span>
              </div>
              <span className="text-14 text-[#666]">~</span>
              <div className="flex items-center bg-white border border-[#ddd] rounded-6 px-12 py-10 w-120">
                <div className="w-16 h-16 mr-6">
                  <img alt="달력" className="w-full h-full" src={iconCalendar} />
                </div>
                <span className="text-14 text-[#666]">2024.12</span>
              </div>
            </div>
          </div>
          
          {/* 총 게시물 수 */}
          <div className="text-16 text-[#333]">
            총 <span className="font-bold text-[#5a33be]">156</span>건
          </div>
        </div>
      </div>

      {/* 게시물 목록 */}
      <div className="absolute left-1/2 top-460 -translate-x-1/2 w-1240">
        <div className="grid grid-cols-3 gap-30">
          {/* 게시물 카드 1 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample1} />
              <div className="absolute top-12 left-12">
                <span className="bg-[#5a33be] text-white text-12 font-medium px-8 py-4 rounded-4">
                  NEW
                </span>
              </div>
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                2024년 외식업체 경영현황 분석 및 전망 연구보고서
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                코로나19 이후 변화된 외식업계의 경영환경을 분석하고 향후 발전 방향을 제시한 연구보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.11.15</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>

          {/* 게시물 카드 2 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample2} />
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                외식산업 디지털 전환 동향 및 성과분석
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                키오스크, 배달앱, AI 도입 등 외식업계 디지털 전환 현황과 성과를 종합적으로 분석한 보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.10.28</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>

          {/* 게시물 카드 3 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample3} />
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                외식업 인력수급 현황 및 개선방안 연구
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                외식업계 만성적인 인력난 해결을 위한 정책 제안 및 개선방안을 담은 연구보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.10.15</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>

          {/* 게시물 카드 4 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample1} />
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                소상공인 외식업체 지원정책 효과성 분석
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                정부의 소상공인 지원정책이 외식업계에 미친 영향과 효과성을 객관적으로 분석한 보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.09.30</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>

          {/* 게시물 카드 5 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample2} />
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                외식업계 ESG 경영 도입현황 및 과제
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                환경·사회·지배구조를 고려한 ESG 경영이 외식업계에 미치는 영향을 분석한 연구보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.09.15</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>

          {/* 게시물 카드 6 */}
          <div className="bg-white border border-[#e6e6e6] rounded-12 overflow-hidden shadow-sm">
            <div className="relative h-180">
              <img alt="연구보고서 썸네일" className="w-full h-full object-cover" src={imgSample3} />
            </div>
            <div className="p-20">
              <p className="text-16 font-bold text-[#333] leading-22 mb-8 line-clamp-2">
                외식업 식자재 가격 변동성 분석 및 대응방안
              </p>
              <p className="text-14 text-[#666] leading-20 mb-12 line-clamp-3">
                주요 식자재 가격 변동이 외식업체에 미치는 영향을 분석하고 대응전략을 제시한 보고서입니다.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-12 text-[#999]">2024.08.30</span>
                <DownloadButton className="w-100 h-32 text-12" />
              </div>
            </div>
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-8 mt-60" role="navigation" aria-label="페이지네이션">
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="이전 페이지"
          >
            &lt;
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center bg-[#5a33be] text-white text-14 rounded-4"
            aria-label="1페이지, 현재 페이지"
            aria-current="page"
          >
            1
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="2페이지로 이동"
          >
            2
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="3페이지로 이동"
          >
            3
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="4페이지로 이동"
          >
            4
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="5페이지로 이동"
          >
            5
          </button>
          <button 
            className="w-32 h-32 flex items-center justify-center border border-[#ddd] rounded-4 text-14 text-[#666] bg-white"
            aria-label="다음 페이지"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* 푸터 */}
      <div className="absolute left-0 top-1200 w-full">
        <div className="absolute bg-white h-190 left-0 top-1 w-full" />
        <div className="absolute bg-[#ececec] h-1 left-1/2 top-0 -translate-x-1/2 w-full" />
        
        <p className="absolute font-light text-10 leading-16 left-100 text-[#222222] whitespace-nowrap top-73">
          (사)한국외식업중앙회 한국외식산업연구원 
        </p>
        
        <div className="absolute font-light text-10 left-100 text-[#444444] whitespace-nowrap top-100">
          <p className="leading-16 mb-0">
            <span className="font-bold">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span> 
            <span className="font-bold">사업자등록번호</span>
            <span>  203-82-32145 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span> 
            <span className="font-bold">대표자</span>
            <span> 전강식 </span>
          </p>
          <p className="leading-16">
            <span className="font-bold">TEL  </span>
            <span>02-6191-2908  </span>
            <span className="text-[#d1d1d1]">ㅣ</span> 
            <span className="font-bold">FAX</span>
            <span>  02-6191-2998 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span> 
            <span className="font-bold">E-mail</span>
            <span> isaacsgod@kfiri.org </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span> 
            <span className="font-bold">개인정보보호정책 책임자</span>
            <span>  김삼희</span>
          </p>
        </div>
        
        <p className="absolute font-normal text-10 leading-15 left-103 text-[#b6b6b6] whitespace-nowrap top-147">
          Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
        </p>
        
        <p className="absolute font-semibold text-12 leading-12 left-100 text-[#444444] whitespace-nowrap top-26">
          개인정보처리방침
        </p>
        <p className="absolute font-semibold text-12 leading-12 left-203 text-[#444444] whitespace-nowrap top-26">
          사이트이용약관
        </p>
      </div>
    </div>
  );
};

export default InfoList