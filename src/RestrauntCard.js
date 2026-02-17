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
      <div className="card-body">
        <h3>{name}</h3>
        <p>{avgRating / 1}</p>
      </div>
      <div className="card-footer">
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
