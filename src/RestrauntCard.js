import { ImageLink } from "./config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="w-62.5 h-80">
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

export default RestaurantCard;
