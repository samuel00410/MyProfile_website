import Link from "next/link";
import React from "react";
import { FaLink, FaEye } from "react-icons/fa";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute w-full h-full top-0 left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="w-14 h-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <FaLink className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white"
          >
            <FaEye className="w-10 h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl  bg-[#181818] px-4 py-6">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
