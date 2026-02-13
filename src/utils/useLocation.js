import { useEffect, useState } from "react";
const useLocation = () => {
  const [coord, setCoord] = useState({ latitude: null, longitude: null });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoord({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => error.message,
    );
  }, []);
  return coord;
};
export default useLocation;
