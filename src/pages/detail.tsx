
import Header from '../components/Header';

const reportImage = "/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
const downloadIcon = "/282f75ec9e66b6db44e6e72091b860c660fc9b5a.svg";
const downloadArrow = "/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg";
const likeIcon = "/2b925351440a53a6f1d743022ac726080a68f2ec.svg";
const shareIcon = "/6798b07e2e1ca1e374b209c4c71be7be8d7c6c2c.svg";
const scrapIcon = "/6d6e8f3ed1684bc51962e37898e89eeee1bdf2b3.svg";
const lineIcon = "/0d977cc7c6f9678ecca301a8c1719744562c579d.svg";
const listIcon = "/556559325fe5918ca2259c0e94337cb2835c4caf.svg";
const arrowIcon = "/7af4d50855a6ed814e9e28dbc678e333982319b8.svg";

const Detail = () => {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="C0202_게시글_상세" data-node-id="401:2258">
      {/* Header Component */}
      <Header />
      
      {/* Separator line */}
      <div className="bg-[#e6e6e6] h-px w-full" data-node-id="677:4608" />
      
      {/* Main content */}
      <div className="pt-[61px]">
        {/* 상단 제목 */}
        <p className="font-medium leading-[18px] text-[#666666] text-[18px] text-center text-nowrap" data-node-id="401:2274">
          외식정보
        </p>
        <p className="font-bold leading-[30px] text-[#333333] text-[30px] text-center text-nowrap mt-[28px]" data-node-id="401:2273">
          K-FIRI
        </p>
        
        {/* 구분선 */}
        <div className="bg-[#555555] h-[2px] mx-[100px] mt-[30px]" data-node-id="401:2272" />
        
        {/* 게시글 정보 섹션 */}
        <div className="max-w-[1240px] mx-auto px-[20px] mt-[40px]">
          <div className="flex gap-8">
            {/* 좌측 이미지 */}
            <div className="w-[140px] h-[175px] border border-[#bfc3c8] rounded-[3px]" data-node-id="401:2327">
              <img alt="보고서 표지" className="w-full h-full object-center object-cover" src={reportImage} />
            </div>
            
            {/* 우측 정보 */}
            <div className="flex-1">
              <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:2329">
                정기연구보고서
              </div>
              <div className="font-medium text-[#333333] text-[20px] leading-[20px] mb-6" data-node-id="401:2328">
                [한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구
              </div>
              
              <div className="space-y-[22px] text-[14px]">
                <div className="flex">
                  <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:2330">작성자</span>
                  <span className="font-normal text-[#444444]" data-node-id="401:2331">KFIRI</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:2332">작성일</span>
                  <span className="font-normal text-[#444444]" data-node-id="401:2333">2023.01.01</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:2334">조회수</span>
                  <span className="font-normal text-[#444444]" data-node-id="401:2335">88</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:2336">좋아요</span>
                  <span className="font-normal text-[#444444]" data-node-id="401:2337">88</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 구분선 */}
          <div className="bg-[#d8dde5] h-[40px] w-full mt-8" data-node-id="401:2261" />
          
          {/* 내용 */}
          <div className="border border-[#bfc3c8] border-solid rounded-[3px] w-full h-[420px] mt-1" data-node-id="401:2259">
            <div className="p-8 font-normal text-[#333333] text-[16px] leading-[28px]" data-node-id="401:2262">
              <p className="mb-0">* 본 보고서는 무료로 제공되오니 관심있는 분들의 많은 열람 바라며,</p>
              <p className="mb-0">자료의 텍스트, 이미지 등 모든 자료들은 본 사이트의 허락없이 무단으로 복제, 배포, 사용하실 수 없습니다.</p>
            </div>
          </div>
          
          {/* 첨부파일 섹션 */}
          <div className="mt-12">
            <div className="border-t border-[#d8dde5] pt-8" data-node-id="401:2340">
              <div className="flex items-center mb-6">
                <span className="font-semibold text-[#333333] text-[18px]" data-node-id="401:2275">첨부파일</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]" data-node-id="401:2279">
                  <div className="w-[14px] h-[14px]" data-name="Office/copy-one" data-node-id="401:2280">
                    <img alt="" className="block max-w-none w-full h-full" src={downloadIcon} />
                  </div>
                  <div className="font-normal text-[#666666] text-[16px] underline" data-node-id="401:2282">
                    19년 3차 외식산업 배달 실태에 관한 연구.pdf
                  </div>
                </div>
                
                <div className="flex items-center gap-[3px]" data-node-id="401:2283">
                  <div className="font-semibold text-[#193dd0] text-[16px]" data-node-id="401:2284">
                    다운로드
                  </div>
                  <div className="w-[14px] h-[10px]" data-node-id="401:2285">
                    <img alt="" className="block max-w-none w-full h-full" src={downloadArrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 좋아요/공유/스크랩 버튼 */}
          <div className="flex items-center justify-center mt-12">
            <div className="flex bg-white border border-[#d8dde5] border-solid rounded-[5px]" data-node-id="401:2292">
              {/* 좋아요 */}
              <div className="flex items-center gap-[6px] px-12 py-6" data-node-id="401:2294">
                <div className="w-4 h-4" data-name="Base/like" data-node-id="401:2296">
                  <img alt="좋아요" className="block max-w-none w-full h-full" src={likeIcon} />
                </div>
                <p className="font-normal text-[#2b2b2b] text-[14px] text-center">200</p>
              </div>
              
              {/* 구분선 */}
              <div className="bg-[#d8dde5] w-px h-[60px]" data-node-id="401:2302" />
              
              {/* 공유하기 */}
              <div className="flex items-center gap-[6px] px-12 py-6" data-node-id="401:2298">
                <div className="w-4 h-4" data-name="Connect/share-one" data-node-id="401:2300">
                  <img alt="공유하기" className="block max-w-none w-full h-full" src={shareIcon} />
                </div>
                <p className="font-normal text-[#2b2b2b] text-[14px] text-center">공유하기</p>
              </div>
              
              {/* 구분선 */}
              <div className="bg-white border border-[#d8dde5] border-solid w-px h-[60px]" data-node-id="401:2303" />
              
              {/* 스크랩 */}
              <div className="flex items-center gap-[6px] px-12 py-6" data-node-id="401:2304">
                <div className="w-[12.444px] h-[11.866px]" data-name="Vector (Stroke)" data-node-id="401:2306">
                  <img alt="스크랩" className="block max-w-none w-full h-full" src={scrapIcon} />
                </div>
                <p className="font-normal text-[#2b2b2b] text-[14px] text-center">스크랩</p>
              </div>
            </div>
          </div>
          
          {/* 댓글 섹션 */}
          <div className="mt-16">
            <div className="border-t border-[#d8dde5] pt-8" data-node-id="401:2340">
              <div className="flex items-center gap-[8px] mb-8" data-node-id="401:2276">
                <span className="font-semibold text-[#333333] text-[20px]" data-node-id="401:2277">댓글</span>
                <span className="font-semibold text-[#193dd0] text-[20px]" data-node-id="401:2278">2</span>
              </div>
              
              {/* 첫 번째 댓글 */}
              <div className="bg-[#f4f8ff] rounded-[10px] p-8 mb-8" data-node-id="401:2309">
                <div className="flex items-center gap-3 mb-4" data-node-id="401:2313">
                  <span className="font-medium text-[#333333] text-[14px]" data-node-id="401:2314">정**</span>
                  <div className="w-px h-[10px]" data-name="l" data-node-id="401:2315">
                    <img alt="" className="block max-w-none w-full h-full" src={lineIcon} />
                  </div>
                  <span className="font-normal text-[#6a768c] text-[14px]" data-node-id="401:2316">2023.01.01</span>
                </div>
                
                <div className="font-normal text-[#626873] text-[16px] leading-[28px] mb-4" data-node-id="401:2311">
                  <p className="mb-0">도움이 되는 연구정보였습니다.</p>
                  <p className="mb-0">감사합니다.</p>
                </div>
                
                <div className="flex items-center gap-3 justify-end" data-node-id="401:2321">
                  <span className="font-normal text-[#666666] text-[14px]">수정</span>
                  <div className="w-px h-[10px]" data-name="l" data-node-id="401:2323">
                    <img alt="" className="block max-w-none w-full h-full" src={lineIcon} />
                  </div>
                  <span className="font-normal text-[#666666] text-[14px]">삭제</span>
                </div>
              </div>
              
              {/* 두 번째 댓글 */}
              <div className="bg-[#f4f8ff] rounded-[10px] p-8 mb-8" data-node-id="401:2310">
                <div className="flex items-center gap-3 mb-4" data-node-id="401:2317">
                  <span className="font-medium text-[#333333] text-[14px]" data-node-id="401:2318">김**</span>
                  <div className="w-px h-[10px]" data-name="l" data-node-id="401:2319">
                    <img alt="" className="block max-w-none w-full h-full" src={lineIcon} />
                  </div>
                  <span className="font-normal text-[#6a768c] text-[14px]" data-node-id="401:2320">2023.01.01</span>
                </div>
                
                <div className="font-normal text-[#626873] text-[16px] leading-[28px] mb-4" data-node-id="401:2312">
                  <p className="mb-0">좋은 자료입니다.</p>
                  <p className="mb-0">감사합니다.</p>
                </div>
                
                <div className="flex items-center justify-end" data-node-id="401:2325">
                  <span className="font-normal text-[#666666] text-[14px]">신고</span>
                </div>
              </div>
              
              {/* 댓글 작성 */}
              <div className="border border-[#bfc3c8] border-solid rounded-[3px] p-8 mb-8" data-node-id="401:2260">
                <p className="font-normal text-[#666666] text-[16px] leading-[16px] mb-4" data-node-id="401:2308">
                  댓글을 작성하세요.
                </p>
                <div className="flex justify-end">
                  <span className="font-semibold text-[#193dd0] text-[18px]" data-node-id="401:2291">등록</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 하단 네비게이션 버튼 */}
          <div className="flex justify-between items-center mt-16 border-t border-[#d8dde5] pt-8" data-node-id="401:2339">
            {/* 이전글 */}
            <div className="flex items-center border border-gray-300 rounded px-4 py-2" data-node-id="401:2353">
              <div className="w-6 h-6 mr-3 scale-y-[-100%]">
                <img alt="이전글" className="block max-w-none w-full h-full" src={arrowIcon} />
              </div>
              <span className="font-medium text-[#666666] text-[16px]">이전글</span>
            </div>
            
            {/* 다음글 */}
            <div className="flex items-center border border-gray-300 rounded px-4 py-2" data-node-id="401:2347">
              <span className="font-medium text-[#666666] text-[16px] mr-3">다음글</span>
              <div className="w-6 h-6 rotate-180">
                <img alt="다음글" className="block max-w-none w-full h-full" src={arrowIcon} />
              </div>
            </div>
            
            {/* 목록 */}
            <div className="flex items-center border border-gray-300 rounded px-4 py-2" data-node-id="401:2341">
              <div className="w-6 h-6 mr-3">
                <img alt="목록" className="block max-w-none w-full h-full" src={listIcon} />
              </div>
              <span className="font-medium text-[#666666] text-[16px]">목록</span>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-[200px] relative" data-node-id="401:2264">
          <div className="bg-[#ececec] h-px w-full" data-node-id="401:2266" />
          <div className="bg-white h-[190px] w-full" data-node-id="401:2265">
            <div className="max-w-[1240px] mx-auto px-[100px] pt-[25px]">
              <div className="flex gap-[103px]">
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="401:2270">
                  개인정보처리방침
                </p>
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="401:2271">
                  사이트이용약관
                </p>
              </div>
              
              <p className="font-light text-[#222222] text-[10px] leading-[16px] mt-[22px]" data-node-id="401:2267">
                (사)한국외식업중앙회 한국외식산업연구원
              </p>
              
              <div className="font-light text-[#444444] text-[10px] leading-[16px] mt-[27px]" data-node-id="401:2268">
                <p className="leading-[16px] mb-0">
                  <span className="font-bold">주소 </span>
                  <span>(04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
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
              
              <p className="font-normal text-[#b6b6b6] text-[10px] leading-[15px] mt-[27px]" data-node-id="401:2269">
                Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;