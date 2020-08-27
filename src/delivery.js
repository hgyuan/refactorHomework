function calculateDeliveryTime(anOrder,value) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = value;
  } else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = value+1;
  } else {
    deliveryTime = value+2;
  }
  return anOrder.placedOn.plusDays(value + deliveryTime);
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return calculateDeliveryTime(anOrder,1);
  }
  else {
    let deliveryTime;
    if ([
      'MA',
      'CT',
      'NY',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      'ME',
      'NH',
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate,
};
