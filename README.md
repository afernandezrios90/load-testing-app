# Load Testing App
Repository for deploying a tool to execute load tests on apps.
The tool is based on Grafana k6

> [!IMPORTANT]
> The main script configuration for the test (`load-test.js`) has been configured to test [virtual-store-app](https://github.com/afernandezrios90/virtual-store). To test to another app or service, adapt the script as desired.

## Functionality

It simulates requests to several endpoint of my application.

## Repo structure
TBD

## Considerations
-

## Installation
1. Clone the repository
```bash
git clone https://github.com/afernandezrios90/load-testing-app.git
```
2. Adjust the parameters of the testing if desired
3. Run using Docker compose
```bash
docker-compose up -d
```
4. Review the test results