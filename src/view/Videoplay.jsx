import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useToggle } from "ahooks";
import { ProgressBar } from "antd-mobile";
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app/",
});
const MVcount = (mvid) => http.get("mv/detail/info", { params: { mvid } });
const MVcount1 = (mvid) => http.get("mv/detail", { params: { mvid } });
const MVcount2 = (id) => http.get("mv/url", { params: { id } });
export default function Videoplay() {
  const id = useLocation().pathname.split("/")[2];
  const [mvcountdata, setmvcountdata] = useState([]);
  const [mvname, setmvname] = useState([]);
  const [mvnameartists, setmvnameartists] = useState([]);
  const [state, { toggle }] = useToggle();
  const [mvvideo, setmvvideo] = useState([]);
  useEffect(() => {
    MVcount(id)
      .then((res) => {
        // console.log(res.data);/
        setmvcountdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    MVcount1(id)
      .then((res) => {
        // console.log(res.data.data);
        setmvname(res.data.data);
        setmvnameartists(res.data.data.artists[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    MVcount2(id)
      .then((res) => {
        console.log(res.data.data);
        setmvvideo(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-wrap absolute pb-[12vw]">
        <div className="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]">
          <Link to="/Ranking">
            <Icon
              icon="mdi:arrow-up"
              rotate={3}
              className="text-[6vw] text-[#fefefe] iconify iconify--ep"
            />
          </Link>
          <div className="flex items-center">
            <Icon
              icon="icon-park-outline:cast-screen"
              className="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
            />
            <Icon
              icon="ri:more-fill"
              rotate={1}
              className="text-[6vw] text-[#fefefe] iconify iconify--ri"
            />
          </div>
        </div>
        <div className="w-[100%] h-[54vw] absolute top-[12%] flex items-center">
          <video src={mvvideo.url} width={"100%"} controls></video>
        </div>
        <div className="w-[100%] absolute bottom-[0vw] h-[90vw]">
          <div className="w-[100vw] px-[4vw] h-[80%] flex justify-between">
            <div className="bottom mr-[10vw] flex-1 flex items-end">
              <div className="w-[100%]">
                <div className="flex items-center mb-[3vw] ">
                  <img
                    src={mvnameartists.img1v1Url}
                    alt=""
                    className="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]"
                  />
                  <span className="mx-[2vw] text-[#ffffff] text-[4vw]">
                    {mvname.artistName}
                  </span>
                  <div className="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]">
                    <Icon icon="material-symbols:add" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <div className="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">
                      MV
                    </div>
                    <p>{mvname.name}</p>
                  </div>
                  <div onClick={() => toggle()}>
                    {!state ? (
                      <Icon icon="uiw:left" rotate={3} color="white" />
                    ) : (
                      <Icon icon="uiw:left" rotate={1} color="white" />
                    )}
                  </div>
                </div>
                {state ? (
                  <div className="h-[80vw] overflow-auto text-[white]">
                    {mvname.desc}
                  </div>
                ) : (
                  ""
                )}
                <div className="flex items-center mt-[4vw]">
                  <Icon
                    icon="ri:music-line"
                    className="text-[4vw] text-[#b3b3b3] iconify iconify--entypo"
                  />
                  <div className="w-[34vw] px-[4vw] text-[white]">
                    {mvname.name}
                  </div>
                  <Icon
                    icon="mdi:heart-outline"
                    className="text-[4vw] text-[#fff] iconify iconify--ant-design"
                  />
                </div>
              </div>
            </div>
            <div className="w-[10vw]">
              <div className="flex items-center flex-col justify-center mb-[2vw]">
                <Icon
                  icon="mdi:like"
                  className="text-[6vw] mb-[1vw] text-[#eaeaea] iconify iconify--bxs"
                />
                <p className="text-[#eaeaea] text-[3vw]">
                  {mvcountdata.likedCount}
                </p>
              </div>
              <div className="flex items-center flex-col justify-center mb-[2vw]">
                <Icon
                  icon="ep:comment"
                  className="text-[6vw] mb-[1vw] text-[#eaeaea] iconify iconify--bxs"
                />
                <p className="text-[#eaeaea] text-[3vw]">
                  {mvcountdata.commentCount}
                </p>
              </div>
              <div className="flex items-center flex-col justify-center mb-[2vw]">
                <Icon
                  icon="basil:forward-solid"
                  className="text-[6vw] mb-[1vw] text-[#eaeaea] iconify iconify--bxs"
                />
                <p className="text-[#eaeaea] text-[3vw]">
                  {mvcountdata.shareCount}
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-center mb-[2vw]">
                <Icon
                  icon="fluent:collections-20-filled"
                  className="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
                />
                <p className="text-[#eaeaea] text-[3vw]">收藏</p>
              </div>
              <div className="relative flex items-center justify-center">
                <img
                  src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                  alt=""
                  className="w-[10vw] h-[10vw] rounded-[50%]"
                />
                <img
                  src={mvname.cover}
                  alt=""
                  className="w-[7vw] h-[7vw] rounded-[50%] absolute rotateAnimation"
                />
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[20%] flex">
            <div className="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]">
              发条评论结识有趣的人
              <Icon
                icon="iconoir:enlarge"
                className="text-[4vw] iconify iconify--bx"
                rotate={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
