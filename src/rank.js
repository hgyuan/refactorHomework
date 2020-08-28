const {ranking, Ranking} = require("../src/Ranking")
const {ChinaRanking} = require("../src/ChinaRanking")

function rating(voyage, history) {
  if (voyage.zone === 'china' && history.some(v => 'china' === v.zone)) {
    return new ChinaRanking(voyage, history).rating();
  }
  return new Ranking(voyage, history).rating();
}

module.exports = {
  rating,
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  }, {
    zone: 'west-indies',
    profit: 15,
  }, {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
