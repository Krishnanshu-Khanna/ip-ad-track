import { useEffect, useMemo } from "react";
import PropTypes from "prop-types"; // Import prop-types library
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";

// Define prop types for Markerposition component
Markerposition.propTypes = {
  address: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default function Markerposition({ address }) {
  const position = useMemo(() => [address.location.lat, address.location.lng], [
    address.location.lat,
    address.location.lng,
  ]);
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
}
