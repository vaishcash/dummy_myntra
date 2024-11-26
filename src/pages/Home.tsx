import { Catogiries } from "../components/Catogiries";
import Footer from "../components/Footer";
// import Login from "./components/Login";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const App = () => {
  const items = [
    {
      id: "product001",
      name: "Aldo Sneakers",
      brand: "ALDO",
      category: "International Picks",
      discount: "Min. 50% OFF",
      imageUrl: "img-5.jpg",
      tags: ["Footwear", "Sneakers", "Men's Fashion"],
    },
    {
      id: "product002",
      name: "Nike Running Shoes",
      brand: "Nike",
      category: "Sportswear",
      discount: "30% OFF",
      imageUrl: "/img 1.jpg",
      tags: ["Footwear", "Running Shoes", "Men's Fashion"],
    },
    {
      id: "product003",
      name: "Adidas Originals",
      brand: "Adidas",
      category: "Casual Wear",
      discount: "20% OFF",
      imageUrl: "/img 2.jpg",
      tags: ["Footwear", "Casual", "Unisex"],
    },
    {
      id: "product004",
      name: "Puma Sports Shoes",
      brand: "Puma",
      category: "Athletic Wear",
      discount: "25% OFF",
      imageUrl: "/img 3.jpg",
      tags: ["Footwear", "Sports", "Men's Fashion"],
    },
    {
      id: "product005",
      name: "Reebok Training Shoes",
      brand: "Reebok",
      category: "Training Gear",
      discount: "40% OFF",
      imageUrl: "/img 4.jpg",
      tags: ["Footwear", "Training", "Women's Fashion"],
    },
    {
      id: "product005",
      name: "Reebok Training Shoes",
      brand: "Reebok",
      category: "Training Gear",
      discount: "40% OFF",
      imageUrl: "img-5.jpg",
      tags: ["Footwear", "Training", "Women's Fashion"],
    },
  ];

  const clothItems = [
    {
      id: "product005",
      name: "Dress",
      brand: "Uniqlo",
      category: "Unisex",
      discount: "15% OFF",
      imageUrl: "/woman-4290853_1280.jpg",
      tags: ["Sweater", "Winter Wear", "Unisex"],
    },
    {
      id: "product001",
      name: "Cotton Summer Dress",
      brand: "Zara",
      category: "Women's Fashion",
      discount: "Up to 50% OFF",
      imageUrl: "src/assets/images1.jpg",
      tags: ["Dress", "Casual", "Summer", "Women's Clothing"],
    },
    {
      id: "product002",
      name: "Slim Fit Jeans",
      brand: "Levi's",
      category: "Men's Fashion",
      discount: "25% OFF",
      imageUrl:
        "https://img.freepik.com/premium-photo/beauty-fashion-portrait-young-beautiful-brunette-girl-with-long-black-hair-wearing-sunglasses_333900-18339.jpg?w=360",
      tags: ["Jeans", "Denim", "Men's Clothing"],
    },
    {
      id: "product003",
      name: "Classic Polo T-Shirt",
      brand: "Ralph Lauren",
      category: "Men's Fashion",
      discount: "20% OFF",
      imageUrl: "/f70af4b48c203d66917a0a256e11cc06.jpg",
      tags: ["T-Shirt", "Polo", "Men's Casual Wear"],
    },
    {
      id: "product003",
      name: "Classic Polo T-Shirt",
      brand: "Ralph Lauren",
      category: "Men's Fashion",
      discount: "20% OFF",
      imageUrl:
        "https://img.freepik.com/free-photo/fashion-outdoor-portrait-sensual-beautiful-brunette-woman-with-amazing-long-hairs-any-bright-make-up-posing-near-exotic-plants-summer-day-wearing-luxury-silk-bright-dress-necklace_291049-1666.jpg?t=st=1731309550~exp=1731313150~hmac=658349fa422d4eb81776265d0942459df690f56f3281601e6b570db137c97caa&w=360",
      tags: ["T-Shirt", "Polo", "Men's Casual Wear"],
    },
    {
      id: "product006",
      name: "Skirt Set",
      brand: "corela",
      category: "Men's Fashion",
      discount: "Up to 40% OFF",
      imageUrl: "/woman-6482214_1280.jpg",
      tags: ["Shirt", "Flannel", "Casual", "Men's Clothing"],
    },
  ];

  const catogiries = [
    {
      id: "product001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "product001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "product001",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },

    {
      id: "product001",
      name: "Sandles",
      imgUrl: "/Untitledhh.jpg",
      discount: "Up to 30% OFF",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Banner Image */}
      <div className="w-full mt-4">
        <img
          className="w-full object-cover"
          src="assets/Artboard 1.png"
          alt="Banner"
        />
      </div>
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-yellow-500 text-4xl font-bold my-7 ">
          Coupons Corner
        </h1>
        <img className="w-[1100px] " src="assets/Asset 1300.png"></img>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Medal Worthy Brands To Bag
        </h3>
      </div>
      {/* <Login /> */}
      <div className="flex flex-wrap m-0 p-0   w-full bg-slate-400 justify-center items-center">
        {items.map((items) => {
          return (
            <Card
              key={items.id}
              name={items.name}
              brand={items.brand}
              category={items.category}
              discount={items.discount}
              imgUrl={items.imageUrl}
            />
          );
        })}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-left text-transform : uppercase  p-12 ">
          Grand Global Brands
        </h3>
      </div>
      <div className="flex flex-wrap m-0 p-0   w-full bg-slate-400 justify-center items-center">
        {clothItems.map((items) => {
          return (
            <Card
              key={items.id}
              name={items.name}
              brand={items.brand}
              category={items.category}
              discount={items.discount}
              imgUrl={items.imageUrl}
            />
          );
        })}
      </div>
      <h1 className="text-5xl text-center mb-2 mt-12 font-mono  text-pink-600">
        Shop By Categories
      </h1>
      <div className="h-1 w-full bg-yellow-400 mb-6"></div>
      <div className="flex flex-wrap  p-0 m-0 w-full  justify-center items-center">
        {catogiries.map((items) => {
          return (
            <Catogiries
              key={items.id}
              name={items.name}
              imgUrl={items.imgUrl}
              discount={items.discount}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <img className="w-[1100px]" src="assets/EORS_JUN_2020.png"></img>
      </div>
      <Footer />
    </>
  );
};

export default App;
