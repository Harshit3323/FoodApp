import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";
import ShimmerUI from "./shimmer.js";

const Body = () => {
  let [searchData, setSearchData] = useState([]);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  let originalDataRef = useRef([]);
  let [count, setCount] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const resData = await response.json();
      setSearchData(
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      console.log(searchData);
      originalDataRef.current =
        resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(position.coords);
      },
      (error) => error.message
    );
  }, []);
  useEffect(() => {
    if (latitude != null && longitude != null) {
      getData();
    }
  }, [longitude, latitude]);

  const filterHandle = (count) => {
    count ? (filterAction(), setCount(false)) : (resetData(), setCount(true));
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
      const filteredData = originalDataRef.current.filter((i) =>
        i.info.name.toLowerCase().includes(searchTxt)
      );
      if (filteredData.length > 0) {
        setSearchData(filteredData);
      } else {
        alert("vroooo what u doinnn");
      }
    }
    setsearchTxt("");
    setCount(false);
  };

  const [searchTxt, setsearchTxt] = useState("");

  if (searchData.length === 0) {
    const shimmerCards = [];
    for (let i = 0; i < 4; i++) {
      shimmerCards.push(<ShimmerUI key={i} />);
    }
    return <div className="cards shimmer_ui">{shimmerCards}</div>;
  }
  return (
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
