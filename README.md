# Load Testing App
Repository for deploying a tool to execute load tests on apps.
The tool is based on Grafana k6

> [!IMPORTANT]
> The main script configuration for the test (`load-test.js`) has been configured to test [virtual-store-app](https://github.com/afernandezrios90/virtual-store). To test to another app or service, adapt the script as desired.

## Functionality

It executes different load tests for a given application. Currently the code includes 3 types:
- Ramp-Up Test --> Progressive load (ideal for testing scalability)
- Stress Test --> Sustained load over time (ideal for testing app limits & performance degradation)
- Spikes --> High punctual load (ideal for testing resiliency)

> [!TIP]
> Uncomment the code area of one of the test, or create the test stages from scratch (the existing ones are simple guidelines to start working with it). One example:
> ```js
> /* Option 3: Spike Test */
> /*
> export const options = {
>   stages: [
>     { duration: '1m', target: 50 },  // First 50 users for 1 minute
>     { duration: '1m', target: 700 }, // Increase to 500 users for 1 minute
>     { duration: '1m', target: 50 },  // Decrease to 50 users for 1 minute
>     { duration: '1m', target: 0 },   // End test
>   ],
> };
> */
> ```

## Installation
1. Clone the repository
```bash
git clone https://github.com/afernandezrios90/load-testing-app.git
```
2. Adjust the test and its parameters if desired
3. Run using Docker compose (don't forget to build the image)
```bash
docker-compose up --build -d
```
4. Review the test results
