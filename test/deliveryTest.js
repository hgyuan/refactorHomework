const {deliveryDate} = require('../src/delivery')
const test = require('ava');

test('test shold ',t=>{
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

test('test shold ',t=>{
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

test('test shold ',t=>{
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

test('test shold ',t=>{
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

test('test shold ',t=>{
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

test('test shold ',t=>{
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


