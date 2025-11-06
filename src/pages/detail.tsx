import Header from '../components/Header';
import Footer from '../components/Footer';
import HeartIcon from '~/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg?react';
import ShareIcon from '~/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg?react';
import StarIcon from '~/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg?react';
import DownloadIcon from '~/assets/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg?react';
import FileIcon from '~/assets/57c6058d26eccda7890393df533bef9797da80d0.svg?react';
import DetailImage from '~/assets/221e392466f71f561707a2276e153b874eb3df2c.png';

const Detail = () => {
  // Mock data for attachments
  const attachments = [
    { id: 1, name: '2024년_상반기_외식산업_트렌드_분석_보고서.pdf', size: '2.5MB' },
    { id: 2, name: '외식산업_통계자료_2024.xlsx', size: '1.8MB' },
    { id: 3, name: '부록_설문조사_결과.pdf', size: '890KB' }
  ];

  // Mock data for comments
  const comments = [
    {
      id: 1,
      author: '홍길동',
      date: '2024.03.16 14:30',
      content: '유익한 자료 감사합니다. 실무에 많은 도움이 될 것 같습니다.'
    },
    {
      id: 2,
      author: '김영희',
      date: '2024.03.17 09:15',
      content: '최신 트렌드를 잘 정리해주셔서 이해하기 쉬웠습니다. 다음 보고서도 기대하겠습니다.'
    },
    {
      id: 3,
      author: '이철수',
      date: '2024.03.17 16:45',
      content: '데이터 분석이 체계적이고 설득력 있네요. 공유해주셔서 감사합니다.'
    }
  ];

  return (
    <div className="bg-white relative min-h-screen" data-name="C0204_외식정보_정기연구보고서_상세" data-node-id="401:2258">
      {/* Header */}
      <Header />
      
      {/* Divider line */}
      <div className="bg-[#e6e6e6] h-px w-full" />
      
      {/* Breadcrumb and Title */}
      <div className="text-center pt-60 pb-30">
        <p className="font-pretendard font-medium text-18 leading-18 text-[#666666] mb-28">
          외식정보 &gt; 정기연구보고서
        </p>
        <h1 className="font-pretendard font-bold text-30 leading-30 text-[#333333]">
          2024년 상반기 외식산업 트렌드 분석
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-1240 mx-auto px-100 pb-80">
        {/* Post Header Info */}
        <div className="border-t-2 border-[#333333] pt-24 pb-24 mb-40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-20">
              <span className="font-pretendard font-medium text-16 leading-16 text-[#333333]">
                작성일
              </span>
              <span className="font-pretendard font-regular text-16 leading-16 text-[#666666]">
                2024.03.15
              </span>
              <span className="text-[#d8dde5]">|</span>
              <span className="font-pretendard font-medium text-16 leading-16 text-[#333333]">
                조회수
              </span>
              <span className="font-pretendard font-regular text-16 leading-16 text-[#666666]">
                1,234
              </span>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full h-500 mb-60 overflow-hidden rounded-12">
          <img
            src={DetailImage}
            alt="2024년 상반기 외식산업 트렌드 분석"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Text */}
        <div className="mb-60">
          <div className="font-pretendard font-regular text-16 leading-28 text-[#333333]">
            <p className="mb-20">
              2024년 상반기 외식산업은 포스트 팬데믹 시대를 맞아 새로운 변화의 흐름을 보이고 있습니다.
              본 보고서는 국내외 외식산업의 주요 트렌드를 분석하고, 향후 전망을 제시합니다.
            </p>
            <p className="mb-20">
              주요 내용으로는 소비자 행동 패턴의 변화, 디지털 전환 가속화, 지속가능성에 대한 관심 증가,
              새로운 외식 형태의 출현 등을 다루고 있습니다.
            </p>
            <p className="mb-20">
              특히 Z세대를 중심으로 한 새로운 소비 트렌드와 배달 플랫폼의 진화,
              친환경 외식 문화의 확산 등이 주목할 만한 변화로 나타났습니다.
            </p>
            <p>
              본 연구는 외식업 종사자 및 관련 업계 종사자들에게 유용한 인사이트를 제공하고자 합니다.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="bg-[#d8dde5] h-px w-full mb-40" />

        {/* Attachments Section */}
        <div className="mb-60">
          <h2 className="font-pretendard font-bold text-20 leading-20 text-[#333333] mb-24">
            첨부파일
          </h2>
          <div className="border border-[#e6e6e6] rounded-12 p-24">
            {attachments.map((file, index) => (
              <div
                key={file.id}
                className={`flex items-center justify-between py-16 ${
                  index !== attachments.length - 1 ? 'border-b border-[#f5f5f5]' : ''
                }`}
              >
                <div className="flex items-center gap-12">
                  <FileIcon className="size-24" />
                  <span className="font-pretendard font-regular text-16 leading-16 text-[#333333]">
                    {file.name}
                  </span>
                  <span className="font-pretendard font-regular text-14 leading-14 text-[#999999]">
                    ({file.size})
                  </span>
                </div>
                <button className="flex items-center gap-8 px-16 py-8 bg-[#f5f5f5] rounded-8 hover:bg-[#e6e6e6]">
                  <DownloadIcon className="size-16" />
                  <span className="font-pretendard font-medium text-14 leading-14 text-[#333333]">
                    다운로드
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons (Like, Share, Bookmark) */}
        <div className="flex justify-center gap-16 mb-60">
          <button className="flex flex-col items-center justify-center w-100 h-100 border border-[#e6e6e6] rounded-12 hover:bg-[#f5f5f5]">
            <HeartIcon className="size-32 mb-8" />
            <span className="font-pretendard font-regular text-14 leading-14 text-[#666666]">
              좋아요
            </span>
            <span className="font-pretendard font-semibold text-16 leading-16 text-[#333333] mt-4">
              24
            </span>
          </button>
          <button className="flex flex-col items-center justify-center w-100 h-100 border border-[#e6e6e6] rounded-12 hover:bg-[#f5f5f5]">
            <ShareIcon className="size-32 mb-8" />
            <span className="font-pretendard font-regular text-14 leading-14 text-[#666666]">
              공유하기
            </span>
          </button>
          <button className="flex flex-col items-center justify-center w-100 h-100 border border-[#e6e6e6] rounded-12 hover:bg-[#f5f5f5]">
            <StarIcon className="size-32 mb-8" />
            <span className="font-pretendard font-regular text-14 leading-14 text-[#666666]">
              스크랩
            </span>
            <span className="font-pretendard font-semibold text-16 leading-16 text-[#333333] mt-4">
              8
            </span>
          </button>
        </div>

        {/* Separator */}
        <div className="bg-[#d8dde5] h-px w-full mb-40" />

        {/* Comments Section */}
        <div className="mb-60">
          <h2 className="font-pretendard font-bold text-20 leading-20 text-[#333333] mb-24">
            댓글 <span className="text-[#5a33be]">{comments.length}</span>
          </h2>
          
          {/* Comment Input */}
          <div className="mb-40">
            <textarea
              placeholder="댓글을 입력하세요"
              className="w-full h-120 p-20 border border-[#e6e6e6] rounded-12 font-pretendard text-16 leading-24 text-[#333333] placeholder:text-[#999999] resize-none"
              aria-label="댓글 입력"
            />
            <div className="flex justify-end mt-12">
              <button className="px-32 py-12 bg-[#5a33be] text-white rounded-8 font-pretendard font-medium text-16 leading-16 hover:bg-[#4a2b9e]">
                댓글 등록
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-24">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-24 bg-[#f9f9f9] rounded-12"
              >
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-12">
                    <span className="font-pretendard font-semibold text-16 leading-16 text-[#333333]">
                      {comment.author}
                    </span>
                    <span className="font-pretendard font-regular text-14 leading-14 text-[#999999]">
                      {comment.date}
                    </span>
                  </div>
                  <button className="font-pretendard font-regular text-14 leading-14 text-[#666666] hover:text-[#333333]">
                    삭제
                  </button>
                </div>
                <p className="font-pretendard font-regular text-16 leading-24 text-[#333333]">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="bg-[#d8dde5] h-px w-full mb-40" />

        {/* Navigation Buttons */}
        <div className="space-y-2 mb-40">
          {/* Previous Post */}
          <div className="flex items-center border border-[#e6e6e6] rounded-8 p-20 hover:bg-[#f9f9f9]">
            <span className="font-pretendard font-medium text-16 leading-16 text-[#666666] w-100">
              이전글
            </span>
            <span className="font-pretendard font-regular text-16 leading-16 text-[#333333] flex-1">
              글로벌 외식 프랜차이즈 성공 사례 연구
            </span>
          </div>
          
          {/* Next Post */}
          <div className="flex items-center border border-[#e6e6e6] rounded-8 p-20 hover:bg-[#f9f9f9]">
            <span className="font-pretendard font-medium text-16 leading-16 text-[#666666] w-100">
              다음글
            </span>
            <span className="font-pretendard font-regular text-16 leading-16 text-[#333333] flex-1">
              소비자 식습관 변화와 외식업 대응 전략
            </span>
          </div>
        </div>

        {/* Back to List Button */}
        <div className="flex justify-center">
          <button className="px-40 py-16 border border-[#333333] rounded-8 font-pretendard font-medium text-16 leading-16 text-[#333333] hover:bg-[#f5f5f5]">
            목록으로
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Detail;