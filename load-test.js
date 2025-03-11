import http from 'k6/http';
import { check, sleep } from 'k6';

// Section to define the test configuration in term of stages, duration, virtual users and iterations

// SELECT THE TEST CONFIGURATION
// Uncomment one of the following options to select the desired test configuration

/* Option 1: Ramp-Up Test */
export const options = {
  stages: [
    { duration: '30s', target: 10 }, // 10 users for 30 seconds
    { duration: '30s', target: 50 }, // 50 users for 30 seconds
    { duration: '30s', target: 100 }, // 50 users for 30 seconds
    { duration: '30s', target: 0 }, // no users for 30 seconds
  ],
};

/* Option 2: Stress Test */
/*
export const options = {
  stages: [
    { duration: '1m', target: 50 },  // First 50 users for 1 minute
    { duration: '2m', target: 200 }, // Increase to 200 users for 2 minutes
    { duration: '2m', target: 500 }, // Increase to 500 users for 2 minutes
    { duration: '2m', target: 50 },  // Decrease to 50 users for 2 minutes to see recovery
    { duration: '1m', target: 0 },   // End test
  ],
};
*/

/* Option 3: Spike Test */
/*
export const options = {
  stages: [
    { duration: '1m', target: 50 },  // First 50 users for 1 minute
    { duration: '1m', target: 700 }, // Increase to 500 users for 1 minute
    { duration: '1m', target: 50 },  // Decrease to 50 users for 1 minute
    { duration: '1m', target: 0 },   // End test
  ],
};
*/

export default function () {
  const endpoints = [
    'http://virtual-store:5000/',           // Main page (200 response expected) 
    'http://virtual-store:5000/products',   // Endpoint de productos (200 response expected)
    'http://virtual-store:5000/404',        // Error simulation (404 response expected)
  ];

  let url = endpoints[Math.floor(Math.random() * endpoints.length)]; // Randomly select an endpoint
  let res = http.get(url);      // Make a GET request to the endpoint

  check(res, {
    'is status 200': (r) => r.status === 200 || r.status === 404, // Check if the status code is 200 or 404
  });

}
