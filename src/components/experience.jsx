import React from "react";
import { Home } from "./Home";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import img1 from "../assets/gallery-5.webp";
import img2 from "../assets/gallery-6.png";
import img3 from "../assets/gallery-7.png";
import img4 from "../assets/gallery-8.png";
import img5 from "../assets/gallery-9.png";


const images = [
  img1,img2,
  img3,
  img4,
  img5,
];

const links = [
  "https://saifsha04.github.io/saif-award/",
  "https://saifsha04.github.io/saif-avatar/",
  "https://11-xi-three.vercel.app/",
  "https://primeagro-seven.vercel.app/",
  "https://saifsha04.github.io/saif-slider3d/"
];

export const Experience = () => {
  return (
    <>
      <div className="min-h-screen md:font-5 w-full bg-gradient-to-br from-black to-[#3c2108] text-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-10 justify-center items-center">
          {/* Navbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 sm:gap-4">
            {/* Logo */}
            <h1 className="text-white text-2xl font-bold mr-0">
              <Link to="/">saif.</Link>
            </h1>
            {/* Nav links + download */}
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

          {/* Skills Section Lappy */}
<div className="hidden md:block">
  <div className="h-140 flex flex-col items-center justify-center rounded-2xl bg-white/5">
    <h2 className="text-2xl font-bold">Projects</h2>
    <h1 className="text-2xl font-bold ">Click for see projects</h1>
    <div className="flex w-[90%] max-w-6xl h-[300px] overflow-hidden rounded-xl mt-30">
      {images.map((src, i) => (
        <a
          key={i}
          href={links[i]} // array of project links
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 transition-all duration-500 ease-in-out hover:flex-[5] cursor-pointer"
        >
          <img
            src={src}
            alt={`Gallery ${i}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </a>
      ))}
    </div>
  </div>
</div>

{/* Skills Section Mobile */}

<div className="block md:hidden">
  <div className="min-h-screen h-36 flex flex-col items-center justify-center rounded-2xl bg-white/80">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>

    <div className="flex w-[90%] max-w-6xl h-[300px] overflow-hidden rounded-xl">
      {images.map((src, i) => (
        <a
          key={i}
          href={links[i]} // array of project links
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 transition-all duration-500 ease-in-out hover:flex-[5] cursor-pointer"
        >
          <img
            src={src}
            alt={`Gallery ${i}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </a>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
};
