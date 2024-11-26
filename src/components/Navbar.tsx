import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20 shadow-md border-gray-200 border-[1px] w-full flex justify-between items-center px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            className="w-[40px] lg:w-[50px]"
            src="Myntra-Logo-removebg-preview(1).png"
            alt="Logo"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <img
              className="w-6 h-6"
              src="image.png"
              alt="Menu Icon"
            />
          </button>
        </div>

        {/* Nav Links - Hidden on Mobile, visible on medium and larger screens */}
        <div className="hidden md:flex text-xs font-bold gap-4 lg:gap-10">
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/home&living">HOME & LIVING</Link>
          <Link to="/beauty">BEAUTY</Link>
          <Link to="/studio">STUDIO</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 border-[1px] rounded border-gray-200 mx-4 md:mx-6 w-full max-w-[400px]">
          <img
            className="ml-2 h-5 w-5"
            src="search-521.png"
            alt="Search Icon"
          />
          <input
            className="w-full h-9 ml-2 md:ml-4 outline-none bg-gray-100"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/profile">
            <div className="flex flex-col items-center">
              <img
                className="w-[18px] lg:w-[20px]"
                src="assets/profile.png"
                alt="Profile"
              />
              <h2 className="text-xs font-bold">Profile</h2>
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <img
              className="w-[18px] lg:w-[20px]"
              src="assets/heart.png"
              alt="Wishlist"
            />
            <h2 className="text-xs font-bold">Wishlist</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-[22px] lg:w-[26px]"
              src="assets/bag.png"
              alt="Bag"
            />
            <h2 className="text-xs font-bold mb-1">Bag</h2>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Visible on small screens */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200">
          <div className="flex flex-col items-start gap-4 p-4 text-xs font-bold">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/men" onClick={() => setIsMobileMenuOpen(false)}>
              MEN
            </Link>
            <Link to="/women" onClick={() => setIsMobileMenuOpen(false)}>
              WOMEN
            </Link>
            <Link to="/kids" onClick={() => setIsMobileMenuOpen(false)}>
              KIDS
            </Link>
            <Link to="/home&living" onClick={() => setIsMobileMenuOpen(false)}>
              HOME & LIVING
            </Link>
            <Link to="/beauty" onClick={() => setIsMobileMenuOpen(false)}>
              BEAUTY
            </Link>
            <Link to="/studio" onClick={() => setIsMobileMenuOpen(false)}>
              STUDIO
            </Link>

            {/* Search Bar for Mobile */}
            <div className="flex items-center bg-gray-100 border-[1px] rounded border-gray-200 w-full mt-4">
              <img
                className="ml-2 h-5 w-5"
                src="search-521.png"
                alt="Search Icon"
              />
              <input
                className="w-full h-9 ml-2 outline-none bg-gray-100"
                type="text"
                placeholder="Search for products, brands and more"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
