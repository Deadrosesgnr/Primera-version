const map = L.map('map').setView([-33.6151, -70.5754], 14); // Puente Alto

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map); //Muestra de calles

const marker = L.marker([-33.6151, -70.5754]).addTo(map);
marker.bindPopup('Carro de Bomberos').openPopup(); //Marcador

// Simulación de movimiento en diagonal
let lat = -33.6151;
let lng = -70.5754;

setInterval(() => {
  lat += 0.0001;
  lng += 0.0001;
  marker.setLatLng([lat, lng]);
  map.setView([lat, lng]);
}, 5000);
