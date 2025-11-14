import LikeIcon from "~/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg?react";
import ScrapIcon from "~/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg?react";
import NextIcon from "~/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg?react";
import PrevIcon from "~/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg?react";
import CopyIcon from "~/assets/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg?react";
import ShareIcon from "~/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg?react";
import ListIcon from "~/assets/556559325fe5918ca2259c0e94337cb2835c4caf.svg?react";
import Thumbnail from "~/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
import Header from "~/components/header";

const Detail = () => {
  const comments = [
    {
      id: 1,
      author: "정**",
      date: "2023.01.01",
      content: "도움이 되는 연구정보였습니다.\n감사합니다.",
      isMine: true,
    },
    {
      id: 2,
      author: "김**",
      date: "2023.01.01",
      content: "좋은 자료입니다.\n감사합니다.",
      isMine: false,
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

      {/* 상단 구분선 */}
      <div className="mx-auto mt-[38px] h-[2px] w-[1240px] bg-[#555555]" />

      {/* 게시글 헤더 */}
      <div className="mx-auto max-w-[1240px] pt-[37px] pb-[20px]">
        <div className="flex items-start gap-[20px]">
          {/* 썸네일 */}
          <div className="h-[177px] w-[140px] shrink-0 border border-solid border-[#d8dde5]">
            <img alt="" className="pointer-events-none h-full w-full object-cover" src={Thumbnail} />
          </div>

          {/* 콘텐츠 */}
          <div className="flex-1">
            <p className="mb-[14px] font-['Pretendard'] text-[16px] leading-[13px] font-bold text-[#5a33be]">
              정기연구보고서
            </p>

            <p className="mb-[16px] font-['Pretendard'] text-[20px] leading-[20px] font-medium text-[#333333]">
              [한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구
            </p>

            <div className="flex flex-col gap-[4px] font-['Pretendard'] text-[14px]">
              <div className="flex gap-[8px]">
                <p className="leading-[14px] font-semibold text-[#333333]">작성자</p>
                <p className="leading-[14px] text-[#444444]">KFIRI</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="leading-[14px] font-semibold text-[#333333]">작성일</p>
                <p className="leading-[14px] text-[#444444]">2023.01.01</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="leading-[14px] font-semibold text-[#333333]">조회수</p>
                <p className="leading-[14px] text-[#444444]">88</p>
              </div>
              <div className="flex gap-[8px]">
                <p className="leading-[14px] font-semibold text-[#333333]">좋아요</p>
                <p className="leading-[14px] text-[#444444]">88</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mx-auto h-[1px] w-[1240px] bg-[#d8dde5]" />

      {/* 본문 내용 */}
      <div className="mx-auto max-w-[1240px] py-[30px]">
        <div className="font-['Pretendard'] text-[16px] leading-[28px] text-[#333333]">
          <p className="mb-0">* 본 보고서는 무료로 제공되오니 관심있는 분들의 많은 열람 바라며,</p>
          <p>자료의 텍스트, 이미지 등 모든 자료들은 본 사이트의 허락없이 무단으로 복제, 배포, 사용하실 수 없습니다.</p>
        </div>
      </div>

      {/* 내용 박스 (위) */}
      <div className="mx-auto mb-[20px] h-[190px] w-[1180px] rounded-[3px] border border-solid border-[#bfc3c8]" />

      {/* 내용 박스 (아래) */}
      <div className="mx-auto mb-[31px] h-[157px] w-[1180px] rounded-[3px] border border-solid border-[#bfc3c8]" />

      {/* 구분선 */}
      <div className="mx-auto h-[1px] w-[1240px] border border-solid border-[#d8dde5]" />

      {/* 첨부파일 */}
      <div className="mx-auto max-w-[1240px] py-[34px]">
        <p className="mb-[16px] ml-[64px] font-['Pretendard'] text-[18px] leading-[18px] font-semibold text-[#333333]">
          첨부파일
        </p>

        <div className="ml-[64px] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <CopyIcon className="size-[14px]" />
            <p className="font-['Pretendard'] text-[16px] leading-[14px] text-[#666666] underline">
              19년 3차 외식산업 배달 실태에 관한 연구.pdf
            </p>
          </div>

          <div className="flex items-center gap-[3px]">
            <p className="font-['Pretendard'] text-[16px] leading-[14px] font-semibold text-[#193dd0]">다운로드</p>
            <div className="size-[14px]">{/* 다운로드 아이콘 */}</div>
          </div>
        </div>
      </div>

      {/* 좋아요/공유하기/스크랩 */}
      <div className="my-[30px] flex items-center justify-center gap-0">
        <div className="flex h-[60px] items-center gap-[75px] rounded-[5px] border border-solid border-[#d8dde5] bg-white px-[47px]">
          <div className="flex items-center gap-[6px]">
            <LikeIcon className="size-[16px]" />
            <p className="text-center font-['Pretendard'] text-[14px] leading-[14px] text-[#2b2b2b]">200</p>
          </div>

          <div className="h-[60px] w-[1px] bg-[#d8dde5]" />

          <div className="flex items-center gap-[6px]">
            <ShareIcon className="size-[16px]" />
            <p className="text-center font-['Pretendard'] text-[14px] leading-[14px] text-[#2b2b2b]">공유하기</p>
          </div>

          <div className="h-[60px] w-[1px] bg-[#d8dde5]" />

          <div className="flex items-center gap-[6px]">
            <ScrapIcon className="size-[16px]" />
            <p className="text-center font-['Pretendard'] text-[14px] leading-[14px] text-[#2b2b2b]">스크랩</p>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mx-auto h-[1px] w-[1240px] border border-solid border-[#d8dde5]" />

      {/* 댓글 섹션 */}
      <div className="mx-auto max-w-[1240px] pt-[40px]">
        <div className="mb-[24px] ml-[30px] flex items-start gap-[8px]">
          <p className="font-['Pretendard'] text-[20px] leading-[18px] font-semibold text-[#333333]">댓글</p>
          <p className="font-['Pretendard'] text-[20px] leading-[18px] font-semibold text-[#193dd0]">2</p>
        </div>

        {/* 댓글 목록 */}
        {comments.map(comment => (
          <div key={comment.id} className="mb-[24px]">
            <div className="ml-[30px] rounded-[10px] bg-[#f4f8ff] p-[30px]">
              <div className="mb-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <p className="font-['Pretendard'] text-[14px] leading-[14px] font-medium text-[#333333]">
                    {comment.author}
                  </p>
                  <div className="h-[10px] w-[1px] bg-gray-300" />
                  <p className="font-['Pretendard'] text-[14px] leading-[14px] text-[#6a768c]">{comment.date}</p>
                </div>

                {comment.isMine ? (
                  <div className="flex items-center gap-[12px]">
                    <p className="font-['Pretendard'] text-[14px] leading-[14px] text-[#666666]">수정</p>
                    <div className="h-[10px] w-[1px] bg-gray-300" />
                    <p className="font-['Pretendard'] text-[14px] leading-[14px] text-[#666666]">삭제</p>
                  </div>
                ) : (
                  <p className="font-['Pretendard'] text-[14px] leading-[14px] text-[#666666]">신고</p>
                )}
              </div>

              <div className="font-['Pretendard'] text-[16px] leading-[28px] whitespace-pre-line text-[#626873]">
                {comment.content}
              </div>
            </div>
          </div>
        ))}

        {/* 댓글 작성 */}
        <div className="border-gainsboro relative mb-[40px] ml-[30px] h-[140px] w-full rounded-[4px] border border-solid">
          <p className="absolute top-[20px] left-[20px] font-['Pretendard'] text-[16px] leading-[16px] text-[#666666]">
            댓글을 작성하세요.
          </p>
          <p className="absolute right-[20px] bottom-[20px] cursor-pointer font-['Pretendard'] text-[18px] leading-[14px] font-semibold text-[#193dd0]">
            등록
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="border-gainsboro mx-auto h-[1px] w-[1240px] border border-solid" />

      {/* 이전글/다음글/목록 버튼 */}
      <div className="mx-auto flex max-w-[1240px] items-center justify-between py-[40px]">
        <div className="flex items-center gap-[5px]">
          <div className="border-gainsboro flex items-center rounded-[4px] border border-solid px-[11px] py-[11px]">
            <div className="scale-y-[-100%]">
              <PrevIcon className="size-[24px]" />
            </div>
            <p className="ml-[8px] font-['Pretendard'] text-[16px] leading-[18px] font-medium text-[#666666]">이전글</p>
          </div>

          <div className="border-gainsboro flex items-center rounded-[4px] border border-solid px-[11px] py-[11px]">
            <p className="mr-[8px] font-['Pretendard'] text-[16px] leading-[18px] font-medium text-[#666666]">다음글</p>
            <div className="rotate-180">
              <NextIcon className="size-[24px]" />
            </div>
          </div>
        </div>

        <div className="border-gainsboro flex items-center rounded-[4px] border border-solid px-[11px] py-[11px]">
          <ListIcon className="size-[24px]" />
          <p className="ml-[8px] font-['Pretendard'] text-[16px] leading-[18px] font-medium text-[#666666]">목록</p>
        </div>
      </div>

      {/* 푸터 */}
      <div className="relative mt-[56px]">
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

export default Detail;
