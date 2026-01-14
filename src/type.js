import { TypeShits } from "./config";

const Types = ({ imageId }) => {
  return (
    <>
      <div className="typeCard">
        <img src={TypeShits + imageId} />
      </div>
    </>
  );
};
export default Types;
