import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";
import ShimmerUI from "./shimmer.js";

const Body = () => {
  let [searchData, setSearchData] = useState([]);
  let originalDataRef = useRef([]);
  let [count, setCount] = useState(0);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6539087&lng=77.2712102&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const resData = await response.json();
      setSearchData(
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      originalDataRef.current =
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const filterHandle = (count) => {
    console.log(count);
    if (count === 0) {
      filterAction();
      setCount(1);
      return;
    }
    if (count === 1) {
      resetData();
      setCount(0);
      return;
    }
  };
  const resetData = () => {
    setSearchData(originalDataRef.current);
  };
  const filterAction = () => {
    const filterData = searchData.filter((i) => {
      return i.info.avgRating > 4;
    });
    setSearchData(filterData);
  };
  const searchHandel = (searchTxt) => {
    if (searchTxt) {
      const filteredData = searchData.filter((i) =>
        i.info.name.toLowerCase().includes(searchTxt)
      );
      if (filteredData.length > 0) {
        setSearchData(filteredData);
      } else {
        alert("vroooo what u doinnn");
      }
    }
    setCount(1);
  };

  const [searchTxt, setsearchTxt] = useState("");

  if (searchData.length === 0) {
    const shimmerCards = [];
    for (let i = 0; i < 8; i++) {
      shimmerCards.push(<ShimmerUI key={i} />);
    }
    return <div className="cards">{shimmerCards}</div>;
  }
  return (
    <div id="body">
      <div className="search">
        <input
          type="search"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setsearchTxt(e.target.value)}
        />
        <button onClick={() => searchHandel(searchTxt)}>search</button>
        <button
          onClick={() => {
            // searchHandel(searchTxt, searchData);
            filterHandle(count);
          }}
        >
          filter
        </button>
      </div>
      <div className="cards">
        {searchData.map((data) => {
          return (
            <RestaurantCard {...data.info} key={data.info.id} role="link" />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
