import { useEffect, useState } from "react";

const ResaturantMenu = () => {
  const [resData, setResData] = useState(null);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=804071&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResData(json);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <h1>ResaturantMenu</h1>
      <p>item 1</p>
      <p>item 1</p>
    </>
  );
};

export default ResaturantMenu;
