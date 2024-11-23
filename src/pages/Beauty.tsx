

// import Navbar from '../Navbar'





import Footer from "../components/Footer";
import BeautyItemCard from "../components/BeautyItemCard";
import Navbar from "../components/Navbar";
const beautyItems = [
  {
    category: "Lipstic",
    imgUrl:
      "https://img.freepik.com/free-photo/pomade_144627-15110.jpg?t=st=1732381471~exp=1732385071~hmac=5c8b865d3fe788ca09e1cea3fa70c8668f6f47e6815de791d31d171f6a319324&w=740",
  },
  {
    category: "Nail_Paint",
    imgUrl:
      "https://media.istockphoto.com/id/874485368/photo/three-different-types-of-painted-nails-on-a-yellow-background.jpg?s=1024x1024&w=is&k=20&c=cxg98fYa8bSoPQGlpNcMQy6Kcs3s7TN9K7HGmxyMegQ=",
  },
  {
    category: "Foundation",
    imgUrl:
      "https://img.freepik.com/free-photo/still-life-beauty-products-spreading-out_23-2151345105.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Concealer",
    imgUrl:
      "https://img.freepik.com/free-photo/makeup-foundation-celebrating-all-skin-tones_23-2149179692.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Eye-Shadow",
    imgUrl:
      "https://img.freepik.com/free-photo/professional-makeup-palette_1385-1563.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Body-Lotion",
    imgUrl:
      "https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-66.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Face-Cream",
    imgUrl:
      "https://img.freepik.com/free-photo/close-up-young-woman-hands-holding-jar-cream_171337-12781.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Perfumes",
    imgUrl:
      "https://img.freepik.com/free-vector/elegant-perfume-abstract-background_52683-424.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Hair-Oil",
    imgUrl:
      "https://img.freepik.com/free-photo/side-view-woman-hair-slugging-night-routine_23-2150396594.jpg?ga=GA1.1.574280694.1718977941&semt=ais_hybrid",
  },
  {
    category: "Syrum",
    imgUrl:
      "https://media.istockphoto.com/id/1352842721/photo/cropped-shot-of-a-young-beautiful-woman-applying-serum-to-her-face.jpg?b=1&s=612x612&w=0&k=20&c=VpQyLib2YGYRQ3_tVvfUISLroGVahPpNQCzCYKuiZwA=",
  },
];

function Men() {
  return (
   
    <div>
        <Navbar/>
        
      {/* ... Existing header and nav code ... */}

      <div>
        <h3 className="text-xl font-bold text-left text-transform : uppercase  p-12">
          Personal Care
        </h3>

        <div className="flex flex-wrap justify-center w-full items-center gap-16">
          {beautyItems.map((item) => (
            <BeautyItemCard
              key={item.category}
              imgUrl={item.imgUrl}
              category={item.category}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Men;
