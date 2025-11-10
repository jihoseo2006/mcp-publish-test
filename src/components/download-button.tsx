import CopyIcon from "~/assets/1ce29021ea5fc7806350c5d77389cdc0b3735df9.svg?react";

export default function DownloadButton() {
  return (
    <div className="bg-white border border-[#333333] border-solid relative rounded-[100px] h-[56px]">
      <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <div className="flex gap-[10px] items-center relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[5.21%_11.46%]">
              <div className="absolute inset-0">
                <CopyIcon className="block max-w-none size-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Pretendard'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] text-nowrap">
            <p className="leading-[13px] whitespace-pre">파일 받기</p>
          </div>
        </div>
      </div>
    </div>
  );
}
