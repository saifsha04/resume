import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Thunder from "../assets/image.png"; // Replace with your actual image path
import Avatar from "../assets/avatar.png"; // Replace with 3D avatar image path
import Circle from "../assets/circle.png";
import JS from "../assets/js.png"; 
import Logo from "../assets/logo.png"; 
import Sheet from "../assets/cascading.png"; 
import Figma from "../assets/figma.png"; 
import Coma from "../assets/coma.png"; 
import Profile from "../assets/avatar1.png"; 
import Tally from "../assets/TallyPrime.png"; 
import Zoho from "../assets/zoho.png";
import { Link } from "react-router-dom";


export const Home = () => {
  const [avatarVisible, setAvatarVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setAvatarVisible(true), 100); // slight delay for smoothness
  }, []);

  return (
    <>
    <div className="min-h-screen md:font-5 w-full bg-gradient-to-br from-black to-[#3c2108] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10 justify-center items-center">
        {/* Navbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-4">
          {/* Logo at the start */}
          <h1 className="text-white text-2xl font-bold mr-0"><a href="?">saif.</a></h1>
          {/* Nav links and download at the end */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <nav className="flex gap-4 sm:gap-6 text-white outline-2 outline-offset-8 rounded-full z-10">
              <Link to="/" className="hover:text-orange-500">Home</Link>
                <Link to="/skills" className="hover:text-orange-500">Skills</Link>
                <Link to="/experience" className="hover:text-orange-500">Projects</Link>
                <Link to="/contact" className="hover:text-orange-500">Contact</Link>
            </nav>
            <a
              href="/CV.pdf"
              download
              className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition text-sm sm:text-base md:gap-4"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
        {/* TOP Right Side Section */}
        <div className="md:w-1/2 flex">
          <img srcSet={Thunder} alt="3D Avatar" className="hidden blur-xs md:block drop-shadow-lg max-w-50  h-full ml-305 -mt-30" />
          <img srcSet={Thunder} alt="3D Avatar" className="block blur-xs md:hidden drop-shadow-lg max-w-30  h-full ml-60 -mt-50 z-0 " />
          </div>
         {/* Hero Section laptop view*/}
         <div className="hidden md:block flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        <div className="md:w-1/2 text-center md:text-left -mt-40 sm:flex-row justify-between items-center sm:gap-0">
          <p className="text-red-50 text-lg ">Hey, I'm <span className="text-orange-700">Saif</span></p>
          <h1 className="text-2xl md:text-4xl font-bold">A Web Developer & Accountant</h1>
          <p className="text-gray-300 mb-8">I create beautiful and functional web applications.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition sm:flex-row sm:gap-6">
            Hire me
          </button>
        </div>
        </div>

        {/* Hero Section mobile */}
         <div className="block md:hidden flex-col-reverse md:flex-row items-center mt-50 gap-10 md:gap-20">
        <div className="md:w-1/2 text-center md:text-left -mt-40 sm:flex-row justify-between items-center sm:gap-0">
          <p className="text-red-50 text-lg ">Hey, I'm <span className="text-orange-700">Saif</span></p>
          <h1 className="text-2xl md:text-4xl font-bold">A Web Developer & Accountant</h1>
          <p className="text-gray-300 mb-8">I create beautiful and functional web applications.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition sm:flex-row sm:gap-6">
            Hire me
          </button>
        </div>
        </div>

      {/* Line */}
        <div className="hidden md:block w-170  h-0.5 bg-amber-50 my-4 sm:my-8"></div>
        <div className="block md:hidden w-80  h-0.5 bg-amber-50 my-4 sm:my-8"></div>
       {/*Skill Laptop*/}
        <div className="bg-white/80 hidden md:block max-w-100 h-auto outline-2 outline-offset-2 outline-white-500 rounded-2xl backdrop-blur-grascale mt-15 z-11  ">
            <div className="flex  md:flex-row items-start gap-3 md:gap-8">
          <img srcSet={Coma} alt="3D Avatar" className=" w-7 h-7 mt-2 ml-10 sm:w-7" />
           
          <p className="relative text-white text-base sm:text-lg font-semibold mt-10">
            Combining finance expertise with technical know-how to deliver innovative business solutions.
            </p>
            </div>
            
           <img srcSet={Profile} alt="3D" className=" gap-10 mr-200 mt-8 max-w-40 h-30" />  
          <p className="text-black text-lg max-w-auto -mt-6 ml-35">MOHAMMED SAIFULLA BAVA</p>
          </div>

        {/*Skill Mobile*/}
          <div className="bg-white/80 block md:hidden w-70 h-50 outline-2 outline-offset-2 outline-white-500 rounded-2xl backdrop-blur-grascale mt-15 ml-7 ">
            <div className="flex  md:flex-row items-start gap-3 md:gap-8">
          <img srcSet={Coma} alt="3D Avatar" className=" w-5 h-5 mt-2 ml-10 sm:w-7" />
           
          <p className="relative text-white text-xs  font-semibold mt-10">
            Combining finance expertise with technical know-how to deliver innovative business solutions.
            </p>
            </div>
            
           <img srcSet={Profile} alt="3D" className=" gap-10 mr-200 mt-8 max-w-25 h-20" />  
          <p className="text-black text-xs max-w-auto -mt-8 ml-22">MOHAMMED SAIFULLA BAVA</p>
          </div>
        
           {/* Background Circles laptop view */}
          <div className="absolute flex-col -mt-10 hidden md:block">
           <img srcSet={Circle} className="lg:w-145 -mt-130 lg:ml-195  animate-pulse" style={{ top: "-80px", left: "40%" }} />
           <img srcSet={Circle} className="lg:w-124 -mt-124 lg:ml-205 animate-pulse" style={{ top: "-60px", left: "42%" }} /> 
           <img srcSet={Circle} className="max-w-100 -mt-100 lg:ml-217 animate-pulse" style={{ top: "-40px", left: "44%" }} />
           </div>

           {/* Background Circles mobile view */}
          <div className="absolute  block md:hidden">
           <img srcSet={Circle} className="w-100 -mt-30 animate-pulse" style={{ top: "-80px", left: "40%" }} />
           <img srcSet={Circle} className="w-70 ml-7 -mt-69  animate-pulse" style={{ top: "-60px", left: "42%" }} /> 
           
            <img srcSet={Circle} className="w-60 ml-12 -mt-60 animate-pulse" style={{ top: "-40px", left: "44%" }} />
           </div>

            {/* Avatar*/}

        <div className="absolute md:block">
           {/* Laptop view */}
          <img
          srcSet={Avatar}
          alt="3D Avatar"
          className={
            `relative hidden md:block w-100 justify-center -mt-77 lg:ml-220 transition-all duration-700 ease-out
            ${avatarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`
          } />

          {/* Mobile view */}
          <img
          srcSet={Avatar}
          alt="3D Avatar"
          className={
            `relative  block md:hidden w-60 ml-12 mt-15 justify-center transition-all duration-700 ease-out
            ${avatarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`
          } />

          {/* Floating Logos laptop view */}
          <div className="absolute hidden md:block">
          <img srcSet={JS} className=" max-w-10 -mt-50 lg:ml-305 animate-bounce" style={{ top: "-50px", left: "45%" }} />
          <img srcSet={Logo} className=" max-w-10 -mt-10 lg:ml-220 -rotate-45 animate-pulse" style={{ top: "-110px", left: "58%" }} />
          <img srcSet={Sheet} className=" max-w-8 mt-30 lg:ml-305 animate-ping" style={{ top: "-100px", left: "66%" }} />
          <img srcSet={Figma} className=" max-w-8 -mt-30 lg:ml-220 animate-pulse" style={{ top: "-40px", left: "70%" }} />
          <img srcSet={Tally} className=" max-w-12 -mt-13 lg:ml-307 animate-spin" style={{ top: "-67px", left: "60%" }} />
          <img srcSet={Zoho} className="max-w-9 mt-10 lg:ml-222 animate-spin" style={{ top: "-70px", left: "50%" }} />
        </div>
          {/* Floating Logos mobile view */}
          <div className=" absolute block  md:hidden">
          <img srcSet={JS} className=" max-w-8 -mt-40 ml-60  animate-bounce" style={{ top: "-50px", left: "45%" }} />
          <img srcSet={Logo} className=" max-w-6 -mt-10 ml-22 -rotate-45 animate-pulse" style={{ top: "-110px", left: "58%" }} />
          <img srcSet={Sheet} className=" max-w-6 mt-23 ml-63 animate-ping" style={{ top: "-100px", left: "66%" }} />
          <img srcSet={Figma} className=" max-w-4 -mt-25 ml-20 animate-pulse" style={{ top: "-40px", left: "70%" }} />
          <img srcSet={Tally} className=" max-w-8  -mt-5 ml-60  animate-spin" style={{ top: "-67px", left: "60%" }} />
          <img srcSet={Zoho} className="max-w-6 mt-5 ml-15  animate-spin" style={{ top: "-70px", left: "50%" }} />
        </div>

        </div>
        {/*Down left Side logo Laptop*/}
        <div className=" flex-col hidden md:block items-center justify-between -mt-10 overflow-hidden z-0">
          <img src={Thunder} alt="3D Avatar" className="absolute hidden md:block rotate-10 blur-xs max-w-50 min-h-100 -mt-90 -ml-45" />
          </div>



          </div>
          </div>
        </>
  );
};