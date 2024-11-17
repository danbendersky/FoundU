import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = () => {
  // Define the markers with images
  const markers = [
    {
      position: [42.373611, -72.519444], // Example: Amherst, MA
      image: "https://via.placeholder.com/100", // Replace with your image URL
      title: "Node 1",
    },
    {
      position: [42.373221, -72.515556], // Nearby example position
      image: "https://via.placeholder.com/100",
      title: "Node 2",
    },
  ];

  return (
    <MapContainer
      center={[42.373611, -72.519444]} // Initial map position
      zoom={15}
      style={{ height: "500px", width: "100%" }}
    >
      {/* Add the tile layer (map background) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add the markers */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>
            <div style={{ textAlign: "center" }}>
              <img
                src={marker.image}
                alt={marker.title}
                style={{ width: "100px", height: "100px" }}
              />
              <p>{marker.title}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;