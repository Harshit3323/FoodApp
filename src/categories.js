import { useState, useEffect, useRef } from "react";
import { Link } from "react-router"; // Ensure Link is imported
import { ChevronLeft, ChevronRight } from "lucide-react";
import Types from "./type";

const Categories = ({ data }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  var i = 0;
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 1,
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 286;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!data || data.length === 0) return null;
  const extract = (link) => {
    if (!link) return;
    const url = new URL(link);
    const collectionId = url.searchParams.get("collection_id");
    return collectionId;
  };
  return (
    <div className="">
      <div className="flex justify-between mx-4">
        <h2 className="font-black text-2xl">What's on your mind?</h2>
        <div className="">
          <button onClick={() => scroll("left")} disabled={!canScrollLeft}>
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} disabled={!canScrollRight}>
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        ref={scrollRef}
        onScroll={updateScrollButtons}
        style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none" }}
      >
        {data?.map((item) => (
          <Link to={"/collection/" + extract(item?.action?.link)} key={++i}>
            <Types {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
