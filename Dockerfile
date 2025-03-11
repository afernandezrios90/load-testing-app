FROM grafana/k6:0.57.0

COPY load-test.js /load-test.js

CMD ["run", "/load-test.js"]
