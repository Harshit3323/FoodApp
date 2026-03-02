import { ImageLink } from "./config";
const SectionItem = ({ name, defaultPrice, price, description, imageId }) => {
  return (
    <div className="w-full mx-auto flex flex-row items-center justify-between my-3  py-2 border-b select-text cursor-default">
      <div className="flex flex-col items-start mx-7 my-3 py-5  ">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p>₹{defaultPrice ? defaultPrice / 100 : price / 100}</p>
        </div>
        {description && <p className="py-3 w-4/6">{description}</p>}
      </div>
      <div className="w-48 h-32 overflow-hidden rounded-xl">
        {imageId && (
          <img
            src={ImageLink + imageId}
            className="w-full h-full object-cover"
          ></img>
        )}
      </div>
    </div>
  );
};
export default SectionItem;
