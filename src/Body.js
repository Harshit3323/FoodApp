import RestaurantCard from "./RestrauntCard.js";
import { RestaurantData } from "./config.js";

const Body = () => {
  console.log("lalalala");
  return (
    <div className="body">
      {RestaurantData.slice(0, 16).map((data) => {
        return (
          <RestaurantCard props={data.info} key={data.info.id} role="link" />
        );
      })}
    </div>
  );
};
export default Body;
