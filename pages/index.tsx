import type { NextPage } from "next";
import { Switch } from "@chakra-ui/react";

const Cover: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start py-[23px] px-[88px] box-border text-left text-lg text-slate-900 font-large">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <div className="w-6 relative rounded-[50%] bg-slate-900 h-6" />
                <a
                  className="w-[976px] relative leading-[28px] font-semibold text-[inherit] inline-block shrink-0 [text-decoration:none]"
                  href="https://ui.shadcn.com/"
                  target="_blank"
                >
                  shadcn/ui
                </a>
              </div>
              <div className="self-stretch relative text-[48px] tracking-[-0.01em] leading-[60px] font-extrabold">
                <p className="m-0">{`Beautifully designed components `}</p>
                <p className="m-0">built with RadixUI and Tailwind CSS</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-between text-sm text-black">
              <div className="flex flex-col items-start justify-end gap-[44px] lg:mb-5">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <input
                      className="cursor-pointer m-0 w-4 relative rounded-[50%] bg-white box-border h-4 border-[1px] border-solid border-slate-200"
                      type="radio"
                      name="options"
                    />
                    <div className="relative leading-[14px] font-medium">
                      Default
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <input
                      className="cursor-pointer m-0 w-4 relative h-4"
                      checked={true}
                      type="radio"
                      name="options"
                    />
                    <div className="relative leading-[14px] font-medium">
                      Comfortable
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <input
                      className="cursor-pointer m-0 w-4 relative rounded-[50%] bg-white box-border h-4 border-[1px] border-solid border-slate-200"
                      type="radio"
                      name="options"
                    />
                    <div className="relative leading-[14px] font-medium">
                      Compact
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-white shadow-[0px_4px_6px_rgba(0,_0,_0,_0.09)] flex flex-col items-start justify-start p-[17px] gap-[16px] text-base border-[1px] border-solid border-slate-200">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="relative leading-[16px] font-medium">
                      Dimensions
                    </div>
                    <div className="w-[286px] relative text-sm leading-[20px] text-slate-400 inline-block">
                      Set the dimensions for the layer.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-sm">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <div className="w-[84px] relative leading-[20px] font-medium inline-block shrink-0">
                          Width
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <input
                            className="[outline:none] font-large text-sm bg-white self-stretch rounded-md flex flex-row items-center justify-start py-2 pr-14 pl-3 text-slate-900 border-[1px] border-solid border-lightgray"
                            placeholder="100%"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <div className="w-[84px] relative leading-[20px] font-medium inline-block shrink-0">
                          Max. width
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <input
                            className="[outline:none] font-large text-sm bg-white self-stretch rounded-md flex flex-row items-center justify-start py-2 pr-14 pl-3 text-slate-900 border-[1px] border-solid border-lightgray"
                            placeholder="300px"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <div className="w-[84px] relative leading-[20px] font-medium inline-block shrink-0">
                          Heigh
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <input
                            className="[outline:none] font-large text-sm bg-white self-stretch rounded-md flex flex-row items-center justify-start py-2 pr-14 pl-3 text-slate-900 border-[1px] border-solid border-lightgray"
                            placeholder="25px"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                        <div className="w-[84px] relative leading-[20px] font-medium inline-block shrink-0">
                          Max. height
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <input
                            className="[outline:none] font-large text-sm bg-white self-stretch rounded-md flex flex-row items-center justify-start py-2 pr-14 pl-3 text-slate-900 border-[1px] border-solid border-lightgray"
                            placeholder="none"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[53px] lg:mb-5">
                <div className="flex flex-row items-center justify-start gap-[37px]">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <Switch
                      className="w-11 relative"
                      colorScheme="teal"
                      defaultChecked
                    />
                    <div className="relative leading-[14px] font-medium">
                      Airplane mode
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-2 px-4 bg-slate-900 rounded-md flex flex-row items-center justify-center">
                    <div className="relative text-sm leading-[24px] font-medium font-large text-white text-left">
                      Continue
                    </div>
                  </button>
                </div>
                <div className="rounded-md bg-white shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] flex flex-row items-start justify-start p-[17px] gap-[16px] text-slate-900 border-[1px] border-solid border-gainsboro">
                  <div className="w-10 relative rounded-[50%] bg-black h-10" />
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="relative leading-[20px] font-semibold">
                      @nextjs
                    </div>
                    <div className="w-[230px] relative leading-[20px] inline-block">
                      The React Framework - created and maintained by @vercel
                    </div>
                    <div className="w-[230px] flex flex-row items-center justify-start gap-[4px] text-xs text-slate-500">
                      <img
                        className="w-4 relative h-4 overflow-hidden shrink-0"
                        alt=""
                        src="/calendar.svg"
                      />
                      <div className="w-[223px] relative leading-[16px] inline-block shrink-0">
                        Joined December 2021
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-slate-100 flex flex-row items-start justify-start p-[5px]">
                  <button className="cursor-pointer [border:none] py-1.5 px-3 bg-white rounded-10xs flex flex-row items-start justify-start">
                    <div className="relative text-sm leading-[20px] font-medium font-large text-slate-900 text-left">
                      Account
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-3 bg-[transparent] rounded-10xs flex flex-row items-start justify-start">
                    <div className="relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Password
                    </div>
                  </button>
                </div>
              </div>
              <div className="rounded-md shadow-[0px_4px_6px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-col items-center justify-start text-slate-700 border-[1px] border-solid border-slate-100">
                <div className="bg-white flex flex-col items-start justify-start p-[5px]">
                  <div className="w-[214px] bg-white flex flex-row items-center justify-start py-1.5 px-2 box-border">
                    <div className="flex-1 relative leading-[20px] font-semibold">
                      My Account
                    </div>
                  </div>
                </div>
                <div className="w-56 bg-white flex flex-col items-start justify-start">
                  <div className="w-[247px] relative box-border h-px border-t-[1px] border-solid border-slate-100" />
                </div>
                <div className="bg-white flex flex-col items-start justify-start p-[5px]">
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconuser.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Profile Item
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconcreditcard.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Biling
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconsettings.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Settings
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconkeyboard.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Keyboard shortcuts
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                </div>
                <div className="w-56 bg-white flex flex-col items-start justify-start">
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-slate-100" />
                </div>
                <div className="bg-white flex flex-col items-start justify-start p-[5px]">
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconusers.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Team
                    </div>
                    <div className="w-[33px] relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left hidden">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconcreditcard.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Invite users
                    </div>
                    <div className="w-[33px] relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left hidden">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconplus.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      New team
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                </div>
                <div className="bg-white flex flex-col items-start justify-start py-0 px-[5px]">
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconusers.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Github
                    </div>
                    <div className="w-[33px] relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left hidden">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconcreditcard.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Suppor
                    </div>
                    <div className="w-[33px] relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left hidden">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                  <button
                    className="[border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]"
                    disabled={true}
                  >
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 opacity-[0.5]"
                      alt=""
                      src="/iconcloud.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left opacity-[0.5]">
                      API
                    </div>
                    <div className="w-[33px] relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left hidden opacity-[0.5]">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden opacity-[0.5]"
                      alt=""
                      src="/secondary-icon1.svg"
                    />
                  </button>
                </div>
                <div className="w-56 bg-white flex flex-col items-start justify-start">
                  <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-slate-100" />
                </div>
                <div className="bg-white flex flex-col items-start justify-start p-[5px]">
                  <button className="cursor-pointer [border:none] py-1.5 px-2 bg-white w-[214px] flex flex-row items-center justify-start box-border gap-[8px]">
                    <div className="w-[15px] relative text-sm leading-[20px] font-medium font-large text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#0f172a] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left hidden">
                      ⇤
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0"
                      alt=""
                      src="/iconlogout.svg"
                    />
                    <div className="flex-1 relative text-sm leading-[20px] font-medium font-large text-slate-700 text-left">
                      Log out
                    </div>
                    <div className="relative text-xs leading-[20px] font-medium font-large text-slate-500 text-left">
                      ⌘⇧B︎
                    </div>
                    <img
                      className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/secondary-icon.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[32px] text-base text-slate-400">
            <div className="flex-1 relative">
              <span className="leading-[28px]">{`This figma file was made with love by `}</span>
              <a
                className="text-[inherit]"
                href="https://twitter.com/skirano"
                target="_blank"
              >
                <span className="[text-decoration:underline] leading-[24px]">
                  @skirano
                </span>
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px] text-sm text-black">
              <button className="cursor-pointer [border:none] py-[7px] px-[13px] bg-slate-900 rounded-md shadow-[0px_2px_4px_rgba(30,_41,_59,_0.25)] flex flex-row items-center justify-start">
                <div className="relative text-sm leading-[20px] font-medium font-large text-white text-left">
                  Beta
                </div>
              </button>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="w-3.5 relative rounded-sm bg-white box-border h-3.5 hidden border-[1px] border-solid border-gainsboro" />
                <div className="relative leading-[14px] font-medium">
                  v1.0.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
