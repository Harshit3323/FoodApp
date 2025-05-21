import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header.js";

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
const Hello = () => {
  return <Header />;
};

ReactDom.createRoot(document.getElementById("root")).render(<Hello />);
