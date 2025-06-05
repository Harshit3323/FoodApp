import { useState } from "react";
import RestaurantCard from "./RestrauntCard.js";
import { RestaurantData } from "./config.js";

const Body = () => {
  const [searchData, setSearchData] = useState(RestaurantData);
  const searchHandel = (searchTxt, searchData) => {
    const filteredData = searchData.filter((i) =>
      i.info.name.includes(searchTxt)
    );
    setSearchData(filteredData);
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
      <button
        onClick={() => {
          searchHandel(searchTxt, searchData);
          console.log(searchData);
        }}
      >
        button
      </button>
      <div className="body">
        {searchData.slice(0, 16).map((data) => {
          return (
            <RestaurantCard props={data.info} key={data.info.id} role="link" />
          );
        })}
      </div>
    </>
  );
};
export default ;
