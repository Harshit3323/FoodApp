import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.ononline = (event) => {
      setOnlineStatus(true);
    };
    window.onoffline = (event) => {
      setOnlineStatus(false);
    };
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
