import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { MoreOutlined } from "@ant-design/icons";
import { Popup } from "antd-mobile";
import Downmenu from "./downmenu";
export default function RankingList() {
  const [list, setList] = useState([]);
  const [visible1, setVisible1] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/"
      )
      .then((res) => {
        // console.log(res.data.data.blocks[3].creatives);
        setList(res.data.data.blocks[3].creatives.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[330px] h-[276px] bg-[white] rounded-[12px]">
        <div className=" w-[330px] h-[45px] flex justify-between items-center p-[0_18.75px_0_7.5px]">
          <span className=" text-[15px] text-[#374d5b] font-bold flex items-center">
            {item.uiElement.mainTitle.title}
            <RightOutline className=" text-[12px]" />
          </span>
          <span className=" text-[16px] text-[#939ba1]">
            {item.uiElement.mainTitle.titleDesc}
          </span>
        </div>
        {item.resources.map((value, i) => {
          return (
            <div key={i}>
              <div className=" w-[322.5px] h-[54.375px] mt-[10.125px] ml-[7.5px] flex ">
                <img
                  src={value.uiElement.image.imageUrl}
                  alt=""
                  className=" w-[54.38px] h-[54.38px] rounded-[12px]"
                />
                <div className=" w-[265px] flex items-center p-[0_21px_0_12px]">
                  <div className=" w-[8px] mr-[11.25px]">{i + 1}</div>
                  <div className=" w-[150px]">
                    <p className=" text-[14px] text-[#3e465b] line-clamp-1 overflow-hidden">
                      {value.uiElement.mainTitle.title}
                    </p>
                    {value.resourceExtInfo !== null ? (
                      <p className=" text-[12px] text-[#79838f]">
                        {value.resourceExtInfo.artists.map((value1, a) => {
                          return <span key={a}>{value1.name}</span>;
                        })}
                      </p>
                    ) : (
                      <p className=" h-[21px]"></p>
                    )}
                  </div>
                  {value.uiElement.labelText.textColor === "colorPrimary1" ? (
                    <div className=" text-[12px] text-[#ff3836] ml-[15px]">
                      {value.uiElement.labelText.text}
                    </div>
                  ) : (
                    <div className=" text-[12px] text-[#39b184] ml-[15px]">
                      {value.uiElement.labelText.text}
                    </div>
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
    <div className=" px-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] text-[#374d5b] font-[800] flex justify-between px-[5px] items-center">
        <span className=" flex items-center">
          排行榜
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
        slideSize={96}
        stuckAtBoundary={false}
      >
        {items}
      </Swiper>
    </div>
  );
}
