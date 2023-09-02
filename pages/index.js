import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
const Index = () => {
  return (
    <div>
      <div className="w-[100%] h-[90vh] flex justify-evenly items-center">
        <div className="h-[50%] flex flex-col justify-around ">
          <h1 className="text-5xl font-bold">
            Learn In-Demand Skills <br /> on Your Schedule
          </h1>
          <p>
            Meet top industry professionals and learn the skills you need to get
            ahead in your career <br /> with iMeet.
          </p>
          <div>
            <button className="w-[150px] h-[40px] text-white bg-[#6B59ED] rounded-tr-xl rounded-tl-xl rounded-bl-xl mr-8">
              Trending Course
            </button>
            <button className="w-[100px] h-[40px] text-[#6B59ED] border-2 border-[#6B59ED] rounded-tr-xl rounded-tl-xl rounded-bl-xl">
              Talk to us
            </button>
          </div>
          <div className=" flex text-xl gap-2 text-[#F0AD4E]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-sm text-black font-semibold">
              Rated 4.9/5 from over 600 reviews.
            </p>
          </div>
        </div>
        <div>
          <Image src={"/images/image1.png"} width={400} height={0} />
        </div>
      </div>
      {/* Our Past and Present College & Club Partners */}
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div>
          <h1 className="text-2xl font-semibold">
            Our Past and Present College & Club Partners
          </h1>
        </div>
        <div className="flex items-center">
          <Image src={"/images/image2.png"} width={200} height={50} />
          <Image src={"/images/image3.png"} width={160} height={0} />
          <Image src={"/images/image4.png"} width={150} height={0} />

          <Image src={"/images/image5.png"} width={150} height={0} />
          <Image src={"/images/image6.png"} width={150} height={0} />
        </div>
        <div className="flex items-center">
          <Image src={"/images/image2.png"} width={200} height={50} />
          <Image src={"/images/image3.png"} width={160} height={0} />
          <Image src={"/images/image4.png"} width={150} height={0} />

          <Image src={"/images/image5.png"} width={150} height={0} />
          <Image src={"/images/image6.png"} width={150} height={0} />
        </div>
        <div className="flex items-center">
          <Image src={"/images/image2.png"} width={200} height={50} />
          <Image src={"/images/image3.png"} width={160} height={0} />
          <Image src={"/images/image4.png"} width={150} height={0} />

          <Image src={"/images/image5.png"} width={150} height={0} />
          <Image src={"/images/image6.png"} width={150} height={0} />
        </div>
      </div>
      {/* Trending Course */}
      <div className="w-[100%] h-[100vh] bg-[#FAFAFE]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold">Trending Course</h1>
          <p className="font-semibold">
            Choose from 100+ courses with new additions published every month
          </p>
        </div>
        <div className="flex justify-around  mt-10">
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center bg-[#6B59ED] w-[250px] h-[40px] rounded-tr-lg  rounded-tl-lg rounded-bl-lg text-white gap-2">
              <MdOutlineComputer />
              Computer Science
            </button>
            <button className="flex items-center w-[250px] h-[40px] rounded-tr-lg  rounded-tl-lg rounded-bl-lg border-2 border-[#6B59ED] gap-2 pl-2">
              <FaPowerOff className="text-[#6B59ED]" />
              Electronics & Communication
            </button>
            <button className="flex items-center  w-[250px] h-[40px] rounded-tr-lg  rounded-tl-lg rounded-bl-lg border-2 border-[#6B59ED] gap-2 pl-2">
              <FaPowerOff className="text-[#6B59ED]" />
              Mechanical/Architecture
            </button>
            <button className="flex items-center  w-[250px] h-[40px] rounded-tr-lg  rounded-tl-lg rounded-bl-lg border-2 border-[#6B59ED] gap-2 pl-2">
              <FaPowerOff className="text-[#6B59ED]" />
              Civil/Architecture
            </button>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-10">
              <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                  <Image src={"/images/image7.png"} width={210} height={0} />
                  <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                    Computer Science
                  </button>
                  <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                    Machine Learning with <br /> Python
                  </h1>
                  <p className="text-xs ml-3">
                    <span className="font-semibold">2 Months</span> Course
                  </p>
                  <p className="text-[#F0AD4E] ml-3 font-semibold">
                    Learn More
                  </p>
                </div>
              </div>
              <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                  <Image src={"/images/image7.png"} width={210} height={0} />
                  <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                    Computer Science
                  </button>
                  <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                    Machine Learning with <br /> Python
                  </h1>
                  <p className="text-xs ml-3">
                    <span className="font-semibold">2 Months</span> Course
                  </p>
                  <p className="text-[#F0AD4E] ml-3 font-semibold">
                    Learn More
                  </p>
                </div>
              </div>{" "}
              <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                  <Image src={"/images/image7.png"} width={210} height={0} />
                  <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                    Computer Science
                  </button>
                  <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                    Machine Learning with <br /> Python
                  </h1>
                  <p className="text-xs ml-3">
                    <span className="font-semibold">2 Months</span> Course
                  </p>
                  <p className="text-[#F0AD4E] ml-3 font-semibold">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-10">
                <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                  <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                    <Image src={"/images/image7.png"} width={210} height={0} />
                    <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                      Computer Science
                    </button>
                    <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                      Machine Learning with <br /> Python
                    </h1>
                    <p className="text-xs ml-3">
                      <span className="font-semibold">2 Months</span> Course
                    </p>
                    <p className="text-[#F0AD4E] ml-3 font-semibold">
                      Learn More
                    </p>
                  </div>
                </div>
                <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                  <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                    <Image src={"/images/image7.png"} width={210} height={0} />
                    <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                      Computer Science
                    </button>
                    <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                      Machine Learning with <br /> Python
                    </h1>
                    <p className="text-xs ml-3">
                      <span className="font-semibold">2 Months</span> Course
                    </p>
                    <p className="text-[#F0AD4E] ml-3 font-semibold">
                      Learn More
                    </p>
                  </div>
                </div>
                <div className="w-[230px] h-[250px] border-2 rounded-3xl flex justify-center items-center">
                  <div className="w-[210px] h-[230px] border-2 rounded-3xl">
                    <Image src={"/images/image7.png"} width={210} height={0} />
                    <button className="bg-[#6B59ED] w-[100px] text-xs text-white">
                      Computer Science
                    </button>
                    <h1 className="text-sm text-[#6B59ED] font-semibold ml-3">
                      Machine Learning with <br /> Python
                    </h1>
                    <p className="text-xs ml-3">
                      <span className="font-semibold">2 Months</span> Course
                    </p>
                    <p className="text-[#F0AD4E] ml-3 font-semibold">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-[130px] h-[40px] bg-[#6B59ED] rounded-tr-xl rounded-tl-xl rounded-bl-xl text-white">
              Show More
            </button>
          </div>
        </div>
      </div>
      {/* How to Work */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-3xl font-bold">How it works</h1>
        <Image src={"/images/image8.png"} width={900} height={0} />
      </div>
      {/* Top features Courses */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Top Featured Courses</h1>
          <p className="font-semibold">
            Choose courses taught by real-world experts.
          </p>
        </div>
        {/* top featured corse box */}
        <div className="w-[100%] h-[80vh] flex gap-10 items-center  justify-center">
          <div className="border-2 w-[250px] h-[450px] pl-3 rounded-2xl flex  flex-col justify-center">
            <h1 className="font-bold">Computer Science</h1>
            <h2 className="font-bold text-[#6B59ED]">Data Science</h2>
            <Image src={"/images/image9.png"} width={220} height={0} />
            <div className="w-[200px]">
              <p className="font-semibold mt-4">
                This course will help you learn how to use data and statistical
                models to make predictions, communicate your findings with a
                broad range of audiences.
              </p>
            </div>
            <div className="text-[#6B59ED] mt-5 flex items-center ml-5">
              <a href="#">Read more</a>
              <FaAngleRight />
            </div>
          </div>
          <div className="border-2 w-[250px] h-[450px] pl-3  rounded-2xl flex  flex-col justify-center">
            <h1 className="font-bold">Computer Science</h1>
            <h2 className="font-bold text-[#6B59ED]">Data Science</h2>
            <Image src={"/images/image9.png"} width={220} height={0} />
            <div className="w-[200px]">
              <p className="font-semibold mt-4">
                This course will help you learn how to use data and statistical
                models to make predictions, communicate your findings with a
                broad range of audiences.
              </p>
            </div>
            <div className="text-[#6B59ED] mt-5 flex items-center ml-5">
              <a href="#">Read more</a>
              <FaAngleRight />
            </div>
          </div>
          <div className="border-2 w-[250px] h-[450px] pl-3 rounded-2xl flex  flex-col justify-center ">
            <h1 className="font-bold">Computer Science</h1>
            <h2 className="font-bold text-[#6B59ED]">Data Science</h2>
            <Image src={"/images/image9.png"} width={220} height={0} />
            <div className="w-[200px]">
              <p className="font-semibold mt-4">
                This course will help you learn how to use data and statistical
                models to make predictions, communicate your findings with a
                broad range of audiences.
              </p>
            </div>
            <div className="text-[#6B59ED] mt-5 flex items-center ml-5">
              <a href="#">Read more</a>
              <FaAngleRight />
            </div>
          </div>{" "}
          <div className="border-2 w-[250px] h-[450px] pl-3 rounded-2xl flex  flex-col justify-center ">
            <h1 className="font-bold">Computer Science</h1>
            <h2 className="font-bold text-[#6B59ED]">Data Science</h2>
            <Image src={"/images/image9.png"} width={220} height={0} />
            <div className="w-[200px]">
              <p className="font-semibold mt-4">
                This course will help you learn how to use data and statistical
                models to make predictions, communicate your findings with a
                broad range of audiences.
              </p>
            </div>
            <div className="text-[#6B59ED] mt-5 flex items-center ml-5">
              <a href="#">Read more</a>
              <FaAngleRight />
            </div>
          </div>
        </div>
      </div>
      {/* meet our mentors */}
      <div className="flex flex-col items-center w-[100%] h-[80vh]">
        <div className="flex flex-col items-center justify-center w-[600px]">
          <h1 className="text-4xl font-bold">Meet Our Mentors</h1>
          <p className="font-semibold">
            We are ready to assist, advise, encourage and listen as you begin
            your professional
          </p>
          <p className="font-semibold"> courses at iMeet.</p>
        </div>
        <div className="flex gap-20 mt-10">
          <div className="border w-[250px] h-[330px] flex flex-col items-center justify-center rounded-2xl">
            <Image src={"/images/Ellipse6.png"} width={200} height={0} />
            <h1 className="text-4xl font-semibold text-[#6B59ED]">Krishna</h1>
            <p className="text-sm">Software Developer | Web Designer</p>
            <div className="flex text-2xl gap-3">
              <AiOutlineInstagram />
              <BiLogoLinkedinSquare />
              <BiLogoWhatsapp />
            </div>
          </div>
          <div className="border w-[250px] h-[330px] flex flex-col items-center justify-center rounded-2xl">
            <Image src={"/images/Ellipse6.png"} width={200} height={0} />
            <h1 className="text-4xl font-semibold text-[#6B59ED]">Krishna</h1>
            <p className="text-sm">Software Developer | Web Designer</p>
            <div className="flex text-2xl gap-3">
              <AiOutlineInstagram />
              <BiLogoLinkedinSquare />
              <BiLogoWhatsapp />
            </div>
          </div>
          <div className="border w-[250px] h-[330px] flex flex-col items-center justify-center rounded-2xl">
            <Image src={"/images/Ellipse6.png"} width={200} height={0} />
            <h1 className="text-4xl font-semibold text-[#6B59ED]">Krishna</h1>
            <p className="text-sm">Software Developer | Web Designer</p>
            <div className="flex text-2xl gap-3">
              <AiOutlineInstagram />
              <BiLogoLinkedinSquare />
              <BiLogoWhatsapp />
            </div>
          </div>
        </div>
      </div>
      {/* certification and network */}
      <div className="flex justify-center gap-10 w-[100%] h-[60vh]">
        <div className="flex flex-col gap-7 items-center mt-8">
          <h1 className="text-3xl font-bold text-[#3E3E3E]">
            Official Certification Partners
          </h1>
          <div className="flex gap-10">
            <Image src={"/images/image10.png"} width={130} height={0} />
            <Image src={"/images/image11.png"} width={130} height={0} />
            <Image src={"/images/image12.png"} width={130} height={0} />
          </div>
        </div>
        <div className="border-2 border-black h-[300px]"></div>
        <div className="flex flex-col gap-14 items-center mt-8">
          <h1 className="text-3xl font-bold text-[#3E3E3E]">
            Our Startups and Corporate Network
          </h1>
          <div className="flex gap-10">
            <Image src={"/images/image13.png"} width={130} height={0} />
            <Image src={"/images/image14.png"} width={130} height={0} />
            <Image src={"/images/image15.png"} width={130} height={0} />
          </div>
        </div>
      </div>
      {/* talk to us */}
      <div className="flex w-[100%] h-[205px] my-20 bg-[#6B59ED]">
        <Image
          src={"/images/image19.png"}
          width={500}
          height={0}
          className="ml-[100px]"
        />
        <div className="relative right-[450px] top-0 flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl text-white font-bold">
            Connecting Learning To Life
          </h1>
          <div className="flex gap-5">
            <button className="text-white bg-[#F0AD4E] w-[150px] h-[30px] rounded-tr-xl  rounded-tl-xl  rounded-bl-xl ">
              Trending Course
            </button>
            <button className="border border-[#F0AD4E] text-[#F0AD4E] w-[100px] h-[30px] rounded-tr-xl  rounded-tl-xl  rounded-bl-xl">
              Talk to us
            </button>
          </div>
        </div>
        <div className="relative -right-32 bottom-52">
          <Image src={"/images/image21.png"} width={400} height={0} />
        </div>
      </div>
      {/* doubt section  */}
      <div className="flex flex-col gap-5 my-10 justify-center items-center">
        <h1 className="text-[#3E3E3E] text-3xl font font-bold">
          Still Have a Doubt?
        </h1>
        <p>
          Get in touch with us anytime if you have any questions or concerns.
        </p>
        <div className="flex gap-5">
          <button className="w-[150px] h-[40px] bg-[#6B59ED] rounded-tr-xl rounded-tl-xl rounded-bl-xl text-white">
            Trending Course
          </button>
          <button className="w-[100px] h-[40px] border border-[#6B59ED] rounded-tr-xl rounded-tl-xl rounded-bl-xl">
            Talk to us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
