import SectionItem from "./SectionItem";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "./utils/cartSlice";
const Cart = () => {
  let c = 0;
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(emptyCart());
  };
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="flex w-3/6 justify-between items-center">
          <h1 className="text-center text-2xl font-bold p-3 m-4">Cart</h1>
          <button
            className="px-2 py-1 border-2 h-10 border-black rounded-lg cursor-pointer"
            onClick={handleClick}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-3/6">
          {" "}
          {items.length ? (
            items.map((i) => (
              <SectionItem {...i} key={i.id + c++}></SectionItem>
            ))
          ) : (
            <h1 className="text-center p-4 m-4 text-xl">Your Cart Is Empty</h1>
          )}
        </div>
        {totalPrice != 0 ? (
          <div className="flex justify-between w-3/6 p-4 mx-4 text-xl font-bold">
            <h1>Total</h1>
            <h1> ₹{totalPrice / 100}</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
