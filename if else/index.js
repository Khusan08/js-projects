// let a = "1";

// console.log(typeof +a);
// console.log(typeof Number(a));
// console.log(typeof parseInt(a));
// console.log(typeof parseFloat(a));
// console.log(typeof Number.parseInt(a));
// console.log(typeof Number.parseFloat(a));

// var test = '1'
// var test = '1'

// let title = '1'
// let title = '1'

// console.log(null == undefined);
// console.log(null === undefined);
// console.log(2 ** (2 + 1) / 2);

// let a = null;

// console.log(a + 1);
// console.log(a--);
// console.log(a--);

// let a = 1;

// console.log(true == 1);
// console.log(true === 1);

// console.log(true !== false);
// console.log(true != false);

// console.log(1 !== 0);
// console.log(1 != 0);

// console.log(1 == "0" || false);

// console.log(1 !== "0" || (false && "hey"));
// console.log(1 !== "0" || (true && "hey"));

// console.log(1 !== "0" && false && "hey");
// console.log(!(1 !== "0" && true && "hey"));

// let temp = "sovuq"; // issiq, sovuq, yomgir, qor

// 0 , null, undefined
// if (temp === "issiq") {
//   console.log("Havo issiq, yengil kiyinib oling");
// } else if (temp === "sovuq") {
//   console.log("Havo sovuq, qalin kiyinib oling");
// } else if (temp === "yomgir") {
//   console.log("Havo yomgir, soyabon olib oling");
// } else if (temp === "bulut") {
//   console.log("Havo qor, qalin kiyinib oling, soyabon oling");
// } else {
//   console.log("nomalum ob havo");
// }

// if (temp === "sovuq") {
//   console.log("nomalum ob havo, sovuq");
// }

// temp = 12; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp < 10) {
//   console.log("havo  sovuq");
// } else if (temp < 15) {
//   console.log("havo issiq");
// } else if (temp < 25) {
//   console.log("havo juda issiq");
// }

// temp = 5;
// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp < 25) {
//   console.log("havo juda issiq");
// } else if (temp < 15) {
//   console.log("havo issiq");
// } else if (temp < 10) {
//   console.log("havo  sovuq");
// }

// temp = 25; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) {
//   console.log("havo juda sovuq");
// } else if (temp <= 25 && temp > 15) {
//   console.log("havo juda issiq");
//   console.log("havo juda issiq");
// } else if (temp <= 15 && temp > 10) {
//   console.log("havo issiq");
// } else if (temp <= 10 && temp > 0) {
//   console.log("havo  sovuq");
// } else {
//   console.log("not found");
// }

// if('condition'){'code'}
// else if('condition'){'code'}
// else{'code'}

// if ("condition") console.log("havo juda issiq");
// else if ("condition") return true;
// else return false;

temp = 5; // temp >0 && temp < 10, temp >10 && temp<15, temp >15 && temp<25

// if (temp < 0) console.log("havo juda sovuq");
// else if (temp <= 25 && temp > 15) console.log("havo juda issiq");
// else if (temp <= 15 && temp > 10) console.log("havo issiq");
// else if (temp <= 10 && temp > 0) console.log("havo  sovuq");
// else console.log("not found");

// ? :

// // temp < 0? === if (temp < 0)
// temp < 0
//   ? console.log("havo juda sovuq")
//   : temp < 10
//   ? console.log("havo sovuq")
//   : temp < 15
//   ? console.log("havo issiq")
//   : console.log("havo juda issiq");

// Nullish ?? -> null undefined
// OR || -> null undefined, 0 , false, NaN, "", -1 0n

// console.log(false || 1);
// console.log(false ?? 1);

// console.log(NaN || 1);
// console.log(NaN ?? 1);
// console.log(null || 1);
// console.log(null ?? 1);

// console.log(undefined || 1);
// console.log(undefined ?? 1);

// console.log(2 * 2); //2 ** 2
// console.log(2 * 2 * 2); //2 ** 3
// console.log(2 * 2 * 2 * 2); //2 ** 4


// 1-misol
/*
let a =-4;
if (a>=0){
    console.log(a+1);
}
else {
    console.log(a);
}
*/

//  2-misol
// let a =5;
// if (a>=0){
//     console.log(a+1);
// }
// else {
//     console.log(a-2);
// }

