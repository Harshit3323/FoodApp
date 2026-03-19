import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";
import RestaurantSection from "./RestaurantSection";
const ResaturantMenu = () => {
  const [resData, setResData] = useState(null);
  const [collapseIndex, setCollapseIndex] = useState(0);
  const resID = useParams();
  const fetchMenu = async () => {
    const data = await fetch(
      `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65485747024115&lng=77.18785248173877&restaurantId=${resID.resId}&catalog_qa=undefined&submitAction=ENTER`,
    );

    const json = await data.json();
    setResData(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  if (resData == null)
    return (
      <div className="flex flex-wrap gap-3 my-10 mx-10">
        {Array(14)
          .fill(0)
          .map((_, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    );
  const data = resData.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (item) => {
      const type = item.card.card["@type"];

      return (
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    },
  );
  const { name, costForTwoMessage, avgRating, totalRatingsString } =
    resData.cards[2].card.card.info;
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col w-3/6 h-50 bg-gray-400/35 rounded-t-2xl leading-1 justify-center my-4">
          <h1 className="font-bold text-2xl p-3 mx-3 my-2 ">{name}</h1>
          <div className="flex gap-5 p-3 mx-3 my-2">
            <p>
              {avgRating + "⭐"} {totalRatingsString}
            </p>
            <p>{costForTwoMessage}</p>
          </div>
        </div>
        {data.map((i, index) => {
          return (
            <RestaurantSection
              key={i.card.card.categoryId}
              {...i.card.card}
              collapse={index == collapseIndex ? true : false}
              setCollapseIndex={() =>
                setCollapseIndex(collapseIndex === index ? null : index)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ResaturantMenu;
