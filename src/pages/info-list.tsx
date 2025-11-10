import Header from "~/components/header";
import DownloadButton from "~/components/download-button";
import SearchIcon from "~/assets/2943638af14fdebc680bfc19b832df80e9772713.svg?react";
import ArrowLeftIcon from "~/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg?react";
import ArrowRightIcon from "~/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg?react";

const InfoList = () => {
  // Mock data for demonstration
  const reports = [
    {
      id: 1,
      category: "정기보고서",
      title: "2024년 1분기 외식산업 동향 분석",
      date: "2024.03.15",
      author: "연구팀",
      views: 1245,
    },
    {
      id: 2,
      category: "정기보고서",
      title: "외식업체 경영실태 조사 결과",
      date: "2024.02.28",
      author: "연구팀",
      views: 987,
    },
    {
      id: 3,
      category: "정기보고서",
      title: "2023년 외식산업 트렌드 리포트",
      date: "2024.01.20",
      author: "연구팀",
      views: 2156,
    },
    {
      id: 4,
      category: "정기보고서",
      title: "외식업 디지털 전환 현황 분석",
      date: "2023.12.10",
      author: "연구팀",
      views: 1432,
    },
    {
      id: 5,
      category: "정기보고서",
      title: "글로벌 외식산업 동향 및 전망",
      date: "2023.11.25",
      author: "연구팀",
      views: 1678,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-1200 mx-auto px-80 py-80">
        {/* Page Header */}
        <div className="mb-60">
          <h1 className="text-32 font-bold text-[#1C1B1F] mb-12">K-FIRI 정기연구보고서</h1>
          <p className="text-16 text-[#666666]">
            한국외식산업연구원의 정기 연구보고서를 확인하실 수 있습니다.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-40">
          <div className="flex gap-12">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full h-48 pl-48 pr-16 border-1 border-[#D8DDE5] rounded-8 text-14 placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#193DD0]"
                aria-label="보고서 검색"
              />
              <div className="absolute left-16 top-1/2 -translate-y-1/2">
                <SearchIcon className="w-24 h-24" />
              </div>
            </div>
            <button className="px-32 h-48 bg-[#193DD0] text-white rounded-8 text-14 font-medium hover:bg-[#1230A0] active:bg-[#0D2080]">
              검색
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-24">
          <p className="text-14 text-[#555555]">
            전체 <span className="font-semibold text-[#193DD0]">{reports.length}</span>건
          </p>
          <div className="flex items-center gap-12">
            <select 
              className="h-36 px-12 border-1 border-[#D8DDE5] rounded-4 text-14 text-[#555555] focus:outline-none focus:border-[#193DD0]"
              aria-label="정렬 기준"
            >
              <option value="latest">최신순</option>
              <option value="views">조회순</option>
              <option value="title">제목순</option>
            </select>
          </div>
        </div>

        {/* List Table */}
        <div className="border-t-2 border-[#1C1B1F]">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-16 px-24 py-16 bg-[#F8F9FA] border-b-1 border-[#E5E8EB] text-14 font-semibold text-[#555555]">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-2 text-center">구분</div>
            <div className="col-span-5">제목</div>
            <div className="col-span-2 text-center">작성일</div>
            <div className="col-span-1 text-center">조회</div>
            <div className="col-span-1 text-center">첨부</div>
          </div>

          {/* Table Body */}
          {reports.map((report, index) => (
            <div
              key={report.id}
              className="grid grid-cols-12 gap-16 px-24 py-20 border-b-1 border-[#E5E8EB] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              <div className="col-span-1 text-center text-14 text-[#555555]">
                {reports.length - index}
              </div>
              <div className="col-span-2 text-center">
                <span className="inline-block px-12 py-4 bg-[#E8F0FE] text-[#193DD0] rounded-4 text-12 font-medium">
                  {report.category}
                </span>
              </div>
              <div className="col-span-5">
                <h3 className="text-15 text-[#1C1B1F] font-medium hover:text-[#193DD0] line-clamp-1">
                  {report.title}
                </h3>
              </div>
              <div className="col-span-2 text-center text-14 text-[#555555]">
                {report.date}
              </div>
              <div className="col-span-1 text-center text-14 text-[#555555]">
                {report.views.toLocaleString()}
              </div>
              <div className="col-span-1 flex justify-center">
                <DownloadButton text="" className="!p-8" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-8 mt-60">
          <button 
            className="w-36 h-36 flex items-center justify-center border-1 border-[#D8DDE5] rounded-4 hover:bg-[#F5F5F5] disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="이전 페이지"
          >
            <ArrowLeftIcon className="w-24 h-24" />
          </button>
          
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-36 h-36 flex items-center justify-center rounded-4 text-14 font-medium transition-colors ${
                page === 1
                  ? "bg-[#193DD0] text-white"
                  : "text-[#555555] hover:bg-[#F5F5F5]"
              }`}
              aria-label={`${page}페이지`}
              aria-current={page === 1 ? "page" : undefined}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="w-36 h-36 flex items-center justify-center border-1 border-[#D8DDE5] rounded-4 hover:bg-[#F5F5F5]"
            aria-label="다음 페이지"
          >
            <ArrowRightIcon className="w-24 h-24" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default InfoList;