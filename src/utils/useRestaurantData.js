import { useState, useEffect } from "react";

const useRestaurantData = (lat, long) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if (!lat || !long) return;
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        );
        if (!data.ok) {
          throw new Error(`Response status: ${data.status}`);
        }
        const json = await data.json();
        setResInfo(json);
      } catch (error) {
        console.error(Error.message);
      }
    };

    fetchData();
  }, [lat, long]);
  return resInfo?.data;
};

export default useRestaurantData;
