
//=========== Types=========\\
// 1: String 
// 2 : Number 
// 3 : Boolen 
// 4 : Object 
// 5 : Function and Return Function 



// (01);
// ========= String & Number & Boolen==========\\;
let userName: string = "Wajid Ali";
let userAge: number = 12;
let usefavDishes: string[] = ["Biryani", "Chicken", "Rice"];
let userIsMarried: boolean = false;

// userAge = "12"  Error
// userAge = {}    Error
// userAge = []    Error

console.log("userName==>", userName);
console.log("userAge==>", userAge);
userIsMarried = true;
//=====================================\\



// (02);
// ========== Object =============\\;
interface userInformation {
    firstName: string;
    lastName: string;
    age: number | string;
    CNIC?: number;
    favSubjects: string[];
    favNumber: number[];
}

let userInformationArray: userInformation = {
    firstName: "Wajid",
    lastName: "Ali",
    age: 12,
    favSubjects: ["English", "Math"],
    favNumber: [10, 20, 30],
}
//=====================================\\



// (03);
// ========== Function & Return Function =============\\;

// function greet(name:string){
//     console.log(`Hello ${name}`)
// };
// greet("Wajid Ali");

//=========Rturn Function========\\;
function greet(name: string): string {
    return (`Hello ${name}`)
};

let msg: string = greet("Wajid Ali");
console.log("Msg==>", msg)

//=====================================\\
