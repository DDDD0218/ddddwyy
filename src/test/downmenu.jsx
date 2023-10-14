import { Icon } from "@iconify/react";

export default function downmenu() {
  return (
    <>
      <div className="dark:border-b-[#3C3C3C] flex justify-between items-center h-[10vw] border-b-[0.35vw] border-b-[#E8e8e8] px-[5vw]">
        <p className="text-[3vw] text-[#939BA1] font-[800]">推荐歌单</p>
        <Icon
          icon="material-symbols:cancel-outline"
          className="dark:text-[#C0C0C0] dark:bg-[#2F2F2F] text-[#696d73] w-[6vw] h-[6vw] rounded-[50%] bg-[#f2f2f3] iconify iconify--ic"
        />
      </div>
      <div className="ml-[5vw]">
        <div className="h-[12vw] flex items-center">
          <Icon
            icon="mdi:like"
            className="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--iconamoon"
          />
          <p className="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
            优先推荐
          </p>
        </div>
        <div className="h-[12vw] flex items-center">
          <Icon
            icon="icon-park:unlike"
            className="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--iconamoon"
          />
          <p className="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
            减少推荐
          </p>
        </div>
        <div className="h-[12vw] flex items-center">
          <Icon
            icon="mingcute:more-4-line"
            className="dark:text-[#FDFDFC] w-[6vw] h-[6vw] mr-[2vw] iconify iconify--iconamoon"
          />
          <p className="dark:text-[#fff] h-[3vw] text-[3vw] text-[#3a393f]">
            更多内容
          </p>
        </div>
      </div>
    </>
  );
}
