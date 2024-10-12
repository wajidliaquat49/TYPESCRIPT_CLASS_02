var userName = "Wajid Ali";
var userAge = 12;
var usefavDishes = ["Biryani", "Chicken", "Rice"];
var userIsMarried = false;
// userAge = "12"  Error
// userAge = {}    Error
// userAge = []    Error
console.log("userName==>", userName);
console.log("userAge==>", userAge);
userIsMarried = true;
var userInformationArray = {
    firstName: "Wajid",
    lastName: "Ali",
    age: 12,
    favSubjects: ["English", "Math"],
    favNumber: [10, 20, 30],
};
// function greet(name:string){
//     console.log(`Hello ${name}`)
// };
// greet("Wajid Ali");
function greet(name) {
    return ("Hello ".concat(name));
}
;
var msg = greet("Wajid Ali");
console.log("Msg==>", msg);
