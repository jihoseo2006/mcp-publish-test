
// 이미지 assets (Figma에서 제공받은 이미지들)
const imgRectangle3467948 = "http://localhost:3845/assets/144cb5caa1676e9371122f7f8e8e2e10ab3f6357.png";
const imgRectangle3467953 = "http://localhost:3845/assets/221e392466f71f561707a2276e153b874eb3df2c.png";
const imgRectangle3467955 = "http://localhost:3845/assets/b191d8ba641908c9df0c5996528752d763535b32.png";
const imgRectangle3467957 = "http://localhost:3845/assets/a14b2513cd5cfdbc5c5499b9b6541dce0c47f939.png";
const imgImage90 = "http://localhost:3845/assets/99092354c834b9f51ca53ff2576334d67429c242.png";
const img2 = "http://localhost:3845/assets/c14f9c63fa1f29bef2b87a946a6b316938dbda6b.png";
const img4 = "http://localhost:3845/assets/8d3493675a08ae1f4da162e87a6c546828d73bba.png";
const img = "http://localhost:3845/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg";
const img1 = "http://localhost:3845/assets/57c6058d26eccda7890393df533bef9797da80d0.svg";
const imgArrowsLeft = "http://localhost:3845/assets/3fea3d5bb0375d7ed0d6a3972d0304f85a6d600d.svg";
const imgArrowsRight = "http://localhost:3845/assets/becc54befb7bdd114cc8d4f5c037098f575b27fb.svg";
const imgArrowsRight1 = "http://localhost:3845/assets/2f70db464a513926a3afef99b8f4ce28af37ad72.svg";
const imgMagnifyingGlass = "http://localhost:3845/assets/2943638af14fdebc680bfc19b832df80e9772713.svg";
const img3 = "http://localhost:3845/assets/3eaa63b80913e4fbfc1a39d9b21c98119bab03af.svg";
const img5 = "http://localhost:3845/assets/58ca699f884eb8bdedfa3ed146f69a5665f87797.svg";
const img6 = "http://localhost:3845/assets/4ae7e2361918024cc8ab731fee976e15b2d744f0.svg";

