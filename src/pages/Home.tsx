import { Catogiries } from "../components/Catogiries";
import Footer from "../components/Footer";
// import Login from "./components/Login";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const App = () => {
  const items = [
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
      imageUrl: "assets/images1.jpg",
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
  ];

  const catogiries = [
    {
      id: "category001",
      name: "Shoes",
      imgUrl: "/img 2.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "category002",
      name: "Watch",
      imgUrl: "/Untitled.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "category003",
      name: "Jeans",
      imgUrl: "/sddad.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "category004",
      name: "Kurta",
      imgUrl: "/81NdPfqLRmL._AC_UY1100_.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "category005",
      name: "Purse",
      imgUrl: "/images.jpg",
      discount: "Up to 30% OFF",
    },
    {
      id: "category006",
      name: "Sandals",
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
      <div className="flex justify-center items-center flex-col text-center px-4">
        <h1 className="text-yellow-500 text-3xl md:text-4xl lg:text-5xl font-bold my-7">
          Coupons Corner
        </h1>
        <img
          className="w-full md:w-[800px] lg:w-[1100px]"
          src="assets/Asset 1300.png"
          alt="Coupons Corner"
        />
      </div>
      <div className="px-4">
        <h3 className="text-2xl md:text-3xl font-bold uppercase py-8 ">
          Medal Worthy Brands To Bag
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 bg-slate-400 justify-center items-center p-4 ">
        {items.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            brand={item.brand}
            category={item.category}
            discount={item.discount}
            imgUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="px-4">
        <h3 className="text-2xl md:text-3xl font-bold uppercase py-8">
          Grand Global Brands
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 bg-slate-400 justify-center items-center p-4">
        {clothItems.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            brand={item.brand}
            category={item.category}
            discount={item.discount}
            imgUrl={item.imageUrl}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono text-pink-600 mb-4">
          Shop By Categories
        </h1>
        <div className="h-1 w-1/2 mx-auto bg-yellow-400 mb-6"></div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center p-4">
        {catogiries.map((category) => (
          <Catogiries
            key={category.id}
            name={category.name}
            imgUrl={category.imgUrl}
            discount={category.discount}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <img
          className="w-full md:w-[800px] lg:w-[1100px]"
          src="assets/EORS_JUN_2020.png"
          alt="Promotion"
        />
      </div>
      <Footer />
    </>
  );
};

export default App;
