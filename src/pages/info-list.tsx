
const InfoList = () => {
  // Sample data for research reports
  const reports = [
    {
      id: 1,
      title: "2024년 외식산업 동향 분석 및 전망",
      author: "한국외식산업연구원",
      date: "2024.03.15",
      views: 1234,
      likes: 89,
      thumbnail: "/api/placeholder/200/120"
    },
    {
      id: 2,
      title: "포스트 코로나 시대 외식산업 변화와 대응방안",
      author: "김연구",
      date: "2024.03.10",
      views: 987,
      likes: 67,
      thumbnail: "/api/placeholder/200/120"
    },
    {
      id: 3,
      title: "ESG 경영이 외식기업에 미치는 영향 연구",
      author: "이분석",
      date: "2024.03.05",
      views: 756,
      likes: 45,
      thumbnail: "/api/placeholder/200/120"
    },
    {
      id: 4,
      title: "외식산업 디지털 전환 현황 및 발전방향",
      author: "박기획",
      date: "2024.02.28",
      views: 834,
      likes: 52,
      thumbnail: "/api/placeholder/200/120"
    },
    {
      id: 5,
      title: "K-푸드 글로벌화 전략 및 성과 분석",
      author: "최전략",
      date: "2024.02.20",
      views: 1156,
      likes: 78,
      thumbnail: "/api/placeholder/200/120"
    },
    {
      id: 6,
      title: "외식산업 종사자 교육훈련 실태조사",
      author: "정조사",
      date: "2024.02.15",
      views: 642,
      likes: 34,
      thumbnail: "/api/placeholder/200/120"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-[#d8dde5]">
        <div className="max-w-1440 mx-auto px-20">
          <div className="flex items-center justify-between py-15">
            <div className="flex items-center">
              <h1 className="text-28 font-bold text-[#5a33be]">한국외식산업연구원</h1>
            </div>
            <nav className="flex items-center space-x-40">
              <a href="#" className="text-16 text-[#333333] hover:text-[#5a33be]">연구원소개</a>
              <a href="#" className="text-16 text-[#333333] hover:text-[#5a33be]">연구사업</a>
              <a href="#" className="text-16 text-[#333333] hover:text-[#5a33be]">외식정보</a>
              <a href="#" className="text-16 text-[#333333] hover:text-[#5a33be]">소통공간</a>
              <a href="#" className="text-16 text-[#333333] hover:text-[#5a33be]">알림마당</a>
            </nav>
          </div>
        </div>
      </header>

      {/* K-FIRI Page Title */}
      <div className="bg-[#f4f8ff] py-40">
        <div className="max-w-1440 mx-auto px-20">
          <div className="flex items-center justify-between mb-24">
            <h2 className="text-36 font-bold text-[#5a33be]">K-FIRI</h2>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center gap-12">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="검색어를 입력하세요"
                className="w-full px-16 py-12 border border-[#bfc3c8] rounded-4 text-16 focus:outline-none focus:border-[#5a33be]"
              />
              <button className="absolute right-12 top-1/2 transform -translate-y-1/2 text-[#888888] hover:text-[#5a33be]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M19 19l-4.35-4.35M15 8A7 7 0 118 15a7 7 0 017-7z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
            <button className="px-24 py-12 bg-[#5a33be] text-white text-16 font-medium rounded-4 hover:bg-[#4a2ba0]">
              검색
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-[#d8dde5]">
        <div className="max-w-1440 mx-auto px-20">
          <nav className="flex">
            <button className="px-30 py-16 text-16 font-medium text-[#5a33be] bg-[#f4f8ff] border-b-2 border-[#5a33be]">
              정기연구보고서
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              R&D리포트
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              통계연감
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              연구용역
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              정부용역정보
            </button>
          </nav>
        </div>
      </div>

      {/* Research Reports Grid */}
      <main className="max-w-1440 mx-auto px-20 py-40">
        <div className="grid grid-cols-2 gap-32">
          {reports.map((report) => (
            <div key={report.id} className="bg-white border border-[#d8dde5] rounded-8 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Thumbnail */}
              <div className="relative">
                <div className="w-full h-200 bg-[#f4f5f6] flex items-center justify-center text-[#888888]">
                  보고서 썸네일
                </div>
              </div>
              
              {/* Content */}
              <div className="p-24">
                <h3 className="text-18 font-bold text-[#333333] mb-12 line-clamp-2 leading-26">
                  {report.title}
                </h3>
                
                <div className="flex items-center justify-between mb-16">
                  <span className="text-14 text-[#666666]">작성자: {report.author}</span>
                </div>
                
                <div className="flex items-center justify-between mb-20">
                  <span className="text-14 text-[#888888]">{report.date}</span>
                  <div className="flex items-center gap-16 text-14 text-[#888888]">
                    <span>조회 {report.views}</span>
                    <span>♥ {report.likes}</span>
                  </div>
                </div>
                
                <button className="w-full py-12 bg-[#5a33be] text-white text-16 font-medium rounded-4 hover:bg-[#4a2ba0] transition-colors">
                  파일받기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-60">
          <div className="flex items-center gap-8">
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#888888] hover:bg-[#f4f5f6]">
              &lt;
            </button>
            <button className="w-32 h-32 bg-[#5a33be] text-white rounded-4 flex items-center justify-center font-medium">
              1
            </button>
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#666666] hover:bg-[#f4f5f6]">
              2
            </button>
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#666666] hover:bg-[#f4f5f6]">
              3
            </button>
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#666666] hover:bg-[#f4f5f6]">
              4
            </button>
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#666666] hover:bg-[#f4f5f6]">
              5
            </button>
            <button className="w-32 h-32 border border-[#bfc3c8] rounded-4 flex items-center justify-center text-[#888888] hover:bg-[#f4f5f6]">
              &gt;
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f4f5f6] border-t border-[#d8dde5] py-40 mt-60">
        <div className="max-w-1440 mx-auto px-20">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-20 font-bold text-[#333333] mb-16">한국외식산업연구원</h4>
              <div className="text-14 text-[#666666] space-y-4">
                <p>주소: 서울특별시 서초구 강남대로 27길 28</p>
                <p>전화: 02-589-1871 | 팩스: 02-589-1872</p>
                <p>이메일: info@kfiri.org</p>
              </div>
            </div>
            <div className="text-12 text-[#888888]">
              <p>© 2024 한국외식산업연구원. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default InfoList