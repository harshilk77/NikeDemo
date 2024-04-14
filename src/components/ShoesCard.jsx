import React from "react";

const ShoesCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe ? "border-coral-red" : "border-t-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className=" flex justify-center items-center bg-center bg-card bg-cover
       sm:w-40 sm:h-40 rounded-xl max-sm:p-4
      ">
        <img
          src={imgURL.thumbnail}
          alt="shoe collocation"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoesCard;
