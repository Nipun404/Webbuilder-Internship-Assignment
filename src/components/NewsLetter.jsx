import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className="flex justify-between mt-5 items-center max-[420px]:flex-col">
      <div className="text-4xl">
        Sign up and get exclusive <br />special deals
      </div>
      <form onSubmit={handleSubmit} className="max-[420px]:flex-col">
        <div className="max-[420px]:mt-5 flex">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-72 h-14 ps-5 outline-none rounded-l-[16px]"
          />
          <button type="submit" className="bg-[rgb(27,136,244)] text-white w-28 rounded-md h-14 rounded-r-[16px] -m-[2px]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
