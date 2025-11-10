import Header from "~/components/header";
import DownloadButton from "~/components/download-button";
import HeartIcon from "~/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg?react";
import ShareIcon from "~/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg?react";
import CopyIcon from "~/assets/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg?react";
import StarIcon from "~/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg?react";

const Detail = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-1200 mx-auto px-80 py-80">
        {/* Breadcrumb */}
        <div className="mb-24 flex items-center gap-8 text-14 text-[#666666]">
          <span>홈</span>
          <span>&gt;</span>
          <span>연구보고서</span>
          <span>&gt;</span>
          <span className="text-[#193DD0]">정기연구보고서</span>
        </div>

        {/* Article Header */}
        <div className="pb-32 border-b-2 border-[#1C1B1F]">
          <div className="mb-16">
            <span className="inline-block px-12 py-6 bg-[#E8F0FE] text-[#193DD0] rounded-4 text-14 font-medium">
              정기보고서
            </span>
          </div>
          <h1 className="text-28 font-bold text-[#1C1B1F] mb-24">
            2024년 1분기 외식산업 동향 분석
          </h1>
          <div className="flex items-center gap-24 text-14 text-[#666666]">
            <div className="flex items-center gap-8">
              <span className="font-medium text-[#555555]">작성자</span>
              <span>연구팀</span>
            </div>
            <div className="w-1 h-12 bg-[#D8DDE5]" />
            <div className="flex items-center gap-8">
              <span className="font-medium text-[#555555]">작성일</span>
              <span>2024.03.15</span>
            </div>
            <div className="w-1 h-12 bg-[#D8DDE5]" />
            <div className="flex items-center gap-8">
              <span className="font-medium text-[#555555]">조회수</span>
              <span>1,245</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="py-60 border-b-1 border-[#E5E8EB]">
          <div className="prose max-w-none">
            <p className="text-16 leading-28 text-[#333333] mb-24">
              2024년 1분기 외식산업 동향 분석 결과를 공유합니다.
            </p>
            
            <h2 className="text-20 font-bold text-[#1C1B1F] mt-40 mb-16">1. 시장 개요</h2>
            <p className="text-16 leading-28 text-[#333333] mb-24">
              2024년 1분기 외식산업은 전년 동기 대비 5.2% 성장하며 회복세를 보이고 있습니다. 
              특히 고급 레스토랑과 배달 음식 시장의 성장이 두드러졌으며, 
              건강식과 프리미엄 메뉴에 대한 소비자 선호도가 증가하는 추세입니다.
            </p>

            <h2 className="text-20 font-bold text-[#1C1B1F] mt-40 mb-16">2. 주요 트렌드</h2>
            <ul className="list-disc pl-24 space-y-12 text-16 leading-28 text-[#333333] mb-24">
              <li>디지털 전환 가속화: 키오스크 및 모바일 주문 시스템 확대</li>
              <li>건강 지향 메뉴 증가: 저칼로리, 채식 옵션 강화</li>
              <li>지속 가능성 중시: 친환경 포장재 사용 확대</li>
              <li>프리미엄화 경향: 고품질 식재료 사용 증가</li>
            </ul>

            <h2 className="text-20 font-bold text-[#1C1B1F] mt-40 mb-16">3. 향후 전망</h2>
            <p className="text-16 leading-28 text-[#333333] mb-24">
              2분기에는 계절적 요인과 외부 경제 환경 변화에 따라 성장세가 다소 둔화될 것으로 예상되나, 
              하반기부터는 다시 회복세를 보일 것으로 전망됩니다.
            </p>
          </div>
        </div>

        {/* Attachments */}
        <div className="py-32 border-b-1 border-[#E5E8EB]">
          <h3 className="text-16 font-semibold text-[#1C1B1F] mb-20">첨부파일</h3>
          <div className="space-y-12">
            <div className="flex items-center justify-between p-16 bg-[#F8F9FA] rounded-8">
              <div className="flex items-center gap-12">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2C4 0.89543 4.89543 0 6 0H14L20 6V22C20 23.1046 19.1046 24 18 24H6C4.89543 24 4 23.1046 4 22V2Z" fill="#E5E8EB"/>
                  <path d="M14 0L20 6H16C14.8954 6 14 5.10457 14 4V0Z" fill="#AAAAAA"/>
                </svg>
                <span className="text-14 text-[#333333]">2024년_1분기_외식산업_동향분석.pdf</span>
                <span className="text-12 text-[#999999]">(2.5MB)</span>
              </div>
              <DownloadButton text="다운로드" />
            </div>
            <div className="flex items-center justify-between p-16 bg-[#F8F9FA] rounded-8">
              <div className="flex items-center gap-12">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2C4 0.89543 4.89543 0 6 0H14L20 6V22C20 23.1046 19.1046 24 18 24H6C4.89543 24 4 23.1046 4 22V2Z" fill="#E5E8EB"/>
                  <path d="M14 0L20 6H16C14.8954 6 14 5.10457 14 4V0Z" fill="#AAAAAA"/>
                </svg>
                <span className="text-14 text-[#333333]">참고자료_통계데이터.xlsx</span>
                <span className="text-12 text-[#999999]">(1.2MB)</span>
              </div>
              <DownloadButton text="다운로드" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="py-32 border-b-1 border-[#E5E8EB]">
          <div className="flex items-center justify-center gap-16">
            <button 
              className="flex flex-col items-center gap-8 px-24 py-16 hover:bg-[#F5F5F5] rounded-8 transition-colors"
              aria-label="좋아요"
            >
              <HeartIcon className="w-24 h-24" />
              <span className="text-12 text-[#555555]">좋아요</span>
              <span className="text-12 font-semibold text-[#193DD0]">24</span>
            </button>
            
            <button 
              className="flex flex-col items-center gap-8 px-24 py-16 hover:bg-[#F5F5F5] rounded-8 transition-colors"
              aria-label="공유하기"
            >
              <ShareIcon className="w-24 h-24" />
              <span className="text-12 text-[#555555]">공유</span>
            </button>
            
            <button 
              className="flex flex-col items-center gap-8 px-24 py-16 hover:bg-[#F5F5F5] rounded-8 transition-colors"
              aria-label="URL 복사"
            >
              <CopyIcon className="w-24 h-24" />
              <span className="text-12 text-[#555555]">URL 복사</span>
            </button>
            
            <button 
              className="flex flex-col items-center gap-8 px-24 py-16 hover:bg-[#F5F5F5] rounded-8 transition-colors"
              aria-label="스크랩"
            >
              <StarIcon className="w-24 h-24" />
              <span className="text-12 text-[#555555]">스크랩</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="py-60">
          <h3 className="text-18 font-bold text-[#1C1B1F] mb-24">
            댓글 <span className="text-[#193DD0]">3</span>
          </h3>

          {/* Comment Input */}
          <div className="mb-40">
            <textarea
              className="w-full h-120 p-16 border-1 border-[#D8DDE5] rounded-8 text-14 placeholder:text-[#AAAAAA] resize-none focus:outline-none focus:border-[#193DD0]"
              placeholder="댓글을 입력하세요"
              aria-label="댓글 입력"
            />
            <div className="flex justify-end mt-12">
              <button className="px-24 py-10 bg-[#193DD0] text-white rounded-4 text-14 font-medium hover:bg-[#1230A0] active:bg-[#0D2080]">
                등록
              </button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-24">
            {[
              {
                id: 1,
                author: "홍길동",
                date: "2024.03.16 10:30",
                content: "유용한 정보 감사합니다. 외식산업 트렌드를 한눈에 파악할 수 있어서 좋네요.",
              },
              {
                id: 2,
                author: "김철수",
                date: "2024.03.16 14:20",
                content: "디지털 전환 관련 내용이 특히 흥미롭습니다. 다음 보고서도 기대하겠습니다.",
              },
              {
                id: 3,
                author: "이영희",
                date: "2024.03.17 09:15",
                content: "실무에 많은 도움이 되었습니다. 감사합니다!",
              },
            ].map((comment) => (
              <div key={comment.id} className="p-20 bg-[#F8F9FA] rounded-8">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-12">
                    <span className="text-14 font-semibold text-[#1C1B1F]">{comment.author}</span>
                    <span className="text-12 text-[#999999]">{comment.date}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <button className="text-12 text-[#666666] hover:text-[#193DD0]">수정</button>
                    <span className="text-[#D8DDE5]">|</span>
                    <button className="text-12 text-[#666666] hover:text-[#FF0000]">삭제</button>
                  </div>
                </div>
                <p className="text-14 leading-24 text-[#333333]">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-12 mt-60">
          <button className="px-32 py-12 border-1 border-[#D8DDE5] rounded-4 text-14 text-[#555555] hover:bg-[#F5F5F5]">
            목록으로
          </button>
          <button className="px-32 py-12 bg-[#193DD0] text-white rounded-4 text-14 font-medium hover:bg-[#1230A0] active:bg-[#0D2080]">
            수정하기
          </button>
        </div>
      </main>
    </div>
  );
};

export default Detail;