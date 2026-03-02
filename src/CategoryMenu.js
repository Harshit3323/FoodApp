import { useEffect, useState } from "react";
import RestaurantCard from "./RestrauntCard.js";
import Shimmer from "./shimmer.js";
import { useParams } from "react-router";
import { Link } from "react-router";
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
      <div className="flex flex-wrap gap-3 my-10 mx-10">
        {Array(14)
          .fill(0)
          .map((_, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    );
  return (
    <>
      <div className="flex flex-wrap gap-3 my-10 mx-10">
        {resData.map((item) => (
          <Link
            key={item.card.card.info.id}
            to={"/restaurants/" + item.card.card.info.id}
          >
            <RestaurantCard {...item.card.card.info} role="link" />
          </Link>
        ))}
      </div>
    </>
  );
};
export default CategoryMenu;
