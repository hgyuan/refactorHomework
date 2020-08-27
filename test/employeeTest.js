const {Employee} = require('../src/employee')
const test = require('ava');

test("should",t=>{
  try {
    const employee = new Employee("", "");

    t.fail()
  }catch (e) {
    t.is("Employee cannot be of type ",e.message)
  }
})