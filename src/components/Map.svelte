<script>
    import { onMount } from 'svelte';
    import L from 'leaflet';
    import { currentLocation, selectedBuilding } from '../store.js';
  
    let map;
  
    onMount(() => {
      map = L.map('map').setView([52.9333, -1.1833], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
  
      // Add markers for buildings
      L.marker([52.9333, -1.1833]).addTo(map)
        .bindPopup('Cripps Building')
        .on('click', () => handleBuildingClick('Cripps Building'));
  
      // Add more building markers here
    });
  
    function handleBuildingClick(building) {
      $currentLocation = building;
      $selectedBuilding = building;
      // Navigate to the Challenges component with the selected building
    }
  </script>
  
  <div id="map" style="height: 500px;"></div>