import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, Image } from "antd-mobile";

export default function Banner() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://netease-cloud-music-api-five-roan-88.vercel.app/homepage/block/page/"
      )
      .then((res) => {
        // console.log(res.data.data.blocks[0].extInfo.banners);
        setList(res.data.data.blocks[0].extInfo.banners.map((item) => item));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const items = list.map((item, index) => (
    <Swiper.Item key={index}>
      <div className=" w-[338px] h-[135px] m-[auto] rounded-[12px]">
        <Image src={item.pic} className=" rounded-[12px]" />
      </div>
    </Swiper.Item>
  ));

  return (
    <>
      <div className=" px-[18.5px]">
        <Swiper autoplay loop>
          {items}
        </Swiper>
      </div>
    </>
  );
}
