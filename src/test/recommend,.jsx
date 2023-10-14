import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { MoreOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Popup } from "antd-mobile";
import Downmenu from "./downmenu";
export default function Recommond() {
  const [list, setList] = useState([]);
  const [visible1, setVisible1] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/"
      )
      .then((res) => {
        // console.log(res.data.data.blocks[1].creatives);
        setList(res.data.data.blocks[1].creatives.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [str, setStr] = useState(0);
  // console.log(list);
  const items = list.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <Swiper.Item key={index}>
      <div className=" w-[120px] h-[174px] rounded-[12px] flex flex-col items-center">
        {item.resources.length !== 1 ? (
          <Swiper.Item>
            <Swiper
              direction="vertical"
              indicator={() => null}
              allowTouchMove={false}
              autoplay
              loop
              style={{ width: "116.25px", height: "116.25px" }}
              onIndexChange={(index) => setStr(index)}
            >
              {item.resources.map((value, i) => {
                // eslint-disable-next-line react/no-array-index-key
                return (
                  <Swiper.Item key={i}>
                    <img
                      src={value.uiElement.image.imageUrl}
                      alt=""
                      className=" w-[116.25px] h-[116.25px] rounded-[12px]"
                    />
                  </Swiper.Item>
                );
              })}
            </Swiper>
            <p className=" text-[12px] text-[#3e4759]">
              {item.resources[str].uiElement.mainTitle.title}
            </p>
          </Swiper.Item>
        ) : (
          <Link to={`/Detailedlist/${item.creativeId}`}>
            <div>
              {item.resources.map((value, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i}>
                  <div className=" relative">
                    <img
                      src={value.uiElement.image.imageUrl}
                      alt=""
                      className=" w-[116.25px] h-[116.25px] rounded-[12px]"
                    />
                    <div className=" absolute top-0 right-[5px] text-white flex items-center">
                      <Icon icon="solar:play-bold" />
                      {value.resourceExtInfo.playCount >= 100000 ? (
                        // eslint-disable-next-line radix
                        <span>
                          {parseInt(value.resourceExtInfo.playCount / 10000)}万
                        </span>
                      ) : (
                        <span>{value.resourceExtInfo.playCount}</span>
                      )}
                    </div>
                    <Icon
                      icon="solar:play-bold"
                      className=" text-white absolute right-[10px] bottom-[10px]"
                    />
                  </div>
                  <p className=" text-[12px] text-[#3e4759]">
                    {value.uiElement.mainTitle.title}
                  </p>
                </div>
              ))}
            </div>
          </Link>
        )}
      </div>
    </Swiper.Item>
  ));

  return (
    <div className=" px-[10px]">
      <div className=" w-[100%] h-[45px] text-[15px] pl-[5px] text-[#374d5b] font-[800] flex justify-between items-center">
        <span className=" flex items-center">
          推荐歌单
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
      <Swiper indicator={() => null} slideSize={35} defaultIndex={0}>
        {items}
      </Swiper>
    </div>
  );
}
