const http = require('http');

function requestCallback(url, callback) {
  const startTime = Date.now();
  http.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const endTime = Date.now();
      const executionTime = endTime - startTime;
      callback(`Asynchronous callback request took ${executionTime} ms`);
    });
  });
}

function requestPromise(url) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    http.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        resolve(`Asynchronous Promise request took ${executionTime} ms`);
      });
    });
  });
}

async function requestAsyncAwait(url) {
  try {
    const result = await requestPromise(url);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const url = "https://ec2-54-64-246-136.ap-northeast1.compute.amazonaws.com/delay-clock";

requestCallback(url, console.log);
requestPromise(url).then(console.log);
requestAsyncAwait(url);