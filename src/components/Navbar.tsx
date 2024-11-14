import profile from "../assets/profile.png";
import heart from "../assets/heart.png";
import bag from "../assets/bag.png";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        {/* Nav Links */}
        <div className="hidden md:flex text-xs font-bold gap-4 lg:gap-10">
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/home&living">HOME & LIVING</Link>
          <Link to="/beauty">BEAUTY</Link>
          <Link to="/studio">STUDIO</Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 border-[1px] rounded border-gray-200 mx-4 md:mx-6 w-full max-w-[400px]">
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
          <div className="flex flex-col items-center">
            <img className="w-[18px] lg:w-[20px]" src={profile} alt="Profile" />
            <Link to="/profile">
              <Link to = "/profile" className="text-xs font-bold">Profile</Link>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[18px] lg:w-[20px]" src={heart} alt="Wishlist" />
            <h2 className="text-xs font-bold">Wishlist</h2>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-[22px] lg:w-[26px]" src={bag} alt="Bag" />
            <h2 className="text-xs font-bold">Bag</h2>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full mt-4">
        <img
          className="w-full object-cover"
          src="src/assets/Artboard 1.png"
          alt="Banner"
        />
      </div>
    </>
  );
};

export default Navbar;
