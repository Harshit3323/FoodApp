import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Body from "./src/Body.js";

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
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

ReactDom.createRoot(document.getElementById("root")).render(<Hello />);
