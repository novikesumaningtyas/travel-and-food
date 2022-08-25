import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import LoadingSkeleton from "./Skeleton";
import { Button } from "@mui/material";

const center = { lat: -37.7644, lng: 144.922 };
const Map = () => {
  console.log("key", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  return !isLoaded ? (
    <LoadingSkeleton />
  ) : (
    <>
      <div style={{ position: "absolute", height: "100%", width: "100%", margin: "20px", padding: "20px" }}>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "50%", height: "50%", padding: '20px' }}
        ></GoogleMap>
      </div>

      <div
        style={{
          backgroundColor: "white",
          boxShadow: "base",
          padding: 4,
          margin: 4,
          zIndex: 10,
          top: 10
        }}
      >
        <Button> Button </Button>
      </div>
    </>
  );
};

export default Map;
