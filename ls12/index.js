//bai 1
//c0
// function bai1() {
//     return a*a
// }
//c1
// let bai1 =(a)=>{
//     return a*a
// }
//c2
// let bai 1 = a+>a*a
//c3
// let bai1 = (a)=>( a*a);

//bai2

// let bai2 = ['Hello','world']
// console.log(bai2.includes('world'));
// console.log(bai2.indexOf('world'));

// bai3
// let bai3 = (arr, prefix) => (
//     arr.map(item => `${prefix}${item}`)
// )

// console.log(bai3(["one","two","three"], "number : "));

// bai4
    // let doubleValue = (arr) =>{
    //     let result = [];

    //     for(let i = 0; i< arr,lenght; i++){
    //         let num = 2*arr[i];
    //         result.push(num);
    //     }

    //     return result;
    // }

// bai5
    // let arr = [1,2,3,4,5,6];
    // let odd = arr => arr.filter(item => item % 2 !==0);
    // console.log(odd(arr));

// bai6
// let employees = [
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
// ];

// let totalWorkingDays = 0;

// for (let i = 0; i < employees.length; i++) {
//     totalWorkingDays += employees[i].workingDays;
// }

// console.log(totalWorkingDays); 

//bai7
// let getHighestPaidEmployee = employees => 
//     employees.reduce((highest, employee) => 
//         (employee.salary > highest.salary ? employee : highest), employees[0]);

// let employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];

// console.log(getHighestPaidEmployee(employees));