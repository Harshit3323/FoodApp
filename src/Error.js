import { useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <center>
        <h1>OOPPSIEEE!!!</h1>
        <h2>
          {error.status} {error.statusText}
        </h2>
      </center>
    </>
  );
};

export default Error;
