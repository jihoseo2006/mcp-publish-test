import DownloadIcon from "~/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg?react";

interface DownloadButtonProps {
  variant?: 'default' | 'primary' | 'dark';
  className?: string;
}

export default function DownloadButton({ variant = 'default', className = '' }: DownloadButtonProps) {
  const baseClasses = "rounded-[100px] h-56 flex items-center justify-center px-24 py-16 gap-10 border font-pretendard font-medium text-16 leading-13 text-nowrap whitespace-pre";
  
  const variantClasses = {
    default: "bg-white border-[#333333] text-[#333333] hover:bg-gray-50",
    primary: "bg-[#193dd0] border-[#193dd0] text-[#fef9ff]",
    dark: "bg-[#051d7c] border-[#051d7c] text-[#fef9ff]"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} data-name="btn_default" data-node-id="532:2442">
      <div className="flex items-center gap-10">
        <div className="relative shrink-0 size-24 overflow-clip" data-name="Office/copy-one" data-node-id="532:2444">
          <div className="absolute inset-[5.21%_11.46%]" data-name="Vector" data-node-id="I532:2444;9482:6708">
            <DownloadIcon className="block max-w-none size-full" />
          </div>
        </div>
        <span>파일 받기</span>
      </div>
    </div>
  );
}