//  3-misol
// let num=0;
// if (num >0){
//     console.log(num+1);
// }
// else if (num<0){
//     console.log(num-2);
// }
// else if (num == 0){
//     console.log(num=10);
// }
// else{
//     console.log("Bunday son yo'q");
// }

// 4-misol
// let a = 1;
// let b=2;
// let c=3;
//
// if (a<0 && b>0 && c>0){
//     console.log(b,c);
// }
// else if (a>0&&b<0&&c>0){
//     console.log(a,c);
// }
// else if (a>0 && b>0&&c<0){
//     console.log(a,b);
// }
// else {
//     console.log(a,b,c);
// }

// // 6-misol
// let a=8;
// let b=10;
// if (a>b){
//     console.log(a)
// }
// else{
//     console.log(b);
// }

// 7-misol
// let a=3;
// let b=5;
// if (a>b){
//     console.log(b)
// }
// else if (a<b){
//     console.log(a);
// }
// else{
//     console.log("Bunda son yo'q");
// }

// 8-misol
// let a=2;
// let b=4;
//
// if (a>b){
//     console.log(a,b)
// }
// else if (b>a){
//     console.log(b,a);
// }
// else {
//     console.log("BSY")
// }

//  9-misol
// let a =10;
// let b=11;
// if (a>b){
//     console.log(b);
// }
// else if (b>a){
//     console.log(a)
// }
// else {
//     console.log("bsy")
// }

// 12-misol
// let num1=5;
// let num2=7;
// let num3=3;
// if ((num1<num2)&&(num1<num3)){
//     console.log(num1);
// }
// else if ((num2<num1)&&(num2<num3)){
//     console.log(num2);
// }
// else if ((num3<num1)&&(num3<num2)){
//     console.log(num3)
// }
// else {
//     console.log("BSY")
// }

// 13-MISOL CHALA
// let num1=8;
// let num2=10;
// let num3=6;
//
// if ((num1>num2)&&(num1<num3)){
//     console.log(num1);
// }
// else if ((num2>num1)&&(num2<num3)){
//     console.log(num2);
// }
// else if ((num3<num1)&&(num3>num2)){
//     console.log(num3);
// }
// else {
//     console.log("BSY");
// }

// 14-misol chala
// let num1=11;
// let num2=7;
// let num3=9;
// if ((num1<num2)&&(num1<num3) ||(num1>num2)&&(num1>num3) ){
//     console.log(num1,num3);
// }
// else if ((num2<num1)&&(num2<num3)||(num2>num1)&&(num2>num3)){
//     console.log(num2,num3);
// }
// else if ((num3<num1)&&(num3<num2)|| (num3>num1)&&(num3>num2)){
//     console.log(num3,num1);
// }
// else {
//     console.log("BSY")
// }

/*15-misol
let num1=4;
let num2=15;
let num3=9;

if (num1+num2>num3){
    console.log(num1,num3)
}
else if (num2+num3>num1){
    console.log(num2,num1)
}
else if (num3+num1>num2){
    console.log(num3,num2)
}*/

//18-misol
// let a =3;
// let b=2;
// let c=3;
// if ((b==c) && (a!==c) &&(a!==b)){
//     console.log(a);
// }
// else if ((a==c) && (b!==a)&&(b!==c)){
//     console.log(b)
// }
// else if ((a==b)&& (c!==a)&(c!==b)){
//     console.log(c)
// }
// else {
//     console.log("XATO")
// }

// // 19-misol
// let num1=2;
// let num2=1;
// let num3=2;
// let num4=2;
// if ((num2==num3)&&(num2== num4)&&(num3==num4) &&(num1!==num2)&&(num1!==num3)&&(num1!==num4)){
//     console.log(num1);
// }
// else if ((num1==num3)&&(num1==num4)&&(num3==num4)&&(num2!==num1)&&(num2!==num3)&&(num2!==num4)){
//     console.log(num2)
// }
// else if ((num1==num2)&&(num1==num4)&(num2==num4)&&(num3!==num1)&&(num3!==num2)&&(num3!==num4)){
//     console.log(num3)
// }
// else if ((num1==num2)&&(num1==num3)&(num2==num3)&&(num4!==num1)&&(num4!==num2)&&(num4!==num3)){
//     console.log(num4)
// }
// else {
//     console.log("Xato")
// }
//
