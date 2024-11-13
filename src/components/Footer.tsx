import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer className="  p-10 mx-10 flex justify-center flex-col items-center">
      <div className="grid grid-cols-4 mx-16 w-full text-black">
        {/* Online Shopping */}
        <div>
          <h3 className="font-bold text-xs mb-4">ONLINE SHOPPING</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gray-500">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Home & Living
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Beauty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Myntra Insider
              </a>
            </li>
          </ul>
          <h3 className="font-bold text-xs mt-5 mb-4">ONLINE SHOPPING</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gray-500">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Home & Living
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Beauty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Myntra Insider
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h3 className="font-bold text-xs mb-4">CUSTOMER POLICIES</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#" className="hover:text-gray-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                T&C
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Track Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Grievance Officer
              </a>
            </li>
          </ul>
        </div>

        {/* Experience Myntra App on Mobile */}
        <div>
          <h3 className="font-bold text-xs mb-4">
            EXPERIENCE MYNTRA APP ON MOBILE
          </h3>
          <div className="flex space-x-4 mb-4">
            <img
              src="src/components/kisspng-iphone-google-play-app-store-apple-mobile-png-5acba0c95b4538.6032857715232944093739.png"
              alt="Google Play"
              className="w-32"
            />
          </div>
          <h3 className="font-bold text-xs mb-4">KEEP IN TOUCH</h3>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagramSquare />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Return and Guarantee */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row w-full gap-4 ">
            <div>
              <img
                className=" w-full "
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              ></img>
            </div>
            <div>
              <span className="font-bold text-sm ">100% ORIGINAL </span>
              <span>guarantee for all products at myntra.com</span>
            </div>
          </div>
          <div className="flex flex-row  gap-4">
            <div>
              <img
                className=" w-16"
                src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
              ></img>
            </div>
            <div>
              <span className="font-bold text-sm">Return within 14 days </span>
              <span>of receiving your order</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 flex flex-row justify-left gap-1 items-center">
          <h3 className="font-bold text-xs "> POPULAR SEARCHES </h3>
          <div className="h-0.5 bg-gray-300 w-10/12 "></div>
        </div>
        <p className="text-xs text-gray-400">
          Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
          Babydolls | Blazers For Men | Handbags | Ladies | Watches | Bags
          |Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops |
          Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan
          Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21
          | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion
          | Show Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes |
          Goggles | Bras | Suit | Chinos | Shoes Adidas | Shoes Woodland | Shoes
          | Jewellery | Designers Sarees
        </p>
      </div>
      <div className="flex flex-row justify-center items-center my-10 text-gray-400">
        <span>
          In case of any,
          <span className="mx-2 text-blue-700 text-bold">concern</span>
        </span>{" "}
        <span className="mx-48 ">
          {" "}
          Contact Us © 2024 www.myntra.com. All rights reserved.
        </span>{" "}
        <span> A Flipkart company</span>
      </div>
      <div className="flex flex-row justify-between w-full items-center ">
        <div className="flex text-left flex-col ">
          <h3 className="font-bold text-sm">Registered Office Address </h3>
          <div className="w-40">
            <span className="text-left text-gray-400 text-sm ">
              Buildings Alyssa, Begonia and Clover situated in Embassy Tech
              Village, Outer Ring Road, Devarabeesanahalli Village, Varthur
              Hobli, Bengaluru – 560103, India
            </span>
          </div>
        </div>
        <div className="w-40 text-sm text-gray-400">
          CIN: U72300KA2007PTC041799 Telephone: +91-80-61561999
        </div>
      </div>

      <div className="text-bold">
        <ul className="text-sm text-bold my-5">
          BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
          <li className="my-2 text-gray-400">
            Be it clothing, footwear or accessories, Myntra offers you the ideal
            combination of fashion and functionality for men, women and kids.
            You will realise that the sky is the limit when it comes to the
            types of outfits that you can purchase for different occasions.
          </li>
        </ul>
        <ol className="list-decimal mx-10">
          <li>
            <span className="font-semibold"> Smart men’s clothing </span>-{" "}
            <span className="text-gray-400 text-sm">
              At Myntra you will find myriad options in smart formal shirts and
              trousers, cool T-shirts and jeans, or kurta and pyjama
              combinations for men. Wear your attitude with printed T-shirts.
              Create the back-to-campus vibe with varsity T-shirts and
              distressed jeans. Be it gingham, buffalo, or window-pane style,
              checked shirts are unbeatably smart. Team them up with chinos,
              cuffed jeans or cropped trousers for a smart casual look. Opt for
              a stylish layered look with biker jackets. Head out in cloudy
              weather with courage in water-resistant jackets. Browse through
              our innerwear section to find supportive garments which would keep
              you confident in any outfit.
            </span>
          </li>
          <li>
            <span className="font-semibold"> Trendy women’s clothing</span> -
            <span className="text-gray-400 text-sm">
              {" "}
              Online shopping for women at Myntra is a mood-elevating
              experience. Look hip and stay comfortable with chinos and printed
              shorts this summer. Look hot on your date dressed in a little
              black dress, or opt for red dresses for a sassy vibe. Striped
              dresses and T-shirts represent the classic spirit of nautical
              fashion. Choose your favourites from among Bardot, off-shoulder,
              shirt-style, blouson, embroidered and peplum tops, to name a few.
              Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and
              jeans make the perfect fusion-wear combination for the cool
              urbanite. Our grand sarees and lehenga-choli selections are
              perfect to make an impression at big social events such as
              weddings. Our salwar-kameez sets, kurtas and Patiala suits make
              comfortable options for regular wear.
            </span>
          </li>
          <li>
            <span className="font-semibold"> Fashionable footwear</span> -
            <span className="text-gray-400 text-sm">
              While clothes maketh the man, the type of footwear you wear
              reflects your personality. We bring you an exhaustive lineup of
              options in casual shoes for men, such as sneakers and loafers.
              Make a power statement at work dressed in brogues and oxfords.
              Practice for your marathon with running shoes for men and women.
              Choose shoes for individual games such as tennis, football,
              basketball, and the like. Or step into the casual style and
              comfort offered by sandals, sliders, and flip-flops. Explore our
              lineup of fashionable footwear for ladies, including pumps, heeled
              boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort
              and style with embellished and metallic flats.
            </span>
          </li>
          <li>
            <span className="font-semibold">Stylish accessories</span> -{" "}
            <span className="text-gray-400 text-sm">
              {" "}
              Myntra is one of the best online shopping sites for classy
              accessories that perfectly complement your outfits. You can select
              smart analogue or digital watches and match them up with belts and
              ties. Pick up spacious bags, backpacks, and wallets to store your
              essentials in style. Whether you prefer minimal jewellery or grand
              and sparkling pieces, our online jewellery collection offers you
              many impressive options.
            </span>
          </li>
          <li>
            <span className="font-semibold">Fun and frolic </span>-{" "}
            <span className="text-gray-400 text-sm">
              {" "}
              Online shopping for kids at Myntra is a complete joy. Your little
              princess is going to love the wide variety of pretty dresses,
              ballerina shoes, headbands and clips. Delight your son by picking
              up sports shoes, superhero T-shirts, football jerseys and much
              more from our online store. Check out our lineup of toys with
              which you can create memories to cherish.
            </span>
          </li>
          <li>
            <span className="font-semibold"> Beauty begins here </span>-{" "}
            <span className="text-gray-400 text-sm">
              You can also refresh, rejuvenate and reveal beautiful skin with
              personal care, beauty and grooming products from Myntra. Our
              soaps, shower gels, skin care creams, lotions and other ayurvedic
              products are specially formulated to reduce the effect of aging
              and offer the ideal cleansing experience. Keep your scalp clean
              and your hair uber-stylish with shampoos and hair care products.
              Choose makeup to enhance your natural beauty.
            </span>
          </li>
        </ol>
        <ul className="text-sm my-6  text-gray-400">
          Myntra is one of the best online shopping sites in India which could
          help transform your living spaces completely. Add colour and
          personality to your bedrooms with bed linen and curtains. Use smart
          tableware to impress your guest. Wall decor, clocks, photo frames and
          artificial plants are sure to breathe life into any corner of your
          home.
        </ul>
      </div>
      <div className="flex flex-col  items-left">
        <h3 className="text-bold text-sm">MYNTRA APP</h3>
        <span className="text-sm text-gray-400 mb-10">
          Myntra, India’s no. 1 online fashion destination justifies its fashion
          relevance by bringing something new and chic to the table on the
          daily. Fashion trends seem to change at lightning speed, yet the
          Myntra shopping app has managed to keep up without any hiccups. In
          addition, Myntra has vowed to serve customers to the best of its
          ability by introducing its first-ever loyalty program, The Myntra
          Insider. Gain access to priority delivery, early sales, lucrative
          deals and other special perks on all your shopping with the Myntra
          app. Download the Myntra app on your Android or IOS device today and
          experience shopping like never before!
        </span>
        <h3 className="text-bold text-sm ">HISTORY OF MYNTRA</h3>
        <span className="text-sm text-gray-400 mb-10">
          Becoming India’s no. 1 fashion destination is not an easy feat.
          Sincere efforts, digital enhancements and a team of dedicated
          personnel with an equally loyal customer base have made Myntra the
          online platform that it is today. The original B2B venture for
          personalized gifts was conceived in 2007 but transitioned into a
          full-fledged ecommerce giant within a span of just a few years. By
          2012, Myntra had introduced 350 Indian and international brands to its
          platform, and this has only grown in number each passing year. Today
          Myntra sits on top of the online fashion game with an astounding
          social media following, a loyalty program dedicated to its customers,
          and tempting, hard-to-say-no-to deals. The Myntra shopping app came
          into existence in the year 2015 to further encourage customers’
          shopping sprees. Download the app on your Android or IOS device this
          very minute to experience fashion like never before
        </span>
        <h3 className="text-bold text-sm">
          SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
        </h3>
        <span className="text-sm text-gray-400">
          Another reason why Myntra is the best of all online stores is the
          complete convenience that it offers. You can view your favourite
          brands with price options for different products in one place. A
          user-friendly interface will guide you through your selection process.
          Comprehensive size charts, product information and high-resolution
          images help you make the best buying decisions. You also have the
          freedom to choose your payment options, be it card or
          cash-on-delivery. The 14-day returns policy gives you more power as a
          buyer. Additionally, the try-and-buy option for select products takes
          customer-friendliness to the next level. Enjoy the hassle-free
          experience as you shop comfortably from your home or your workplace.
          You can also shop for your friends, family and loved-ones and avail
          our gift services for special occasions.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
