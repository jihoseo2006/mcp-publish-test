import DownloadIcon from "~/assets/paper-icon.svg?react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export default function Button({
  children = "파일 받기",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
    bg-white border border-[#333333] border-solid relative rounded-full
    flex items-center justify-center px-[24px] py-[16px] gap-[10px]
    transition-colors duration-150
    hover:bg-[#193dd0] hover:border-[#193dd0] hover:text-[#fef9ff]
    active:bg-[#051d7c] active:border-[#051d7c] active:text-[#fef9ff]
    ${className}
  `}
      type="button"
      {...props}
    >
      <span className="relative shrink-0 size-[24px] overflow-clip">
        <DownloadIcon />
      </span>
      <span className="font-['Pretendard:Medium',_sans-serif] text-16 not-italic text-nowrap leading-[13px]">
        {children}
      </span>
    </button>
  );
}
