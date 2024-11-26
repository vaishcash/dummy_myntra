// BeautyItemCard.js


function BeautyItemCard({ imgUrl, category } : { imgUrl : string ; category : string}) {
  return (
    <div className="flex flex-col items-center w-[150px] md:w-[200px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={category}
        className="w-full h-[150px] object-cover"
      />
      <h3 className="text-center mt-2 font-semibold">{category}</h3>
    </div>
  );
}

export default BeautyItemCard;
