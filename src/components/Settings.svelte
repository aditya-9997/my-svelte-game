<script>
    import { notifications, theme } from '../store.js';
  </script>
  
  <h2>Settings</h2>
  <div>
    <label>
      <input type="checkbox" bind:checked={$notifications} />
      Enable Notifications
    </label>
  </div>
  <div></div>