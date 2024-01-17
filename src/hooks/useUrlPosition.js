import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
};
