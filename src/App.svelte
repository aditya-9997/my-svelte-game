<script>
	import { Router, Route } from 'svelte-routing';
	import Home from './components/Home.svelte';
	import Map from './components/Map.svelte';
	import Challenges from './components/Challenges.svelte';
	import Leaderboard from './components/Leaderboard.svelte';
	import Settings from './components/Settings.svelte';
  </script>
  
  <main>
	<nav>
	  <a href="/">Home</a>
	  <a href="/map">Map</a>
	  <a href="/challenges">Challenges</a>
	  <a href="/leaderboard">Leaderboard</a>
	  <a href="/settings">Settings</a>
	</nav>
  
	<Router>
	  <Route path="/">
		<Home />
	  </Route>
	  <Route path="/map">
		<Map />
	  </Route>
	  <Route path="/challenges">
		<Challenges />
	  </Route>
	  <Route path="/leaderboard">
		<Leaderboard />
	  </Route>
	  <Route path="/settings">
		<Settings />
	  </Route>
	</Router>
  </main>