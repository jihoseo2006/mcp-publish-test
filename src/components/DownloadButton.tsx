const img = "http://localhost:3845/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg";

interface DownloadButtonProps {
  className?: string;
}

export default function DownloadButton({ className = "" }: DownloadButtonProps) {
  return (
    <div 
      className={`bg-white border border-[#333333] border-solid rounded-[100px] ${className}`} 
      data-name="btn_defualt" 
      data-node-id="532:2442"
    >
      <div className="flex flex-col gap-10 items-center justify-center overflow-clip px-24 py-16 rounded-[inherit] w-full h-full box-border">
        <div className="flex gap-10 items-center shrink-0" data-node-id="532:2443">
          <div className="overflow-clip relative shrink-0 w-24 h-24" data-name="Office/copy-one" data-node-id="532:2444">
            <div className="absolute left-[2.5px] top-[1.25px] right-[2.75px] bottom-[2.75px]" data-name="Vector" data-node-id="I532:2444;9482:6708">
              <img alt="파일 복사 아이콘" className="block max-w-none w-full h-full" src={img} />
            </div>
          </div>
          <div className="flex flex-col font-medium justify-center leading-0 text-[#333333] text-16 whitespace-nowrap shrink-0" data-node-id="532:2445">
            <p className="leading-13 whitespace-pre">파일 받기</p>
          </div>
        </div>
      </div>
    </div>
  );
}