import { useEffect, useState } from "react";
import { ImageLink } from "./config";
import RestaurantCard from "./RestrauntCard.js";
import Shimmer from "./shimmer.js";
import { useParams } from "react-router";
const CategoryMenu = () => {
  const [resData, setResData] = useState(null);

  const resID = useParams();
  const fetchCards = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&collection=${resID.resId}&sortBy&filters&type=rcv2&offset=0&page_type=null`,
    );
    const json = await data.json();
    setResData(json?.data.cards.slice(2));
  };
  useEffect(() => {
    fetchCards();
  }, []);
  if (resData === null)
    return (
      <div className="grid grid-cols-4 justify-items-center my-3 mx-5 gap-4">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    );

  return (
    <>
      <div className="grid grid-cols-4 justify-items-center my-3 mx-5 gap-x-4">
        {resData.slice(2).map((item) => (
          <RestaurantCard
            {...item.card.card.info}
            key={item.card.card.info.id}
          />
        ))}
      </div>
    </>
  );
};
export default CategoryMenu;
