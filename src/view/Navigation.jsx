import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Navigation() {
  const navigate = useNavigate();
  const navList = [
    {
      url: "",
      title: "首页",
      icon: "ri:netease-cloud-music-fill",
    },
    {
      url: "/Ranking",
      title: "排行榜",
      icon: "icon-park-outline:ranking",
    },
    {
      url: "/Mine",
      title: "我的",
      icon: "akar-icons:music",
    },
    {
      url: "/Concerned",
      title: "关注",
      icon: "ep:avatar",
    },
    {
      url: "/Community",
      title: "社区",
      icon: "ph:wechat-logo",
    },
  ];
  return (
    <div>
      <Outlet />
      <div className=" flex fixed left-0 bottom-0 right-0">
        {navList.map(({ url, title, icon }) => (
          <div
            onClick={() => navigate(url)}
            className=" w-[75px] h-[45px] flex flex-col justify-evenly items-center bg-white"
            key={url}
          >
            <Icon icon={icon} className=" text-[21px] text-[#9297a1]" />
            <span className=" text-[12px] text-[#9297a1]">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
