import React from "react";
import { MenuOutlined, ScanOutlined } from "@ant-design/icons";
import { SearchBar } from "antd-mobile";
import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom";
import { Popup } from "antd-mobile";
import { useState } from "react";
import Banner from "../test/banner";
import Nav from "../test/nav";
import Recommond from "../test/recommend,";
import NewAlbum from "../test/newAlbum";
import RankingList from "../test/rankingList";
import HotTopic from "../test/hotTopic";
import MusicCalendar from "../test/musicCalendar";
import Menu from "./Menu";
export default function Homepage() {
  const [visible3, setVisible3] = useState(false);

  return (
    <div className=" bg-[#f4f4f4] pb-[50px]">
      <div className=" w-[100%] h-[75px] p-[11.25px_11.25px_11.25px_3.75px] flex justify-between items-center">
        <span className=" w-[37.5px] h-[37.5px] flex items-center justify-center">
          <span
            className="w-[27px] h-[27px] text-black"
            onClick={() => {
              setVisible3(true);
            }}
          >
            <MenuOutlined className=" text-[18.75px]" />
          </span>
          <Popup
            visible={visible3}
            onMaskClick={() => {
              setVisible3(false);
            }}
            position="left"
            bodyStyle={{ width: "80vw" }}
          >
            {<Menu />}
          </Popup>
        </span>
        <div className=" w-[281.25px] h-[37.5px] rounded-[20px] justify-between flex items-center bg-gradient-to-r from-[#d9ddfd] to-[#f3d9ef] border-[2px] border-[#d9ddfd] relative">
          <Link to={"/Search"}>
            <SearchBar
              placeholder="Love Is Gone (Acoustic)"
              style={{
                "--border-radius": "100px",
                "--background": "inherit",
                width: "100%",
                "--height": "37.5px",
                "--padding-left": "12px",
              }}
            />
          </Link>
          <span className=" w-[16.75px] h-[16.75px] mr-[15px] flex items-center justify-center absolute right-0">
            <ScanOutlined className=" text-[12px]" />
          </span>
        </div>
        <span className=" w-[30px] h-[30px] flex items-center justify-center">
          <Icon icon="mdi:microphone-outline" className=" text-[27px]" />
        </span>
      </div>
      <Banner />
      <Nav />
      <Recommond />
      <NewAlbum />
      <RankingList />
      <HotTopic />
      <MusicCalendar />
    </div>
  );
}
