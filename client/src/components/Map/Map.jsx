import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css"

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
        id: 1,
        position: [42.38956576685282, -72.52930952592146],
        imageUrl: "https://media-photos.depop.com/b1/11248688/2253668468_2360efcca1344741aa244ca90f281abd/P0.jpg",
        title: "Gray Stanley",
        description: "I found this bottle in South College room 107. I put it at the front of the room, under the table."
      },
      {
        id: 2,
        position: [42.38966828460359, -72.52817361038463],
        imageUrl: "https://i.postimg.cc/0QCJ09LW/black-bottle-library.jpg",
        title: "Black Bottle",
        description: "Found in library recess. Gave to front desk of library."
      },
      {
        id: 3,
        position: [42.387620494128115, -72.52104798475177],
        imageUrl: "https://i.postimg.cc/mrXVNcst/image.png",
        title: "Cap",
        description: "Found this in Gorman Hall 2nd floor, in front of the men's bathroom. I gave it to the RA in room 214"
      },
      {
        id: 4,
        position: [42.39314312105638, -72.52787630819955],
        imageUrl: "https://i.postimg.cc/v89LD2c1/image.png",
        title: "Purple Notebook",
        description: "Found in Goessmann Lab 152, left it on the desk"
      },
      {
        id: 5,
        position: [42.39086179629019, -72.5256003428567],
        imageUrl: "https://i.postimg.cc/C18DBdLy/image.png",
        title: "UMass water bottle",
        description: "Found in ILC, in front of room 210. Left it there"
      }
  ];

  return (
    <MapContainer
      center={[42.390266, -72.528215]} // Initial map position. Currently set to umass library
      zoom={17}
      style={{ 
        height: "80vh", 
        width: "98%",
        border: "4px solid #881C1C", // Add a border
        borderRadius: "8px" // Optional: rounded corners 
        }}
    >
      {/* Add the tile layer (map background) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Add the markers */}
      {markers.map((marker) => {
        const customIcon = new L.divIcon({
            className: "custom-icon",
            html: `<div class="rounded-marker" style="background-image: url('${marker.imageUrl}'); border-color: ${marker.borderColor};"></div>`,
            iconSize: [40, 40], // size of the marker
            iconAnchor: [20, 40], // anchor the center of the icon
            popupAnchor: [0, -40], // position of the popup
        });

        return (
          <Marker key={marker.id} position={marker.position} icon={customIcon}>
           <Popup>
              <div>
                <h3>{marker.title}</h3> {/* Title in the popup */}
                <p>{marker.description}</p> {/* Description in the popup */}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;