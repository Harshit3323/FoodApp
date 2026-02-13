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
  if (resData === null) return <Shimmer />;

  return (
    <>
      <div className="cards">
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
