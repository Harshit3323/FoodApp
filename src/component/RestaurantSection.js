import { ChevronDown, ChevronUp } from "lucide-react";
import SectionItem from "./SectionItem";
const RestaurantSection = ({
  title,
  itemCards,
  categories,
  collapse,
  setCollapseIndex,
}) => {
  const handleClick = (e) => {
    if (e.target.closest(".section-header")) {
      setCollapseIndex();
    }
  };
  const items =
    itemCards || categories?.flatMap((cat) => cat.itemCards || []) || [];
  return (
    <div
      className="flex flex-col w-3/6 justify-between my-2 p-4 cursor-pointer select-none shadow-md shadow-gray-200 rounded-md"
      onClick={handleClick}
    >
      <div className="flex justify-between section-header">
        <h3 className="font-bold text-lg">{title}</h3>
        {collapse ? <ChevronDown /> : <ChevronUp />}
      </div>
      <div>
        {collapse &&
          items.map((i) => {
            return (
              <SectionItem {...i.card.info} showBttn key={i.card.info.id} />
            );
          })}
      </div>
    </div>
  );
};
export default RestaurantSection;
