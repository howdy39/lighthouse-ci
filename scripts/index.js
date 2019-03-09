const lighthouse = require('./lighthouse.js');
const scorePromise = lighthouse.getLighthouseScore('https://techthetoaster.stores.jp/')
scorePromise.then((score) => {
  console.log(score);
  console.log(score.Performance);
});