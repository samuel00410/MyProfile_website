import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "密室逃脫預約網站",
    description: "This is a project description",
    imageUrl: "/images/projects/project1.png",
    gitUrl: "https://github.com/samuel00410/escape_room_ProjectProduct",
    previewUrl: "https://escaperoom-project-6a9688f7a146.herokuapp.com/",
  },
  {
    id: 2,
    title: "當地天氣查詢網站",
    description: "This is a project description",
    imageUrl: "/images/projects/project2.png",
    gitUrl: "https://github.com/samuel00410/VueVIteWeatherApp",
    previewUrl: "https://jocular-biscuit-3336b3.netlify.app",
  },
  {
    id: 3,
    title: "日本旅遊推薦網站",
    description: "This is a project description",
    imageUrl: "/images/projects/project3.png",
    gitUrl: "https://github.com/samuel00410/Vite_React_ForJourneyToJapan_Web",
    previewUrl: "https://vite-forjourneytojapan.netlify.app",
  },
  {
    id: 4,
    title: "圍棋資訊網站",
    description: "This is a project description",
    imageUrl: "/images/projects/project4.png",
    gitUrl: "/",
    previewUrl: "https://zesty-gogocannoli-9e40fc.netlify.app",
  },
];

const ProjectSection = () => {
  return (
    <section id="project">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        我的專案作品
      </h2>
      {/* 專案作品列表 */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imageUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
