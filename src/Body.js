import { useState } from "react";
import RestaurantCard from "./RestrauntCard.js";
import { RestaurantData } from "./config.js";

const Body = () => {
  let [searchData, setSearchData] = useState(RestaurantData);
  const resetData = () => {
    setSearchData(RestaurantData.slice(0, 16));
  };
  const filerAction = () => {
    const filterData = searchData.filter((i) => {
      return i.info.avgRating > 4.5;
    });
    setSearchData(filterData);
  };
  const searchHandel = (searchTxt) => {
    if (searchTxt) {
      const filteredData = RestaurantData.filter((i) =>
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
