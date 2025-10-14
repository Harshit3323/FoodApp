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
var count = 0;
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

ReactDom.createRoot(document.getElementById("root")).render(<App />);
