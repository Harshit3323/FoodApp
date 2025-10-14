import { TypeShits } from "./config";

const Types = ({ imageId }) => {
  return (
    <>
      <div className="typeCard">
        <a href="#">
          <img src={TypeShits + imageId} />
        </a>
      </div>
    </>
  );
};
export default Types;
