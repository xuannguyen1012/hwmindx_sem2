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

//bai8

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// let max = employees[0].workingDays - employees[0].lateDays;
// let indexMax = 0;

// for (let i = 0; i < employees.length;i++) {
//     const element = employees[i]
//     const world = (element.workingDays - element.lateDays)
//     if (world > max) {
//         max = works
//         indexMax =i
//     }
// }

//bai 9
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];

// const groupedEmployees = {};
// employees.forEach(employee => {
    
//     if (!groupedEmployees[employee.name]) {
//         groupedEmployees[employee.name] = [];
//     }
//     groupedEmployees[employee.name].push(employee);
// });
// console.log(groupedEmployees);

// bai10

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
//   ];
  
//   let highestEfficiency = 0;
//   let highestEfficiencyEmployee = null;
  
//   for (let i = 0; i < employees.length; i++) {
//     const employee = employees[i];
//     const efficiency = employee.workingDays / employee.salary;
  
//     if (efficiency > highestEfficiency) {
//       highestEfficiency = efficiency;
//       highestEfficiencyEmployee = employee;
//     }
//   }
  
//   console.log(highestEfficiencyEmployee); 

//bai11
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
//   ];
  
//   const bieuDo = {};
  
//   for (const employee of employees) {
//     const workingDays = employee.workingDays;
//     if (bieuDo[workingDays]) {
//       bieuDo[workingDays]++;
//     } else {
//       bieuDo[workingDays] = 1;
//     }
//   }
  
//   console.log(bieuDo); 

//bai12
// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];

// const newEmployees = employees.map(employee => ({
//     name: employee.name,
//     email: employee.email,
//     workInfo: { workingDays: employee.workingDays, lateDays: employee.lateDays }
// }));

// console.log(newEmployees);

// bai13

let tasks = [ 
    { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
    { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
    { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];

const addTask = (name, description) => {
    tasks.push({ name, description, completed: false });
};

const markTasksCompleted = (taskList, taskNames) => {
    taskList.forEach(task => {
        for (let i = 0; i < taskNames.length; i++) {
            if (task.name == taskNames[i]) {
                task.completed = true;
                break;
            }
        }
    });
};


const sortTasksByName = (taskList, order = 'asc') => {
    taskList.sort((a, b) => {
        if (a.name < b.name) return order === 'asc' ? -1 : 1;
        if (a.name > b.name) return order === 'asc' ? 1 : -1;
        return 0;
    });
};9