
import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';

const report1 = "/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png";
const report2 = "/221e392466f71f561707a2276e153b874eb3df2c.png";
const report3 = "/b191d8ba641908c9df0c5996528752d763535b32.png";
const report4 = "/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
const newIcon = "/99092354c834b9f51ca53ff2576334d67429c242.png";
const leftArrow = "/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg";
const rightArrow = "/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg";
const doubleRightArrow = "/2f70db464a513926a3afef99b8f4ce28af37ad72.svg";
const searchIcon = "/2943638af14fdebc680bfc19b832df80e9772713.svg";

const InfoList = () => {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="C0201_외식정보_KFIRI_정기연구보고서" data-node-id="401:1192">
      {/* Header Component */}
      <Header />
      
      {/* Separator line */}
      <div className="bg-[#e6e6e6] h-px w-full" data-node-id="677:4572" />
      
      {/* Main content */}
      <div className="pt-[61px]">
        {/* 상단 제목 */}
        <p className="font-medium leading-[18px] text-[#666666] text-[18px] text-center text-nowrap" data-node-id="401:1321">
          외식정보
        </p>
        <p className="font-bold leading-[30px] text-[#333333] text-[30px] text-center text-nowrap mt-[28px]" data-node-id="401:1320">
          K-FIRI
        </p>
        
        {/* 검색바 */}
        <div className="border border-[#838383] border-solid rounded-[100px] max-w-[340px] mx-auto mt-[30px]" data-node-id="401:1322">
          <div className="box-border flex items-center px-6 py-[13px] rounded-inherit">
            <div className="flex-1" data-node-id="401:1324">
              <p className="font-normal leading-[18px] text-[#989898] text-[18px] whitespace-nowrap">검색어를 입력해주세요.</p>
            </div>
            <div className="w-6 h-6 ml-[223px]" data-name="MagnifyingGlass" data-node-id="401:1325">
              <img alt="검색" className="block max-w-none w-full h-full" src={searchIcon} />
            </div>
          </div>
        </div>
        
        {/* 탭 네비게이션 */}
        <div className="flex gap-[40px] items-start justify-center mt-[50px]" data-node-id="401:1292">
          <div className="flex flex-col gap-[14px] items-start" data-node-id="401:1293">
            <div className="font-bold text-[#5a33be] text-[20px] text-nowrap" data-node-id="401:1294">
              <p className="leading-[18px] whitespace-pre">정기연구보고서</p>
            </div>
            <div className="bg-[#5a33be] border border-[#5a33be] border-solid h-[2px] w-full" data-node-id="401:1295" />
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="401:1296">
            <p className="leading-[18px] whitespace-pre">R&D리포트</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="401:1297">
            <p className="leading-[18px] whitespace-pre">통계연감</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="401:1298">
            <p className="leading-[18px] whitespace-pre">연구용역</p>
          </div>
          <div className="font-normal text-[#888888] text-[20px] text-center text-nowrap" data-node-id="401:1299">
            <p className="leading-[18px] whitespace-pre">정부용역정보</p>
          </div>
        </div>
        
        {/* 테이블 헤더 */}
        <div className="max-w-[1240px] mx-auto mt-[54px] px-[20px]">
          <div className="bg-[#333333] h-[40px] w-full mb-1" data-node-id="401:1287" />
          
          {/* 보고서 목록 */}
          <div className="space-y-1">
            {/* 첫 번째 보고서 */}
            <div className="flex items-center bg-white border-b border-[#d8dde5] py-4" data-node-id="401:1202">
              <div className="w-[140px] h-[175px] border border-[#d8dde5]">
                <img alt="보고서 썸네일" className="w-full h-full object-center object-cover" src={report1} />
              </div>
              <div className="flex-1 px-6">
                <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:1221">
                  정기연구보고서
                </div>
                <div className="font-medium text-[#333333] text-[20px] leading-[20px] mb-4" data-node-id="401:1207">
                  [한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보
                </div>
                
                <div className="space-y-1 text-[14px]">
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1226">작성자</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1231">KFIRI</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1236">작성일</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1241">2023.01.01</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1246">조회수</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1251">88</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1256">좋아요</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1261">88</span>
                  </div>
                </div>
              </div>
              <div className="w-[40px] text-center">
                <div className="font-medium text-[#888888] text-[18px] leading-[13px] mb-4" data-node-id="401:1216">
                  55
                </div>
                <div className="w-[150px]">
                  <DownloadButton />
                </div>
              </div>
            </div>
            
            {/* 두 번째 보고서 (NEW 아이콘 포함) */}
            <div className="flex items-center bg-white border-b border-[#d8dde5] py-4" data-node-id="401:1204">
              <div className="w-[140px] h-[175px] border border-[#d8dde5] relative">
                <div className="bg-[#f4f5f6] w-full h-full" data-node-id="401:1203" />
                {/* NEW 아이콘 */}
                <div className="absolute top-2 left-2 w-[30px] h-[30px] mix-blend-multiply opacity-50" data-node-id="401:1318">
                  <img alt="NEW" className="w-[680%] h-full max-w-none" src={newIcon} />
                </div>
              </div>
              <div className="flex-1 px-6">
                <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:1222">
                  정기연구보고서
                </div>
                <div className="flex items-center gap-[10px]" data-node-id="401:1208">
                  <div className="font-medium text-[#333333] text-[20px] leading-[20px] w-[618px] overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="401:1209">
                    [한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)
                  </div>
                  <div className="font-semibold text-[#193dd0] text-[14px]" data-node-id="401:1210">
                    [33]
                  </div>
                </div>
                
                <div className="space-y-1 text-[14px] mt-4">
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1227">작성자</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1232">KFIRI</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1237">작성일</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1242">2023.01.01</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1247">조회수</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1252">88</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1257">좋아요</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1262">88</span>
                  </div>
                </div>
              </div>
              <div className="w-[40px] text-center">
                <div className="font-medium text-[#888888] text-[18px] leading-[13px] mb-4" data-node-id="401:1217">
                  54
                </div>
                <div className="w-[150px]">
                  <DownloadButton />
                </div>
              </div>
            </div>
            
            {/* 세 번째 보고서 (활성 상태) */}
            <div className="flex items-center bg-white border-b border-[#d8dde5] py-4" data-node-id="401:1204">
              <div className="w-[140px] h-[175px] border border-[#d8dde5]">
                <img alt="보고서 썸네일" className="w-full h-full object-center object-cover" src={report2} />
              </div>
              <div className="flex-1 px-6">
                <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:1223">
                  정기연구보고서
                </div>
                <div className="flex items-start gap-[10px]" data-node-id="401:1211">
                  <div className="font-medium text-[#333333] text-[20px] leading-[20px] w-[420px] overflow-hidden text-ellipsis whitespace-nowrap" data-node-id="401:1212">
                    [한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구
                  </div>
                  <div className="font-semibold text-[#193dd0] text-[14px]" data-node-id="401:1213">
                    [99+]
                  </div>
                </div>
                
                <div className="space-y-1 text-[14px] mt-4">
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1228">작성자</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1233">KFIRI</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1238">작성일</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1243">2023.01.01</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1248">조회수</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1253">88</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1258">좋아요</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1263">88</span>
                  </div>
                </div>
              </div>
              <div className="w-[40px] text-center">
                <div className="font-medium text-[#888888] text-[18px] leading-[13px] mb-4" data-node-id="401:1218">
                  53
                </div>
                <button className="bg-[#193dd0] px-6 py-4 rounded-[100px] inline-flex items-center justify-center gap-[10px]" data-node-id="401:1274">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <span className="font-medium text-white text-[16px] whitespace-nowrap">
                    파일 받기
                  </span>
                </button>
              </div>
            </div>
            
            {/* 네 번째 보고서 */}
            <div className="flex items-center bg-white border-b border-[#d8dde5] py-4" data-node-id="401:1205">
              <div className="w-[140px] h-[175px] border border-[#d8dde5]">
                <img alt="보고서 썸네일" className="w-full h-full object-center object-cover" src={report3} />
              </div>
              <div className="flex-1 px-6">
                <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:1224">
                  정기연구보고서
                </div>
                <div className="font-medium text-[#333333] text-[20px] leading-[20px] mb-4" data-node-id="401:1214">
                  [한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구
                </div>
                
                <div className="space-y-1 text-[14px]">
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1229">작성자</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1234">KFIRI</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1239">작성일</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1244">2023.01.01</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1249">조회수</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1254">88</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1259">좋아요</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1264">88</span>
                  </div>
                </div>
              </div>
              <div className="w-[40px] text-center">
                <div className="font-medium text-[#888888] text-[18px] leading-[13px] mb-4" data-node-id="401:1219">
                  52
                </div>
                <button className="bg-[#051d7c] px-6 py-4 rounded-[100px] inline-flex items-center justify-center gap-[10px]" data-node-id="532:2432">
                  <div className="w-6 h-6">
                    <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                  <span className="font-medium text-white text-[16px] whitespace-nowrap">
                    파일 받기
                  </span>
                </button>
              </div>
            </div>
            
            {/* 다섯 번째 보고서 */}
            <div className="flex items-center bg-white border-b border-[#d8dde5] py-4" data-node-id="401:1206">
              <div className="w-[140px] h-[175px] border border-[#d8dde5]">
                <img alt="보고서 썸네일" className="w-full h-full object-center object-cover" src={report4} />
              </div>
              <div className="flex-1 px-6">
                <div className="font-bold text-[#5a33be] text-[16px] leading-[13px] mb-2" data-node-id="401:1225">
                  정기연구보고서
                </div>
                <div className="font-medium text-[#333333] text-[20px] leading-[20px] mb-4" data-node-id="401:1215">
                  [한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구
                </div>
                
                <div className="space-y-1 text-[14px]">
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1230">작성자</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1235">KFIRI</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1240">작성일</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1245">2023.01.01</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1250">조회수</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1255">88</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-[#333333] w-[60px]" data-node-id="401:1260">좋아요</span>
                    <span className="font-normal text-[#444444]" data-node-id="401:1265">88</span>
                  </div>
                </div>
              </div>
              <div className="w-[40px] text-center">
                <div className="font-medium text-[#888888] text-[18px] leading-[13px] mb-4" data-node-id="401:1220">
                  51
                </div>
                <div className="w-[150px]">
                  <DownloadButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-[5px] mt-[40px]" data-name="type2" data-node-id="401:1300">
          <div className="w-[40px] h-[40px]" data-name="Arrows/left" data-node-id="401:1301">
            <img alt="이전 페이지" className="block max-w-none w-full h-full" src={leftArrow} />
          </div>
          <div className="w-[40px] h-[40px] rounded-[6px] flex items-center justify-center" data-name="number" data-node-id="401:1303">
            <p className="font-extrabold leading-[14px] text-[#5a33be] text-[16px] text-center underline whitespace-pre" data-node-id="401:1304">
              1
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center" data-name="number" data-node-id="401:1305">
            <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center whitespace-pre" data-node-id="401:1306">
              2
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center" data-name="number" data-node-id="401:1307">
            <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center whitespace-pre" data-node-id="401:1308">
              3
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center" data-name="number" data-node-id="401:1309">
            <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center whitespace-pre" data-node-id="401:1310">
              4
            </p>
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center" data-name="number" data-node-id="401:1311">
            <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center whitespace-pre" data-node-id="401:1312">
              5
            </p>
          </div>
          <div className="w-[40px] h-[40px]" data-name="Arrows/right" data-node-id="401:1313">
            <img alt="다음 페이지" className="block max-w-none w-full h-full" src={rightArrow} />
          </div>
          <div className="w-[40px] h-[40px]" data-name="Arrows/right" data-node-id="401:1315">
            <img alt="마지막 페이지" className="block max-w-none w-full h-full" src={doubleRightArrow} />
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-[200px] relative" data-node-id="401:1194">
          <div className="bg-[#ececec] h-px w-full" data-node-id="401:1196" />
          <div className="bg-white h-[190px] w-full" data-node-id="401:1195">
            <div className="max-w-[1240px] mx-auto px-[100px] pt-[25px]">
              <div className="flex gap-[103px]">
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="401:1200">
                  개인정보처리방침
                </p>
                <p className="font-semibold text-[#444444] text-[12px] leading-[12px]" data-node-id="401:1201">
                  사이트이용약관
                </p>
              </div>
              
              <p className="font-light text-[#222222] text-[10px] leading-[16px] mt-[22px]" data-node-id="401:1197">
                (사)한국외식업중앙회 한국외식산업연구원
              </p>
              
              <div className="font-light text-[#444444] text-[10px] leading-[16px] mt-[27px]" data-node-id="401:1198">
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
              
              <p className="font-normal text-[#b6b6b6] text-[10px] leading-[15px] mt-[27px]" data-node-id="401:1199">
                Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoList;