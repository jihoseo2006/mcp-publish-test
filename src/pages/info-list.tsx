
import React from 'react';
import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';

// 아이콘 import
import SearchIcon from '~/assets/2943638af14fdebc680bfc19b832df80e9772713.svg?react';
import ArrowLeftIcon from '~/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg?react';
import ArrowRightIcon from '~/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg?react';
import DoubleArrowRightIcon from '~/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg?react';

// 이미지 import
const imgReport1 = '/src/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png';
const imgReport2 = '/src/assets/221e392466f71f561707a2276e153b874eb3df2c.png';
const imgReport3 = '/src/assets/b191d8ba641908c9df0c5996528752d763535b32.png';
const imgReport4 = '/src/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png';
const imgSpecial = '/src/assets/99092354c834b9f51ca53ff2576334d67429c242.png';

const InfoList: React.FC = () => {
  // 가상의 보고서 데이터
  const reports = [
    {
      id: 55,
      title: '[한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보',
      author: 'KFIRI',
      date: '2023.01.01',
      views: 88,
      likes: 88,
      image: imgReport1,
      isSpecial: false
    },
    {
      id: 54,
      title: '[한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)',
      author: 'KFIRI', 
      date: '2023.01.01',
      views: 88,
      likes: 88,
      image: imgReport2,
      isSpecial: false,
      viewCount: '[33]'
    },
    {
      id: 53,
      title: '[한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구',
      author: 'KFIRI',
      date: '2023.01.01', 
      views: 88,
      likes: 88,
      image: imgReport3,
      isSpecial: true,
      viewCount: '[99+]'
    },
    {
      id: 52,
      title: '[한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구',
      author: 'KFIRI',
      date: '2023.01.01',
      views: 88,
      likes: 88,
      image: imgReport4,
      isSpecial: true
    },
    {
      id: 51,
      title: '[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구',
      author: 'KFIRI',
      date: '2023.01.01',
      views: 88,
      likes: 88,
      image: imgReport4,
      isSpecial: false
    }
  ];

  return (
    <div className="bg-white w-full min-h-screen">
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

      {/* 검색창 */}
      <div className="flex justify-center pt-[60px]">
        <div className="border border-[#838383] rounded-[100px] px-[24px] py-[13px] flex items-center gap-[223px]">
          <span className="text-[#989898] text-[18px] font-normal leading-[18px]">검색어를 입력해주세요.</span>
          <SearchIcon className="w-[24px] h-[24px]" />
        </div>
      </div>
      
      {/* 탭 네비게이션 */}
      <div className="flex gap-[40px] items-start justify-center pt-[100px]">
        <div className="flex flex-col gap-[14px] items-start">
          <div className="text-[#5a33be] text-[20px] font-bold leading-[18px]">정기연구보고서</div>
          <div className="bg-[#5a33be] border border-[#5a33be] h-[2px] w-full"></div>
        </div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">R&D리포트</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">통계연감</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">연구용역</div>
        <div className="text-[#888888] text-[20px] font-normal leading-[18px] text-center">정부용역정보</div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="px-[100px] pt-[100px]">
        {/* 구분선 */}
        <div className="bg-[#333333] h-[2px] w-full mb-[20px]"></div>

        {/* 보고서 목록 */}
        <div className="space-y-[120px]">
          {reports.map((report, index) => (
            <div key={report.id} className="flex gap-[80px] items-start">
              {/* 보고서 이미지 */}
              <div className="w-[140px] h-[200px] flex-shrink-0">
                <div className="w-full h-full border border-[#d8dde5] overflow-hidden">
                  {report.image && (
                    <img 
                      alt={`보고서 ${report.id}`} 
                      className="w-full h-full object-cover" 
                      src={report.image} 
                    />
                  )}
                  {index === 1 && (
                    <div className="bg-[#f4f5f6] border border-[#d8dde5] w-full h-full flex items-center justify-center">
                      <div className="opacity-50 mix-blend-multiply">
                        <img 
                          alt="특별 보고서" 
                          className="w-full h-full object-contain" 
                          src={imgSpecial} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 보고서 번호 */}
              <div className="text-[#888888] text-[18px] font-medium leading-[13px] pt-[40px] w-[20px]">
                {report.id}
              </div>

              {/* 보고서 정보 */}
              <div className="flex-1">
                {/* 카테고리 */}
                <div className="text-[#5a33be] text-[16px] font-bold leading-[13px] mb-[8px]">
                  정기연구보고서
                </div>

                {/* 제목과 조회수 */}
                <div className="flex items-start gap-[10px] mb-[16px]">
                  <div className="text-[#333333] text-[20px] font-medium leading-[20px] flex-1">
                    {report.title}
                  </div>
                  {report.viewCount && (
                    <div className="text-[#193dd0] text-[14px] font-semibold leading-[24px]">
                      {report.viewCount}
                    </div>
                  )}
                </div>

                {/* 메타 정보 */}
                <div className="space-y-[6px] text-[14px] leading-[14px] mb-[16px]">
                  <div className="flex gap-[51px]">
                    <span className="text-[#333333] font-semibold">작성자</span>
                    <span className="text-[#444444] font-normal">{report.author}</span>
                  </div>
                  <div className="flex gap-[51px]">
                    <span className="text-[#333333] font-semibold">작성일</span>
                    <span className="text-[#444444] font-normal">{report.date}</span>
                  </div>
                  <div className="flex gap-[51px]">
                    <span className="text-[#333333] font-semibold">조회수</span>
                    <span className="text-[#444444] font-normal">{report.views}</span>
                  </div>
                  <div className="flex gap-[51px]">
                    <span className="text-[#333333] font-semibold">좋아요</span>
                    <span className="text-[#444444] font-normal">{report.likes}</span>
                  </div>
                </div>
              </div>

              {/* 다운로드 버튼 */}
              <div className="pt-[40px]">
                <DownloadButton 
                  variant={report.isSpecial ? (index === 2 ? 'primary' : 'dark') : 'default'}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 구분선들 */}
        <div className="space-y-[120px] mt-[-600px] relative pointer-events-none">
          <div className="bg-[#d8dde5] h-[1px] w-full"></div>
          <div className="bg-[#d8dde5] h-[1px] w-full"></div>
          <div className="bg-[#d8dde5] h-[1px] w-full"></div>
          <div className="bg-[#d8dde5] h-[1px] w-full"></div>
          <div className="bg-[#d8dde5] h-[1px] w-full"></div>
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center items-center gap-[5px] pt-[160px] pb-[140px]">
          <ArrowLeftIcon className="w-[40px] h-[40px]" />
          <div className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center">
            <span className="text-[#5a33be] text-[16px] font-extrabold leading-[14px] underline">1</span>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="text-[#9a9a9a] text-[16px] font-semibold leading-[14px]">2</span>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="text-[#9a9a9a] text-[16px] font-semibold leading-[14px]">3</span>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="text-[#9a9a9a] text-[16px] font-semibold leading-[14px]">4</span>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="text-[#9a9a9a] text-[16px] font-semibold leading-[14px]">5</span>
          </div>
          <ArrowRightIcon className="w-[40px] h-[40px]" />
          <DoubleArrowRightIcon className="w-[40px] h-[40px]" />
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

export default InfoList;