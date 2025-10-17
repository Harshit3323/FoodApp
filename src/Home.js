import { useState, useEffect, useRef } from "react";
import RestaurantCard from "./RestrauntCard.js";
import Header from "./Header.js";
import { getData, searchHandel, filterHandle } from "./functions.js";
import { Search, FunnelX, ChevronLeft, ChevronRight } from "lucide-react";
import ShimmerUI from "./shimmer.js";
import Types from "./type.js";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const scrollRef = useRef(null);
  const [searchTxt, setsearchTxt] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [typesData, setTypesData] = useState();
  const originalDataRef = useRef([]);
  const [count, setCount] = useState(true);

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
      getData(latitude, longitude, setCardData, originalDataRef, setTypesData);
    }
  }, [longitude, latitude]);

  if (cardData.length === 0) {
    const shimmerCards = [];
    for (let i = 0; i < 4; i++) {
      shimmerCards.push(<ShimmerUI key={i} />);
    }
    return <div className="cards shimmer_ui">{shimmerCards}</div>;
  }
  return (
    <>
      <Header />
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
                setCardData
              )
            }
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              filterHandle(
                count,
                setCount,
                cardData,
                setCardData,
                originalDataRef
              );
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
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
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
    </>
  );
};
export default Home;
