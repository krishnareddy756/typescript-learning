

// function getMobileByManufacturer(manufacturer: string): string[] {
//     let MobileList: string[];
//     if (manufacturer == "Samsung") {
//         MobileList = ["Samsung Galaxy S6 Edge", "Samsung Galaxy Note 7", "Samsung Galaxy J7 SM-J700F"];
//         return MobileList;
//     }
//     else if (manufacturer == "Apple") {
//         MobileList = ["Apple iPhone 5s", "Apple iPhone 6s ", "Apple iPhone 7"];
//         return MobileList;
//     }
//     else {
//         MobileList = ["Nokia 105", "Nokia 230 Dual Sim"];
//         return MobileList;
//     }
// }
// console.log("The available mobile list:" + getMobileByManufacturer("Samsung"));

// function superheroes(universe: string): string[] {
//     let superheroesList: string[]
//     if (universe == "DC") {
//         superheroesList = ["Batman", "Wonder Women", "Superman",]
//         return superheroesList
//     } else if (universe == "Marvel") {
//         superheroesList = ["IronMan", "Captan America", "Hulk",]
//         return superheroesList
//     } else {
//         superheroesList = ["Shaktiman", "Power Rangers"]
//         return superheroesList
//     }
// }
// console.log("My favourite superheroes are "+superheroes("dc"));

// function add(num1:number,num2:number=1):number{
//     return num1+num2;
// }
// console.log(add(1,2));

// console.log("====== Simple Callback=========");
// function displayMobile(callback){
//     console.log("Samsung Galaxy J7");
//     callback();
// }
// function displayPrice(){
//     console.log("It costs Rs.40000");
// }
// displayMobile(displayPrice);




// Use of arrow functions
// let manufacturers = [{ "id": "Samsung","price":15000 },
//         { "id": "Microsoft","price":20000 },
//         { "id": "Apple","price":40000  },
//         { "id": "Micromax","price":10000  }
//     ];
// let test;
// let myFunction = () => {
//   test = manufacturers.filter((manufacturer)=>manufacturer.price>=20000);
// }
// myFunction();
// console.log("The filtered array is");
// for (let i = 0; i < test.length; i++) {
//     console.log(test[i].id);
// }


// // chaining of array functions using arrow function syntax
// let subjects: string[] = ["Mathematics-70", "Science-67", "English-88", "Geography-62", "ComputerSc-55"];
// subjects.map(value => value.toUpperCase())
//     .filter(subjects => parseInt(subjects.substr(-2, 2)) > 65)
//     .forEach(sub => console.log(sub));



function getMobileByManufacturer(manufacturer: string = "Samsung", id?: number): string[] {
    let MobileList: string[];
    if (id) {
        if (id == 101) {
            MobileList = ["Moto G Play, 4th Gen", "Moto Z Play with Style Mod"];
            return MobileList;
        }
    }
    if (manufacturer == "Samsung") {
        MobileList = ["Samsung Galaxy S6 Edge", "Samsung Galaxy Note 7", "Samsung Galaxy J7 SM-J700F"];
        return MobileList;
    }
    else if (manufacturer == "Apple") {
        MobileList = ["Apple iPhone 5s", "Apple iPhone 6s ", "Apple iPhone 7"];
        return MobileList;
    }
    else {
        MobileList = ["Nokia 105", "Nokia 230 Dual Sim"];
        return MobileList;
    }
}
//to test the optional parameter
console.log("The available mobile list:" + getMobileByManufacturer("Apple"));
//to test the default parameter
console.log("The available mobile list:" + getMobileByManufacturer(undefined, 101));

function calculateInterest(
    principal: number,
    rate: number,
    time: number,
    bankRates: number = 1,
    bankName?: string
): number {

    let interest: number =
        (principal * rate * time * bankRates) / 100;

    if (bankName) {
        console.log(
            bankName + " will charge total interest USD " + interest
        );
    } else {
        console.log(
            "Total interest amount will be USD " + interest
        );
    }

    return interest;
}

calculateInterest(10000, 9, 3, 2, "Swiss Bank");

calculateInterest(10000, 9, 3);

const filterSmallWords = (...words: string[]): void => {
    let smallWords: string[] = [];

    words.forEach((word) => {
        if (word.length <= 4) {
            smallWords.push(word);
        }
    });

    console.log(smallWords);
};

filterSmallWords(
    "batter",
    "zoo",
    "care",
    "mate",
    "stale",
    "seek",
    "silence",
    "tail",
    "act",
    "many"
);

let mobiles = [
    {
        color: "Very Silver",
        price: 25000
    },
    {
        color: "Clearly White",
        price: 35000
    }
];

function priceDetails(color: string): void {

    let mobile = mobiles.find(x => x.color === color);

    if (mobile) {
        let finalPrice: number;

        if (mobile.price > 30000) {
            finalPrice = mobile.price - (mobile.price * 5 / 100);
        } else {
            finalPrice = mobile.price - (mobile.price * 10 / 100);
        }

        console.log(finalPrice);
    }
}

priceDetails("Very Silver");
priceDetails("Clearly White");