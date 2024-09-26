import React from "react";

const ProjectTag = ({ name, isSelected, selectTag }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={selectTag}
      className={`${buttonStyles} border-2 rounded-full px-6 py-3 text-xl cursor-pointer  transition duration-300`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
