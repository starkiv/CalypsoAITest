#WebdriverIO test
##💻 Getting started 💻
NodeJS
For this project you will need NodeJS which you can find here ➡️ https://nodejs.org/en/download/ LTS version is recommended

##👨🏻‍💻 Install the project ‍💻👨🏻
Clone repository

Run npm install in your terminal while you're in the project folder - this will download all dependencies locally

##🛠 Runner 🛠
Using script `npm test` you can trigger the WebdriverIO runner which allows visualizing the tests.

##📟 Running Docker 📟
For running Docker firstly use `docker-compose up` in your terminal (Docker client must be on your machine). 
Then run `npm run test.docker` in the second terminal (while running previous command), that will trigger all tests in the Docker container (Chrome and Firefox).
