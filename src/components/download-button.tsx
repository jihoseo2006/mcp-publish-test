import CopyIcon from "~/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg?react";

export default function DownloadButton() {
  return (
    <div className="relative h-full w-full rounded-[100px] border border-solid border-[#333333] bg-white">
      <div className="relative box-border flex size-full flex-col items-center justify-center gap-10 overflow-clip rounded-[inherit] px-24 py-16">
        <div className="relative flex shrink-0 items-center gap-10">
          <div className="relative size-24 shrink-0 overflow-clip">
            <div className="absolute inset-[5.21%_11.46%]">
              <div className="absolute inset-0">
                <CopyIcon className="block size-full max-w-none" />
              </div>
            </div>
          </div>
          <div className="text-16 relative flex shrink-0 flex-col justify-center font-['Pretendard'] leading-[0] font-medium text-nowrap text-[#333333] not-italic">
            <p className="leading-[13px] whitespace-pre">파일 받기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
