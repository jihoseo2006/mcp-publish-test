import React from 'react';
// 파일 아이콘을 컴포넌트로 import
import CopyIcon from '~/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg?react';

interface DownloadButtonProps {
  variant?: 'default' | 'primary' | 'dark';
  className?: string;
  onClick?: () => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  variant = 'default', 
  className = '',
  onClick
}) => {
  const getButtonClasses = () => {
    const baseClasses = 'flex items-center justify-center gap-[10px] px-[24px] py-[16px] rounded-[100px] font-medium text-[16px] leading-[13px] transition-colors';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-[#193dd0] text-[#fef9ff] hover:bg-[#1532b0]`;
      case 'dark':
        return `${baseClasses} bg-[#051d7c] text-[#fef9ff] hover:bg-[#041661]`;
      default:
        return `${baseClasses} bg-white border border-[#333333] text-[#333333] hover:bg-gray-50`;
    }
  };

  return (
    <button className={`${getButtonClasses()} ${className}`} onClick={onClick}>
      <CopyIcon 
        className={`w-[24px] h-[24px] ${
          variant === 'default' ? 'text-[#505050]' : 'text-white'
        }`} 
      />
      <span>파일 받기</span>
    </button>
  );
};

export default DownloadButton;