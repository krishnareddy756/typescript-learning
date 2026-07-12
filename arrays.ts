// let arr: number[] = [1, 2, 3, 4, 5];
// let newarr=arr.map((x)=>{
//     return x*2;
// });
// let newarr1=arr.map((x)=>x*3);
// console.log(newarr);
// console.log(newarr1);

// arr.forEach((x)=>{
//     console.log(x*4);
// });
// let  manufacturers:any[] = [
//     { "id": "Samsung", "checked": false },
//     { "id": "Motorola", "checked": false },
//     { "id": "Apple", "checked": false },
//     { "id": "Sony", "checked": false }
// ];
// console.log("1. Displaying a message using forEach():");
// function display(){
//     console.log("Products to display...");
// }
// manufacturers.forEach(display);
// console.log("2. Available Products using: forEach() array function:");
// manufacturers.forEach( function(manufacturer) {
//     console.log(manufacturer);
// });


// let mfs:string[] = ["Samsung", "Motorola", "Apple", "Sony"];
// let newmfs:string[]=mfs.map(x=>x.toUpperCase());
// console.log(newmfs);

// let filterarr:string[]=mfs.filter((x)=>{
//     return x.length>=6;
// });
// let farr:string[]=mfs.filter(x=>x.length<6);
// console.log(farr);
// console.log(filterarr);

// mfs.forEach((x)=>console.log(x));

// let nums:number[]=[1,2,3,4,5,6];
// function filters(num:number):boolean{
//     return num%2==0;
// }
// let arrs:number[]=nums.filter(filters);
// console.log(arrs);

// Syntax:-  Array.find(callback)
// console.log("====== Simple find() example =========");
// let manufacturers: string[] = ["apple", "sony","motorola","samsung"];
// function findManufacturer(manufacturer: string) {
//     if (manufacturer.length > 5) {
//         return true;
//     }
// }
// let foundManufacturer: string|undefined = manufacturers.find(findManufacturer);
// console.log(foundManufacturer);

// let arr:{id:string,check:boolean}[]=[
//     {"id":"sam","check":true},
//     {"id":"ram","check":false},
//     {"id":"saam","check":true},
//     {"id":"raam","check":false}
// ];
// let res:string[]=arr
//     .filter(x=>x.check==true)
//     .map(x=>x.id);
// console.log(res);
// const mobilePriceArray: number[] = [25000, 15499, 27500, 18799];
// const incrementedPriceArr =
//     mobilePriceArray.filter(
//         function (number) {
//             return number % 2 !== 0
//         }).map(function (number) {
//             return number + 400
//         });
// console.log(incrementedPriceArr); // => [15899,19199]

// let subjects: string[] = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
// subjects.map(value => value.toUpperCase()) // converts all the elements to upper case
//     .filter(subjects => parseInt(subjects.substr(-2, 2)) > 65) // filters only the subjects having score greater than 65
//     .forEach(sub => console.log(sub)); // displays all the filtered subjects in console
//  let subs:string[]=["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];

//  subs
//     .map(x=>x.toUpperCase())
//     .filter(x=>parseInt(x.slice(-2))>65)
//     .forEach(x=>console.log(x));

// let result: string[] = subs
//     .map(subject => subject.toUpperCase())
//     .filter(subject => {
//         let marks: number = Number(subject.split("-")[1]);
//         return marks > 65;
//     });

// console.log(result);

let nums:number[]=[105, 5, 293, 153, 17, 2, 1, 371, 95, 407];
function isArms(x:number):boolean{
    let len=x.toString().length;
    let sum:number=0;
    let num:number=x;
    while(x>0){
        let d:number=x%10;
        sum+=Math.pow(d,len);
        x = Math.floor(x / 10);
    }
    return num==sum;
}
let arms:number[]=nums.filter(isArms);
console.log(arms);