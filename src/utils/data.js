import { useState, useEffect } from "react";
import Catagories from "./../Components/Share/home/Catagories";

export const useCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCatagories(data?.categories));
  }, []);
  return catagories;
};
export const useFoodByCatagories = (name) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return foods;
};
