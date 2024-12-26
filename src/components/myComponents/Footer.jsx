import React from "react";

const Footer = () => {
  return (
    <div className="w-full p-12 bg-[#0D111B] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-wrap  justify-between gap-8">
        
        <div className="flex  items-center justify-center">
          <div className="w-full md:w-1/4">
            <ul className="mt-4 flex flex-col gap-2">
              
          <h1 className="text-3xl font-bold">
            vid<span className="text-blue-500">IQ</span>
          </h1>
              <li>
                <a href="#">
          <p className="mt-4 w-[60%] text-sm leading-6">
            Our mission is to empower every video creator with the insights and
            inspiration they need to grow. 
          </p>
          <p className="mt-6 text-xs">
            &copy; 2024 vidIQ. All Rights Reserved.
          </p>Testimonials</a>
              </li>
            
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="font-semibold text-lg">Product</h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">YouTube Stats</a>
              </li>
              <li>
                <a href="#">Brand Solutions</a>
              </li>
              <li>
                <a href="#">Agency Solutions</a>
              </li>
              <li>
                <a href="#">MCN Solutions</a>
              </li>
              <li>
                <a href="#">Browser Extension</a>
              </li>
              <li>
                <a href="#">vidIQ Academy</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="font-semibold text-lg">Other</h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">How To Get More YouTube Views</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-lg">Connect with us</h2>
        <p className="mt-2">Call Sales 888-998-VIDIQ (8434)</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="mt-6 text-sm">
          English Français Español Русский Português Türkçe Tiếng Việt
        </div>
      </div>
    </div>
  );
};

export default Footer;
