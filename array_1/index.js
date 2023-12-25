
let students =[
    {id:1,year:2020,name:"Iqboljon Yuldashov"},
    {id:2,year:2008,name:"Najmiddinov"},
    {id:3,year:2007,name:"Asilbek"},
    {id:4,year:2012,name:"Mominov"},
    {id:5,year:2024,name:"Sardor"},
    {id:6,year:2006,name:"Mohichehra"},
    {id:7,year:2000,name:"Muhhamad"},
    {id:8,year:2019,name:"Shohruh"},
];


let res = students.reduce((value,current)=>{
    console.log(value,current)
},students)
// console.log(res)

// prompt()
//
// let arr=[1,2,4,4];
//
// arr.splice(2,1,3)
// console.log(arr)