const https = require('https');

function requestSync(url) {
    const startTime = Date.now();
  
    const response = https.get(url);

    response.on('end', () => {
        const endTime = Date.now();
        const executionTime = endTime - startTime;
        console.log(executionTime);
    });
}

const url = "https://ec2-54-64-246-136.ap-northeast1.compute.amazonaws.com/delay-clock";

requestSync(url);
requestSync(url);
requestSync(url);

