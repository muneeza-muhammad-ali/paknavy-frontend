import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileInterviewOpen, setMobileInterviewOpen] = useState(false);
  const [mobileMatricOpen, setMobileMatricOpen] = useState(false);
  const [mobileGKOpen, setMobileGKOpen] = useState(false);
  const [faqsOpen, setFaqsOpen] = useState(false); // mobile FAQs dropdown

  return (
    <nav className="bg-[#2851A3] text-white shadow-lg py-3">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 hidden lg:flex items-center justify-between">
        <div className="flex flex-col items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-16 h-16 animate-flip-horizontal" />
          </Link>
          <span className="text-sm font-semibold tracking-wide mt-1">Four Dimensional Force</span>
        </div>

        <ul className="flex gap-10 text-md font-bold text-[#0b204e] bg-white rounded-md pb-4 pt-4 pl-10 pr-13 text-center whitespace-nowrap">
          <li><Link to="/" className="leading-tight">Home</Link></li>
          <li><Link to="/about" className="leading-tight">About<br />Us</Link></li>
          <li><Link to="/civilian/slip" className="leading-tight">Registration<br />Slip</Link></li>
          <li><Link to="/result" className="leading-tight">Result</Link></li>
          <li><Link to="/pnrscs" className="leading-tight">PNR&SCs</Link></li>
          <li><Link to="/gallery" className="leading-tight">Gallery</Link></li>

          {/* Interview Prep */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-[#0b204e] leading-tight focus:outline-none">
              Interview<br />Prep
              <svg className="w-4 h-4 mt-1 transform transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul className="absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-50 text-sm text-[#0b204e]">
              <li className="relative group/submenu">
                <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Matric Based Questions
                  <svg className="w-3 h-3 ml-2 transition-transform group-hover/submenu:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <ul className="absolute left-full top-0 ml-1 w-36 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover/submenu:opacity-100 group-hover/submenu:visible invisible transition duration-300 z-50">
                  <li><Link to="/matric/english" className="block px-4 py-2 hover:bg-gray-100">English</Link></li>
                  <li><Link to="/matric/maths" className="block px-4 py-2 hover:bg-gray-100">Maths</Link></li>
                  <li><Link to="/matric/computer-science" className="block px-4 py-2 hover:bg-gray-100">Computer Science</Link></li>
                  <li><Link to="/matric/urdu" className="block px-4 py-2 hover:bg-gray-100">Urdu</Link></li>
                </ul>
              </li>

              <li className="relative group/submenu2">
                <span className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  General Knowledge
                  <svg className="w-3 h-3 ml-2 transition-transform group-hover/submenu2:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <ul className="absolute left-full top-0 ml-1 w-36 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover/submenu2:opacity-100 group-hover/submenu2:visible invisible transition duration-300 z-50">
                  <li><Link to="/interview/gk-english" className="block px-4 py-2 hover:bg-gray-100">GK English</Link></li>
                  <li><Link to="/interview/gk-urdu" className="block px-4 py-2 hover:bg-gray-100">GK Urdu</Link></li>
                </ul>
              </li>
            </ul>
          </li>

         

          {/* Practice Test */}
         
           <li>
          <a
          href="https://practicetest.joinpaknavy.gov.pk/"
          target="_blank"
           rel="noopener noreferrer"
          className="bg-[#2851A3] text-[#ffffff] font-bold px-4 py-2 rounded hover:bg-yellow-500 block text-center"
           >
          Practice Test
        </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-12 h-12 animate-flip-horizontal" />
          </Link>
           <span className="text-sm font-semibold tracking-wide mt-1">Four Dimensional Force</span>
        
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <ul className="flex flex-col bg-white text-[#001f5b] font-semibold mt-2 rounded-md px-4 py-3 space-y-2 shadow">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/civilian/slip" onClick={() => setMenuOpen(false)}>Registration Slip</Link></li>
            <li><Link to="/result" onClick={() => setMenuOpen(false)}>Result</Link></li>
            <li><Link to="/pnrscs" onClick={() => setMenuOpen(false)}>PNR&SCs</Link></li>
            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>

            <li>
              <button onClick={() => setMobileInterviewOpen(!mobileInterviewOpen)} className="w-full text-left flex justify-between items-center">
                Interview Prep <span>{mobileInterviewOpen ? '▲' : '▼'}</span>
              </button>
              {mobileInterviewOpen && (
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  <li>
                    <button onClick={() => setMobileMatricOpen(!mobileMatricOpen)} className="w-full text-left flex justify-between items-center">
                      Matric Based Questions <span>{mobileMatricOpen ? '▲' : '▼'}</span>
                    </button>
                    {mobileMatricOpen && (
                      <ul className="pl-4 mt-1 space-y-1">
                        <li><Link to="/matric/english" onClick={() => setMenuOpen(false)}>English</Link></li>                     
                        <li><Link to="/matric/maths" onClick={() => setMenuOpen(false)}>Maths</Link></li>
                        <li><Link to="/matric/computer-science" onClick={() => setMenuOpen(false)}>Computer Science</Link></li>
                        <li><Link to="/matric/urdu" onClick={() => setMenuOpen(false)}>Urdu</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button onClick={() => setMobileGKOpen(!mobileGKOpen)} className="w-full text-left flex justify-between items-center">
                      General Knowledge <span>{mobileGKOpen ? '▲' : '▼'}</span>
                    </button>
                    {mobileGKOpen && (
                      <ul className="pl-4 mt-1 space-y-1 text-sm">
                        <li><Link to="/interview/gk-english" onClick={() => setMenuOpen(false)}>GK English</Link></li>
                        <li><Link to="/interview/gk-urdu" onClick={() => setMenuOpen(false)}>GK Urdu</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

          

           <li>
          <a
          href="https://practicetest.joinpaknavy.gov.pk/"
          target="_blank"
           rel="noopener noreferrer"
          className="bg-[#2851A3] text-[#ffffff] font-bold px-4 py-2 rounded hover:bg-yellow-500 block text-center"
           >
          Practice Test
        </a>
          </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
