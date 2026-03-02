import { ImageLink } from "./config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="w-62.5 h-80 rounded-xl cursor-pointer hover:bg-[#cfceced0] ">
      <img
        src={ImageLink + cloudinaryImageId}
        alt=""
        className="w-full h-50 rounded-xl object-cover object-[50%_20%] "
      />
      <div className="flex justify-between px-1.5 py-3">
        <h3 className="font-black text-xl">{name}</h3>
        <p>{avgRating / 1}</p>
      </div>
      <div className="flex justify-between px-1.5">
        <p>
          {cuisines.length > 2
            ? cuisines.slice(0, 2).join(", ")
            : cuisines.join(", ")}
        </p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
export const withRibbon = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white p-2 mx-2 bg-[#79d622]/80 rounded-lg ">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
