
import React from 'react';
import Header from '../components/Header';

// 아이콘 import
import CopyIcon from '~/assets/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg?react';
import DownloadIcon from '~/assets/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg?react';
import LikeIcon from '~/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg?react';
import ShareIcon from '~/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg?react';
import ScrapIcon from '~/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg?react';
import ListIcon from '~/assets/556559325fe5918ca2259c0e94337cb2835c4caf.svg?react';
import ArrowIcon from '~/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg?react';

// 이미지 import
const imgReport = '/src/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png';

const Detail: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 헤더 */}
      <Header />
      
      {/* 페이지 타이틀 섹션 */}
      <div className="relative">
        <p className="text-[#666666] text-[18px] font-medium leading-[18px] text-center pt-[61px]">
          외식정보
        </p>
        <h1 className="text-[#333333] text-[30px] font-bold leading-[30px] text-center pt-[28px]">
          K-FIRI
        </h1>
      </div>

      {/* 구분선 */}
      <div className="bg-[#555555] h-[2px] mx-[100px] mt-[80px]"></div>

      {/* 콘텐츠 영역 */}
      <div className="px-[100px] pt-[20px]">
        {/* 보고서 정보 섹션 */}
        <div className="flex gap-[105px] items-start py-[40px]">
          {/* 보고서 이미지 */}
          <div className="w-[140px] h-[181px] flex-shrink-0">
            <div className="w-full h-full border border-[#d8dde5] overflow-hidden">
              <img 
                alt="보고서 이미지" 
                className="object-cover w-full h-full" 
                src={imgReport} 
              />
            </div>
          </div>

          {/* 보고서 정보 */}
          <div className="flex-1">
            {/* 카테고리 */}
            <div className="text-[#5a33be] text-[16px] font-bold leading-[13px] mb-[8px]">
              정기연구보고서
            </div>

            {/* 제목 */}
            <h2 className="text-[#333333] text-[20px] font-medium leading-[20px] mb-[24px]">
              [한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구
            </h2>

            {/* 메타 정보 */}
            <div className="space-y-[6px] text-[14px] leading-[14px]">
              <div className="flex gap-[51px]">
                <span className="text-[#333333] font-semibold">작성자</span>
                <span className="text-[#444444] font-normal">KFIRI</span>
              </div>
              <div className="flex gap-[51px]">
                <span className="text-[#333333] font-semibold">작성일</span>
                <span className="text-[#444444] font-normal">2023.01.01</span>
              </div>
              <div className="flex gap-[51px]">
                <span className="text-[#333333] font-semibold">조회수</span>
                <span className="text-[#444444] font-normal">88</span>
              </div>
              <div className="flex gap-[51px]">
                <span className="text-[#333333] font-semibold">좋아요</span>
                <span className="text-[#444444] font-normal">88</span>
              </div>
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div className="bg-[#d8dde5] p-[20px] rounded-[3px] mb-[40px]">
          <div className="text-[#333333] text-[16px] font-normal leading-[28px]">
            <p className="mb-0">* 본 보고서는 무료로 제공되오니 관심있는 분들의 많은 열람 바라며,</p>
            <p>자료의 텍스트, 이미지 등 모든 자료들은 본 사이트의 허락없이 무단으로 복제, 배포, 사용하실 수 없습니다.</p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="bg-[#d8dde5] h-[1px] w-full mb-[40px]"></div>

        {/* 첨부파일 섹션 */}
        <div className="mb-[40px]">
          <h3 className="text-[#333333] text-[18px] font-semibold leading-[18px] mb-[16px]">첨부파일</h3>
          <div className="flex items-center gap-[10px] justify-between">
            <div className="flex items-center gap-[10px]">
              <CopyIcon className="w-[14px] h-[14px]" />
              <span className="text-[#666666] text-[16px] font-normal leading-[14px] underline">
                19년 3차 외식산업 배달 실태에 관한 연구.pdf
              </span>
            </div>
            <div className="flex items-center gap-[3px]">
              <span className="text-[#193dd0] text-[16px] font-semibold leading-[14px]">다운로드</span>
              <DownloadIcon className="w-[14px] h-[14px]" />
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="bg-[#d8dde5] h-[1px] w-full mb-[40px]"></div>

        {/* 액션 버튼들 */}
        <div className="flex justify-center mb-[40px]">
          <div className="flex items-center bg-white border border-[#d8dde5] rounded-[5px] overflow-hidden">
            {/* 좋아요 */}
            <div className="px-[47px] py-[23px] flex items-center gap-[6px] border-r border-[#d8dde5]">
              <LikeIcon className="w-[16px] h-[16px]" />
              <span className="text-[#2b2b2b] text-[14px] font-normal leading-[14px]">200</span>
            </div>
            
            {/* 공유하기 */}
            <div className="px-[47px] py-[23px] flex items-center gap-[6px] border-r border-[#d8dde5]">
              <ShareIcon className="w-[16px] h-[16px]" />
              <span className="text-[#2b2b2b] text-[14px] font-normal leading-[14px]">공유하기</span>
            </div>
            
            {/* 스크랩 */}
            <div className="px-[47px] py-[23px] flex items-center gap-[6px]">
              <ScrapIcon className="w-[12px] h-[12px]" />
              <span className="text-[#2b2b2b] text-[14px] font-normal leading-[14px]">스크랩</span>
            </div>
          </div>
        </div>

        {/* 댓글 섹션 */}
        <div className="mb-[80px]">
          <div className="flex items-center gap-[8px] mb-[40px]">
            <span className="text-[#333333] text-[20px] font-semibold leading-[18px]">댓글</span>
            <span className="text-[#193dd0] text-[20px] font-semibold leading-[18px]">2</span>
          </div>

          {/* 댓글 목록 */}
          <div className="space-y-[40px] mb-[40px]">
            {/* 댓글 1 */}
            <div className="bg-[#f4f8ff] rounded-[10px] p-[30px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <span className="text-[#333333] text-[14px] font-medium leading-[14px]">정**</span>
                <div className="w-[1px] h-[10px] bg-gray-300"></div>
                <span className="text-[#6a768c] text-[14px] font-normal leading-[14px]">2023.01.01</span>
                <div className="ml-auto flex items-center gap-[12px]">
                  <span className="text-[#666666] text-[14px] font-normal leading-[14px]">수정</span>
                  <div className="w-[1px] h-[10px] bg-gray-300"></div>
                  <span className="text-[#666666] text-[14px] font-normal leading-[14px]">삭제</span>
                </div>
              </div>
              <div className="text-[#626873] text-[16px] font-normal leading-[28px]">
                <p className="mb-0">도움이 되는 연구정보였습니다.</p>
                <p>감사합니다.</p>
              </div>
            </div>

            {/* 댓글 2 */}
            <div className="bg-[#f4f8ff] rounded-[10px] p-[30px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <span className="text-[#333333] text-[14px] font-medium leading-[14px]">김**</span>
                <div className="w-[1px] h-[10px] bg-gray-300"></div>
                <span className="text-[#6a768c] text-[14px] font-normal leading-[14px]">2023.01.01</span>
                <div className="ml-auto">
                  <span className="text-[#666666] text-[14px] font-normal leading-[14px]">신고</span>
                </div>
              </div>
              <div className="text-[#626873] text-[16px] font-normal leading-[28px]">
                <p className="mb-0">좋은 자료입니다.</p>
                <p>감사합니다.</p>
              </div>
            </div>
          </div>

          {/* 댓글 작성 */}
          <div className="border border-[#bfc3c8] rounded-[3px] p-[30px] mb-[40px]">
            <textarea 
              className="w-full h-[120px] resize-none border-0 outline-none text-[#666666] text-[16px] leading-[16px]"
              placeholder="댓글을 작성하세요."
            />
            <div className="text-right mt-[20px]">
              <button className="text-[#193dd0] text-[18px] font-semibold leading-[14px]">등록</button>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="bg-[#d8dde5] h-[1px] w-full mb-[40px]"></div>

        {/* 네비게이션 버튼들 */}
        <div className="flex justify-between items-center mb-[80px]">
          <div className="flex items-center gap-[4px] border border-gray-300 rounded-[4px] px-[11px] py-[11px]">
            <div className="scale-y-[-100%]">
              <ArrowIcon className="w-[24px] h-[24px]" />
            </div>
            <span className="text-[#666666] text-[16px] font-medium leading-[18px]">이전글</span>
          </div>
          
          <div className="flex items-center gap-[4px] border border-gray-300 rounded-[4px] px-[11px] py-[11px]">
            <span className="text-[#666666] text-[16px] font-medium leading-[18px]">다음글</span>
            <div className="rotate-[180deg]">
              <ArrowIcon className="w-[24px] h-[24px]" />
            </div>
          </div>
          
          <div className="flex items-center gap-[4px] border border-gray-300 rounded-[4px] px-[11px] py-[11px]">
            <ListIcon className="w-[24px] h-[24px]" />
            <span className="text-[#666666] text-[16px] font-medium leading-[18px]">목록</span>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="border-t border-[#ececec]">
        <div className="bg-white h-[190px] px-[100px]">
          <div className="pt-[25px]">
            <p className="text-[#444444] text-[12px] font-semibold leading-[12px] mb-[24px]">
              <span className="mr-[103px]">개인정보처리방침</span>
              <span>사이트이용약관</span>
            </p>
            <p className="text-[#222222] text-[10px] font-light leading-[16px] mb-[27px]">
              (사)한국외식업중앙회 한국외식산업연구원 
            </p>
            <div className="text-[#444444] text-[10px] font-light leading-[16px] mb-[16px]">
              <p className="mb-0">
                <span className="font-bold">주소 </span>
                <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">사업자등록번호</span>
                <span>  203-82-32145 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">대표자</span>
                <span> 전강식 </span>
              </p>
              <p>
                <span className="font-bold">TEL  </span>
                <span>02-6191-2908  </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">FAX</span>
                <span>  02-6191-2998 </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">E-mail</span>
                <span> isaacsgod@kfiri.org </span>
                <span className="text-[#d1d1d1]">ㅣ</span>
                <span className="font-bold">개인정보보호정책 책임자</span>
                <span>  김삼희</span>
              </p>
            </div>
            <p className="text-[#b6b6b6] text-[10px] font-normal leading-[15px]">
              Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;