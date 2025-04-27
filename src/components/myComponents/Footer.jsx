const Footer = () => {
  return (
    <div className="w-full !bg-red-700   p-12 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section - Brand Info */}
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold">
            Socializer.<span className="text-blue-500">ai</span>
          </h1>
          <p className="mt-4 text-sm leading-6">
            Our mission is to empower every video creator <br /> with the
            insights and inspiration they need to grow.
          </p>
          <p className="mt-6 text-xs">
            &copy; 2024 Socializer.ai. All Rights Reserved.
          </p>
        </div>

        {/* Right Sections - Links */}
        <div className="md:w-2/3 flex flex-col md:flex-row gap-8 justify-between">
          <div>
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

          <div>
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

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <h2 className="text-lg">Connect with us</h2>
        <p className="mt-2">Call Sales 888-998-SOCIALIZER.AI (8434)</p>
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
        <div className="mt-6 text-sm  ">
          English Français Español Русский Português Türkçe Tiếng Việt
        </div>
      </div>
    </div>
  );
};

export default Footer;