const InfoList = () => {
  return (
    <div className="bg-white relative w-full h-full">
      {/* Footer */}
      <div className="absolute left-0 top-[1931px]">
        <div className="absolute bg-white h-[190px] left-0 top-[1px] w-[1440px]" />
        <div className="absolute bg-[#ececec] h-[1px] left-1/2 top-0 -translate-x-1/2 w-[1440px]" />
        <p className="absolute font-light leading-4 left-[100px] text-[#222222] text-[10px] top-[73px] whitespace-pre">
          (사)한국외식업중앙회 한국외식산업연구원 
        </p>
        <div className="absolute font-light left-[100px] text-[#444444] text-[10px] top-[100px] whitespace-pre">
          <p className="leading-4 mb-0">
            <span className="font-bold">주소 </span>
            <span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold">사업자등록번호</span>
            <span>  203-82-32145 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold">대표자</span>
            <span> 전강식 </span>
          </p>
          <p className="leading-4">
            <span className="font-bold">TEL  </span>
            <span>02-6191-2908  </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold">FAX</span>
            <span>  02-6191-2998 </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold">E-mail</span>
            <span> isaacsgod@kfiri.org </span>
            <span className="text-[#b6b6b6]"> </span>
            <span className="text-[#d1d1d1]">ㅣ</span>
            <span className="font-bold">개인정보보호정책 책임자</span>
            <span>  김삼희</span>
          </p>
        </div>
        <p className="absolute font-normal leading-[15px] left-[103px] text-[#b6b6b6] text-[10px] top-[147px] whitespace-pre">
          Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
        </p>
        <p className="absolute font-semibold leading-3 left-[100px] text-[#444444] text-[12px] top-[26px] whitespace-pre">
          개인정보처리방침
        </p>
        <p className="absolute font-semibold leading-3 left-[203px] text-[#444444] text-[12px] top-[26px] whitespace-pre">
          사이트이용약관
        </p>
      </div>

      {/* Report Cards */}
      {[
        { img: imgRectangle3467948, top: 330, id: 55 },
        { img: null, top: 504, id: 54, bgGray: true },
        { img: imgRectangle3467953, top: 678, id: 53 },
        { img: imgRectangle3467955, top: 852, id: 52 },
        { img: imgRectangle3467957, top: 1026, id: 51 }
      ].map((item, index) => (
        <div key={index}>
          <div className={`absolute border border-[#d8dde5] left-[192px] top-[${item.top}px] w-[140px] h-[178px] ${item.bgGray ? 'bg-[#f4f5f6]' : ''}`}>
            {item.img && (
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={item.img} />
            )}
          </div>
          
          <div className="absolute font-medium left-[372px] text-[#333333] text-[20px] top-[${item.top + 30}px] w-[588px] h-[25px] overflow-ellipsis overflow-hidden">
            <p className="leading-5 overflow-ellipsis overflow-hidden whitespace-nowrap">
              {index === 0 && "[한외연 제2201-3호] 외식업체 쌀 이용 실태와 식량안보"}
              {index === 1 && "[한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)"}
              {index === 2 && "[한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구"}
              {index === 3 && "[한외연 제2101-2호] 코로나바이러스-19 영향 실태 및 지원정책 연구"}
              {index === 4 && "[한외연 제 1901-3호] 외식산업 배달 실태에 관한 연구"}
            </p>
          </div>
          
          <div className="absolute font-medium text-[#888888] text-[18px] left-[130px] top-[${item.top + 39}px]">
            <p className="leading-[13px]">{item.id}</p>
          </div>
          
          <div className="absolute font-bold text-[#5a33be] text-[16px] left-[372px] top-[${item.top + 9}px]">
            <p className="leading-[13px]">정기연구보고서</p>
          </div>
          
          {/* Metadata */}
          <div className="absolute left-[373px] top-[${item.top + 67}px] space-y-[22px]">
            <div className="flex items-center gap-[51px]">
              <span className="font-semibold text-[#333333] text-[14px] leading-[14px]">작성자</span>
              <span className="font-normal text-[#444444] text-[14px] leading-[14px]">KFIRI</span>
            </div>
            <div className="flex items-center gap-[51px]">
              <span className="font-semibold text-[#333333] text-[14px] leading-[14px]">작성일</span>
              <span className="font-normal text-[#444444] text-[14px] leading-[14px]">2023.01.01</span>
            </div>
            <div className="flex items-center gap-[51px]">
              <span className="font-semibold text-[#333333] text-[14px] leading-[14px]">조회수</span>
              <span className="font-normal text-[#444444] text-[14px] leading-[14px]">88</span>
            </div>
            <div className="flex items-center gap-[51px]">
              <span className="font-semibold text-[#333333] text-[14px] leading-[14px]">좋아요</span>
              <span className="font-normal text-[#444444] text-[14px] leading-[14px]">88</span>
            </div>
          </div>

          {/* Download Button */}
          <div className={`absolute right-[72px] top-[${item.top + 66}px] w-[120px] h-[56px] rounded-[100px] border border-[#333333] flex items-center justify-center gap-[10px] ${index === 2 || index === 3 ? 'bg-[#193dd0] text-white' : 'bg-white text-[#333333]'} ${index === 3 ? 'bg-[#051d7c]' : ''}`}>
            <div className="w-[24px] h-[24px] overflow-clip">
              <img alt="" className="block max-w-none w-full h-full" src={index === 2 || index === 3 ? img1 : img} />
            </div>
            <span className="font-medium text-[16px] leading-[13px]">파일 받기</span>
          </div>
        </div>
      ))}

      {/* Comment counts */}
      <div className="absolute flex gap-[10px] items-center left-[372px] top-[787px]">
        <div className="font-medium text-[#333333] text-[20px] w-[618px] h-[25px] overflow-ellipsis overflow-hidden">
          <p className="leading-5 overflow-ellipsis overflow-hidden whitespace-nowrap">
            [한외연 제2201-2호] 외식업주 행복지수 보고서(2022 K-FIRI ROHI Report)
          </p>
        </div>
        <div className="font-semibold text-[#193dd0] text-[14px]">
          <p className="leading-[24px]">[33]</p>
        </div>
      </div>

      <div className="absolute flex gap-[10px] items-start left-[372px] top-[1043px]">
        <div className="font-medium text-[#333333] text-[20px] w-[420px] h-[24px] overflow-ellipsis overflow-hidden">
          <p className="leading-5 overflow-ellipsis overflow-hidden whitespace-nowrap">
            [한외연 제2201-1호] 외식업 폐기물 실태에 관한 연구
          </p>
        </div>
        <div className="font-semibold text-[#193dd0] text-[14px]">
          <p className="leading-[24px]">[99+]</p>
        </div>
      </div>

      {/* Separators */}
      {[484, 658, 832, 1006, 1180].map((top, index) => (
        <div key={index} className={`absolute left-1/2 -translate-x-1/2 w-[1240px] h-[1px] top-[${top}px] ${index === 0 ? 'bg-[#333333]' : 'bg-[#d8dde5]'}`} />
      ))}

      {/* Navigation Tabs */}
      <div className="absolute flex gap-[40px] items-start left-1/2 top-[379px] -translate-x-1/2">
        <div className="flex flex-col gap-[14px] items-start">
          <div className="font-bold text-[#5a33be] text-[20px]">
            <p className="leading-[18px] whitespace-pre">정기연구보고서</p>
          </div>
          <div className="bg-[#5a33be] border border-[#5a33be] h-[2px] w-full" />
        </div>
        <div className="font-normal text-[#888888] text-[20px] text-center">
          <p className="leading-[18px] whitespace-pre">R&D리포트</p>
        </div>
        <div className="font-normal text-[#888888] text-[20px] text-center">
          <p className="leading-[18px] whitespace-pre">통계연감</p>
        </div>
        <div className="font-normal text-[#888888] text-[20px] text-center">
          <p className="leading-[18px] whitespace-pre">연구용역</p>
        </div>
        <div className="font-normal text-[#888888] text-[20px] text-center">
          <p className="leading-[18px] whitespace-pre">정부용역정보</p>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute flex gap-[5px] items-center justify-center left-1/2 top-[1791px] -translate-x-1/2">
        <div className="w-[40px] h-[40px]">
          <img alt="" className="block max-w-none w-full h-full" src={imgArrowsLeft} />
        </div>
        <div className="w-[40px] h-[40px] rounded-[6px]">
          <p className="font-extrabold leading-[14px] text-[#5a33be] text-[16px] text-center underline absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            1
          </p>
        </div>
        <div className="w-[40px] h-[40px]">
          <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            2
          </p>
        </div>
        <div className="w-[40px] h-[40px]">
          <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            3
          </p>
        </div>
        <div className="w-[40px] h-[40px]">
          <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            4
          </p>
        </div>
        <div className="w-[40px] h-[40px]">
          <p className="font-semibold leading-[14px] text-[#9a9a9a] text-[16px] text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            5
          </p>
        </div>
        <div className="w-[40px] h-[40px]">
          <img alt="" className="block max-w-none w-full h-full" src={imgArrowsRight} />
        </div>
        <div className="w-[40px] h-[40px]">
          <img alt="" className="block max-w-none w-full h-full" src={imgArrowsRight1} />
        </div>
      </div>

      {/* Image 90 */}
      <div className="absolute left-[calc(50%-458px)] w-[30px] h-[30px] top-[826px] -translate-x-1/2">
        <div className="absolute inset-0 mix-blend-multiply opacity-50 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[680%]" src={imgImage90} />
        </div>
      </div>

      {/* Main Title */}
      <p className="absolute font-bold leading-[30px] left-1/2 text-[#333333] text-[30px] text-center top-[219px] -translate-x-1/2 whitespace-pre">
        K-FIRI
      </p>
      <p className="absolute font-medium leading-[18px] left-1/2 text-[#666666] text-[18px] text-center top-[191px] -translate-x-1/2 whitespace-pre">
        외식정보
      </p>

      {/* Search Box */}
      <div className="absolute border border-[#838383] left-1/2 top-[279px] -translate-x-1/2 rounded-[100px]">
        <div className="flex gap-[223px] items-center px-[24px] py-[13px]">
          <div className="font-normal text-[#989898] text-[18px]">
            <p className="leading-[18px] whitespace-pre">검색어를 입력해주세요.</p>
          </div>
          <div className="w-[24px] h-[24px]">
            <img alt="" className="block max-w-none w-full h-full" src={imgMagnifyingGlass} />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute bg-[#e6e6e6] h-[1px] left-0 top-[130px] w-[1440px]" />
      <div className="absolute h-[131px] right-0 top-0 w-[1440px]">
        <div className="absolute bg-white left-0 right-0 top-[30px] bottom-[1px]" />
        <div className="absolute left-0 right-0 top-0 bottom-[101px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={img2} />
        </div>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[400px] whitespace-pre">
          한국외식산업연구원
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[580px] whitespace-pre">
          외식정보
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[684px] whitespace-pre">
          알림마당
        </p>
        <p className="absolute font-medium text-[#888888] text-[18px] top-[73px] left-[748px] whitespace-pre">
          ㅣ
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[822px] whitespace-pre">
          패널설문조사
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[958px] whitespace-pre">
          정부지원
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[1060px] whitespace-pre">
          교육
        </p>
        <p className="absolute font-medium text-[#333333] text-[18px] top-[73px] left-[1130px] whitespace-pre">
          부가혜택몰
        </p>
        <p className="absolute font-medium text-[12px] text-right text-white top-[9px] right-[178px] whitespace-pre">
          로그인/회원가입
        </p>
        <p className="absolute font-medium text-[12px] text-right text-white top-[9px] right-[100px] whitespace-pre">
          회원정보찾기
        </p>
        
        {/* Hamburger Menu */}
        <div className="absolute bg-[#222222] top-[59px] right-[104px] w-[40px] h-[32px] rounded-[10px]">
          <div className="absolute top-[10px] left-[13px] w-[14px] h-[12px] overflow-clip">
            <img alt="" className="block max-w-none w-full h-full" src={img3} />
          </div>
        </div>
        
        {/* Logo */}
        <div className="absolute top-[60px] left-[100px] w-[216px] h-[31px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute max-w-none w-[229px] h-[37px] left-[-13px] top-[-3px]" src={img4} />
          </div>
        </div>
        
        {/* Notification Icons */}
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] top-[59px] right-[160px] w-[40px] h-[32px] rounded-[10px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px]">
            <div className="absolute top-[1px] left-[1px] w-[18px] h-[16px]">
              <img alt="" className="block max-w-none w-full h-full" src={img5} />
            </div>
          </div>
        </div>
        
        <div className="absolute bg-[#e7e7e7] border-2 border-[#e7e7e7] top-[59px] right-[160px] w-[40px] h-[32px] rounded-[10px]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px]">
            <div className="absolute top-[5px] left-[5px] w-[14px] h-[14px]">
              <img alt="" className="block max-w-none w-full h-full" src={img6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoList;