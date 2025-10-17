export const getData = async (
  lat,
  long,
  setCardData,
  originalDataRef,
  setTypesData
) => {
  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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

export const searchHandel = (
  searchTxt,
  setsearchTxt,
  setCount,
  cardData,
  setCardData
) => {
  if (searchTxt) {
    const filteredData = cardData.filter((i) =>
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
export const filterHandle = (
  count,
  setCount,
  cardData,
  setCardData,
  originalDataRef
) => {
  count
    ? (filterAction(cardData, setCardData), setCount(false))
    : (resetData(setCardData, originalDataRef), setCount(true));
};
const filterAction = (cardData, setCardData) => {
  const filterData = cardData.filter((i) => {
    return i.info.avgRating >= 4.3;
  });
  setCardData(filterData);
};
const resetData = (setCardData, originalDataRef) => {
  setCardData(
    originalDataRef.current.cards[4].card.card.gridElements.infoWithStyle
      .restaurants
  );
};
