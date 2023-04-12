import React from "react";
// import { useState } from "react";
import { useCatagories } from "../utils/data";

const Products = () => {
  // const [catagories, setCatagories] = useState([]);
  // fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //   .then((res) => res.json())
  //   .then((data) => setCatagories(data?.categories));
  const catagories = useCatagories();

  console.log(catagories);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl font-normal py-2">Catagories</h1>
            <select className="select select-bordered select-xs w-full max-w-xs">
              {catagories?.map((category, i) => (
                <option key={i} value={category?.strCategory}>
                  {category?.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
