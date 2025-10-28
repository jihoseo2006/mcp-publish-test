
const Detail = () => {
  // Sample comments data
  const comments = [
    {
      id: 1,
      author: "김외식",
      date: "2024.03.16 14:30",
      content: "매우 유익한 연구 내용입니다. 외식산업의 현재 상황과 미래 전망을 잘 파악할 수 있었습니다."
    },
    {
      id: 2,
      author: "이사장",
      date: "2024.03.16 16:45",
      content: "포스트 코로나 시대의 외식산업 변화에 대한 분석이 인상적입니다. 실무에 많은 도움이 될 것 같습니다."
    },
    {
      id: 3,
      author: "박연구",
      date: "2024.03.17 09:20",
      content: "통계 자료와 분석이 체계적으로 잘 정리되어 있네요. 감사합니다."
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

      <main className="max-w-1440 mx-auto px-20 py-40">
        {/* Post Information Header */}
        <div className="bg-white border border-[#d8dde5] rounded-8 p-40 mb-32">
          <div className="flex gap-40">
            {/* Thumbnail */}
            <div className="w-300 h-200 bg-[#f4f5f6] rounded-8 flex items-center justify-center text-[#888888] flex-shrink-0">
              보고서 썸네일
            </div>
            
            {/* Post Info */}
            <div className="flex-1">
              <div className="mb-16">
                <span className="px-12 py-4 bg-[#5a33be] text-white text-12 rounded-4 font-medium">
                  정기연구보고서
                </span>
              </div>
              
              <h2 className="text-28 font-bold text-[#333333] mb-20 leading-36">
                2024년 외식산업 동향 분석 및 전망
              </h2>
              
              <div className="grid grid-cols-2 gap-x-40 gap-y-12 text-14 text-[#666666]">
                <div className="flex">
                  <span className="w-80 text-[#888888]">작성자</span>
                  <span>한국외식산업연구원</span>
                </div>
                <div className="flex">
                  <span className="w-80 text-[#888888]">작성일</span>
                  <span>2024.03.15</span>
                </div>
                <div className="flex">
                  <span className="w-80 text-[#888888]">조회수</span>
                  <span>1,234</span>
                </div>
                <div className="flex">
                  <span className="w-80 text-[#888888]">좋아요</span>
                  <span className="text-[#5a33be]">♥ 89</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* File Download Section */}
        <div className="bg-[#f4f8ff] border border-[#d8dde5] rounded-8 p-24 mb-32">
          <h3 className="text-18 font-bold text-[#333333] mb-16">첨부파일</h3>
          <div className="space-y-12">
            <div className="flex items-center justify-between p-16 bg-white rounded-4 border border-[#d8dde5]">
              <div className="flex items-center gap-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#5a33be]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div>
                  <p className="text-16 font-medium text-[#333333]">2024년_외식산업_동향분석_및_전망.pdf</p>
                  <p className="text-12 text-[#888888]">5.2MB</p>
                </div>
              </div>
              <button className="px-16 py-8 bg-[#5a33be] text-white text-14 rounded-4 hover:bg-[#4a2ba0]">
                다운로드
              </button>
            </div>
            
            <div className="flex items-center justify-between p-16 bg-white rounded-4 border border-[#d8dde5]">
              <div className="flex items-center gap-12">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#193dd0]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div>
                  <p className="text-16 font-medium text-[#333333]">부록_통계자료.xlsx</p>
                  <p className="text-12 text-[#888888]">1.8MB</p>
                </div>
              </div>
              <button className="px-16 py-8 bg-[#5a33be] text-white text-14 rounded-4 hover:bg-[#4a2ba0]">
                다운로드
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-24 mb-40">
          <button className="flex items-center gap-8 px-24 py-12 border border-[#5a33be] text-[#5a33be] rounded-4 hover:bg-[#5a33be] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            좋아요 (89)
          </button>
          
          <button className="flex items-center gap-8 px-24 py-12 border border-[#666666] text-[#666666] rounded-4 hover:bg-[#666666] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            공유하기
          </button>
          
          <button className="flex items-center gap-8 px-24 py-12 border border-[#666666] text-[#666666] rounded-4 hover:bg-[#666666] hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            스크랩
          </button>
        </div>

        {/* Comments Section */}
        <div className="border border-[#d8dde5] rounded-8 p-32">
          <h3 className="text-20 font-bold text-[#333333] mb-24">댓글 ({comments.length})</h3>
          
          {/* Comment Input */}
          <div className="mb-32 p-20 bg-[#f4f5f6] rounded-8">
            <textarea 
              placeholder="댓글을 입력해주세요."
              className="w-full h-100 p-16 border border-[#bfc3c8] rounded-4 resize-none text-14 focus:outline-none focus:border-[#5a33be]"
            ></textarea>
            <div className="flex justify-end mt-12">
              <button className="px-20 py-8 bg-[#5a33be] text-white text-14 rounded-4 hover:bg-[#4a2ba0]">
                댓글 등록
              </button>
            </div>
          </div>
          
          {/* Comments List */}
          <div className="space-y-20">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b border-[#e8eaed] pb-20 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-12">
                    <span className="text-16 font-medium text-[#333333]">{comment.author}</span>
                    <span className="text-12 text-[#888888]">{comment.date}</span>
                  </div>
                  <div className="flex items-center gap-8 text-12 text-[#888888]">
                    <button className="hover:text-[#5a33be]">수정</button>
                    <span>|</span>
                    <button className="hover:text-[#5a33be]">삭제</button>
                  </div>
                </div>
                <p className="text-14 text-[#444444] leading-20">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-40">
          <div className="flex gap-16">
            <button className="px-20 py-12 border border-[#bfc3c8] text-[#666666] rounded-4 hover:bg-[#f4f5f6] transition-colors">
              ← 이전글
            </button>
            <button className="px-20 py-12 border border-[#bfc3c8] text-[#666666] rounded-4 hover:bg-[#f4f5f6] transition-colors">
              다음글 →
            </button>
          </div>
          
          <button className="px-24 py-12 bg-[#5a33be] text-white rounded-4 hover:bg-[#4a2ba0] transition-colors">
            목록으로
          </button>
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

export default Detail