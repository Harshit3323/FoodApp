import { TypeShits } from "./config";

const Types = ({ imageId }) => {
  return (
    <>
      <div className="typeCard">
        <img src={TypeShits + imageId} className="max-w-none" />
      </div>
    </>
  );
};
export default Types;
