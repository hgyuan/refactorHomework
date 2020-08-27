const {rating} = require('../src/rank')
const test = require('ava');

test('test should return A when rating given voyage with china 19 history length 5', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

test('test should return A when rating given voyage with china 12 and history length 5 ', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 12,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('A', result);

})

test('test should return A when rating given voyage with china 12 and empty history  cover the voyageProfitFactor', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    },
    {
      zone: 'china',
      profit: 1,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})


