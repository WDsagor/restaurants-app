import { useState, useEffect } from "react";

export const useCatagories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCatagories(data?.categories));
  }, []);
  return catagories;
};
