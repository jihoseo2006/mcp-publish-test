const copyIcon = "/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg";

export default function DownloadButton() {
  return (
    <button className="bg-white border border-[#333333] border-solid relative rounded-[100px] px-6 py-4 inline-flex items-center justify-center gap-[10px]" data-name="btn_defualt" data-node-id="532:2442">
      <div className="overflow-clip relative shrink-0 w-6 h-6" data-name="Office/copy-one" data-node-id="532:2444">
        <div className="absolute inset-[1px_3px]" data-name="Vector" data-node-id="I532:2444;9482:6708">
          <div className="absolute inset-0">
            <img alt="" className="block max-w-none w-full h-full" src={copyIcon} />
          </div>
        </div>
      </div>
      <span className="font-medium leading-[13px] text-[#333333] text-[16px] whitespace-nowrap" data-node-id="532:2445">
        파일 받기
      </span>
    </button>
  );
}