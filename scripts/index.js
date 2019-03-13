const lighthouse = require('./lighthouse.js');
const request = require('request');

const TARGET_URL = process.env.TARGET_URL;
const WEBHOOK_URL = process.env.WEBHOOK_URL;
console.log(TARGET_URL);
console.log(WEBHOOK_URL);

const scorePromise = lighthouse.getLighthouseScore(TARGET_URL)
scorePromise.then((score) => {
  const message = {
    performance: score.Performance,
    accessibility: score.Accessibility,
    best_practices: score['Best Practices'],
    seo: score.SEO,
    progressive_web_app: score['Progressive Web App']
  };

  const options = {
    uri: WEBHOOK_URL,
    headers: {
      "Content-type": "application/json",
    },
    json: message
  };

  request.post(options, function(error, response, body){});
});