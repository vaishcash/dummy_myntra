import { Link } from "react-router-dom";

import profile from "../assets/profile.png";
import heart from "../assets/heart.png";
import bag from "../assets/bag.png";

import Footer from "../components/Footer";

function Men() {
  return (
    <div>
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
            <h2 className="text-xs font-bold">Profile</h2>
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
      {/* banner section  */}
      <div>
        <img
          className="w-full mt-5"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
        ></img>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          NICE TO SEE YOU, COME ON IN!
        </h3>

        <div className="flex flex-row flex-wrap w-full ">
          <div className="max-w-md">
            <img src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"></img>
          </div>
          <div className="max-w-md">
            <img src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"></img>
          </div>
          <div className="max-w-md">
            <img src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"></img>
          </div>

          <div className="max-w-md">
            <img src="https://assets.myntassets.com/w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"></img>
          </div>
        </div>
        <div>
          <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg"></img>
        </div>
        <div className="bg-[#EFEDED] flex flex-row justify-center gap-6">
          <div className="max-w-xs hover:max-w-sm duration-500 ease-in-out ">
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg"></img>
          </div>
          <div className="max-w-xs hover:max-w-sm duration-500 ease-in-out ">
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg"></img>
          </div>
          <div className="max-w-xs hover:max-w-sm duration-500 ease-in-out">
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg"></img>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Trending In Accessories
        </h3>
      </div>
      <Footer />
    </div>
  );
}

export default Men;
