import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { MoreOutlined } from "@ant-design/icons";
import { Popup } from "antd-mobile";
import Downmenu from "./downmenu";

export default function NewAlbum() {
  const [list, setList] = useState([]);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/"
      )
      .then((res) => {
        // console.log(res.data.data.blocks[2].creatives);
        setList(res.data.data.blocks[2].creatives.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[330px] h-[207.75px] flex flex-col justify-evenly items-center">
        {item.resources.map((value, i) => {
          return (
            <div key={i}>
              <div className=" w-[322.5px] h-[54.38px] flex">
                <img
                  src={value.uiElement.image.imageUrl}
                  alt=""
                  className=" w-[54.38px] h-[54.38px] rounded-[12px]"
                />
                <div className=" ml-[10px] flex flex-col justify-evenly">
                  <p className=" text-[13.125px] text-[#3e465b] line-clamp-1 overflow-hidden">
                    {value.uiElement.mainTitle.title}
                  </p>
                  {value.uiElement.subTitle !== undefined ? (
                    <p className=" text-[12px] text-[#79838f]">
                      {value.uiElement.subTitle.title}
                    </p>
                  ) : (
                    <p className=" text-[12px] text-[#79838f]"></p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" mx-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] text-[#374d5b] font-[800] flex justify-between px-[5px] items-center">
        <span className=" flex items-center">
          新歌新碟\数字专辑
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
      <Swiper
        indicator={() => null}
        defaultIndex={0}
        slideSize={90}
        stuckAtBoundary={false}
      >
        {items}
      </Swiper>
    </div>
  );
}
