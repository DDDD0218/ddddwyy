import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { RightOutline } from "antd-mobile-icons";
import { MoreOutlined } from "@ant-design/icons";
import { Popup } from "antd-mobile";
import Downmenu from "./downmenu";
export default function MusicCalendar() {
  const [list, setList] = useState([]);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1695200946815&endTime=1695287346814&cookie="
      )
      .then((res) => {
        // console.log(res.data.data.calendarEvents);
        setList(res.data.data.calendarEvents.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className=" w-[100%] h-[45px] text-[15px] text-[#374d5b] font-[800] flex justify-between px-[15px] items-center">
        <span className=" flex items-center">
          音乐日历
          <RightOutline className=" text-[15px]" />
        </span>
        <span
          onClick={() => {
            setVisible1(true);
          }}
        >
          <MoreOutlined />
        </span>
        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false);
          }}
          onClose={() => {
            setVisible1(false);
          }}
          bodyStyle={{
            height: "45vw",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          {<Downmenu />}
        </Popup>
      </div>
      <div className=" w-[340px] bg-white rounded-[12px] p-[15px_15px_14.25px] ml-[10px]">
        {list.map((item, index) => (
          <div key={index} className=" flex mt-[15px]">
            <div className=" w-[255px] h-[56px] flex flex-col justify-evenly">
              <span className=" text-[12px] text-[#aaadb5]">
                {dayjs(new Date()).format("M/DD")}
              </span>
              <p className=" text-[14px] text-[#3e4558]">{item.title}</p>
            </div>
            <img
              src={item.imgUrl}
              alt=""
              className=" w-[56px] h-[56px] rounded-[12px]"
            />
          </div>
        ))}
      </div>
    </>
  );
}
