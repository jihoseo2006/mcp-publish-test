import DownloadIcon from "~/assets/acbdcb3a99ae7622aeec13ef5b67e776f666c41c.svg?react";

interface DownloadButtonProps {
  text?: string;
  disabled?: boolean;
  className?: string;
}

const DownloadButton = ({ 
  text = "파일 받기", 
  disabled = false,
  className = ""
}: DownloadButtonProps) => {
  const baseStyles = "inline-flex items-center gap-8 px-16 py-10 rounded-4 text-14 font-medium transition-colors";
  
  const variantStyles = disabled
    ? "bg-[#F5F5F5] text-[#AAAAAA] cursor-not-allowed"
    : "bg-[#193DD0] text-white hover:bg-[#1230A0] active:bg-[#0D2080]";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      aria-label={text}
    >
      <DownloadIcon className="w-12 h-12" />
      <span>{text}</span>
    </button>
  );
};

export default DownloadButton;
