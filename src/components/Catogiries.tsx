

export const Catogiries = ({imgUrl , name, discount} ) => {
  return (
    <div className="flex justify-center items-center ml-6 mb-6 flex-col  bg-yellow-400">
      
      <div className="flex justify-center items-center border-[2px] border-yellow-400 text-white w-44 h-60 bg-pink-700  flex-col">
        <div className="w-40 h-40  ">
          <img className=" w-full h-full object-cover " src={imgUrl}  />
        </div>
        <h3>{name}</h3>
        <h2 className="font-bold ">{discount}</h2>
        <h4>Shop Now</h4>
      </div>
    </div>
  );
};
