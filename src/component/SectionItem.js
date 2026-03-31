import { ImageLink } from "./config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const SectionItem = ({
  name,
  defaultPrice,
  price,
  description,
  imageId,
  id,
  showBttn,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addItem({
        name: name,
        defaultPrice: defaultPrice,
        price: price,
        description: description,
        imageId: imageId,
        id: id,
      }),
    );
  };
  return (
    <div
      data-testid="menuItem"
      className="w-full mx-auto flex flex-row items-center justify-between my-3  py-2 border-b select-text cursor-default"
    >
      <div className="flex flex-col items-start mx-7 my-3 py-5  ">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p>₹{defaultPrice ? defaultPrice / 100 : price / 100}</p>
        </div>
        {description && <p className="py-3 w-100">{description}</p>}
      </div>
      <div className="relative w-50">
        <div className="w-full h-35 overflow-hidden rounded-xl">
          {imageId && (
            <img
              src={ImageLink + imageId}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {showBttn ? (
          <div className="absolute top-2 right-2">
            <button
              data-testid="addBtn"
              className="flex items-center justify-center w-10 h-10 bg-black/60 text-white text-2xl rounded-full pb-1 shadow-lg cursor-pointer"
              onClick={handleClick}
            >
              +
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default SectionItem;
