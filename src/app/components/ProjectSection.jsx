"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "密室逃脫預約網站",
    description:
      "獨自透過 MERN (React、Node.js、Express、MySQL、Sequelize) 所開發的密室逃脫預約的動態網站",
    imageUrl: "/images/projects/project1.png",
    gitUrl: "https://github.com/samuel00410/escape_room_ProjectProduct",
    previewUrl: "https://escaperoom-project-6a9688f7a146.herokuapp.com/",
    tag: ["All", "Dynamic"],
  },
  {
    id: 2,
    title: "當地天氣查詢網站",
    description: "使用 Vue3 和 Vite 所開發的天氣查詢網站",
    imageUrl: "/images/projects/project2.png",
    gitUrl: "https://github.com/samuel00410/VueVIteWeatherApp",
    previewUrl: "https://jocular-biscuit-3336b3.netlify.app",
    tag: ["All", "Dynamic"],
  },
  {
    id: 3,
    title: "日本旅遊推薦網站",
    description: "靜態網站使用 React 和 Vite 所開發的日本旅遊推薦網",
    imageUrl: "/images/projects/project3.png",
    gitUrl: "https://github.com/samuel00410/Vite_React_ForJourneyToJapan_Web",
    previewUrl: "https://vite-forjourneytojapan.netlify.app",
    tag: ["All", "Static"],
  },
  {
    id: 4,
    title: "圍棋資訊網站",
    description: "早期練習排版的圍棋資訊網",
    imageUrl: "/images/projects/project4.png",
    gitUrl: "/",
    previewUrl: "https://zesty-gogocannoli-9e40fc.netlify.app",
    tag: ["All", "Static"],
  },
];

const ProjectSection = () => {
  const projectRef = useRef(null); // *用 useRef 來追蹤專案區域
  const isInView = useInView(projectRef); // *用 useInView 來檢查元素是否在視窗中
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    console.log(projectsData[0].tag.includes("Static"));
  }, []);

  // 定義卡片的動畫變體
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // 選擇專案標籤
  const handleTagChange = (tag) => {
    setActiveTag(tag);
  };

  // 將專案資料透過 acriveTag 來篩選對應的專案
  const filteredProjects = projectsData.filter((project) => {
    if (activeTag === "All") {
      return project;
    } else {
      return project.tag.includes(activeTag);
    }
  });

  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        我的專案作品
      </h2>
      <div className="py-6 flex justify-center items-center gap-2 text-white">
        <ProjectTag
          name="全部"
          isSelected={activeTag === "All"}
          selectTag={() => handleTagChange("All")}
        />
        <ProjectTag
          name="靜態"
          isSelected={activeTag === "Static"}
          selectTag={() => handleTagChange("Static")}
        />
        <ProjectTag
          name="動態"
          isSelected={activeTag === "Dynamic"}
          selectTag={() => handleTagChange("Dynamic")}
        />
      </div>
      {/* 專案作品列表 */}
      <ul ref={projectRef} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          return (
            <motion.li
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.imageUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectSection;
