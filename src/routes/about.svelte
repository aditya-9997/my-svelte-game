<script>
    import { currentLocation, points, completedChallenges } from '../store.js';
  </script>
  
  <h1>About the UoN Jubilee Campus Challenge</h1>
  <p>
    The UoN Jubilee Campus Challenge is a mixed reality game designed to engage players with the Jubilee Campus of the University of Nottingham.
  </p>
  <p>
    Players can explore the campus, discover historical facts, and complete various challenges to earn points. The game combines digital content with physical experiences, creating a unique and immersive experience for players.
  </p>
  <h2>Current Status</h2>
  <p>Current Location: {$currentLocation}</p>
  <p>Points: {$points}</p>
  <p>Completed Challenges: {$completedChallenges.length}</p>