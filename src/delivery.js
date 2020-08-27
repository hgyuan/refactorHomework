const {getDeliveryTimeModel} = require("../src/deliveryTimeModel")
function calculateDeliveryTime(anOrder,value,isRush) {
  let deliveryTime = getDeliveryTimeModel(isRush,anOrder.deliveryState);
  return anOrder.placedOn.plusDays(value + deliveryTime);
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    return calculateDeliveryTime(anOrder,1,isRush);
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
