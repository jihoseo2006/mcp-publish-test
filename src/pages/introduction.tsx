
const Introduction = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white border-b border-[#d8dde5]">
        <div className="max-w-1440 mx-auto px-20">
          {/* Top Navigation Bar */}
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

      {/* Page Title and Breadcrumb */}
      <div className="bg-[#f4f8ff] py-40">
        <div className="max-w-1440 mx-auto px-20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-32 font-bold text-[#333333] mb-8">연구원소개</h2>
              <div className="flex items-center text-14 text-[#666666]">
                <span>HOME</span>
                <span className="mx-8">&gt;</span>
                <span>연구원소개</span>
                <span className="mx-8">&gt;</span>
                <span className="text-[#5a33be]">인사말</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-[#d8dde5]">
        <div className="max-w-1440 mx-auto px-20">
          <nav className="flex">
            <button className="px-30 py-16 text-16 font-medium text-[#5a33be] bg-[#f4f8ff] border-b-2 border-[#5a33be]">
              인사말
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              연구원소개
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              조직도
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              주요연혁
            </button>
            <button className="px-30 py-16 text-16 font-medium text-[#666666] hover:text-[#5a33be]">
              찾아오시는길
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-1440 mx-auto px-20 py-60">
        <div className="flex gap-60">
          {/* Text Content */}
          <div className="flex-1">
            <div className="mb-40">
              <h3 className="text-28 font-bold text-[#333333] mb-24">안녕하십니까.</h3>
              <div className="text-16 text-[#444444] leading-28 space-y-20">
                <p>
                  한국외식산업연구원 홈페이지를 방문해주신 여러분을 진심으로 환영합니다.
                </p>
                <p>
                  우리나라 외식산업은 지속적인 성장을 통해 국민경제에서 중요한 위치를 차지하고 있으며, 
                  코로나19 팬데믹 이후 새로운 변화와 도전에 직면하고 있습니다.
                </p>
                <p>
                  한국외식산업연구원은 외식산업의 발전과 경쟁력 강화를 위해 체계적이고 전문적인 
                  연구를 수행하고 있으며, 정책 개발과 산업 지원을 통해 외식산업의 지속가능한 
                  성장을 도모하고 있습니다.
                </p>
                <p>
                  앞으로도 외식산업의 미래를 선도하는 연구기관으로서 여러분의 많은 관심과 
                  참여를 부탁드리며, 항상 최선을 다해 나아가겠습니다.
                </p>
                <p className="mt-40 text-18 font-medium text-[#333333]">
                  한국외식산업연구원 원장
                </p>
              </div>
            </div>
          </div>

          {/* Director Photo */}
          <div className="w-280">
            <div className="bg-[#f4f5f6] rounded-8 p-20 text-center">
              <div className="w-200 h-240 bg-[#e0e0e0] rounded-4 mx-auto mb-16 flex items-center justify-center text-[#888888]">
                원장 사진
              </div>
              <p className="text-16 font-medium text-[#333333]">김○○ 원장</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f4f5f6] border-t border-[#d8dde5] py-40">
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

export default Introduction