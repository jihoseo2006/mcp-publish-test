import ArrowRightDouble from "~/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg?react";
import ArrowLeft from "~/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg?react";
import MagnifyingGlass from "~/assets/2943638af14fdebc680bfc19b832df80e9772713.svg?react";
import ArrowRight from "~/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg?react";
import Thumbnail1 from "~/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png";
import Thumbnail2 from "~/assets/221e392466f71f561707a2276e153b874eb3df2c.png";
import NewBadge from "~/assets/99092354c834b9f51ca53ff2576334d67429c242.png";
import Thumbnail4 from "~/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
import Thumbnail3 from "~/assets/b191d8ba641908c9df0c5996528752d763535b32.png";
import DownloadButton from "~/components/download-button";
import Header from "~/components/header";

export default function InfoList() {
  const articles = [
    {
      id: 55,
      thumbnail: Thumbnail1,
      category: "정기연구보고서",
      title: "[한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
    {
      id: 54,
      thumbnail: null,
      category: "정기연구보고서",
      title: "[한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)",
      commentCount: 33,
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
      hasNewBadge: true,
    },
    {
      id: 53,
      thumbnail: Thumbnail2,
      category: "정기연구보고서",
      title: "[한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구",
      commentCount: "99+",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
    {
      id: 52,
      thumbnail: Thumbnail3,
      category: "정기연구보고서",
      title: "[한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
    {
      id: 51,
      thumbnail: Thumbnail4,
      category: "정기연구보고서",
      title: "[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* Header */}
      <div className="h-[131px] w-full">
        <Header />
      </div>

      <div className="h-[1px] w-full bg-[#e6e6e6]" />

      {/* Breadcrumb */}
      <p className="text-18 mt-60 text-center font-['Pretendard'] leading-[18px] font-medium text-nowrap whitespace-pre text-[#666666] not-italic">
        외식정보
      </p>

      {/* Page Title */}
      <p className="text-30 mt-28 text-center font-['Pretendard'] leading-30 font-bold text-nowrap whitespace-pre text-[#333333] not-italic">
        K-FIRI
      </p>

      {/* Search Bar */}
      <div className="mx-auto mt-30 w-[380px] rounded-[100px] border border-solid border-[#838383]">
        <div className="relative box-border flex flex-col items-start gap-10 overflow-clip rounded-[inherit] px-24 py-13">
          <div className="flex w-full items-center gap-[223px]">
            <div className="text-18 flex flex-col justify-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#989898] not-italic">
              <p className="leading-[18px] whitespace-pre">검색어를 입력해주세요.</p>
            </div>
            <div className="size-24">
              <MagnifyingGlass className="size-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-30 flex items-start justify-center gap-40">
        <div className="flex flex-col items-start gap-14">
          <div className="text-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-bold text-nowrap text-[#5a33be] not-italic">
            <p className="leading-[18px] whitespace-pre">정기연구보고서</p>
          </div>
          <div className="h-[2px] w-full border border-solid border-[#5a33be] bg-[#5a33be]" />
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">R&D리포트</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">통계연감</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">연구용역</p>
        </div>
        <div className="text-20 flex flex-col justify-center text-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#888888] not-italic">
          <p className="leading-[18px] whitespace-pre">정부용역정보</p>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-18 h-[1px] w-[1240px] bg-[#333333]" />

      {/* Article List */}
      <div className="mx-auto mt-40 w-[1240px]">
        {articles.map((article, index) => (
          <div key={article.id}>
            <div className="flex items-start gap-30 py-30">
              {/* Thumbnail */}
              <div className="h-[160px] w-[140px] shrink-0 border border-solid border-[#d8dde5]">
                {article.thumbnail ? (
                  <img src={article.thumbnail} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-[#f4f5f6]" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-16 mb-14 flex flex-col justify-center font-['Pretendard'] leading-[0] font-bold text-[#5a33be] not-italic">
                  <p className="leading-[13px]">{article.category}</p>
                </div>

                <div className="mb-14 flex items-center gap-10 leading-[0] text-nowrap not-italic">
                  <div className="text-20 relative flex flex-col justify-center font-['Pretendard'] font-medium text-[#333333]">
                    <p className="leading-20 whitespace-pre">{article.title}</p>
                  </div>
                  {article.commentCount && (
                    <div className="text-14 flex flex-col justify-center font-['Pretendard'] font-semibold text-[#193dd0]">
                      <p className="leading-24 text-nowrap whitespace-pre">[{article.commentCount}]</p>
                    </div>
                  )}
                </div>

                <div className="text-14 flex gap-20">
                  <div className="flex gap-5">
                    <p className="font-['Pretendard'] font-semibold text-[#333333]">작성자</p>
                    <p className="font-['Pretendard'] font-normal text-[#444444]">{article.author}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-['Pretendard'] font-semibold text-[#333333]">작성일</p>
                    <p className="font-['Pretendard'] font-normal text-[#444444]">{article.date}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-['Pretendard'] font-semibold text-[#333333]">조회수</p>
                    <p className="font-['Pretendard'] font-normal text-[#444444]">{article.views}</p>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-['Pretendard'] font-semibold text-[#333333]">좋아요</p>
                    <p className="font-['Pretendard'] font-normal text-[#444444]">{article.likes}</p>
                  </div>
                </div>

                {article.hasNewBadge && (
                  <div className="mt-10 size-30 opacity-50 mix-blend-multiply">
                    <img src={NewBadge} alt="new" className="h-full w-full" />
                  </div>
                )}
              </div>

              {/* Number */}
              <div className="text-18 flex w-30 shrink-0 flex-col justify-center font-['Pretendard'] leading-[0] font-medium text-[#888888] not-italic">
                <p className="leading-[13px]">{article.id}</p>
              </div>

              {/* Download Button */}
              <div className="h-56 w-[140px] shrink-0">
                <DownloadButton />
              </div>
            </div>

            {index < articles.length - 1 && <div className="h-[1px] w-full bg-[#d8dde5]" />}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-60 flex items-center justify-center gap-5 bg-white">
        <div className="size-40">
          <ArrowLeft className="size-full" />
        </div>
        <div className="rounded-6 size-40">
          <p className="text-16 pt-13 text-center font-['Pretendard'] leading-14 font-extrabold text-[#5a33be] underline decoration-solid">
            1
          </p>
        </div>
        <div className="size-40">
          <p className="text-16 pt-13 text-center font-['Pretendard'] leading-14 font-semibold text-[#9a9a9a]">2</p>
        </div>
        <div className="size-40">
          <p className="text-16 pt-13 text-center font-['Pretendard'] leading-14 font-semibold text-[#9a9a9a]">3</p>
        </div>
        <div className="size-40">
          <p className="text-16 pt-13 text-center font-['Pretendard'] leading-14 font-semibold text-[#9a9a9a]">4</p>
        </div>
        <div className="size-40">
          <p className="text-16 pt-13 text-center font-['Pretendard'] leading-14 font-semibold text-[#9a9a9a]">5</p>
        </div>
        <div className="size-40">
          <ArrowRight className="size-full" />
        </div>
        <div className="size-40">
          <ArrowRightDouble className="size-full" />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-140">
        <div className="h-[190px] w-full bg-white" />
        <div className="absolute h-[1px] w-full bg-[#ececec]" />
        <p className="text-10 mt-73 ml-100 font-['Pretendard'] leading-16 font-light text-nowrap whitespace-pre text-[#222222] not-italic">
          (사)한국외식업중앙회 한국외식산업연구원{" "}
        </p>
        <div className="text-10 mt-27 ml-100 font-['Pretendard'] leading-[0] font-light text-nowrap whitespace-pre text-[#444444] not-italic">
          <p className="mb-0 leading-16">
            <span className="font-['Pretendard'] font-bold not-italic">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">사업자등록번호</span>
            <span> 203-82-32145 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">대표자</span>
            <span> 전강식 </span>
          </p>
          <p className="leading-16">
            <span className="font-['Pretendard'] font-bold not-italic">TEL </span>
            <span> 02-6191-2908 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">FAX</span>
            <span> 02-6191-2998 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">E-mail</span>
            <span> isaacsgod@kfiri.org </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>{" "}
            <span className="font-['Pretendard'] font-bold not-italic">개인정보보호정책 책임자</span>
            <span> 김삼희</span>
          </p>
        </div>
        <p className="text-10 mt-27 ml-103 font-['Pretendard'] leading-[15px] font-normal text-nowrap whitespace-pre text-[#b6b6b6] not-italic">
          Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
        </p>
        <p className="text-12 absolute top-[1957px] ml-100 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          개인정보처리방침
        </p>
        <p className="text-12 absolute top-[1957px] ml-203 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          사이트이용약관
        </p>
      </div>
    </div>
  );
}
