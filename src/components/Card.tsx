const Card = ({ name, imgUrl, category, brand, discount, }: { name: string; imgUrl: string; category: string; brand: string; discount: string; }) => {


  return (
    <div className=" bg-white w-52 h-80  flex  flex-col  m-[.5px] items-left  outline-none ">
      <img className="w-full h-full object-cover border-none" src={imgUrl} />
      <div className="flex flex-col items-left p-2 justify-center">
        <h5 className="text-xs font-semibold text-black ">{brand}</h5>
        <h2 className=" text-lg font-semibold text-black text-left ">{name}</h2>

        <h3 className="text-sm font-semibold text-black ">{category}</h3>

        <h3 className="text-sm font-semibold text-black ">{discount}</h3>
      </div>
    </div>
  );
};

export default Card;
