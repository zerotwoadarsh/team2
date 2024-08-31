import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import indiaGeoJSON from './india_geo.json'; // Import your GeoJSON file

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India with zoom level 5

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.geoJSON(indiaGeoJSON, {
      style: (feature) => ({
        color: '#ff7800',
        weight: 2,
        opacity: 0.65
      }),
      onEachFeature: (feature, layer) => {
        layer.on({
          mouseover: (e) => {
            e.target.setStyle({
              weight: 5,
              color: '#666',
              dashArray: '',
              fillOpacity: 0.7
            });
          },
          mouseout: (e) => {
            e.target.setStyle({
              weight: 2,
              color: '#ff7800',
              dashArray: '',
              fillOpacity: 0.65
            });
          },
          click: (e) => {
            alert(`Clicked on ${feature.properties.name}`);
          }
        });
      }
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: '600px', width: '100%' }}></div>
  );
};

export default Map;
