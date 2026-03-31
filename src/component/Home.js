import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withRibbon } from "./RestrauntCard.js";
import { searchHandel, filterHandle } from "./utils.js";
import { Search, FunnelX } from "lucide-react";
import useRestaurantData from "../utils/useRestaurantData.js";
import useLocation from "../utils/useLocation.js";
import ShimmerUI from "./shimmer.js";
import Categories from "./categories.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { Link } from "react-router";
import UserInfo from "../utils/userInfo.js";
const Home = () => {
  const [searchTxt, setsearchTxt] = useState("");
  const [count, setCount] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [typesData, setTypesData] = useState([]);

  const { latitude, longitude } = useLocation();
  const resInfo = useRestaurantData(latitude, longitude);
  const onlineStatus = useOnlineStatus();
  const { setCurrentUser } = useContext(UserInfo);
  const RestaurantCardOpen = withRibbon(RestaurantCard);
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
      <div className="flex flex-wrap gap-3 my-10 mx-10">
        {Array(14)
          .fill(0)
          .map((_, i) => (
            <ShimmerUI key={i} />
          ))}
      </div>
    );
  }
  return (
    <>
      <div className="bg-mint-500 min-h-screen ">
        <div className="flex justify-end gap-2 m-6">
          <input
            type="search"
            placeholder="Search"
            className="tag "
            value={searchTxt}
            onChange={(e) => {
              setsearchTxt(e.target.value);
            }}
          />
          <input
            type="search"
            placeholder="asd"
            className="tag "
            onChange={(e) => {
              setCurrentUser(e.target.value);
            }}
          />
          <button
            data-testid="search"
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
            data-testid="filter"
            type="button"
            onClick={() => {
              filterHandle(count, setCount, cardData, setCardData, resInfo);
            }}
          >
            <FunnelX size={20} />
          </button>
        </div>

        <Categories data={typesData} />
        <h2 className="font-black text-2xl mx-4">
          {resInfo?.cards?.[1]?.card?.card?.header?.title || "Top Restaurants"}
        </h2>
        <div className="flex flex-wrap gap-3 my-10 mx-10">
          {cardData.map((data) =>
            data.info.isOpen ? (
              <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
                <RestaurantCardOpen {...data.info} role="link" />
              </Link>
            ) : (
              <Link to={"/restaurants/" + data.info.id} key={data.info.id}>
                <RestaurantCard {...data.info} role="link" />
              </Link>
            ),
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
