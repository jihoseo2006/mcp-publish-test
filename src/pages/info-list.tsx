import ArrowRightDouble from "~/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg?react";
import ArrowLeft from "~/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg?react";
import SearchIcon from "~/assets/2943638af14fdebc680bfc19b832df80e9772713.svg?react";
import ArrowRight from "~/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg?react";
import Thumbnail1 from "~/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png";
import Thumbnail2 from "~/assets/221e392466f71f561707a2276e153b874eb3df2c.png";
import Thumbnail4 from "~/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
import Thumbnail3 from "~/assets/b191d8ba641908c9df0c5996528752d763535b32.png";
import DownloadButton from "~/components/download-button";
import Header from "~/components/header";

const InfoList = () => {
  const articles = [
    {
      id: 55,
      thumbnail: Thumbnail1,
      title: "[한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
    {
      id: 54,
      thumbnail: Thumbnail2,
      title: "[한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
      comments: 33,
    },
    {
      id: 53,
      thumbnail: Thumbnail3,
      title: "[한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
      comments: 99,
      featured: true,
    },
    {
      id: 52,
      thumbnail: Thumbnail4,
      title: "[한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
      featured: true,
    },
    {
      id: 51,
      thumbnail: Thumbnail1,
      title: "[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구",
      author: "KFIRI",
      date: "2023.01.01",
      views: 88,
      likes: 88,
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white">
      {/* 헤더 */}
      <Header />

      {/* 구분선 */}
      <div className="h-[1px] w-full bg-[#e6e6e6]" />

      {/* 페이지 타이틀 */}
      <div className="relative">
        <p className="pt-[60px] text-center font-['Pretendard'] text-[18px] leading-[18px] font-medium text-[#666666]">
          외식정보
        </p>
        <p className="pt-[9px] text-center font-['Pretendard'] text-[30px] leading-[30px] font-bold text-[#333333]">
          K-FIRI
        </p>
      </div>

      {/* 검색창 */}
      <div className="mx-auto mt-[30px] w-[340px] rounded-[100px] border border-solid border-[#838383]">
        <div className="box-border flex items-center justify-between px-[24px] py-[13px]">
          <p className="font-['Pretendard'] text-[18px] leading-[18px] text-[#989898]">검색어를 입력해주세요.</p>
          <SearchIcon className="size-[24px]" />
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="flex items-start justify-center gap-[40px] pt-[38px]">
        <div className="flex shrink-0 flex-col items-start gap-[14px]">
          <div className="flex flex-col justify-center font-['Pretendard'] text-[20px] leading-[0] font-bold text-nowrap text-[#5a33be]">
            <p className="leading-[18px] whitespace-pre">정기연구보고서</p>
          </div>
          <div className="h-[2px] w-full shrink-0 border border-solid border-[#5a33be] bg-[#5a33be]" />
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">R&D리포트</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">통계연감</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">연구용역</p>
        </div>
        <div className="flex flex-col justify-center text-center font-['Pretendard'] text-[20px] leading-[0] text-nowrap text-[#888888]">
          <p className="leading-[18px] whitespace-pre">정부용역정보</p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mx-auto mt-[38px] h-[1px] w-[1240px] bg-[#333333]" />

      {/* 게시글 목록 */}
      <div className="mx-auto max-w-[1240px] pt-[44px]">
        {articles.map((article, index) => (
          <div key={article.id}>
            <div className="flex items-start gap-[20px] py-[20px]">
              {/* 썸네일 */}
              <div
                className={`h-[177px] w-[140px] shrink-0 border border-solid border-[#d8dde5] ${index === 1 ? "bg-[#f4f5f6]" : ""}`}
              >
                {index !== 1 && (
                  <img alt="" className="pointer-events-none h-full w-full object-cover" src={article.thumbnail} />
                )}
              </div>

              {/* 번호 */}
              <div className="flex w-[30px] flex-col justify-center font-['Pretendard'] text-[18px] leading-[0] font-medium text-[#888888]">
                <p className="leading-[13px]">{article.id}</p>
              </div>

              {/* 콘텐츠 */}
              <div className="flex-1">
                <p className="mb-[14px] font-['Pretendard'] text-[16px] leading-[13px] font-bold text-[#5a33be]">
                  정기연구보고서
                </p>

                <div className="mb-[16px] flex items-center gap-[10px]">
                  <p
                    className={`font-['Pretendard'] leading-[20px] font-medium ${article.comments ? "text-[#333333]" : "text-[#333333]"} flex-1 text-[20px]`}
                  >
                    {article.title}
                  </p>
                  {article.comments && (
                    <p className="font-['Pretendard'] text-[14px] leading-[24px] font-semibold text-[#193dd0]">
                      [{article.comments >= 99 ? "99+" : article.comments}]
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-[4px] font-['Pretendard'] text-[14px]">
                  <div className="flex gap-[8px]">
                    <p className="leading-[14px] font-semibold text-[#333333]">작성자</p>
                    <p className="leading-[14px] text-[#444444]">{article.author}</p>
                  </div>
                  <div className="flex gap-[8px]">
                    <p className="leading-[14px] font-semibold text-[#333333]">작성일</p>
                    <p className="leading-[14px] text-[#444444]">{article.date}</p>
                  </div>
                  <div className="flex gap-[8px]">
                    <p className="leading-[14px] font-semibold text-[#333333]">조회수</p>
                    <p className="leading-[14px] text-[#444444]">{article.views}</p>
                  </div>
                  <div className="flex gap-[8px]">
                    <p className="leading-[14px] font-semibold text-[#333333]">좋아요</p>
                    <p className="leading-[14px] text-[#444444]">{article.likes}</p>
                  </div>
                </div>
              </div>

              {/* 파일 받기 버튼 */}
              <div className="shrink-0">
                {article.featured ? (
                  <div
                    className={`${index === 2 ? "bg-[#193dd0]" : "bg-[#051d7c]"} box-border flex h-[56px] items-center justify-center gap-[10px] rounded-[100px] px-[24px] py-[16px]`}
                  >
                    <div className="flex shrink-0 items-center gap-[10px]">
                      <div className="relative size-[24px] shrink-0 overflow-clip">
                        <div className="absolute inset-[5.21%_11.46%]">{/* 흰색 아이콘 SVG 필요 */}</div>
                      </div>
                      <div className="flex shrink-0 flex-col justify-center font-['Pretendard'] text-[16px] leading-[0] font-medium text-nowrap text-[#fef9ff]">
                        <p className="leading-[13px] whitespace-pre">파일 받기</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <DownloadButton />
                )}
              </div>
            </div>

            {/* 구분선 */}
            <div className="h-[1px] w-full bg-[#d8dde5]" />
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="mt-[60px] flex items-center justify-center gap-[5px]">
        <ArrowLeft className="size-[40px]" />
        <div className="relative size-[40px] rounded-[6px]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Pretendard'] text-[16px] leading-[14px] font-extrabold text-nowrap text-[#5a33be] underline">
            1
          </p>
        </div>
        <div className="relative size-[40px]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Pretendard'] text-[16px] leading-[14px] font-semibold text-nowrap text-[#9a9a9a]">
            2
          </p>
        </div>
        <div className="relative size-[40px]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Pretendard'] text-[16px] leading-[14px] font-semibold text-nowrap text-[#9a9a9a]">
            3
          </p>
        </div>
        <div className="relative size-[40px]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Pretendard'] text-[16px] leading-[14px] font-semibold text-nowrap text-[#9a9a9a]">
            4
          </p>
        </div>
        <div className="relative size-[40px]">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-['Pretendard'] text-[16px] leading-[14px] font-semibold text-nowrap text-[#9a9a9a]">
            5
          </p>
        </div>
        <ArrowRight className="size-[40px]" />
        <ArrowRightDouble className="size-[40px]" />
      </div>

      {/* 푸터 */}
      <div className="relative mt-[109px]">
        <div className="h-[190px] w-full bg-white" />
        <div className="absolute top-0 h-[1px] w-full bg-[#ececec]" />

        <div className="absolute top-[25px] left-[100px]">
          <p className="mb-0 font-['Pretendard'] text-[12px] leading-[12px] font-semibold text-nowrap text-[#444444]">
            개인정보처리방침
          </p>
        </div>

        <div className="absolute top-[25px] left-[203px]">
          <p className="mb-0 font-['Pretendard'] text-[12px] leading-[12px] font-semibold text-nowrap text-[#444444]">
            사이트이용약관
          </p>
        </div>

        <div className="absolute top-[72px] left-[100px]">
          <p className="font-['Pretendard'] text-[10px] leading-[16px] font-light text-nowrap whitespace-pre text-[#222222]">
            (사)한국외식업중앙회 한국외식산업연구원
          </p>
        </div>

        <div className="absolute top-[99px] left-[100px] font-['Pretendard'] text-[10px] leading-[0] font-light text-nowrap whitespace-pre text-[#444444]">
          <p className="mb-0 leading-[16px]">
            <span className="font-bold">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold"> 사업자등록번호</span>
            <span> 203-82-32145 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold"> 대표자</span>
            <span> 전강식 </span>
          </p>
          <p className="leading-[16px]">
            <span className="font-bold">TEL </span>
            <span>02-6191-2908 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold"> FAX</span>
            <span> 02-6191-2998 </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold"> E-mail</span>
            <span> isaacsgod@kfiri.org </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold"> 개인정보보호정책 책임자</span>
            <span> 김삼희</span>
          </p>
        </div>

        <div className="absolute top-[146px] left-[103px]">
          <p className="font-['Pretendard'] text-[10px] leading-[15px] text-nowrap whitespace-pre text-[#b6b6b6]">
            Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
