



import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Men() {
  return (
    <div>
  <Navbar/>
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
