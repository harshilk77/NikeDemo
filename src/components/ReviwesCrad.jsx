import React from "react";
import { star } from "../assets/icons";

const ReviwesCrad = ({ imgURL, rating, feedback, customerName }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 info-text  max-w-sm text-center">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          className="m-0 object-cover "
          width={24}
          height={24}
        />
        <p className=" text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className=" mt-1 font-bold font-palanquin text-clip text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviwesCrad;
