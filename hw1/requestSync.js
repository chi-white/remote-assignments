const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

const request = require('sync-request');

function requestSync(url) {
    let startTime = Date.now() ;
    request('GET', url);
    let endTime = Date.now() ;
    console.log(endTime - startTime);
}
let S = Date.now() ;
requestSync(url);
requestSync(url);
requestSync(url);
console.log('total time', Date.now()-S) ;
