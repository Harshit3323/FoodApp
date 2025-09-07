import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";

const Body = () => {
  let [searchData, setSearchData] = useState([]);
  let originalDataRef = useRef([]);
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

  const resetData = () => {
    setSearchData(originalDataRef.current);
    console.log(originalDataRef.current);
  };
  const filerAction = () => {
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
  };
  const [searchTxt, setsearchTxt] = useState("");
  return (
    <>
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
          filerAction();
        }}
      >
        filter
      </button>
      <button onClick={() => resetData()}>clear</button>
      <div className="body">
        {searchData.map((data) => {
          return (
            <RestaurantCard {...data.info} key={data.info.id} role="link" />
          );
        })}
      </div>
    </>
  );
};
export default Body;
