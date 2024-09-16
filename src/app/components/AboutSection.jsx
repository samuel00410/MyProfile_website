"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "專長",
    id: "專長",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "學歷",
    id: "學歷",
    content: (
      <ul className="list-disc pl-2">
        <li>虎尾科技大學 資訊工程系 畢業</li>
      </ul>
    ),
  },
  {
    title: "證照",
    id: "證照",
    content: (
      <ul className="list-disc pl-2">
        <li>數位電子 乙級證照</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("專長");

  const handleTabChange = (tab) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 gap-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about_me.jpg" width="500" height="500" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">關於我</h2>
          <p className="text-base lg:text-lg">
            我是一位全端工程師，專注於開發網站，有過使用 JavaScript, React,
            Node.js, Express, MySQL, Sequelize, HTML, CSS 還有 Git,
            平常喜歡去鑽研以及摸索新技術。
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "專長"}
              selectTab={() => {
                handleTabChange("專長");
              }}
            >
              專長
            </TabButton>
            <TabButton
              active={tab === "學歷"}
              selectTab={() => {
                handleTabChange("學歷");
              }}
            >
              學歷
            </TabButton>
            <TabButton
              active={tab === "證照"}
              selectTab={() => {
                handleTabChange("證照");
              }}
            >
              證照
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
