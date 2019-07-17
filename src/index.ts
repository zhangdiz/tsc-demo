// let a: number = 123;
// let arr: Array<Number> = [1, 2, 3]
// let ar: number[] = [2, 3, 4]
// let u:undefined = undefined
// const h1 = document.createElement("h1");
// h1.innerHTML = "xxxxxx"
// document.body.appendChild(h1)

// function getKeys(obj: Object) {
//     return Object.keys(obj)
// }
// enum Color {
//     Red = 2,
//     Blue,
//     Yellow
// }

// console.log(Color.Red, Color.Blue, Color.Yellow)

// enum Status {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// enum Message { 
//     Error = "error message", 
//     ServerError = Error,
//     ClientError = Error 
// } 
// console.log(Message.Error); 

// enum Animal {
//     Dog = 1,
//     Cat = 2
// }

// interface Dog {
//     type: Animal.Dog
// }

// const getLength = (target: string | number): number => { 
//     if ((<string>target).length) { 
//         return (target as string).length; 
//     } else { 
//         return target.toString().length; 
//     } 
// };

// const getFullName = (
//     { firstName, lastName, }: { 
//     // 指定这个参数的类型，因为他是一个对象，所以这里来指定对象中每个字段的类型 
//     firstName: string; // 指定属性名为firstName和lastName的字段的属性值必须为string类型 
//     lastName: string; }
//     ) => { 
//         return `${firstName} ${lastName}`; 
//     };


// interface Vegetables {
//     color?:string,
//     type:string,
//     [prop:string]: any
// }

// const getVegetables = ({ color, type }: Vegetables) => { 
//     return `A ${color ? color + " " : ""}${type}`; 
// };

// getVegetables({
//     type: "tomato",
//     color: "red",
//     size: 12,
//     price: 1.2
// } as Vegetables)


// interface Role{
//     readonly 0:string;
//     readonly 1:string;
// }

// const role:Role = {
//     0: 'xxx',
//     1: 'aaaa'
// }

// role[0] = 'xadadaeda'

// interface AddFunc {
//     (num1: number, num2: number):number
// }

// interface Vegetables {
//     color: string
// }

// interface Tomato extends Vegetables{
//     radius: number
// }

// interface Cat extends Vegetables {
//     length: number
// }

// const tomato:Tomato = {
//     radius: 1.2,
//     color: 'red'
// }

// interface Counter {
//     (): void,
//     count: number
// }

// const getCounter = (): Counter => {
//     const c = () => {
//         c.count++;
//     };
//     c.count = 0;
//     return c;
// }

// const counter:Counter = getCounter();

// counter();

// console.log(counter.count)

// function add(x: number,y:number):number {
//     return x + y
// }

// const add = (x: number,y:number):number {
//     return x + y
// }

// interface Add {
//     (x: number, y: number): number
// }

// let a:Add = (arg1: number, arg2:number):number => arg1 + arg2

// const getArr = (value: any, time:number = 5):any[] => {
//     return new Array(time).fill(value)
// }

// getArr([1], 2).forEach(item => {
//     console.log(item.length)
// })