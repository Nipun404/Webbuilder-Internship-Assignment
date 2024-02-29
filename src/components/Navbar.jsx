import React, { useState } from "react";
import { searchIcon } from "../assets/images";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-[rgb(33,39,49)] w-full flex justify-center ps-20 max-[420px]:ps-0 h-20">
      <div className="p-2 flex justify-around items-center">
        <div className="flex items-center">
          <img
            src={searchIcon}
            alt="search-icon"
            className="absolute w-4 ms-2"
          />
          <input
            type="text"
            className="ps-8 rounded-md w-72 outline-none max-[420px]:w-screen h-[40px]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex gap-10 ps-10 max-[420px]:hidden text-[#aac4e2]">
          <div>Categories</div>
          <div>Website Builders</div>
          <div>Today Deals</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
