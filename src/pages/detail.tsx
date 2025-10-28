
import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';

// Sample image URLs - these would typically come from Figma MCP server
const imgDetailMain = "http://localhost:3845/assets/detail-main-image.jpg";
const imgChart1 = "http://localhost:3845/assets/chart-1.png";
const imgChart2 = "http://localhost:3845/assets/chart-2.png";
const imgGraph = "http://localhost:3845/assets/analysis-graph.png";
const iconPrev = "http://localhost:3845/assets/arrow-left.svg";
const iconNext = "http://localhost:3845/assets/arrow-right.svg";
const iconList = "http://localhost:3845/assets/list-icon.svg";

const Detail = () => {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="게시글_상세" data-node-id="401:2258">
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

      {/* 메인 콘텐츠 영역 */}
      <div className="absolute left-1/2 top-377 -translate-x-1/2 w-1240">
        
        {/* 게시글 상단 정보 */}
        <div className="border-b border-[#e6e6e6] pb-20 mb-30">
          <div className="flex items-center gap-8 mb-12">
            <span className="bg-[#5a33be] text-white text-12 font-medium px-8 py-4 rounded-4">
              NEW
            </span>
            <span className="bg-[#ff6b35] text-white text-12 font-medium px-8 py-4 rounded-4">
              HOT
            </span>
          </div>
          
          <h1 className="text-28 font-bold text-[#333] leading-38 mb-16">
            2024년 외식업체 경영현황 분석 및 전망 연구보고서
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-20 text-14 text-[#666]">
              <span>작성일: 2024.11.15</span>
              <span>조회수: 1,248</span>
              <span>다운로드: 352</span>
            </div>
            <DownloadButton className="w-120 h-40" />
          </div>
        </div>

        {/* 게시글 본문 */}
        <div className="prose max-w-none">
          {/* 요약 */}
          <div className="bg-[#f8f9fa] border border-[#e9ecef] rounded-8 p-24 mb-40">
            <h2 className="text-20 font-bold text-[#333] mb-16">연구 요약</h2>
            <p className="text-16 text-[#333] leading-24 mb-12">
              본 연구는 코로나19 이후 변화된 외식업계의 경영환경을 종합적으로 분석하고, 
              2024년 현재 외식업체들이 직면한 주요 과제와 향후 발전 방향을 제시하는 것을 목적으로 한다.
            </p>
            <p className="text-16 text-[#333] leading-24">
              전국 3,000개 외식업체를 대상으로 한 설문조사와 심층 인터뷰를 통해 
              매출 변화, 운영 방식 변화, 디지털 전환 현황 등을 조사하였다.
            </p>
          </div>

          {/* 메인 이미지 */}
          <div className="mb-40">
            <img 
              alt="외식업체 경영현황 분석 메인 이미지" 
              className="w-full h-400 object-cover rounded-8" 
              src={imgDetailMain} 
            />
            <p className="text-12 text-[#999] text-center mt-8">
              [그림 1] 2024년 외식업계 주요 트렌드 및 변화 요인
            </p>
          </div>

          {/* 본문 내용 */}
          <div className="mb-40">
            <h2 className="text-22 font-bold text-[#333] mb-20">1. 연구 배경 및 목적</h2>
            <p className="text-16 text-[#333] leading-26 mb-16">
              코로나19 팬데믹은 외식업계에 전례 없는 변화를 가져왔다. 비대면 서비스의 확산, 
              배달 시장의 급성장, 디지털 기술 도입 가속화 등 다양한 변화가 동시다발적으로 일어났다.
            </p>
            <p className="text-16 text-[#333] leading-26 mb-24">
              이러한 변화 속에서 외식업체들의 경영 현황을 객관적으로 분석하고, 
              지속가능한 성장을 위한 전략적 방향을 제시할 필요성이 대두되었다.
            </p>
          </div>

          {/* 차트 섹션 */}
          <div className="mb-40">
            <h2 className="text-22 font-bold text-[#333] mb-20">2. 주요 연구 결과</h2>
            
            <div className="grid grid-cols-2 gap-30 mb-30">
              <div>
                <img 
                  alt="매출 변화 추이 차트" 
                  className="w-full h-300 object-contain border border-[#e6e6e6] rounded-8" 
                  src={imgChart1} 
                />
                <p className="text-12 text-[#999] text-center mt-8">
                  [그림 2] 업종별 매출 변화 추이 (2019-2024)
                </p>
              </div>
              <div>
                <img 
                  alt="디지털 전환 현황 차트" 
                  className="w-full h-300 object-contain border border-[#e6e6e6] rounded-8" 
                  src={imgChart2} 
                />
                <p className="text-12 text-[#999] text-center mt-8">
                  [그림 3] 외식업체 디지털 전환 현황
                </p>
              </div>
            </div>

            <div className="bg-[#fff7e6] border-l-4 border-[#ff8c00] p-20 mb-24">
              <h3 className="text-18 font-bold text-[#333] mb-12">주요 발견 사항</h3>
              <ul className="list-disc list-inside text-16 text-[#333] leading-24 space-y-8">
                <li>전체 외식업체의 78%가 2023년 대비 매출 증가를 경험</li>
                <li>키오스크 도입률이 전년 대비 45% 증가</li>
                <li>배달 서비스 이용 업체가 85%를 넘어서며 필수 서비스로 자리잡음</li>
                <li>인건비 부담이 가장 큰 경영 애로사항으로 조사됨</li>
              </ul>
            </div>
          </div>

          {/* 분석 그래프 */}
          <div className="mb-40">
            <h2 className="text-22 font-bold text-[#333] mb-20">3. 세부 분석 결과</h2>
            <img 
              alt="종합 분석 그래프" 
              className="w-full h-400 object-contain border border-[#e6e6e6] rounded-8 mb-12" 
              src={imgGraph} 
            />
            <p className="text-12 text-[#999] text-center mb-24">
              [그림 4] 외식업체 경영성과 종합 분석
            </p>
            
            <p className="text-16 text-[#333] leading-26 mb-16">
              업종별 분석 결과, 한식당의 회복세가 가장 뚜렷하게 나타났으며, 
              카페 및 베이커리 업종이 그 뒤를 이었다. 반면 주점업의 경우 여전히 어려움을 겪고 있는 것으로 나타났다.
            </p>
          </div>

          {/* 결론 및 제언 */}
          <div className="mb-40">
            <h2 className="text-22 font-bold text-[#333] mb-20">4. 결론 및 정책 제언</h2>
            
            <div className="bg-[#f0f8ff] border border-[#87ceeb] rounded-8 p-24 mb-24">
              <h3 className="text-18 font-bold text-[#333] mb-16">주요 결론</h3>
              <p className="text-16 text-[#333] leading-26 mb-12">
                외식업계는 전반적으로 회복세를 보이고 있으나, 업종별·규모별로 차이가 존재한다. 
                디지털 전환에 적극적으로 대응한 업체들의 성과가 상대적으로 우수한 것으로 나타났다.
              </p>
            </div>

            <h3 className="text-18 font-bold text-[#333] mb-16">정책 제언</h3>
            <ol className="list-decimal list-inside text-16 text-[#333] leading-26 space-y-12 mb-24">
              <li>소상공인 외식업체의 디지털 전환 지원 강화</li>
              <li>인력난 해소를 위한 정책적 지원 방안 마련</li>
              <li>지속가능한 외식업 생태계 조성을 위한 제도 개선</li>
              <li>업종별 맞춤형 지원정책 개발 및 시행</li>
            </ol>
          </div>

          {/* 첨부파일 영역 */}
          <div className="border border-[#e6e6e6] rounded-8 p-20 mb-40">
            <h3 className="text-18 font-bold text-[#333] mb-16">첨부파일</h3>
            <div className="space-y-12">
              <div className="flex items-center justify-between py-12 px-16 bg-[#f8f9fa] rounded-6">
                <div className="flex items-center gap-12">
                  <div className="w-20 h-20 bg-[#5a33be] rounded-4 flex items-center justify-center">
                    <span className="text-white text-10 font-bold">PDF</span>
                  </div>
                  <span className="text-14 text-[#333]">2024년_외식업체_경영현황_분석보고서_전문.pdf</span>
                  <span className="text-12 text-[#999]">(15.2MB)</span>
                </div>
                <DownloadButton className="w-80 h-32 text-12" />
              </div>
              
              <div className="flex items-center justify-between py-12 px-16 bg-[#f8f9fa] rounded-6">
                <div className="flex items-center gap-12">
                  <div className="w-20 h-20 bg-[#28a745] rounded-4 flex items-center justify-center">
                    <span className="text-white text-10 font-bold">XLS</span>
                  </div>
                  <span className="text-14 text-[#333]">설문조사_원본데이터.xlsx</span>
                  <span className="text-12 text-[#999]">(2.8MB)</span>
                </div>
                <DownloadButton className="w-80 h-32 text-12" />
              </div>
              
              <div className="flex items-center justify-between py-12 px-16 bg-[#f8f9fa] rounded-6">
                <div className="flex items-center gap-12">
                  <div className="w-20 h-20 bg-[#dc3545] rounded-4 flex items-center justify-center">
                    <span className="text-white text-10 font-bold">PPT</span>
                  </div>
                  <span className="text-14 text-[#333]">연구결과_발표자료.pptx</span>
                  <span className="text-12 text-[#999]">(8.7MB)</span>
                </div>
                <DownloadButton className="w-80 h-32 text-12" />
              </div>
            </div>
          </div>
        </div>

        {/* 이전/다음 글 네비게이션 */}
        <div className="border-t border-[#e6e6e6] pt-30 mb-40">
          <div className="space-y-16">
            <div className="flex items-center justify-between py-16 px-20 border border-[#e6e6e6] rounded-6">
              <div className="flex items-center gap-12">
                <div className="w-24 h-24">
                  <img alt="이전 글" className="w-full h-full" src={iconPrev} />
                </div>
                <div>
                  <span className="text-12 text-[#999] block">이전 글</span>
                  <span className="text-14 text-[#333] font-medium">외식산업 디지털 전환 동향 및 성과분석</span>
                </div>
              </div>
              <span className="text-12 text-[#999]">2024.10.28</span>
            </div>
            
            <div className="flex items-center justify-between py-16 px-20 border border-[#e6e6e6] rounded-6">
              <div className="flex items-center gap-12">
                <div className="w-24 h-24">
                  <img alt="다음 글" className="w-full h-full" src={iconNext} />
                </div>
                <div>
                  <span className="text-12 text-[#999] block">다음 글</span>
                  <span className="text-14 text-[#333] font-medium">외식업 인력수급 현황 및 개선방안 연구</span>
                </div>
              </div>
              <span className="text-12 text-[#999]">2024.12.01</span>
            </div>
          </div>
        </div>

        {/* 목록으로 돌아가기 버튼 */}
        <div className="text-center mb-60">
          <button className="inline-flex items-center gap-8 bg-[#5a33be] text-white px-24 py-12 rounded-6 text-16 font-medium">
            <div className="w-20 h-20">
              <img alt="목록" className="w-full h-full filter invert" src={iconList} />
            </div>
            목록으로
          </button>
        </div>
      </div>

      {/* 푸터 */}
      <div className="absolute left-0 top-2200 w-full">
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

export default Detail