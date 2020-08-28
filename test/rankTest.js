const {rating,captainHistoryRisk,voyageProfitFactor} = require('../src/rank')
const test = require('ava');

test('test should return A when rating given voyage with china 19 history length 1', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})

test('test should return A when rating given voyage with china 12 and history length 15 with china', t => {
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
    },{
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
    },{
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

test('test should return A when rating given voyage with east-indies 15 and history length 12 with china cover the voyageProfitFactor', t => {
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





test('history.length<5 and voyage.zone is china and history include china', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result, 3);
  const resultRating=rating(voyage,history);
  t.is(resultRating, 'A');
})

test('history.length>=5 and voyage.zone is china and history include china', t => {
  const voyage = {
    zone: 'china',
    length: 9,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'china',
      profit: 15,
    },
    {
      zone: 'test2',
      profit: 7,
    },
  ];
  const result = captainHistoryRisk(voyage,history);
  t.is(result, 0);
  const resultRating=rating(voyage,history);
  t.is(resultRating, 'A');
})

test('voyage.zone is china ,and history not include china and history.length<=8 and voyage.length<=14', t => {
  const voyage = {
    zone: 'china',
    length: 14,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },
  ];
  const result = voyageProfitFactor(voyage,history);
  t.is(result, 3);
  const resultRating=rating(voyage,history);
  t.is(resultRating, 'B');
})

test('voyage.zone not china ,and history not include china and history.length<=8 and voyage.length<=14', t => {
  const voyage = {
    zone: 'test',
    length: 14,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },
  ];
  const result = voyageProfitFactor(voyage,history);
  t.is(result, 2);
  const resultRating=rating(voyage,history);
  t.is(resultRating, 'B');
})

test('voyage.zone not china and history.length>8 and voyage.length<=14', t => {
  const voyage = {
    zone: 'test',
    length: 14,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },{
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'test',
      profit: 7,
    },
  ];
  const result = voyageProfitFactor(voyage,history);
  t.is(result, 3);
  const resultRating=rating(voyage,history);
  t.is(resultRating, 'B');
})