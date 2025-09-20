import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";
import { Search, FunnelX, ChevronLeft, ChevronRight } from "lucide-react";
import ShimmerUI from "./shimmer.js";
import Types from "./type.js";

const Body = () => {
  let [cardData, setCardData] = useState([]);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  let [typesData, setTypesData] = useState();
  let originalDataRef = useRef([]);
  let [count, setCount] = useState(true);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 286;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };
  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const resData = await response.json();

      originalDataRef.current = resData.data;
      setCardData(
        originalDataRef.current.cards[4].card.card.gridElements.infoWithStyle
          .restaurants
      );
      setTypesData(
        originalDataRef.current.cards[0].card.card.imageGridCards.info
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => error.message
    );
  }, []);

  useEffect(() => {
    if (latitude != null && longitude != null) {
      getData(latitude, longitude);
    }
  }, [longitude, latitude]);

  const filterHandle = (count) => {
    count ? (filterAction(), setCount(false)) : (resetData(), setCount(true));
  };

  const resetData = () => {
    setCardData(
      originalDataRef.current.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  const filterAction = () => {
    const filterData = cardData.filter((i) => {
      return i.info.avgRating > 4;
    });
    setCardData(filterData);
  };
  const searchHandel = (searchTxt) => {
    if (searchTxt) {
      const filteredData = originalDataRef.current.filter((i) =>
        i.info.name.toLowerCase().includes(searchTxt)
      );
      if (filteredData.length > 0) {
        setCardData(filteredData);
      } else {
        alert("vroooo what u doinnn");
      }
    }
    setsearchTxt("");
    setCount(false);
  };

  const [searchTxt, setsearchTxt] = useState("");

  if (cardData.length === 0) {
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
        <button onClick={() => searchHandel(searchTxt)}>
          <Search size={20} />
        </button>
        <button
          onClick={() => {
            // searchHandel(searchTxt, cardData);
            filterHandle(count);
          }}
          disabled={false}
        >
          <FunnelX size={20} />
        </button>
      </div>
      <div className="carousel">
        <div className="carousel_header">
          <h2 className="carousel_heading">
            {originalDataRef.current.cards[0].card.card.header.title}
          </h2>
          <div className="carousel-nav">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft}>
              <ChevronLeft />
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight}>
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          className="TypeShits Carousel_container"
          ref={scrollRef}
          onScroll={updateScrollButtons}
        >
          {typesData.map((data) => (
            <Types {...data} key={data.id} />
          ))}
        </div>
      </div>

      <h2 className="heading">
        {originalDataRef.current.cards[1].card.card.header.title}
      </h2>
      <div className="cards">
        {cardData.map((data) => (
          <RestaurantCard {...data.info} key={data.info.id} role="link" />
        ))}
      </div>
    </div>
  );
};
export default Body;
