import Divider from "~/assets/0d977cc7c6f9678ecca301a8c1719744562c579d.svg?react";
import LikeIcon from "~/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg?react";
import ScrapIcon from "~/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg?react";
import ArrowIcon from "~/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg?react";
import CopyIcon from "~/assets/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg?react";
import ShareIcon from "~/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg?react";
import ListIcon from "~/assets/556559325fe5918ca2259c0e94337cb2835c4caf.svg?react";
import DownloadIcon from "~/assets/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg?react";
import Thumbnail from "~/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
import Header from "~/components/header";

export default function Detail() {
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

      {/* Divider */}
      <div className="mx-auto mt-30 h-[2px] w-[1240px] bg-[#555555]" />

      {/* Article */}
      <div className="mx-auto mt-40 w-[1240px]">
        <div className="flex gap-30">
          {/* Thumbnail */}
          <div className="h-[160px] w-[140px] shrink-0 border border-solid border-[#d8dde5]">
            <img src={Thumbnail} alt="" className="h-full w-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-16 mb-14 flex flex-col justify-center font-['Pretendard'] leading-[0] font-bold text-[#5a33be] not-italic">
              <p className="leading-[13px]">정기연구보고서</p>
            </div>

            <div className="text-20 mb-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-medium text-nowrap text-[#333333] not-italic">
              <p className="leading-20 whitespace-pre">[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구</p>
            </div>

            <div className="text-14 flex gap-20">
              <div className="flex gap-5">
                <p className="font-['Pretendard'] font-semibold text-[#333333]">작성자</p>
                <p className="font-['Pretendard'] font-normal text-[#444444]">KFIRI</p>
              </div>
              <div className="flex gap-5">
                <p className="font-['Pretendard'] font-semibold text-[#333333]">작성일</p>
                <p className="font-['Pretendard'] font-normal text-[#444444]">2023.01.01</p>
              </div>
              <div className="flex gap-5">
                <p className="font-['Pretendard'] font-semibold text-[#333333]">조회수</p>
                <p className="font-['Pretendard'] font-normal text-[#444444]">88</p>
              </div>
              <div className="flex gap-5">
                <p className="font-['Pretendard'] font-semibold text-[#333333]">좋아요</p>
                <p className="font-['Pretendard'] font-normal text-[#444444]">88</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-30 h-[1px] w-full bg-[#d8dde5]" />

        {/* Notice */}
        <div className="text-16 mt-30 font-['Pretendard'] leading-28 font-normal whitespace-pre text-[#333333] not-italic">
          <p className="mb-0">* 본 보고서는 무료로 제공되오니 관심있는 분들의 많은 열람 바라며,</p>
          <p>자료의 텍스트, 이미지 등 모든 자료들은 본 사이트의 허락없이 무단으로 복제, 배포, 사용하실 수 없습니다.</p>
        </div>

        {/* Attachment Section */}
        <div className="mt-30 rounded-[3px] border border-solid border-[#bfc3c8] p-30">
          <div className="text-18 mb-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-semibold text-nowrap text-[#333333] not-italic">
            <p className="leading-[18px] whitespace-pre">첨부파일</p>
          </div>

          <div className="flex items-center gap-10">
            <div className="size-14">
              <CopyIcon className="size-full" />
            </div>
            <div className="text-16 flex flex-col justify-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#666666] not-italic">
              <p className="leading-14 whitespace-pre underline decoration-solid">
                19년 3차 외식산업 배달 실태에 관한 연구.pdf
              </p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="text-16 flex flex-col justify-center font-['Pretendard'] leading-[0] font-semibold text-nowrap text-[#193dd0] not-italic">
                <p className="leading-14 whitespace-pre">다운로드</p>
              </div>
              <div className="size-14">
                <DownloadIcon className="size-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-40 flex justify-center gap-1">
          <div className="rounded-5 flex h-60 items-center gap-6 border border-solid border-[#d8dde5] bg-white px-43">
            <div className="size-16">
              <LikeIcon className="size-full" />
            </div>
            <p className="text-14 text-center font-['Pretendard'] leading-14 font-normal text-[#2b2b2b]">200</p>
          </div>

          <div className="h-60 w-[1px] bg-[#d8dde5]" />

          <div className="rounded-5 flex h-60 items-center gap-6 border border-solid border-[#d8dde5] bg-white px-43">
            <div className="size-16">
              <ShareIcon className="size-full" />
            </div>
            <p className="text-14 text-center font-['Pretendard'] leading-14 font-normal text-[#2b2b2b]">공유하기</p>
          </div>

          <div className="rounded-5 h-60 w-[1px] border border-solid border-[#d8dde5] bg-white" />

          <div className="rounded-5 flex h-60 items-center gap-6 border border-solid border-[#d8dde5] bg-white px-43">
            <div className="size-12">
              <ScrapIcon className="size-full" />
            </div>
            <p className="text-14 text-center font-['Pretendard'] leading-14 font-normal text-[#2b2b2b]">스크랩</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-60 h-[1px] w-full bg-[#d8dde5]" />

        {/* Comments Section */}
        <div className="mt-40">
          <div className="flex items-center gap-8">
            <div className="text-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-semibold text-nowrap text-[#333333] not-italic">
              <p className="leading-[18px] whitespace-pre">댓글</p>
            </div>
            <div className="text-20 flex flex-col justify-center font-['Pretendard'] leading-[0] font-semibold text-nowrap text-[#193dd0] not-italic">
              <p className="leading-[18px] whitespace-pre">2</p>
            </div>
          </div>

          {/* Comment 1 */}
          <div className="rounded-10 mt-30 bg-[#f4f8ff] p-30">
            <div className="mb-20 flex items-center gap-12">
              <p className="text-14 font-['Pretendard'] font-medium text-[#333333]">정**</p>
              <div className="h-10 w-[1px]">
                <Divider className="size-full" />
              </div>
              <div className="text-14 flex flex-col justify-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#6a768c] not-italic">
                <p className="leading-14 whitespace-pre">2023.01.01</p>
              </div>
              <div className="ml-auto flex items-center gap-12">
                <p className="text-14 font-['Pretendard'] font-normal text-[#666666]">수정</p>
                <div className="h-10 w-[1px]">
                  <Divider className="size-full" />
                </div>
                <p className="text-14 font-['Pretendard'] font-normal text-[#666666]">삭제</p>
              </div>
            </div>

            <div className="text-16 font-['Pretendard'] leading-28 font-normal whitespace-pre text-[#626873] not-italic">
              <p className="mb-0">도움이 되는 연구정보였습니다.</p>
              <p>감사합니다.</p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="rounded-10 mt-20 bg-[#f4f8ff] p-30">
            <div className="mb-20 flex items-center gap-12">
              <p className="text-14 font-['Pretendard'] font-medium text-[#333333]">김**</p>
              <div className="h-10 w-[1px]">
                <Divider className="size-full" />
              </div>
              <div className="text-14 flex flex-col justify-center font-['Pretendard'] leading-[0] font-normal text-nowrap text-[#6a768c] not-italic">
                <p className="leading-14 whitespace-pre">2023.01.01</p>
              </div>
              <div className="ml-auto">
                <p className="text-14 font-['Pretendard'] font-normal text-[#666666]">신고</p>
              </div>
            </div>

            <div className="text-16 font-['Pretendard'] leading-28 font-normal whitespace-pre text-[#626873] not-italic">
              <p className="mb-0">좋은 자료입니다.</p>
              <p>감사합니다.</p>
            </div>
          </div>

          {/* Comment Input */}
          <div className="mt-30 rounded-[3px] border border-solid border-[#bfc3c8] p-30">
            <p className="text-16 mb-20 font-['Pretendard'] leading-16 font-normal text-[#666666]">
              댓글을 작성하세요.
            </p>
            <div className="flex justify-end">
              <p className="text-18 cursor-pointer font-['Pretendard'] font-semibold text-[#193dd0]">등록</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-gainsboro mt-60 h-[1px] w-full border border-solid" />

        {/* Navigation Buttons */}
        <div className="mt-40 mb-60 flex justify-between">
          <div className="border-gainsboro rounded-4 flex items-center border border-solid px-19 py-11">
            <div className="size-24 scale-y-[-100%]">
              <ArrowIcon className="size-full" />
            </div>
            <p className="text-16 ml-5 font-['Pretendard'] leading-[18px] font-medium text-[#666666]">이전글</p>
          </div>

          <div className="border-gainsboro rounded-4 flex items-center border border-solid px-19 py-11">
            <p className="text-16 mr-5 font-['Pretendard'] leading-[18px] font-medium text-[#666666]">다음글</p>
            <div className="size-24 rotate-180">
              <ArrowIcon className="size-full" />
            </div>
          </div>

          <div className="border-gainsboro rounded-4 flex items-center border border-solid px-19 py-11">
            <div className="size-24">
              <ListIcon className="size-full" />
            </div>
            <p className="text-16 ml-5 font-['Pretendard'] leading-[18px] font-medium text-[#666666]">목록</p>
          </div>
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
        <p className="text-12 absolute top-[2024px] ml-100 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          개인정보처리방침
        </p>
        <p className="text-12 absolute top-[2024px] ml-203 font-['Pretendard'] leading-12 font-semibold text-nowrap whitespace-pre text-[#444444] not-italic">
          사이트이용약관
        </p>
      </div>
    </div>
  );
}
