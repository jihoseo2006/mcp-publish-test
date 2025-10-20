
import Header from "../components/Header";
import Footer from "../components/Footer";

// 이미지 및 아이콘 (Figma에서 추출)
const imgRectangle3468001 = "http://localhost:3845/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
const imgOfficeCopyOne = "http://localhost:3845/assets/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg";
const imgGroup10308 = "http://localhost:3845/assets/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg";
const imgLike = "http://localhost:3845/assets/2b925351440a53a6f1d743022ac726080a68f2ec.svg";
const imgShare = "http://localhost:3845/assets/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg";
const imgScrap = "http://localhost:3845/assets/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg";
const imgDivider = "http://localhost:3845/assets/0d977cc7c6f9678ecca301a8c1719744562c579d.svg";
const imgEditListCheckbox = "http://localhost:3845/assets/556559325fe5918ca2259c0e94337cb2835c4caf.svg";
const imgEditListCheckbox1 = "http://localhost:3845/assets/7af4d50855a6ed814e9e28dbc678e333982319b8.svg";

const Detail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <Header />
      
      {/* 메인 컨텐츠 */}
      <main className="max-w-[1440px] mx-auto px-[100px] py-[60px]">
        {/* 페이지 타이틀 */}
        <div className="text-center mb-[50px]">
          <p className="font-['Pretendard:Medium',_sans-serif] text-[18px] text-[#666666] mb-[8px]">
            외식정보
          </p>
          <h1 className="font-['Pretendard:Bold',_sans-serif] text-[30px] text-[#333333] mb-[30px]">
            K-FIRI
          </h1>
          
          {/* 구분선 */}
          <div className="bg-[#555555] h-[2px] w-full mb-[50px]" />
        </div>

        {/* 안내 문구 */}
        <div className="bg-[#d8dde5] p-[20px] mb-[40px] font-['Pretendard:Regular',_sans-serif] text-[16px] text-[#333333] leading-[28px]">
          <p className="mb-0">* 본 보고서는 무료로 제공되오니 관심있는 분들의 많은 열람 바라며,</p>
          <p>자료의 텍스트, 이미지 등 모든 자료들은 본 사이트의 허락없이 무단으로 복제, 배포, 사용하실 수 없습니다.</p>
        </div>

        {/* 정기연구보고서 상세 정보 섹션 */}
        <section className="border border-[#bfc3c8] rounded-[3px] p-[40px] mb-[40px]">
          <div className="flex items-start gap-[40px]">
            {/* 썸네일 */}
            <div className="w-[140px] h-[178px] border border-[#d8dde5] overflow-hidden flex-shrink-0">
              <img 
                src={imgRectangle3468001} 
                alt="연구보고서 썸네일"
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* 정보 */}
            <div className="flex-1">
              {/* 카테고리 */}
              <div className="font-['Pretendard:Bold',_sans-serif] text-[16px] text-[#5a33be] mb-[8px]">
                정기연구보고서
              </div>
              
              {/* 제목 */}
              <h2 className="font-['Pretendard:Medium',_sans-serif] text-[20px] text-[#333333] mb-[20px] leading-[20px]">
                [한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구
              </h2>
              
              {/* 메타 정보 */}
              <div className="space-y-[11px]">
                <div className="flex items-center gap-[51px]">
                  <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                    작성자
                  </span>
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                    KFIRI
                  </span>
                </div>
                <div className="flex items-center gap-[51px]">
                  <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                    작성일
                  </span>
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                    2023.01.01
                  </span>
                </div>
                <div className="flex items-center gap-[51px]">
                  <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                    조회수
                  </span>
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                    88
                  </span>
                </div>
                <div className="flex items-center gap-[51px]">
                  <span className="font-['Pretendard:SemiBold',_sans-serif] text-[14px] text-[#333333] w-[51px]">
                    좋아요
                  </span>
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#444444]">
                    88
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 첨부파일 섹션 */}
        <section className="border border-[#bfc3c8] rounded-[3px] p-[32px] mb-[40px]">
          <div className="font-['Pretendard:SemiBold',_sans-serif] text-[18px] text-[#333333] mb-[20px]">
            첨부파일
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img src={imgOfficeCopyOne} alt="파일 아이콘" className="w-[14px] h-[14px]" />
              <span className="font-['Pretendard:Regular',_sans-serif] text-[16px] text-[#666666] underline decoration-solid cursor-pointer">
                19년 3차 외식산업 배달 실태에 관한 연구.pdf
              </span>
            </div>
            <button className="flex items-center gap-[3px] text-[#193dd0] font-['Pretendard:SemiBold',_sans-serif] text-[16px] cursor-pointer">
              다운로드
              <img src={imgGroup10308} alt="다운로드 아이콘" className="w-[14px] h-[14px]" />
            </button>
          </div>
        </section>

        {/* 좋아요&공유하기&스크랩 섹션 */}
        <section className="flex items-center justify-center mb-[40px]">
          <div className="bg-white border border-[#d8dde5] rounded-[5px] flex items-center h-[60px] w-[420px]">
            {/* 좋아요 */}
            <div className="flex items-center justify-center flex-1 gap-[6px] cursor-pointer">
              <img src={imgLike} alt="좋아요" className="w-[16px] h-[16px]" />
              <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#2b2b2b]">
                200
              </span>
            </div>
            
            {/* 구분선 */}
            <div className="bg-[#d8dde5] w-px h-[60px]" />
            
            {/* 공유하기 */}
            <div className="flex items-center justify-center flex-1 gap-[6px] cursor-pointer">
              <img src={imgShare} alt="공유하기" className="w-[16px] h-[16px]" />
              <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#2b2b2b]">
                공유하기
              </span>
            </div>
            
            {/* 구분선 */}
            <div className="bg-[#d8dde5] w-px h-[60px]" />
            
            {/* 스크랩 */}
            <div className="flex items-center justify-center flex-1 gap-[6px] cursor-pointer">
              <img src={imgScrap} alt="스크랩" className="w-[16px] h-[16px]" />
              <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#2b2b2b]">
                스크랩
              </span>
            </div>
          </div>
        </section>

        {/* 댓글 섹션 */}
        <section className="mb-[40px]">
          {/* 댓글 헤더 */}
          <div className="flex items-center gap-[8px] mb-[30px]">
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[20px] text-[#333333]">
              댓글
            </span>
            <span className="font-['Pretendard:SemiBold',_sans-serif] text-[20px] text-[#193dd0]">
              2
            </span>
          </div>

          {/* 댓글 목록 */}
          <div className="space-y-[30px] mb-[40px]">
            {/* 댓글 1 */}
            <div className="bg-[#f4f8ff] rounded-[10px] p-[30px]">
              <div className="font-['Pretendard:Regular',_sans-serif] text-[16px] text-[#626873] leading-[28px] mb-[15px]">
                <p className="mb-0">도움이 되는 연구정보였습니다.</p>
                <p>감사합니다.</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <span className="font-['Pretendard:Medium',_sans-serif] text-[14px] text-[#333333]">
                    정**
                  </span>
                  <img src={imgDivider} alt="구분선" className="w-px h-[10px]" />
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#6a768c]">
                    2023.01.01
                  </span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666] cursor-pointer">
                    수정
                  </span>
                  <img src={imgDivider} alt="구분선" className="w-px h-[10px]" />
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666] cursor-pointer">
                    삭제
                  </span>
                </div>
              </div>
            </div>

            {/* 댓글 2 */}
            <div className="bg-[#f4f8ff] rounded-[10px] p-[30px]">
              <div className="font-['Pretendard:Regular',_sans-serif] text-[16px] text-[#626873] leading-[28px] mb-[15px]">
                <p className="mb-0">좋은 자료입니다.</p>
                <p>감사합니다.</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <span className="font-['Pretendard:Medium',_sans-serif] text-[14px] text-[#333333]">
                    김**
                  </span>
                  <img src={imgDivider} alt="구분선" className="w-px h-[10px]" />
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#6a768c]">
                    2023.01.01
                  </span>
                </div>
                <div className="flex items-center gap-[12px]">
                  <span className="font-['Pretendard:Regular',_sans-serif] text-[14px] text-[#666666] cursor-pointer">
                    신고
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 댓글 작성 */}
          <div className="flex items-center gap-[20px]">
            <input
              type="text"
              placeholder="댓글을 작성하세요."
              className="flex-1 font-['Pretendard:Regular',_sans-serif] text-[16px] text-[#666666] border-b border-[#d8dde5] pb-[10px] outline-none bg-transparent"
            />
            <button className="font-['Pretendard:SemiBold',_sans-serif] text-[18px] text-[#193dd0] cursor-pointer">
              등록
            </button>
          </div>
        </section>

        {/* 네비게이션 (이전글/목록/다음글) */}
        <section className="flex items-center justify-between border-t border-[gainsboro] pt-[40px]">
          {/* 이전글 */}
          <button className="flex items-center gap-[10px] border border-[gainsboro] rounded-[4px] px-[20px] py-[10px] font-['Pretendard:Medium',_sans-serif] text-[16px] text-[#666666] cursor-pointer">
            <img 
              src={imgEditListCheckbox1} 
              alt="이전" 
              className="w-[24px] h-[24px] transform scale-y-[-100%]" 
            />
            이전글
          </button>
          
          {/* 목록 */}
          <button className="flex items-center gap-[10px] border border-[gainsboro] rounded-[4px] px-[20px] py-[10px] font-['Pretendard:Medium',_sans-serif] text-[16px] text-[#666666] cursor-pointer">
            <img src={imgEditListCheckbox} alt="목록" className="w-[24px] h-[24px]" />
            목록
          </button>
          
          {/* 다음글 */}
          <button className="flex items-center gap-[10px] border border-[gainsboro] rounded-[4px] px-[20px] py-[10px] font-['Pretendard:Medium',_sans-serif] text-[16px] text-[#666666] cursor-pointer">
            다음글
            <img 
              src={imgEditListCheckbox1} 
              alt="다음" 
              className="w-[24px] h-[24px] transform rotate-180" 
            />
          </button>
        </section>
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Detail;