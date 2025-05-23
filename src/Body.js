const ImageLink =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Body = ({ props }) => {
  return (
    <div className="restaurant-card">
      <img src={ImageLink + props?.cloudinaryImageId} alt="" />
      <div className="card-body">
        <h3>{props?.name}</h3>
        <p>{props?.avgRating}</p>
      </div>
      <div className="card-footer">
        <p>
          {props?.cuisines[0].length > 2
            ? props?.cuisines.slice(0, 2).join(", ") + "..."
            : props?.cuisines.join(", ")}
        </p>
        <p>{props?.costForTwo}</p>
      </div>
    </div>
  );
};
export default Body;
