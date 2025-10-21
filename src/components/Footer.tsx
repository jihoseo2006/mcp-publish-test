const Footer = () => (
  <footer className="bg-white border-t border-[#ececec]">
    <div className="max-w-[1440px] mx-auto px-[100px] py-[40px]">
      {/* 푸터 링크 */}
      <div className="flex gap-[103px] mb-[28px]">
        <span className="font-['Pretendard:SemiBold',_sans-serif] text-[12px] text-[#444444] cursor-pointer">
          개인정보처리방침
        </span>
        <span className="font-['Pretendard:SemiBold',_sans-serif] text-[12px] text-[#444444] cursor-pointer">
          사이트이용약관
        </span>
      </div>
      {/* 기관 정보 */}
      <p className="font-['Pretendard:Light',_sans-serif] text-[10px] text-[#222222] mb-[17px]">
        (사)한국외식업중앙회 한국외식산업연구원
      </p>
      {/* 주소 및 연락처 */}
      <div className="font-['Pretendard:Light',_sans-serif] text-[10px] text-[#444444] space-y-[7px] mb-[16px]">
        <p>
          <span className="font-['Pretendard:Bold',_sans-serif]">주소</span> (04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층 한국외식산업연구원 <span className="text-[#d1d1d1]">ㅣ</span> <span className="font-['Pretendard:Bold',_sans-serif]">사업자등록번호</span> 203-82-32145 <span className="text-[#d1d1d1]">ㅣ</span> <span className="font-['Pretendard:Bold',_sans-serif]">대표자</span> 전강식
        </p>
        <p>
          <span className="font-['Pretendard:Bold',_sans-serif]">TEL</span> 02-6191-2908 <span className="text-[#d1d1d1]">ㅣ</span> <span className="font-['Pretendard:Bold',_sans-serif]">FAX</span> 02-6191-2998 <span className="text-[#d1d1d1]">ㅣ</span> <span className="font-['Pretendard:Bold',_sans-serif]">E-mail</span> isaacsgod@kfiri.org <span className="text-[#d1d1d1]">ㅣ</span> <span className="font-['Pretendard:Bold',_sans-serif]">개인정보보호정책 책임자</span> 김삼희
        </p>
      </div>
      {/* 저작권 */}
      <p className="font-['Pretendard:Regular',_sans-serif] text-[10px] text-[#b6b6b6]">
        Copyright © 2017 한국외식산업연구원 Korea food industry Research Institute All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
