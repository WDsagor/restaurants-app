import React from "react";
import { useCatagories } from "../../../utils/data";
import CardCatagory from "./CardCatagory";

const Catagories = () => {
  const allCatagories = useCatagories();
  console.log(allCatagories);
  return (
    <div>
      <h1 className=" text-3xl font-bold text-center pt-10"> All Catagories</h1>
      <div className="divider bg-primary h-[2px]  mx-auto w-60"></div>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 p-2">
        {allCatagories?.map((catagory, i) => (
          <CardCatagory key={i} catagory={catagory} />
        ))}
      </div>
    </div>
  );
};

export default Catagories;
