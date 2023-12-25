// let account = "webbrain";

// console.log(account);

// let newObj1 = {};
// let newObj2 = new Object();

// let name = "webbrain academy";
// let major = "Frontend";
//
// const ac1 = {
//     name: "Webbrain Academy",
//     major: "Frontend",
//     founded: 2022,
//     students: 1000,
//     mentors: 5,
// };
//
// for (let i in ac1) {
//     console.log(i);
// }

// const ac2 = ac1;

// ac1.name = "test";

// Object.assign(ac2, ac1);

// console.log(ac2);

// const ac2 = structuredClone(ac1);
// ac1.name = "rteta";
// console.log(ac2);

// const ac2 = {
//   name: "Webbrain Academy",
//   major: "Frontend",
// };
// const ac3 = ac1;

// ac3.founded = 2022;

// console.log(ac1);
// console.log(ac3);

// account = "ladjflajsdf";
// Object.freeze(account);
// Object.seal(account);
// account.major = 2022;

// delete account.major;

// console.log(account);

// let name = "major";
// console.log(account.name);
// console.log(account[name]);
// console.log(account["name"]);

// let key = "major";

// console.log(account.major);
// console.log(account[key]);
// console.log(account["major"]);

// console.log(account.'full name');
// console.log(account[0]);
// console.log(account["0"]);
// console.log(account["full name"]);

// console.log(account.surname);
// console.log(account["name"]);

// 1-misol
// let obj = {
//     id:1,
19//     name:'Webbrain',
// }
// let key1 = "id";
// let key2 = "name";
// console.log(key1,key2)

// // 2-misol
// let obj = {
//     id:1,
//     name:'Webbrain',
// }
//
// let key = "id";
// console.log(key);


// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// };
//
// let booleanValues = [];
//
// for (let i in obj) {
//     if (obj[i] === true && typeof obj[i] === 'boolean') {
//        console.log( booleanValues([i, obj[i]));
//     }
// }

let obj = {
    key:"value",
    name:"Husan",
    surename:"Tilovov",
    age:19,
}

for (let i in obj){
    if(typeof obj[i] ==="string"){
        console.log(obj[i])
    }
}