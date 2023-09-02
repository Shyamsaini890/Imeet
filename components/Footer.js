import Image from "next/image";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-col w-[100%] h-[500px] relative bottom-0 bg-gradient-to-b from-purple-500 to-indigo-600 ...">
      <div className="flex flex-col mb-0 border-b-2 mx-40">
        <div className="flex justify-center gap-28 text-md font-semibold  text-white h-[80%]">
          <div className="flex flex-col items-center">
            <h1 className="text-[50px] my-10">iMeet</h1>
            <p>
              iMeet provides a wide range of <br /> e-learning services under
              one roof.
            </p>
          </div>
          <div className="flex flex-col">
            <a href="#" className="underline  font-[400] text-xl my-10">
              Quick Links
            </a>
            <a className="text-[#F0AD4E]">Home</a>
            <a>About Us</a>
            <a>Insights</a>
            <a>Privicy Policy</a>
            <a>Refund Policy</a>
            <a>Terms And Conditions</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="underline font-[400] text-xl my-10">
              Courses
            </a>
            <a>Machine Learning</a>
            <a>Web Development</a>
            <a>Cyber Security</a>
            <a>Data Science</a>
            <a>Auto Cad</a>
            <a>All courses</a>
          </div>
          <div>
            <h1 className="underline font-[400] text-xl my-10">
              Contact Information
            </h1>
            <p>Phone: +910000000000</p>
            <p>Email : imeet.mathura@gmail.com</p>
            <p>Address: Mathura, Uttar Pradesh 281001</p>
          </div>
        </div>
        <Image
          src={"/images/image20.png"}
          width={110}
          height={0}
          className="my-10"
        />

        <div className="text-white flex items-center justify-between ">
          <p>iMeet Technology © 2023. All Rights Reserved.</p>
          <div className="gap-7 flex mr-10 text-2xl mb-2">
            <BsFacebook />
            <BsYoutube />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
