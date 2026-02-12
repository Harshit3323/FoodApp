import About from "./about.js";
import React from "react";
// const AboutMenu = () => {
//   return (
//     <>
//       <About />
//       <About />
//     </>
//   );
// };
class AboutMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent componentDidMount called");
  }
  render() {
    console.log("parent render called");
    return (
      <>
        <About />
        <About />
      </>
    );
  }
}
export default AboutMenu;
