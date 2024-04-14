import { writable } from 'svelte/store';

export const currentLocation = writable('');
export const selectedBuilding = writable('');
export const points = writable(0);
export const completedChallenges = writable([]);
export const notifications = writable(true);
export const theme = writable('light');