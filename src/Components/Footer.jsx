import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import galleryThumb from "../assets/gallary_thumb.webp";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10  min-h-[200px] bg-gradient-to-br from-[#1e3a8a] via-[#2b6594] to-[#66bfbf] text-white relative z-10 mb-0">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-10 pointer-events-none rounded-t-xl"></div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Logo + Description */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="Pakistan Navy"
            className="h-14 drop-shadow-sm animate-flip-horizontal"
          />
          <h3 className="text-xl font-bold tracking-wide">
            Four Dimensional Force
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed tracking-wide italic">
            <span className="font-medium text-white">Pakistan Navy</span>{" "}
            stands as the guardian of our seas, integrating{" "}
            <span className="font-semibold text-[#7fd1d1] ">strength</span>,{" "}
            <span className="font-semibold text-[#7fd1d1]">technology</span>,
            and{" "}
            <span className="font-semibold text-[#7fd1d1]">dedication</span>.
          </p>
        </div>

        {/* Links + Social */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-white/20">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "PN Recruitment", path: "/pnrscs" },
                { name: "Join Pak Army", path: "https://joinpakarmy.gov.pk/" },
                { name: "IPAS", path: "/civilian/ipas" },
                { name: "ISSB", path: "/https://issb.gov.pk/" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="font-semibold hover:text-white focus:text-white hover:underline focus:underline transition duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/people/Pakistan-Navy-Recruitment-Online/100094860495293/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white text-[#2046a1] p-2 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://x.com/pnrectt?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="bg-white text-[#2046a1] p-2 rounded-full shadow hover:bg-gray-100 hover:scale-105 transition"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="text-lg font-semibold mb-3 pb-1 border-b border-white/20">
            Gallery Spotlight
          </h4>
          <Link
            to="/gallery"
            className="block w-72 overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={galleryThumb}
              alt="Gallery Thumbnail"
              className="object-cover w-72 h-auto"
            />
          </Link>
        </div>
      </div>
{/* Bottom Bar */}
<div className=" text-sm text-center pb-2 pt-5 text-black  bg-blue-50">
  © 2025{" "}
  <a
    href="https://www.paknavy.gov.pk/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-[#074880] hover:text-[#007bff] transition-all underline-offset-2 hover:underline"
  >
    Pakistan Navy
  </a>{" "}
  — All rights reserved.
</div>

    </footer>
  );
};

export default Footer;
