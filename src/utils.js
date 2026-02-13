export const searchHandel = (
  searchTxt,
  setsearchTxt,
  setCount,
  cardData,
  setCardData,
) => {
  if (searchTxt) {
    const filteredData = cardData.filter((i) =>
      i.info.name.toLowerCase().includes(searchTxt),
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
  resInfo,
) => {
  count
    ? (filterAction(cardData, setCardData), setCount(false))
    : (resetData(setCardData, resInfo), setCount(true));
};
const filterAction = (cardData, setCardData) => {
  const filterData = cardData.filter((i) => {
    return i.info.avgRating >= 4.3;
  });
  setCardData(filterData);
};
const resetData = (setCardData, resInfo) => {
  setCardData(
    resInfo?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  );
};
