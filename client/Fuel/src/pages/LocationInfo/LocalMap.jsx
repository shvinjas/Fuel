import React, { useEffect } from 'react';
import "./LocalMap.Module.css"

const MapComponent = ({ users }) => {
  useEffect(() => {
    // Initialize the map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -41.2865, lng: 174.7762 }, 
      zoom: 12
    });

   

    // Add markers for each station
    users.forEach(user => {
      // Construct marker content with petrol price
      const markerContent = `
        <div style="color:#fb6d1a">
          <strong>${user.name}</strong><br>
          Petrol Price: $${user.petrol_91}<br>
        </div>
      `;

      // Create a new marker with custom content
      const marker = new window.google.maps.Marker({
        position: user.location,
        map: map,
        icon: "./public/location-bubble.png",
        title: `Petrol Price: $${user.petrol_91}`,
     // Display petrol price as title
      });

      // Create info window to display additional content on marker click
      const infoWindow = new window.google.maps.InfoWindow({
        content: markerContent,
      });

      // Add click event listener to marker to open info window
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }, [users]);

  return <div id="map" ></div>;
};

export default MapComponent;
// style={{ height: '600px', width: '800px' }}