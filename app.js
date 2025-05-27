import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Body from "./src/Body.js";
import { RestaurantData } from "./src/data.js";

// app layout = {
//     navbar = {
//         Logo
//         Some Links
//          Cart
//     }
//     Body = {
//      restaurant Cards={
//              Image
//              name
//              rating
//              tags(cuisine, speciality)
//              price range(optional)
//      }
//     }
//      footer= {
//          tbc
//      }
// }
var count = 0;
const App = () => {
  return (
    <>
      <Header />
      <div className="body">
        {RestaurantData.slice(0, 16).map((data) => {
          return <Body props={data.info} key={data.info.id} role="link" />;
        })}
      </div>
    </>
  );
};
console.log(count);

ReactDom.createRoot(document.getElementById("root")).render(<App />);
