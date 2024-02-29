import React from "react";
import { IMAGE, down, important, right } from "../assets/images";

const Hero = () => {
  return (
    <div className="">
      <div className="text-6xl">Best Website builders in the US</div>
      <hr className="mt-2 max-[420px]:hidden" />
      <div className="flex justify-between mt-2 max-[420px]:hidden">
        <div className="flex items-center">
          <div className="flex gap-3 items-center">
            <div>
              <img src={IMAGE} alt="current" className="w-4 h-4" />
            </div>
            <div>Last Updated - </div>
          </div>
          <div className="px-3 mr-4">February 22, 2020</div>
          <div className="flex gap-3 items-center">
            <div>
              <img src={important} alt="important" className="w-4 h-4" />
            </div>
            <div>Advertising Disclosure</div>
          </div>
        </div>
        <div className="flex items-center">
          <div>Top Relevant</div>
          <div>
            <img src={down} alt="down" />
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="mt-2 flex gap-10">
        <div className="bg-white w-[8rem] text-center rounded-lg">Tools</div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          AWS Builder
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          Start Build
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          Build Supplies
        </div>
        <div className="bg-white w-[8rem] text-center rounded-lg">Tooling</div>
        <div className="bg-white w-[8rem] text-center rounded-lg">
          BlueHosting
        </div>
      </div>
      <hr className="mt-2 min-[425px]:hidden" />
      <div className="mt-4 flex items-center text-sm">
        {[
          { label: "Home" },
          { label: "Hosting for all" },
          { label: "Hosting" },
          { label: "Hosting6" },
          { label: "Hosting5" }
        ].map(({ label }, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={index > 0 ? "ps-2" : ""}>{label}</div>
            {index < 4 && <img src={right} alt="" className="w-2 h-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
