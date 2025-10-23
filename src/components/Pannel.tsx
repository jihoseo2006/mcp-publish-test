

// Figma에서 제공된 실제 아이콘 이미지 경로들
const clockIcon = "http://localhost:3845/assets/087cee143dcb397f5b9da3544e084a65a88a4478.svg";
const dividerIcon = "http://localhost:3845/assets/0d977cc7c6f9678ecca301a8c1719744562c579d.svg";
const participantIcon = "http://localhost:3845/assets/b2ca4a9da5ed47cd8212b60003e9b42b248aa42d.svg";

// 진행완료 상태용 회색 아이콘들
const clockIconGray = "http://localhost:3845/assets/e1da397a63d891bd5972bca7d09b071182b96f1a.svg";
const participantIconGray = "http://localhost:3845/assets/8723287d444f7aa477d8d2026a344d56749ae944.svg";

interface PannelProps {
  title: string;
  status: '진행중' | '진행완료';
  startDate: string;
  endDate: string;
  organization?: string;
  date?: string;
  participants?: number;
  className?: string;
}

export default function Pannel({
  title,
  status,
  startDate,
  endDate,
  organization = 'KFIRI',
  date = '2023.01.01',
  participants = 88,
  className = ''
}: PannelProps) {
  const isActive = status === '진행중';
  
  return (
    <div className={`relative w-[600px] h-[166px] ${className}`}>
      {/* 메인 배경 - Figma의 정확한 스타일 */}
      <div className={`
        absolute inset-0 rounded-[2px] border border-solid
        ${isActive ? 'bg-white border-[#d8dde5]' : 'bg-[#edeff3] border-[#c8c8c8]'}
      `} />
      
      {/* 왼쪽 컬러 바 - Figma의 정확한 위치와 색상 */}
      <div className={`
        absolute left-0 top-0 bottom-0 rounded-[2px]
        ${isActive ? 'w-[2px] bg-[#193dd0]' : 'w-[2px] bg-[#333333]'}
      `} />
      
      {/* 제목 - Figma inset 비율을 픽셀로 변환: inset-[43.37%_46.17%_44.58%_5%] */}
      <div className="absolute left-[30px] right-[277px] top-[72px] bottom-[74px] flex flex-col justify-center">
        <p className={`
          font-['Pretendard:Medium',_sans-serif] text-[20px] leading-[20px] not-italic
          ${isActive ? 'text-[#333333]' : 'text-[#646464]'}
        `}>
          {title}
        </p>
      </div>
      
      {/* 상태 배지 - Figma inset 비율: inset-[18.07%_5%_65.06%_83.33%] */}
      <div className="absolute right-[30px] top-[30px] bottom-[108px] left-[500px]">
        <div className={`
          border border-solid rounded-[6px] w-70 flex items-center justify-center h-full
          ${isActive 
            ? 'border-[#193dd0] bg-transparent' 
            : 'border-[#4d5564] bg-[#4d5564]'
          }
        `}>
          <p className={`
            font-['Pretendard:SemiBold',_sans-serif] text-[14px] leading-[14px] not-italic text-center
            ${isActive ? 'text-[#193dd0]' : 'text-[#efefef]'}
          `}>
            {status}
          </p>
        </div>
      </div>
      
      {/* 진행 기간 - Figma inset 비율: inset-[18.07%_52.33%_65.06%_5%] */}
      <div className="absolute left-[30px] right-[314px] top-[30px] bottom-[108px]">
        <div className={`
          flex items-center gap-[12px] px-[10px] py-[7px] rounded-[6px] h-full
          ${isActive ? 'bg-[#ebedff]' : 'bg-[#cdd3df]'}
        `}>
          <div className="flex items-center gap-[5px]">
            <div className="w-[12px] h-[12px] flex-shrink-0">
              <img 
                alt="시계 아이콘" 
                className="block w-full h-full max-w-none" 
                src={isActive ? clockIcon : clockIconGray} 
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className={`
                font-['Pretendard:SemiBold',_sans-serif] text-[14px] leading-[14px] not-italic
                ${isActive ? 'text-[#3d4c8c]' : 'text-[#646464]'}
              `}>
                진행 기간
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className={`
              font-['Pretendard:Regular',_sans-serif] text-[14px] leading-[14px] not-italic
              ${isActive ? 'text-[#3d4c8c]' : 'text-[#606060]'}
            `}>
              {startDate} ~ {endDate}
            </p>
          </div>
        </div>
      </div>
      
      {/* 하단 정보 - Figma inset 비율: inset-[73.49%_64.5%_18.07%_5%] */}
      <div className="absolute left-[30px] right-[387px] top-[122px] bottom-[30px] flex items-center gap-[12px]">
        <div className="flex flex-col justify-center">
          <p className={`
            font-['Pretendard:Regular',_sans-serif] text-[14px] leading-[14px] not-italic
            ${isActive ? 'text-[#666666]' : 'text-[#646464]'}
          `}>
            {organization}
          </p>
        </div>
        
        <div className="w-px h-[10px] flex-shrink-0">
          <img 
            alt="구분선" 
            className="block w-full h-full max-w-none" 
            src={dividerIcon} 
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <p className={`
            font-['Pretendard:Regular',_sans-serif] text-[14px] leading-[14px] not-italic
            ${isActive ? 'text-[#666666]' : 'text-[#646464]'}
          `}>
            {date}
          </p>
        </div>
        
        <div className="w-px h-[10px] flex-shrink-0">
          <img 
            alt="구분선" 
            className="block w-full h-full max-w-none" 
            src={dividerIcon} 
          />
        </div>
        
        <div className="flex items-center gap-[4px]">
          <div className="w-[12px] h-[12px] flex-shrink-0 overflow-clip">
            <img 
              alt="참여자 아이콘" 
              className="block w-full h-full max-w-none" 
              src={isActive ? participantIcon : participantIconGray} 
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className={`
              font-['Pretendard:Regular',_sans-serif] text-[14px] leading-[14px] not-italic
              ${isActive ? 'text-[#666666]' : 'text-[#646464]'}
            `}>
              {participants}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}