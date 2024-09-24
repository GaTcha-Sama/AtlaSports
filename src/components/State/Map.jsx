import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Assurez-vous que ce CSS est bien importé
import L from 'leaflet';

// Optionally, you can provide a custom marker icon if needed
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function Map({ map, city }) {
  // Supposons que tu passes dans `city` les coordonnées (latitude, longitude)
  const { latitude, longitude } = city || { latitude: 37.8, longitude: -96 }; // Coordonnées par défaut pour centrer la carte sur les États-Unis

  return (
    <div className="map">
      <MapContainer
        center={[latitude, longitude]} // Centrer la carte sur les coordonnées fournies
        zoom={6} // Zoom initial
        scrollWheelZoom={false} // Désactive le zoom avec la molette
        style={{ height: '400px', width: '100%' }} // Assurez-vous que la carte prend bien toute la largeur
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={defaultIcon}>
          <Popup>
            <div>
              <img src={map} alt="State Map" style={{ width: '100px' }} />
              <p>{`Coordinates: ${latitude}, ${longitude}`}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
