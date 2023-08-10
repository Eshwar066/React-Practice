//////////////closure//////////////
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y();
// }
// var z = x();
// console.log(z);

// function x(){
//   for(var i=1;i<=5;i++){
//     function close(i){
//       setTimeout(function(){
//       console.log('i:',i)
//       },i*1000)
//     }
//     close(i);
//   }
//   console.log("Eshwar")
// }
// x();

// setTimeout(function (){
//   console.log('set');
// },5000)

// function x(y){
//   console.log('a');
//   // return y;
//   y();
// }
// x(function y(){
//   console.log('b');
// })

// function area(x){
//   return x;
// }
// function binary(x){
//   return x.toString(2);
// }

// const result=arr.map(binary);
// // const result=arr.map(area);
// // const result1=arr.fetch(5);
// console.log(result);

// const result=arr.filter((x)=> x % 2);
// console.log(result);

// const arr=[1,2,3,4,5];

// const result=arr.reduce(function(max,x){
//   if(x>max) return max=x;
// },0);
// console.log(result);
////////////////////////////////////////////

//callBacks
// function greet(name, callback){
//   console.log(name);
//   callback();
// }
// function callMe(){
//   console.log('hello');
// }
// greet('peter',callMe);

//promises
// const count=true;
// let result= new Promise(function(res,rej){
//   if(count){
//     res('there is a value');
//   }else{
//     rej('no value')
//   }
// });
// console.log(result);
// result.then(function(count){
//   console.log(count);
// }).catch(function(error){
//   console.log(error);
// })

//Async n await
// let Result=new Promise(function(res,rej){
//   setTimeout(function(){
//     res('hello');
//   },5000)
// });

// async function AsyncFun(){
//   let result= await Result ;

//   console.log(result);
//   console.log('hello Eshwar');
// }
// AsyncFun();

////prototype
// function Person(){
//   this.name='Eshwar';
//   this.age=28
// }

// const person1=new Person();
// const person2=new Person();

// Person.prototype.gender='male';

// console.log(Person.prototype);
// console.log(person1.gender)

// const arr=[2,5,7,4,3];
// function double(x){
//   return x*2;
// }

// function Arr(x){
//   return x%2==0;
// }

// function count(add,x){
//   return add+=x;
// }0

// console.log(arr.map(double));
// console.log(arr.filter(Arr));
// console.log(arr.reduce(count));
