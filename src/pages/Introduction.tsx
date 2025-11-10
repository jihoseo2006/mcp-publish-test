import Header from "~/components/header";
import DirectorImage from "~/assets/dcf333679af90eb679b4e6c0f1df43f9052773fe.png";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-1200 mx-auto px-80 py-80">
        {/* Page Title */}
        <div className="mb-60">
          <h1 className="text-32 font-bold text-[#1C1B1F] mb-12">인사말</h1>
          <p className="text-16 text-[#666666]">한국외식산업연구원을 찾아주셔서 감사합니다.</p>
        </div>

        {/* Director's Message Section */}
        <div className="bg-[#F8F9FA] rounded-12 p-60">
          <div className="flex gap-60">
            {/* Director Image */}
            <div className="flex-shrink-0">
              <img 
                src={DirectorImage} 
                alt="원장님 사진" 
                className="w-400 h-auto rounded-8"
              />
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <h2 className="text-24 font-bold text-[#1C1B1F] mb-24">
                한국외식산업연구원장 인사말
              </h2>
              
              <div className="space-y-20 text-16 leading-28 text-[#333333]">
                <p>
                  안녕하십니까, 한국외식산업연구원 원장입니다.
                </p>
                
                <p>
                  저희 한국외식산업연구원은 대한민국 외식산업의 발전과 경쟁력 강화를 위해 
                  설립된 전문 연구기관입니다. 외식산업의 현안을 분석하고, 미래 발전 방향을 
                  제시하며, 정책 개발과 산업 지원에 앞장서고 있습니다.
                </p>

                <p>
                  우리 연구원은 체계적이고 과학적인 연구를 통해 외식산업의 지속 가능한 
                  성장을 도모하고, 외식업계 종사자들에게 실질적인 도움이 되는 정보와 
                  서비스를 제공하기 위해 노력하고 있습니다.
                </p>

                <p>
                  또한, 정부와 지방자치단체, 관련 기관들과의 긴밀한 협력을 통해 
                  외식산업 발전을 위한 정책 개발과 제도 개선에 기여하고 있으며, 
                  외식업계의 목소리를 대변하는 역할을 충실히 수행하고 있습니다.
                </p>

                <p>
                  앞으로도 한국외식산업연구원은 외식산업의 미래를 선도하는 
                  싱크탱크로서 더욱 발전하겠습니다. 여러분의 많은 관심과 
                  성원을 부탁드립니다.
                </p>

                <p className="mt-40">
                  감사합니다.
                </p>

                <div className="mt-40 text-right">
                  <p className="text-18 font-semibold text-[#1C1B1F]">
                    한국외식산업연구원장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institute Overview */}
        <div className="mt-80">
          <h2 className="text-24 font-bold text-[#1C1B1F] mb-40">연구원 소개</h2>
          
          <div className="grid grid-cols-3 gap-30">
            <div className="bg-white border-1 border-[#E5E8EB] rounded-8 p-30">
              <h3 className="text-18 font-semibold text-[#193DD0] mb-16">비전</h3>
              <p className="text-14 leading-24 text-[#555555]">
                대한민국 외식산업의 지속 가능한 발전과 글로벌 경쟁력 강화를 
                선도하는 전문 연구기관
              </p>
            </div>

            <div className="bg-white border-1 border-[#E5E8EB] rounded-8 p-30">
              <h3 className="text-18 font-semibold text-[#193DD0] mb-16">미션</h3>
              <p className="text-14 leading-24 text-[#555555]">
                체계적인 연구와 분석을 통한 외식산업 발전 방향 제시 및 
                정책 개발 지원
              </p>
            </div>

            <div className="bg-white border-1 border-[#E5E8EB] rounded-8 p-30">
              <h3 className="text-18 font-semibold text-[#193DD0] mb-16">핵심가치</h3>
              <p className="text-14 leading-24 text-[#555555]">
                전문성, 혁신성, 신뢰성을 바탕으로 외식산업의 
                미래를 선도
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Introduction;