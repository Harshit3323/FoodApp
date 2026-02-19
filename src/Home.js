import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";
import { searchHandel, filterHandle } from "./utils.js";
import { Search, FunnelX } from "lucide-react";
import useRestaurantData from "./utils/useRestaurantData.js";
import useLocation from "./utils/useLocation.js";
import ShimmerUI from "./shimmer.js";
import Categories from "./categories.js";
import useOnlineStatus from "./utils/useOnlineStatus.js";

const Home = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [count, setCount] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [typesData, setTypesData] = useState([]);

  const { latitude, longitude } = useLocation();

  const resInfo = useRestaurantData(latitude, longitude);
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    if (resInfo) {
      const restaurants =
        resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const categories = resInfo?.cards[0]?.card?.card?.imageGridCards?.info;
      if (restaurants) setCardData(restaurants);
      if (categories) setTypesData(categories);
    }
  }, [resInfo]);
  if (!onlineStatus) {
    return (
      <div>
        <center>
          <h3>Looks Like Your Offline</h3>
        </center>
      </div>
    );
  }
  // !resInfo || cardData.length === 0
  if (!resInfo || cardData.length === 0) {
    return (
      <div className="grid grid-cols-4 justify-items-center my-3 mx-5 gap-4">
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <ShimmerUI key={i} />
          ))}
      </div>
    );
  }

  return (
    <>
      <div id="body">
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <button
            onClick={() =>
              searchHandel(
                searchTxt,
                setsearchTxt,
                setCount,
                cardData,
                setCardData,
              )
            }
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              filterHandle(count, setCount, cardData, setCardData, resInfo);
            }}
            disabled={false}
          >
            <FunnelX size={20} />
          </button>
        </div>

        <Categories data={typesData} />
        <h2 className="font-black text-2xl">
          {resInfo?.cards?.[1]?.card?.card?.header?.title || "Top Restaurants"}
        </h2>
        <div className="grid grid-cols-4 justify-items-center my-3 mx-5 gap-4">
          {cardData.map((data) => (
            <RestaurantCard
              {...data.info}
              key={data.info.id}
              role="link"
              className=""
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
