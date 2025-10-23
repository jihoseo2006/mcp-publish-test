import Header from "../components/Header";
import Footer from "../components/Footer";

// Figma asset constants
const iconDivider = "http://localhost:3845/assets/0d977cc7c6f9678ecca301a8c1719744562c579d.svg";
const iconView = "http://localhost:3845/assets/b2ca4a9da5ed47cd8212b60003e9b42b248aa42d.svg";
const iconLike = "http://localhost:3845/assets/dbfed8b95bdf7f561e0be852cb4f385cfaa4ecf3.svg";
const iconFile = "http://localhost:3845/assets/7af80b04e8beabde5bfcf43ba572c59a4d759e1b.svg";
const iconArrowLeft = "http://localhost:3845/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg";
const iconArrowRight = "http://localhost:3845/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg";
const iconArrowRightDouble = "http://localhost:3845/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg";
const iconSearch = "http://localhost:3845/assets/2943638af14fdebc680bfc19b832df80e9772713.svg";

// 공지사항 데이터
const notifications = [
  {
    id: 55,
    title: "[공고][서울특별시] 「외식기업 판로개척 인턴십」 참여자 4차 모집 공고",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: false,
    commentCount: null
  },
  {
    id: 54,
    title: "[공고][서울특별시] 「외식기업 판로개척 인턴십」 협력사업장 모집공고",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: null
  },
  {
    id: 53,
    title: "[한국외식산업연구원]2022 외식경영스타 아이디어 공모전",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: 12
  },
  {
    id: 52,
    title: "[공고][서울특별시] 「외식기업 판로개척 인턴십」 참여자 2차 모집 공고",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: "99+"
  },
  {
    id: 51,
    title: "[공고][한국외식산업연구원] 한국외식업중앙회 민간자격증 「외식운영관리사」 집필/문제출제",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: 1
  },
  {
    id: 50,
    title: "[한국외식산업연구원]2022 외식경영스타 아이디어 공모전",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: 1
  },
  {
    id: 49,
    title: "[KRBI] 2023년 1분기 외식산업경기전망지수",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: 1
  },
  {
    id: 48,
    title: "[알림] 상생누리 홍보자료",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    hasFile: true,
    commentCount: 1
  }
];

const Notification = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <Header />

      {/* 페이지 컨테이너 */}
      <main className="max-w-[1240px] mx-auto px-[100px] py-[60px]">
        {/* 페이지 제목 */}
        <div className="mb-12 text-center">
          <p className="font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#666666] mb-2">알림마당</p>
          <h1 className="font-['Pretendard:Bold',_sans-serif] text-[30px] text-[#333333]">공지사항</h1>
        </div>

        {/* 검색 영역 */}
        <div className="flex justify-center mb-[51px]">
          <div className="border border-[#838383] rounded-[100px] px-[24px] py-[13px] flex items-center gap-[223px]">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              className="font-['Pretendard:Regular',_sans-serif] text-[18px] text-[#989898] bg-transparent outline-none"
            />
            <img src={iconSearch} alt="검색" className="w-[24px] h-[24px]" />
          </div>
        </div>

        {/* 구분선 */}
        <div className="bg-[#333333] h-px w-full mb-0" />

        {/* 공지사항 리스트 */}
        <div className="space-y-0">
          {notifications.map((notification) => (
            <div key={notification.id} className="h-[121px] bg-white border-b border-[#d8dde5] relative">
              {/* 번호 */}
              <div className="absolute left-[34px] top-1/2 transform -translate-y-1/2 text-center">
                <span className="font-['Pretendard:SemiBold',_sans-serif] text-[18px] text-[#888888]">
                  {notification.id}
                </span>
              </div>

              {/* 제목 및 아이콘들 */}
              <div className="absolute left-[97px] top-[32px] flex items-center gap-[10px]">
                <h3 className="font-['Pretendard:Medium',_sans-serif] text-[20px] text-[#333333] leading-[20px]">
                  {notification.title}
                </h3>
                {notification.hasFile && (
                  <img src={iconFile} alt="첨부파일" className="w-[14px] h-[14px]" />
                )}
                {notification.commentCount && (
                  <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#193dd0]">
                    [{notification.commentCount}]
                  </span>
                )}
              </div>

              {/* 메타 정보 */}
              <div className="absolute left-[99px] top-[74px] flex items-center gap-[12px]">
                <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666]">
                  {notification.author}
                </span>
                <img src={iconDivider} alt="구분선" className="w-px h-[10px]" />
                <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666]">
                  {notification.date}
                </span>
                <img src={iconDivider} alt="구분선" className="w-px h-[10px]" />
                <div className="flex items-center gap-[4px]">
                  <img src={iconView} alt="조회수" className="w-[12px] h-[12px]" />
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666]">
                    {notification.views}
                  </span>
                </div>
                <img src={iconDivider} alt="구분선" className="w-px h-[10px]" />
                <div className="flex items-center gap-[4px]">
                  <img src={iconLike} alt="좋아요" className="w-[12px] h-[12px]" />
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666]">
                    {notification.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-[5px] mt-[40px]">
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img src={iconArrowLeft} alt="이전 페이지" className="w-[40px] h-[40px]" />
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[6px]">
            <span className="font-['Pretendard:ExtraBold',_sans-serif] text-[16px] text-[#5a33be] underline">1</span>
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">2</span>
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">3</span>
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">4</span>
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">5</span>
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img src={iconArrowRight} alt="다음 페이지" className="w-[40px] h-[40px]" />
          </button>
          
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img src={iconArrowRightDouble} alt="마지막 페이지" className="w-[40px] h-[40px]" />
          </button>
        </div>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Notification;