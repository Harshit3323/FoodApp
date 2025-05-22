import ReastaurantData from "./data";
const ImageLink =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Body = () => {
  return (
    <div className="restaurant-card">
      <img src={ImageLink + ReastaurantData[0].info.cloudinaryImageId} alt="" />
      <div className="card-body">
        <h3>{ReastaurantData[0].info.name}</h3>
        <p>{ReastaurantData[0].info.avgRating}</p>
      </div>
      <div className="card-footer">
        <p>
          {ReastaurantData[0].info.cuisines[0].length > 2
            ? ReastaurantData[0].info.cuisines.slice(0, 2).join(", ") + "..."
            : ReastaurantData[0].info.cuisines.join(", ")}
        </p>
        <p>{ReastaurantData[0].info.costForTwo}</p>
      </div>
    </div>
  );
};
export default Body;
