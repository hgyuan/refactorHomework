const {deliveryDate} = require('../src/delivery')
const test = require('ava');

test('test should return 2 when deliveryDate given true and MA',t=>{
  let isRush = true;
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(2,result);
})

test('test should return 3 when deliveryDate given true and MH',t=>{
  let isRush = true;
  let anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(3,result);
})

test('test should return 4 when deliveryDate given true and A',t=>{
  let isRush = true;
  let anOrder = {
    deliveryState: 'A',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(4,result);
})

test('test should return 4 when deliveryDate given true and MA',t=>{
  let isRush = false;
  let anOrder = {
    deliveryState: 'MA',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(4,result);
})

test('test should return 5 when deliveryDate given true and MH',t=>{
  let isRush = false;
  let anOrder = {
    deliveryState: 'NH',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(5,result);
})

test('test should return 6 when deliveryDate given true and A',t=>{
  let isRush = false;
  let anOrder = {
    deliveryState: 'A',
    placedOn: {
      plusDays : function (data) {
        return data;
      }
    }
  }

  let result = deliveryDate(anOrder,isRush)

  t.is(6,result);
})


