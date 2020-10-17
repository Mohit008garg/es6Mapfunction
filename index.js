const numberArray = [1,2,3,4,5,6,7];
const numberArrayMultiplyBy2 =  numberArray.map((element)=>element *2);

console.log('numberArray--------', numberArray);
console.log("number array multiply by 2", numberArrayMultiplyBy2);

const employeeList = [
    {
        nameOfEmployee: 'Test Employee 1',
        id: 1,
        salary: 1000
    },
    {
        nameOfEmployee: 'Test Employee 2',
        id: 2,
        salary: 2000
    },
    {
        nameOfEmployee: 'Test Employee 3',
        id: 3,
        salary: 3000
    }
];

const employeeListWithSalaryUpgradation =  employeeList.map((employeeObject)=>
({...employeeObject, salary: employeeObject.salary + 1000}));

console.log("employeeList------", JSON.stringify(employeeList));
console.log("employeeListWithSalaryUpgradation", JSON.stringify(employeeListWithSalaryUpgradation));