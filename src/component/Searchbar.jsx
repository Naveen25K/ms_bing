import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="search_bar">
        <i class="fa-solid fa-magnifying-glass fs-3"></i>
        <input type="text" placeholder="Search the web" />
        <i class="fa-solid fa-microphone fs-4 text-primary"></i>
        <i class="fa-solid fa-light fa-camera-retro fs-4 text-primary"></i>
      </div>
    </>
  );
};

export default Searchbar;
