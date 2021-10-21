**_ created by TheBigR _**

simple backend demo app

- for running localy -
  install dependencies,
  run - npm run dev.
  (should be up at port 3001)

  postman requests are at: https://www.getpostman.com/collections/d8b19fb0bd3d160360ee

- known issues
  - duckduckgo response not parsed yet.

duckduckgo -
getting a respone according to a query string.

currencies -
excercise rates of ltc, btc and eth fetched from coinmarketcap.
currency rates saved to db.

cron-job microservice -
go to ./src/microservices/cron-job
run - npm run dev
(should be up at port 3002)
sends a call to the currencies endpoint (/currecny/excersize)
every 5 minutes.

 toggle cron job at:

- localhost:3002/ops/toggle-cron-job



weather -
two methodes for getting the weather from accuweather - either by location key
or by city.

please contact me @ nevoroy@gmail.com for .env file with keys.
