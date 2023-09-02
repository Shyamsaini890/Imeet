import Link from "next/link";
// import React from "react";
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { AiFillEye } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  return (
    <div className="[100%] h-[80px] shadow-xl flex justify-around items-center">
      <div className="w-[30%] text-[#6B59ED]">
        <h1 className="text-3xl font-bold ">iMeet</h1>
        <p className="text-xs absolute left-[140px]">
          Learning Beyond Expectations....
        </p>
      </div>
      <div className="w-[40%] flex gap-6 items-center font-semibold text-lg">
        <Link href="/" className="text-[#6B59ED]">
          Home
        </Link>
        <Link href="#">
          {/* <label htmlFor="course">Our Course</label> */}
          <select>
            <option>Our Course</option>
            <option>Pythan</option>
            <option>Java</option>
            <option>C/C++</option>
            <option>React-Js </option>
            <option>Next-Js</option>
          </select>
        </Link>
        <Link href="#">About Us</Link>
        <Link href="#">
          <select>
            <option>Insights</option>
          </select>
        </Link>
        <button
          onClick={() => setopen(true)}
          className="bg-[#6B59ED] w-[100px] h-[40px] text-white text-xl font-bold rounded-md"
        >
          Login
        </button>
      </div>
      <Dialog
        onClose={handleClose}
        open={open}
        PaperProps={{ sx: { maxWidth: "unset" } }}
        // style={{ borderRadius: 20 }}
        className="backdrop-filter backdrop-blur-sm sm:backdrop-blur-lg ..."
      >
        <div className="w-[350px] h-[450px] rounded-4xl bg-white border">
          <div className="flex flex-col justify-center ml-5 gap-3 mt-2">
            <h1 className="font-semibold text-xl">Create Account</h1>
            <div className="w-[300px] h-[40px] border px-3 flex items-center ">
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="w-[300px] h-[40px] border px-3 flex items-center ">
              <input type="email" placeholder="Enter Email Address" />
            </div>
            <div className="w-[300px] h-[40px] border flex items-center justify-between px-3">
              <input type="text" placeholder="Enter Password" />
              <AiFillEye />
            </div>
            <button className="w-[300px] h-[40px] bg-gradient-to-b from-purple-500 to-indigo-600 ... rounded-md text-white font-bold">
              Next
            </button>
            <button className="w-[300px] h-[40px] bg-black flex items-center justify-center gap-3 rounded-md text-white font-semibold">
              <AiFillGoogleCircle />
              Continue with Google
            </button>
            <div>
              <p className="ml-10">
                Already have an account?
                <a href="#" className="font-semibold">
                  Log in
                </a>
              </p>
              <p className="text-[9px] ml-5 mt-2">
                By continuing, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
            <div className="mt-[25px]">
              <p className="text-[12px] font-semibold">
                Unable to Login? We are here - imeet.mathura@gmail.com
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Navbar;
