import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadButton from '../components/DownloadButton';
import SearchIcon from '~/assets/2943638af14fdebc680bfc19b832df80e9772713.svg?react';
import LeftArrow from '~/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg?react';
import RightArrow from '~/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg?react';
import DoubleRightArrow from '~/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg?react';
import Thumbnail1 from '~/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png';
import Thumbnail2 from '~/assets/221e392466f71f561707a2276e153b874eb3df2c.png';
import Thumbnail3 from '~/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png';
import Thumbnail4 from '~/assets/b191d8ba641908c9df0c5996528752d763535b32.png';
import Thumbnail5 from '~/assets/99092354c834b9f51ca53ff2576334d67429c242.png';
import Thumbnail6 from '~/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png';

const InfoList = () => {
  // Mock data for posts
  const posts = [
    {
      id: 1,
      thumbnail: Thumbnail1,
      title: '2024년 상반기 외식산업 트렌드 분석',
      date: '2024.03.15',
      views: 1234,
      variant: 'default' as const
    },
    {
      id: 2,
      thumbnail: Thumbnail2,
      title: '글로벌 외식 프랜차이즈 성공 사례 연구',
      date: '2024.03.10',
      views: 892,
      variant: 'primary' as const
    },
    {
      id: 3,
      thumbnail: Thumbnail3,
      title: '소비자 식습관 변화와 외식업 대응 전략',
      date: '2024.03.05',
      views: 756,
      variant: 'dark' as const
    },
    {
      id: 4,
      thumbnail: Thumbnail4,
      title: 'AI 기술을 활용한 외식업 혁신 방안',
      date: '2024.02.28',
      views: 1123,
      variant: 'default' as const
    },
    {
      id: 5,
      thumbnail: Thumbnail5,
      title: '친환경 외식 경영 실천 가이드',
      date: '2024.02.20',
      views: 945,
      variant: 'primary' as const
    },
    {
      id: 6,
      thumbnail: Thumbnail6,
      title: '배달 플랫폼 시대의 외식업 경쟁력 강화',
      date: '2024.02.15',
      views: 1087,
      variant: 'dark' as const
    }
  ];

  return (
    <div className="bg-white relative min-h-screen" data-name="C0203_외식정보_정기연구보고서_목록" data-node-id="401:1192">
      {/* Header */}
      <Header />
      
      {/* Divider line */}
      <div className="bg-[#e6e6e6] h-px w-full" />
      
      {/* Breadcrumb and Title */}
      <div className="text-center pt-60 pb-30">
        <p className="font-pretendard font-medium text-18 leading-18 text-[#666666] mb-28">
          외식정보
        </p>
        <h1 className="font-pretendard font-bold text-30 leading-30 text-[#333333]">
          정기연구보고서
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-40">
        <div className="relative w-800">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full h-56 px-24 pr-56 border border-[#e6e6e6] rounded-28 font-pretendard text-16 leading-16 text-[#333333] placeholder:text-[#999999]"
            aria-label="검색"
          />
          <button className="absolute right-16 top-1/2 -translate-y-1/2 size-32 flex items-center justify-center" aria-label="검색 실행">
            <SearchIcon className="size-24" />
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-40 mb-60">
        <div className="flex flex-col items-start gap-14">
          <div className="font-pretendard font-bold text-20 leading-18 text-[#5a33be]">
            정기연구보고서
          </div>
          <div className="bg-[#5a33be] border-[#5a33be] h-2 w-full" />
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          R&D리포트
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          통계연감
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          연구용역
        </div>
        <div className="font-pretendard font-regular text-20 leading-18 text-center text-[#888888]">
          정부용역정보
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-1240 mx-auto px-100 mb-80">
        <div className="grid grid-cols-3 gap-x-40 gap-y-60">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col" data-name="post-item">
              {/* Thumbnail */}
              <div className="w-full h-220 mb-24 overflow-hidden rounded-12">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-pretendard font-bold text-18 leading-26 text-[#333333] mb-16 min-h-52">
                {post.title}
              </h3>
              
              {/* Meta Info */}
              <div className="flex items-center gap-16 mb-20">
                <span className="font-pretendard font-regular text-14 leading-14 text-[#888888]">
                  {post.date}
                </span>
                <span className="text-[#d8dde5]">|</span>
                <span className="font-pretendard font-regular text-14 leading-14 text-[#888888]">
                  조회 {post.views}
                </span>
              </div>
              
              {/* Download Button */}
              <DownloadButton variant={post.variant} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-12 mb-100">
        {/* Previous Page Button */}
        <button className="size-40 flex items-center justify-center" aria-label="이전 페이지">
          <LeftArrow className="size-40" />
        </button>
        
        {/* Page Numbers */}
        <button className="size-40 flex items-center justify-center font-pretendard font-semibold text-16 leading-16 text-white bg-[#5a33be] rounded-8">
          1
        </button>
        <button className="size-40 flex items-center justify-center font-pretendard font-regular text-16 leading-16 text-[#666666]">
          2
        </button>
        <button className="size-40 flex items-center justify-center font-pretendard font-regular text-16 leading-16 text-[#666666]">
          3
        </button>
        <button className="size-40 flex items-center justify-center font-pretendard font-regular text-16 leading-16 text-[#666666]">
          4
        </button>
        <button className="size-40 flex items-center justify-center font-pretendard font-regular text-16 leading-16 text-[#666666]">
          5
        </button>
        
        {/* Next Page Button */}
        <button className="size-40 flex items-center justify-center" aria-label="다음 페이지">
          <RightArrow className="size-40" />
        </button>
        
        {/* Last Page Button */}
        <button className="size-40 flex items-center justify-center" aria-label="마지막 페이지">
          <DoubleRightArrow className="size-40" />
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InfoList;