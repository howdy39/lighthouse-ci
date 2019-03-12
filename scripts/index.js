const lighthouse = require('./lighthouse.js');
const request = require('request');
const scorePromise = lighthouse.getLighthouseScore('https://techthetoaster.stores.jp/')
scorePromise.then((score) => {
  console.log(score);
  const message = {
    performance: score.Performance,
    accessibility: score.Accessibility,
    best_practices: score['Best Practices'],
    seo: score.SEO,
    progressive_web_app: score['Progressive Web App']
  };

  const options = {
    uri: "https://script.google.com/macros/s/AKfycbyMw1wxBBGqYolnrTFTwGIx63DKBQSS-ZKvscZuJTgtthmN1CcI/exec",
    headers: {
      "Content-type": "application/json",
    },
    json: message
  };

  request.post(options, function(error, response, body){});
});