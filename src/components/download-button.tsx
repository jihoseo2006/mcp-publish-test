import CopyIcon from "~/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg?react";

export default function DownloadButton() {
  return (
    <div className="inline-block rounded-[100px] border border-solid border-[#333333] bg-white">
      <div className="box-border flex items-center justify-center gap-[10px] rounded-[inherit] px-[24px] py-[16px]">
        <div className="flex shrink-0 items-center gap-[10px]">
          <div className="relative size-[24px] shrink-0 overflow-clip">
            <div className="absolute inset-[5.21%_11.46%]">
              <CopyIcon className="block size-full max-w-none" />
            </div>
          </div>
          <div className="flex shrink-0 flex-col justify-center font-['Pretendard'] text-[16px] leading-[0] font-medium text-nowrap text-[#333333] not-italic">
            <p className="leading-[13px] whitespace-pre">파일 받기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
