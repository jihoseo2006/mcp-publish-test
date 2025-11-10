import Header from "~/components/header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-1200 mx-auto px-80 py-80">
        <div className="text-center">
          <h1 className="text-36 font-bold text-[#1C1B1F] mb-24">
            한국외식산업연구원에 오신 것을 환영합니다
          </h1>
          <p className="text-18 text-[#666666] mb-60">
            대한민국 외식산업의 발전을 위한 연구와 정책을 개발합니다
          </p>
          <div className="flex items-center justify-center gap-24">
            <a 
              href="/introduction" 
              className="px-32 py-16 bg-[#193DD0] text-white rounded-8 text-16 font-medium hover:bg-[#1230A0] active:bg-[#0D2080] transition-colors"
            >
              연구원 소개
            </a>
            <a 
              href="/info-list" 
              className="px-32 py-16 border-1 border-[#193DD0] text-[#193DD0] rounded-8 text-16 font-medium hover:bg-[#E8F0FE] transition-colors"
            >
              연구보고서 보기
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;