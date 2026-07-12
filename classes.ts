// class Empolyee{
//     empid:number;
//     empname:string;
//     constructor(empid:number,empname:string){
//         this.empid=empid;
//         this.empname=empname;
//     }
//     getEmpid():number{
//         return this.empid;
//     }
//     getEmpname():string{
//         return this.empname;
//     }
//     getDetails():string{
//         return "empid :"+this.empid+" empname is:"+this.empname;
//     }
// }
// let emp1=new Empolyee(1,"krishna reddy");
// console.log(emp1.empname);
// console.log(emp1.getDetails());

// class Mobile{
//     mobId:number;

//     modelName: string;

//     mobilePrice: number;

//     mobileAvailability: boolean;

//     mobileFeatures:string;
//     constructor(mobId:number,modelName:string, mobilePrice:number,mobileAvailability:boolean,mobileFeatures:string){
//         this.mobId=mobId;
//         this.modelName=modelName;
//         this.mobileAvailability=mobileAvailability;
//         this.mobileFeatures=mobileFeatures;
//         this.mobilePrice=mobilePrice;
//     }
// }
// let mob1=new Mobile()
// let mobiles:Mobile[]=[
//     new Mobile(505,
//         "Honor 9i",
//         18000,
//         false,
//         "3340 mAh battery, 16MP camera"),
//         new Mobile(
//         506,
//         "Mi A1",
//         15000,
//         true,
//         "Qualcomm 625 octa-core"
//     ),

//     new Mobile(
//         507,
//         "Lenovo K6 Note",
//         9920,
//         false,
//         "Metal unibody, 16Mp camera"
//     ),
//      new Mobile(
//         508,
//         "Samsung Galaxy S8",
//         15000,
//         true,
//         "Exynos 8895 octa-core"
//     )
// ];
// function filterByPrice(price:number):Mobile[]{
//     return mobiles.filter(mobile=>mobile.mobilePrice<=price);
// }
// console.log(filterByPrice(10000));

// class Product {
//     private productId: number;
//     public productName: string;
//     public productCategory: string;
//     constructor(productId: number, productName: string, productCategory: string) {
//         this.productId = productId;
//         this.productName = productName;
//         this.productCategory = productCategory;
//     }
//     getProductId() {
//         return "The productId is " + this.productId;
//     }
// }

// let prod1 = new Product(1001, 'Moto G6plus', 'Mobile');
// // As getProductId() method is implemented inside the class Product thus productId is accessible.
// console.log(prod1.getProductId());
// console.log(prod1.productName);
// console.log(prod1.productCategory);
// This would throw an error as we cannot access private properties outside the class
// console.log(prod1.productId);

// class Product {
//     static productName: string = "Mobile"; // Declaring productName property using static keyword
//     static getProductDetails(): string {
//         return "Product Name is" + Product.productName; // Declaring getProductDetails function using static keyword and accessing productName property within it
//     }
//     getProduct(): string {
//         return "Product Name is" + Product.productName; // Accessing static property within non-static function
//     }
// }
// Product.productName = "Tablet";
// console.log(Product.productName);
// console.log(Product.getProductDetails());  //Setting value for static property and accessing the same using property name and function name

class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    work(): void {
        console.log(`Employee is working ${this.name }`);
    }
}

class Developer extends Employee {
    code(): void {
        console.log(`Developer is coding ${this.name}`);
    }
}

const dev = new Developer("Krishna");

console.log(dev.name); // Krishna
dev.work();            // Employee is working
dev.code();            // Developer is coding