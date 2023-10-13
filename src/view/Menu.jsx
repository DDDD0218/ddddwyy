import React from "react";
import { Icon } from "@iconify/react";
import { Switch } from "antd-mobile";
export default function Menu() {
  return (
    <div className="bg-[#f1f1f1] overflow-auto h-[100vh]">
      <div className="flex justify-between items-center h-[16vw] px-[5vw] w-[80vw] bg-[#f1f1f1]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[7vw] h-[7vw] rounded-[50%] bg-[#f4f4f1] flex items-center justify-center overflow-hidden">
              <Icon
                icon="clarity:avatar-solid"
                className="text-[#f9dada] w-[5.2vw] h-[5.2vw] iconify iconify--gridicons"
              />
            </div>
            <span className="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">
              立即登录
            </span>
            <Icon
              icon="basil:caret-right-outline"
              className="dark:text-[#f0f0f0] text-[#383838] text-[4vw] iconify iconify--mingcute"
            />
          </div>
        </div>
        <Icon
          icon="icon-park:scanning"
          className="dark:text-[#f0f0f0] text-[#383838] text-[5vw] iconify iconify--teenyicons"
        />
      </div>
      <div className="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
        <div className="h-[10vw] flex justify-between items-center">
          <h1 className="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
          <div className="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">
            会员中心
          </div>
        </div>
        <div className="h-[7vw] border-b-[1px] border-[#494443]">
          <p className="text-[2.73vw]">点击恢复超21项专属特权</p>
        </div>
        <div className="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]">
          <div className="text-[2.5vw] h-[11vw]">
            受邀专享,黑胶VIP低至0.27元/天!
          </div>
          <div className="scale-50 w-[8vw]">
            <div className="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50">
              受邀专享
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
        <div className="px-[4vw]">
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon
                icon="mdi:envelope-outline"
                className="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
              />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                我的消息
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon
                icon="simple-icons:shell"
                className="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
              />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                云贝中心
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">签到</span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon
                icon="heroicons-outline:light-bulb"
                color="black"
                rotate={2}
                className="dark:text-[#f0f0f0] text-[#333] font-[800] w-[4vw] h-[4vw] iconify iconify--solar"
              />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                创作者中心
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
        <div className="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">
          音乐服务
        </div>
        <div className="px-[4vw]">
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon
                icon="emojione-monotone:dotted-six-pointed-star"
                color="black"
              />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                趣测
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">
                点击查看今日运势
              </span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ion:ticket-outline" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                云村有票
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ei:question" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                多多西西口袋
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ic:outline-local-mall" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                商城
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="uil:heart-rate" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                Beat专区
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">
                顶尖制作邀你创作
              </span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="mdi:bell-outline" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                口袋彩铃
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="icon-park-outline:game-handle" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                游戏专区
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">
                音乐浇灌治愈花园
              </span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
        <div className="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]">
          其他
        </div>
        <div className="px-[4vw]">
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="tdesign:setting" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                设置
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="akar-icons:moon-fill" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                深色模式
              </span>
            </div>
            <div className="flex items-center">
              <Switch
                defaultChecked
                style={{
                  "--checked-color": "#00b578",
                  "--height": "24px",
                  "--width": "40px",
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="mdi:alarm-clock" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                定时关闭
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon
                icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                color="black"
              />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                个人装扮
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="tdesign:earphone" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                边听边存
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">未开启</span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="tdesign:earphone" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                在线听歌免流量
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="icon-park-outline:web-page" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                音乐黑名单
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">未开启</span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ant-design:stop-outlined" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                青少年模式
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-[color:#a7a7a7] text-[3vw]">未开启</span>
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="lucide:alarm-clock" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                音乐闹钟
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 第五板块 */}
      <div className="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]">
        <div className="px-[4vw]">
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ph:file-duotone" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                我的订单
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ion:ticket-outline" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                优惠券
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="simple-line-icons:earphones-alt" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                我的客服
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ph:share-light" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                分享网易云音乐
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ep:document" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                个人信息收集和使用清单
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="mdi:square-outline" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                个人信息收集第三方共享清单
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="ph:atom-bold" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                个人信息和隐私保护
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
          <div className="flex items-center justify-between h-[12vw] px-[3.6vw]">
            <div className="flex items-center">
              <Icon icon="mdi:warning-circle-outline" color="black" />
              <span className="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]">
                关于
              </span>
            </div>
            <div className="flex items-center">
              <Icon
                icon="icon-park-outline:right"
                color="#a7a7a7"
                className="font-[800] w-[6vw] h-[6vw] iconify iconify--mingcute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] my-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]">
        关闭网易云
      </div>
    </div>
  );
}
