"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              你好，我
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "是林毓翔",
                1000,
                "是一位前端工程師",
                1000,
                "使用過 React.js 和 Vue.js 開發網站",
                1000,
                "喜歡學習新技術",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            我是一位前端工程師，專注於開發網站，使用過 React.js 、 Vue.js
            、Node.js 和 MySQL 進行開發，喜歡學習新技術。
          </p>
          <div>
            <button className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              雇用我
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                查看資訊
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden relative ">
            <Image
              src="/images/profile_image.png"
              alt="我的個人圖片"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
