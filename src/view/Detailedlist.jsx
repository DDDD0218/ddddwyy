import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useToggle } from "ahooks";
const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app/",
});
const playlistDetail = (id) => http.get("playlist/detail", { params: { id } });
const relatedPlaylist = (id) =>
  http.get("/related/playlist", { params: { id } });
export default function Detailedlist() {
  const [state, { toggle }] = useToggle(true);
  const [list, setlist] = useState([]);
  const [relatedlist, setrelatedlist] = useState([]);
  const [creatorlist, setcreatelist] = useState([]);
  const [tagslist, settagslist] = useState([]);
  const [musiclist, setmusiclist] = useState([]);
  const id = useLocation().pathname.split("/")[2];
  useEffect(() => {
    playlistDetail(id)
      .then((res) => {
        console.log(res.data.playlist);
        setlist(res.data.playlist);
        setcreatelist(res.data.playlist.creator);
        settagslist(res.data.playlist.tags);
        setmusiclist(res.data.playlist.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
    relatedPlaylist(id)
      .then((res) => {
        // console.log(res.data.playlists);
        setrelatedlist(res.data.playlists);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-[100vw] pb-[12vw]">
      <div className=" w-[100vw] bg-[#292929] pb-[5vw]">
        <div className="h-[13.5vw] w-[100vw] flex px-[4vw] justify-between text-[7vw] text-[white]">
          <div className="flex items-center">
            <Link to="/">
              <Icon icon="ph:arrow-up-bold" color="white" rotate={3} />
            </Link>
            <span className="ml-[4.7vw] text-[4.3vw]">歌单</span>
          </div>
          <div className="flex items-center">
            <Icon icon="tabler:search" color="white" className="mr-[5vw]" />
            <Icon icon="ri:more-fill" color="white" rotate={1} />
          </div>
        </div>
        <div className="px-[4vw] mt-[2vw]">
          {/* <div className="h-[24vw] flex">
            <div className="w-[24vw] h-[24vw] rounded-[10px]">
              <img
                src={list && list.coverImgUrl}
                alt=""
                className="w-[24vw] h-[24vw] rounded-[10px]"
              />
            </div>
            <div className="w-[60vw] h-[24vw] ml-[1vw]">
              <p className="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
                {list && list.name}
              </p>
              <div className="h-[10.5vw] flex items-center">
                <img
                  src={creatorlist.avatarUrl}
                  alt=""
                  className="w-[6vw] h-[6vw] rounded-[50%]"
                />
                <span className="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">
                  {creatorlist.nickname}
                </span>
                <div className="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                  <Icon
                    icon="material-symbols:add"
                    className="mr-[0.2vw] text-[4vw] text-[#fff] iconify iconify--material-symbols"
                  />
                  <span>关注</span>
                </div>
              </div>
              <div className="flex">
                {tagslist.map((items) => {
                  return (
                    <div className="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                      {items}
                      <Icon icon="mingcute:right-line" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="inside">
            <div className="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
              喜欢这个歌单的用户也听了
            </div>
            <div
              className="w-[100%] overflow-auto flex"
              // style={{ display: "none" }}
            >
              {relatedlist.map((items) => {
                return (
                  <div className="w-[28vw] mr-[2.5vw]">
                    <div className="w-[28vw] h-[28vw] rounded-[8px]">
                      <img
                        src={items.coverImgUrl}
                        alt=""
                        className="w-[28vw] h-[28vw] rounded-[8px]"
                      />
                    </div>
                    <p className="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                      {items.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
          <button
            className="z-[666] absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center"
            onClick={() => toggle()}
          >
            {!state ? (
              <Icon icon="teenyicons:down-outline" color="white" rotate={2} />
            ) : (
              <Icon icon="teenyicons:down-outline" color="white" />
            )}
          </button>
          {state ? (
            <div className="h-[24vw] flex">
              <div className="w-[24vw] h-[24vw] rounded-[10px]">
                <img
                  src={list && list.coverImgUrl}
                  alt=""
                  className="w-[24vw] h-[24vw] rounded-[10px]"
                />
              </div>
              <div className="w-[60vw] h-[24vw] ml-[1vw]">
                <p className="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
                  {list && list.name}
                </p>
                <div className="h-[10.5vw] flex items-center">
                  <img
                    src={creatorlist.avatarUrl}
                    alt=""
                    className="w-[6vw] h-[6vw] rounded-[50%]"
                  />
                  <span className="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50">
                    {creatorlist.nickname}
                  </span>
                  <div className="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]">
                    <Icon
                      icon="material-symbols:add"
                      className="mr-[0.2vw] text-[4vw] text-[#fff] iconify iconify--material-symbols"
                    />
                    <span>关注</span>
                  </div>
                </div>
                <div className="flex">
                  {tagslist.map((items) => {
                    return (
                      <div className="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]">
                        {items}
                        <Icon icon="mingcute:right-line" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="inside">
              <div className="h-[10vw] flex items-center text-[#fff] opacity-50 text-[3vw]">
                喜欢这个歌单的用户也听了
              </div>
              <div
                className="w-[100%] overflow-scroll flex no-scrollbal"
                // style={{ display: "none" }}
              >
                {relatedlist.map((items) => {
                  return (
                    <div className="w-[28vw] mr-[2.5vw]">
                      <div className="w-[28vw] h-[28vw] rounded-[8px]">
                        <img
                          src={items.coverImgUrl}
                          alt=""
                          className="w-[28vw] h-[28vw] rounded-[8px]"
                        />
                      </div>
                      <p className="dark:text-[#e3e5ec] text-[2.78vw] text-[#fff] mt-[2vw] scroll-item">
                        {items.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[4vw] justify-between">
            <p className="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden">
              {list.description}
            </p>
            <Icon
              icon="mingcute:right-line"
              color="#d8f8e1"
              className="text-[4.6vw] iconify iconify--ep"
            />
          </div>
        </div>
        <div className="flex items-center mt-[2vw]">
          <div className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw] mx-[3vw]">
            <Icon
              icon="entypo:forward"
              className="text-[5vw] mr-[1.8vw] iconify iconify--mdi"
            />
            <span>{list.shareCount}</span>
          </div>
          <div className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw] mx-[3vw]">
            <Icon
              icon="ant-design:comment-outlined"
              className="text-[5vw] mr-[1.8vw] iconify iconify--mdi"
            />
            <span>{list.commentCount}</span>
          </div>
          <div className="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw] mx-[3vw]">
            <Icon
              icon="mdi:star"
              className="text-[5vw] mr-[1.8vw] iconify iconify--mdi"
            />
            <span>{list.subscribedCount}</span>
          </div>
        </div>
      </div>
      <div className="bg-[#fff] w-[100vw] rounded-[15px] relative z-[1] mt-[-2.5vw] px-[3.8vw]">
        <div className="a1 h-[13vw] flex items-center justify-between">
          <div className="flex items-center">
            <Icon
              icon="carbon:play-filled"
              className="text-[#ED3E20] text-[8vw] iconify iconify--heroicons-solid"
            />
            <span className="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]">
              播放全部
            </span>
            <span className="text-[#8C9094] text-[2.7vw]">(20)</span>
          </div>
          <div className="flex items-center">
            <Icon
              icon="clarity:download-line"
              className="text-[5vw] text-[#2C3034] iconify iconify--clarity"
            />
            <Icon
              icon="gg:list"
              className="text-[6vw] text-[#2C3034] ml-[5vw] mt-[1vw] iconify iconify--solar"
            />
          </div>
        </div>
        <div>
          {musiclist.map((items, index) => {
            return (
              <Link to={"/Audioplay"}>
                <div className="flex items-center h-[14vw]">
                  <div className="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium">
                    {index + 1}
                  </div>
                  <div className="font-medium text-[3.6vw] w-[64vw]">
                    <div className="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]">
                      <span className="text-ellipsis text-[#000]">
                        {items.name}
                      </span>
                    </div>
                    <div className="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center">
                      {items.fee === 1 ? (
                        <>
                          <div className="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">
                            vip
                          </div>
                          <div className="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]">
                            试听
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <span>
                        {items.ar[0].name}-{items.al.name}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
