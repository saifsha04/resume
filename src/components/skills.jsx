import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiRedux,
  SiTypescript, SiNextdotjs, SiMaterialdesign, SiStripe,
  SiNodedotjs, SiMongodb, SiExpress
} from "react-icons/si";

export const Skills = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-[#3c2108] text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Navbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/">saif.</Link>
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <nav className="flex gap-4 text-white rounded-full">
              <Link to="/" className="hover:text-orange-500">Home</Link>
              <Link to="/skills" className="hover:text-orange-500">Skills</Link>
              <Link to="/experience" className="hover:text-orange-500">Projects</Link>
              <Link to="/contact" className="hover:text-orange-500">Contact</Link>
            </nav>
            <a
              href="/CV.pdf"
              download
              className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition text-sm"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 text-center">
          <div className="mb-6">
            <span className="bg-[#2d2d2d] px-4 py-1 rounded-full text-sm font-semibold text-gray-300">
              Think better with Next.js 14
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Making apps with modern technologies.</h2>
          <p className="text-gray-300 italic mb-10">Never miss a task, deadline or idea.</p>
          
          {/* Tech Stack Icons - Two Rows */}
          <div className="flex flex-col items-center gap-8">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-center gap-10">
              <SiHtml5 className="text-orange-500 text-5xl" />
              <SiCss3 className="text-blue-500 text-5xl" />
              <SiJavascript className="text-yellow-400 text-5xl" />
              <SiTailwindcss className="text-sky-400 text-5xl" />
              <SiReact className="text-sky-400 text-5xl" />
              <SiRedux className="text-purple-500 text-5xl" />
              <SiTypescript className="text-blue-400 text-5xl" />
              <SiNextdotjs className="text-white text-5xl" />
              <SiMaterialdesign className="text-pink-500 text-5xl" />
              <SiStripe className="text-indigo-400 text-5xl" />
              <SiNodedotjs className="text-green-400 text-5xl" />
              <SiMongodb className="text-green-500 text-5xl" />
            </div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              <SiMongodb className="text-green-500 text-5xl" />
              <SiExpress className="text-white text-5xl" />
              <SiReact className="text-sky-400 text-5xl" />
              <SiNodedotjs className="text-green-400 text-5xl" />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
