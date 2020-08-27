const {printOwing} = require('../src/print')
const test = require('ava');

test("",t=>{
  let invoice={
    customer:"RICHARD",
    dueDate: Date,
    borderSpacing:[
      {
        amount:10
      },
      {
        amount:20
      },
      ]
  }
  let result = printOwing(invoice);
  const today = new Date();
  let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  t.is("*************************** Customer Owes ***************************name: RICHARDamount: 30amount: "+date.toLocaleDateString(),result)

})