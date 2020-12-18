/*
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello() {
  console.log("hello world");
}
sayHello()

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
function print(message) {
  console.log('the message')
}
print()

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
function printMessage(message) {
  console.log("Today's message is:"+ message)
  }
printMessage(" Hello World!")
/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
function exponent(a) {
 return a ** 2
}
console.log(exponent(12))

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
function reverseMessage(message) {
  return message.split("").reverse().join("");
}
reverseMessage('A man a plan a canal Panama');
// a palandrome
/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
/*function multiply(a, b = null) {
  If (b === null); {
  return a * a;
  } else {
  return a * b;
  }
}
multiply(6,7);
multiply(6);
*/
/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
/* function makePerson(firstname, lastname) {
  firstname: firstname,
  lastname: lastname
}

const zakk = makePerson('Zakk', 'F')
const jimmy = makePerson('Jimmy', 'B')

*/
/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */
let seiStudent = {
  name: "Bob"
}
for (value in seiStudent) {
console.log(seiStudent[value]);
}
/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */
let seiStudent1 = {
  officeSupplies: ["pens", "pencils", "notebooks", "asprin"]
}
for (key in seiStudent1) {
console.log(seiStudent1[key]);
}

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */
function add(num1,num2) {
  return num1 + num2;
  }
function sum(num1, num2) {
  return num1 + num2
}
console.log(
  sum(
    add(2,5),
    add(3,20)
  )
)
/** Starter Code */
/* let sum = 0

*/
/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */
function sum1(array) {
  var s = 0;
  for (var i = 0; i<array.length; i++) {  
    s = s + array[i];
  }
  console.log(s)
}
sum1([1, 2, 3, 4])
//Found on line.  Can follow logic, however, don't have it in my head yet.
/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
const splitMe = "Put me into an array";
function splitString(string) {
  return string.split(" ");
}
const newString = splitString(splitMe);
console.log(newString);
//From lesson plan.  New functions like split.  Need some practice and repatition to get coding down.  Currently looking everything up.
/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
/* testFunc()()


*/
/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
function add2(a, b) {
  return a + b
}
function addAgain(a, b) {
  return a + b
}
console.log(
  addAgain(
    add2(1,2),
    add2(3,4)
  )
)
  
/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */
function world () {
  console.log ('hello world');
}
function print () {
  world();
}
print();