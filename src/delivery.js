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
    return calculateDeliveryTime(anOrder,2,isRush);
  }
}

module.exports = {
  deliveryDate,
};
