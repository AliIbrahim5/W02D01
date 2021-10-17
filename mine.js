/*
start solving problems

Function

 */

//
// //1
// const sum =function (a,b) {
//         let sum1 = a + b ;
//         return sum1;
//
//
//
// }
// //2
// const average =function (a,b) {
//
//     let num1 = a+b
//
//     num1 /= 2
//
//     return num1;
//
// }
// //3
//
// const findFactorial = function(num){
//
//     if(num == 0){
//      return
//
//     }else if()
//
//
//
//
//
//
//
//
//
//
// }

//4
// const round = function (number) {
//
//
//     return Math.round(number)
//
//
//
// };

// console.log(round(5.4))

//5
//
// const toThePowerOf = function (base, exponent) {
//
//     return base ** exponent
//
// };
//
// console.log(toThePowerOf(2,2))

//6
//
// const randomNumber = function () {
//
//     return Math.random()
// };
//
//
// console.log(randomNumber(1));

//7
//
// const randomNumber = function () {
//   let num1=  Math.random()*2
//
//     return Math.round(num1)
// };
//
//
// console.log(randomNumber(1));

//8

// const randomRange = function (number) {
//     let num1=  Math.random()*11
//
//      return Math.round(num1)
//
// };
//
// console.log(randomRange(10))
// randomRange(10); // => 10
// randomRange(10); // => 7
// randomRange(10); // => 1
// randomRange(10); // => 0
//

//9
//
// const includeOf = function (string, character) {
//
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === character[i]) {
//             return 'true'
//
//
//         } else {
//             return 'false'
//         }
//
//     }
// };
// // includeOf("Hello", "h"); // => false
// // includeOf("hello", "h"); // => true
// // includeOf("hello", "a"); // => false
// // includeOf("World", "r"); // => true
// // includeOf("World", "a"); // => false
// console.log(includeOf('Ali', 'A'))

/*
The completion of the :Function
////////////////////////////
/////////////////////////
///////////////////////
//////////////////////
start solving problems
Array
 */


//1
// const addToArray = function (array, string) {

//     array.push(string);

//     return array


// };

// console.log(addToArray(['ali','red','blue'],'green'))
//
// addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
// addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]


//2

//
// const addToArray = function (array) {
//
//         return  array.join(' ')
//
//
// }
// console.log(addToArray(['red','blue','black']))

//3
//
// // the array values are unique, no duplicate values in the array
// const updateValue = function (array,index,value) {
//
//     let num = [];
//     return num.splice([])
//
//
// }
//
// updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
// updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
// updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]

//4


//5

const onlyString = function (array) {
    let x
    let array1 = [];
    for (let i = 0; i < array.length; i++){

        if (typeof array[i] === "string") {
             x = array[i]




        } else {


        }

    }
    return x



};

console.log(onlyString(["one", 12, "hi", true, 88, "12"]))
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []



