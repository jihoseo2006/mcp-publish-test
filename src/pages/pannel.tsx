import Header from "../components/Header";
import Button from "../components/Button";

// 이미지 URL들 (Figma에서 추출)
const imgRectangle3467948 =
  "http://localhost:3845/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png";
const imgRectangle3467953 =
  "http://localhost:3845/assets/221e392466f71f561707a2276e153b874eb3df2c.png";
const imgRectangle3467955 =
  "http://localhost:3845/assets/b191d8ba641908c9df0c5996528752d763535b32.png";
const imgRectangle3467957 =
  "http://localhost:3845/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
const imgMagnifyingGlass =
  "http://localhost:3845/assets/2943638af14fdebc680bfc19b832df80e9772713.svg";
const imgArrowsLeft =
  "http://localhost:3845/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg";
const imgArrowsRight =
  "http://localhost:3845/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg";
const imgArrowsRight1 =
  "http://localhost:3845/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg";

// 연구 보고서 데이터
const researchReports = [
  {
    id: 55,
    title: "[한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    category: "정기연구보고서",
    thumbnail: imgRectangle3467948,
    hasDownloads: true,
  },
  {
    id: 54,
    title:
      "[한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    category: "정기연구보고서",
    thumbnail: imgRectangle3467953,
    downloads: 33,
    hasDownloads: true,
  },
  {
    id: 53,
    title: "[한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    category: "정기연구보고서",
    thumbnail: imgRectangle3467955,
    downloads: "99+",
    hasDownloads: true,
  },
  {
    id: 52,
    title: "[한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    category: "정기연구보고서",
    thumbnail: imgRectangle3467957,
    hasDownloads: true,

  },
  {
    id: 51,
    title: "[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구",
    author: "KFIRI",
    date: "2023.01.01",
    views: 88,
    likes: 88,
    category: "정기연구보고서",
    thumbnail: imgRectangle3467948,
    hasDownloads: true,
  },
];

const tabMenus = [
  { name: "정기연구보고서", active: true },
  { name: "R&D리포트", active: false },
  { name: "통계연감", active: false },
  { name: "연구용역", active: false },
  { name: "정부용역정보", active: false },
];

export default function PannelPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 구분선 */}
      <div className="bg-[#e6e6e6] h-px w-full" />

      {/* 메인 컨텐츠 */}
      <main className="max-w-[1440px] mx-auto px-[100px] py-[60px]">
        {/* 페이지 타이틀 */}
        <div className="text-center mb-[60px]">
          <p className="font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#666666] mb-[8px]">
            외식정보
          </p>
          <h1 className="font-['Pretendard:Bold',_sans-serif] text-[30px] text-[#333333] mb-[30px]">
            K-FIRI
          </h1>

          {/* 검색 바 */}
          <div className="relative max-w-[340px] mx-auto">
            <div className="border border-[#838383] rounded-[100px] px-[24px] py-[13px] flex items-center justify-between">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className="flex-1 font-['Pretendard:Regular',_sans-serif] text-[18px] text-[#989898] outline-none bg-transparent"
              />
              <img
                src={imgMagnifyingGlass}
                alt="검색"
                className="w-[24px] h-[24px] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex gap-[40px] items-start justify-center mb-[60px]">
          {tabMenus.map((tab, index) => (
            <div key={index} className="flex flex-col items-center gap-[14px]">
              <div
                className={`font-['Pretendard:${
                  tab.active ? "Bold" : "Regular"
                }',_sans-serif] text-[20px] ${
                  tab.active ? "text-[#5a33be]" : "text-[#888888]"
                } cursor-pointer`}
              >
                {tab.name}
              </div>
              {tab.active && <div className="bg-[#5a33be] h-[2px] w-full" />}
            </div>
          ))}
        </div>

        {/* 연구 보고서 목록 */}
        <div className="space-y-0">
          {researchReports.map((report, index) => (
            <div
              key={report.id}
              className="border-b border-[#d8dde5] last:border-b-0"
            >
              {/* 첫 번째 항목 위에 굵은 선 */}
              {index === 0 && (
                <div className="bg-[#333333] h-px w-full mb-[40px]" />
              )}

              <div className="flex items-start gap-[40px] py-[40px]">
                {/* 썸네일 */}
                <div className="relative">
                  <div className="w-[140px] h-[178px] border border-[#d8dde5] overflow-hidden">
                    <img
                      src={report.thumbnail}
                      alt={report.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* 번호 */}
                  <div className="absolute top-[-10px] right-[-10px] font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#888888]">
                    {report.id}
                  </div>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 min-w-0">
                  {/* 카테고리 */}
                  <div className="font-['Pretendard:Bold',_sans-serif] text-[16px] text-[#5a33be] mb-[8px]">
                    {report.category}
                  </div>

                  {/* 제목과 다운로드 수 */}
                  <div className="flex items-start gap-[10px] mb-[20px]">
                    <h3 className="font-['Pretendard:Medium',_sans-serif] text-[20px] text-[#333333] flex-1 leading-[20px]">
                      {report.title}
                    </h3>
                    {report.downloads && (
                      <div className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#193dd0]">
                        [{report.downloads}]
                      </div>
                    )}
                  </div>

                  {/* 메타 정보 */}
                  <div className="space-y-[11px] mb-[20px]">
                    <div className="flex items-center gap-[51px]">
                      <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                        작성자
                      </span>
                      <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                        {report.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-[51px]">
                      <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                        작성일
                      </span>
                      <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                        {report.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-[51px]">
                      <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                        조회수
                      </span>
                      <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                        {report.views}
                      </span>
                    </div>
                    <div className="flex items-center gap-[51px]">
                      <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                        좋아요
                      </span>
                      <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                        {report.likes}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 파일 받기 버튼 */}
                <div className="flex-shrink-0">
                  {report.hasDownloads && (
                    <Button />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-[5px] mt-[60px]">
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img src={imgArrowsLeft} alt="이전" className="w-[24px] h-[24px]" />
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[6px]">
            <span className="font-['Pretendard:ExtraBold',_sans-serif] text-[16px] text-[#5a33be] underline decoration-solid">
              1
            </span>
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">
              2
            </span>
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">
              3
            </span>
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">
              4
            </span>
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[16px] text-[#9a9a9a]">
              5
            </span>
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img
              src={imgArrowsRight}
              alt="다음"
              className="w-[24px] h-[24px]"
            />
          </button>

          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <img
              src={imgArrowsRight1}
              alt="마지막"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-[#ececec]">
        <div className="max-w-[1440px] mx-auto px-[100px] py-[40px]">
          {/* 푸터 링크 */}
          <div className="flex gap-[103px] mb-[28px]">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[12px] text-[#444444] cursor-pointer">
              개인정보처리방침
            </span>
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[12px] text-[#444444] cursor-pointer">
              사이트이용약관
            </span>
          </div>

          {/* 기관 정보 */}
          <p className="font-['Pretendard:Light',_sans-serif] text-[10px] text-[#222222] mb-[17px]">
            (사)한국외식업중앙회 한국외식산업연구원
          </p>

          {/* 주소 및 연락처 */}
          <div className="font-['Pretendard:Light',_sans-serif] text-[10px] text-[#444444] space-y-[7px] mb-[16px]">
            <p>
              <span className="font-['Pretendard:Bold',_sans-serif]">주소</span>{" "}
              (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층
              한국외식산업연구원 <span className="text-[#d1d1d1]">ㅣ</span>{" "}
              <span className="font-['Pretendard:Bold',_sans-serif]">
                사업자등록번호
              </span>{" "}
              203-82-32145 <span className="text-[#d1d1d1]">ㅣ</span>{" "}
              <span className="font-['Pretendard:Bold',_sans-serif]">
                대표자
              </span>{" "}
              전강식
            </p>
            <p>
              <span className="font-['Pretendard:Bold',_sans-serif]">TEL</span>{" "}
              02-6191-2908 <span className="text-[#d1d1d1]">ㅣ</span>{" "}
              <span className="font-['Pretendard:Bold',_sans-serif]">FAX</span>{" "}
              02-6191-2998 <span className="text-[#d1d1d1]">ㅣ</span>{" "}
              <span className="font-['Pretendard:Bold',_sans-serif]">
                E-mail
              </span>{" "}
              isaacsgod@kfiri.org <span className="text-[#d1d1d1]">ㅣ</span>{" "}
              <span className="font-['Pretendard:Bold',_sans-serif]">
                개인정보보호정책 책임자
              </span>{" "}
              김삼희
            </p>
          </div>

          {/* 저작권 */}
          <p className="font-['Pretendard:Regular',_sans-serif] text-[10px] text-[#b6b6b6]">
            Copyright © 2017 한국외식산업연구원 Korea food industry Research
            Institute All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
