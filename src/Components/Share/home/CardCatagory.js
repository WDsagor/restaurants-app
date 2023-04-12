import React from "react";
import Catagories from "./Catagories";

const CardCatagory = ({ catagory }) => {
  const { strCategoryThumb, strCategory, strCategoryDescription } = catagory;
  return (
    <div>
      <div className="card w-full max-w-sm glass group relative">
        <figure>
          <img src={strCategoryThumb} alt={strCategory} />
        </figure>
        <div className="hidden items-center rounded-2xl group-hover:flex absolute top-0 w-full h-full card-body bg-slate-900 bg-opacity-70">
          <h2 className="card-title text-info">{strCategory}</h2>
          <div className="card-actions">
            <button className="btn btn-sm btn-primary">See item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCatagory;
