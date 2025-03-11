import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1, // 1 virtual user
  duration: '1m', // Execute for 1 minute
  iterations: 10, // Repeat 10 times
};

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

  sleep(6);  // Wait for 6 seconds before making the next request
}
