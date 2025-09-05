import { ImageLink } from "./config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
}) => {
  return (
    <div className="restaurant-card">
      <img src={ImageLink + cloudinaryImageId} alt="" />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{avgRating}</p>
      </div>
      <div className="card-footer">
        <p>
          {cuisines[0].length > 2
            ? cuisines.slice(0, 2).join(", ") + "..."
            : cuisines.join(", ")}
        </p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
