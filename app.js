// chapter 01

// 01 Write a script to greet your website visitor using JS alert box.
alert("Welcome to our website!");

// 02 Write a script to display following message on your web page:
alert("Error! Please enter a valid password.");

// 3.Write a script to display following message on your webpage:(Hint:Use line break)
alert("Welcome to JS Land...\n Happy Coding!");

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");

// chapter 02
// 1. Declare a variable called username.
let userName;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
let myName = "Mehtab Alam";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
let message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
let studentName = "Mehtab Alam";
let studentage = 23;
let studentCertification = "Certified Mobile Application Development";
alert(studentName);
alert(studentage);
alert(studentCertification);

// 5. Write a script to display the following alert using one JS variable:
// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g.example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
let email = "mehtaba728@gmail.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”.Display the following
// message in an alert box:
let book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS
let heading = document.createElement("h1");
heading.textContent = "Yah! I can write HTML content through JavaScript";
document.querySelector("body").appendChild(heading);

// 9. Store following string in a variable and show in alert and
// browser through JS
let demoVariable = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(demoVariable);
let heading = document.createElement("h1");
heading.textContent = demoVariable;
document.querySelector("body").appendChild(heading);

// Chapter 03

// 1. Declare a variable called age & assign to it your age.Show
// your age in an alert box.
let age = 23;
alert(age);

// 3. Declare a variable called birthYear & assign to it your
// birth year.Show the following message in your browser:
let birthYear = 1997;
let contentToDisplay = document.createElement("h1");
contentToDisplay.textContent = "My birth year is " + birthYear;
document.querySelector("body").appendChild(contentToDisplay);

// 4. A visitor visits an online clothing store www.xyzClothing.com.Write a script to store in variables the following information: a.Visitor’s name b.Product title c.Quantity i.e.how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T - shirt(s) on XYZ Clothing store”.
let VisitorName = "Mehtab Alam";
let productTitle = "Shampoo";
let qunatity = 5;
let contentToDisplay = document.createElement("h1");
contentToDisplay.textContent = `${vistorName} ordered ${qunatity} ${productTitle} on AR Clothing Store`;
document.querySelector("body").appendChild(contentToDisplay);

// chapter 04

// 1. Declare 3 variables in one statement.
let vOne, vTwo, vThree;

// 2. Declare 5 legal & 5 illegal variable names.
// legal ones
let var1, var2, var3, var4, var5;
// the illegal ones
// let 1var,2var,3var,4var,5var

// chapter 05

// 1. Write a program that take two numbers & add them in a new variable.Show the result in your browser.
let numOne = 5;
let numTwo = 10;
let sum = numOne + numTwo;

let displayer = document.createElement("h1");
displayer.textContent = `Sum of ${numOne} and ${numTwo} is ${sum}`;
document.querySelector("body").appendChild(displayer);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// for subtraction
let sub = numTwo - numOne;
displayer.textContent = `${numTwo} - ${numOne} is ${sub}`;
document.querySelector("body").appendChild(displayer);

// for multiplication
let product = numOne * numTwo;
displayer.textContent = `The product of ${numOne} and ${numTwo} is ${product}`;
document.querySelector("body").appendChild(displayer);

// for division
let division = numOne / numTwo;
displayer.textContent = `${numOne} / ${numTwo} is ${division}`;
document.querySelector("body").appendChild(displayer);

// 3. Do the following using JS Mathematic Expressions
let desiredVariable;
let displayer = document.createElement("h1");
displayer.textContent = `Value after variable declaration is ${desiredVariable}`;
document.querySelector("body").appendChild(displayer);
desiredVariable = 6;
displayer.textContent = `Initial value: ${desiredVariable}`;
document.querySelector("body").appendChild(displayer);
desiredVariable++;
displayer.textContent = `Value after incrementation is ${desiredVariable}`;
desiredVariable = desiredVariable + 7;
displayer.textContent = `Value after addition is ${desiredVariable}`;
desiredVariable--;
displayer.textContent = `Value after decrement is ${desiredVariable}`;
desiredVariable = desiredVariable % 3;
displayer.textContent = `The remainder is ${desiredVariable}`;

// 4. Cost of one movie ticket is 600 PKR.Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

let ticketRate = 600;
let totalAmount = ticketRate * 5;
let displayer = document.createElement("h1");
displayer.textContent = `Total cost to buy 5 tickets to a movie is ${totalAmount}PKR`;
document.querySelector("body").appendChild(displayer);

// chapter 6-9

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
let a = 10;
let displayOne = document.createElement("h2");
displayOne.textContent = `Result:\nThe value of a is: ${a}\n............`;
document.querySelector("body").appendChild(displayOne);
let displayTwo = document.createElement("h2");
displayTwo.textContent = `The value of ++a is: ${
  a + 1
}\nNow the value of a is: ${a + 1}`;
document.querySelector("body").appendChild(displayTwo);

// 3. Write a program that takes input a name from user & greet the user.
let userName = prompt("Enter your name");
document.write("Welcome " + userName);

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.If user does not enter a new number, multiplication table of 5 should be displayed by default.
let userInput = prompt("Enter a number");
if (userInput !== "") {
  for (let i = 1; i <= 10; i++) {
    document.write(`${i} * ${userInput} = ${i * userInput}`);
  }
} else {
  for (let i = 1; i <= 10; i++) {
    document.write(`${i} * 5 = ${i * 5}`);
  }
}

// chapter 17-20

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
const exampleArray = [[], [], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:
const exampleArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
  document.writeln(i);
}

// 4. Write a program to print multiplication table of any number using for loop.
let userInput = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
  document.write(`${i} * ${userInput} = ${i * userInput}`);
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
fruits.forEach((fruit) => {
  document.write(fruit + " ");
});

// 6. Generate the following series in your browser.
// See example output.
// a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// a
let i;
document.writeln("Counting:");
for (i = 1; i <= 10; i++) {
  document.writeln(i + " ");
}

// b
document.writeln("Reverse Counting:");
for (i = 10; i >= 1; i - 1) {
  document.writeln(i + " ");
}

// c
document.writeln("Even:");
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    document.writeln(i + " ");
  }
}

// d
document.writeln("Odd:");
for (i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    document.writeln(i + " ");
  }
}

// e
document.writeln("Odd:");
for (i = 2; i <= 20; i++) {
  if (i % 2 === 0) {
    document.writeln(i + "k");
  }
}

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.
const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt(
  "Welcome to AR Bakery. What do you want to order sir/ma'am?"
);

if (A.includes(userInput)) {
  document.write(
    `${userInput} is available at ${A.indexOf(userInput)} in our bakery.`
  );
} else {
  document.write(`${userInput} is not available in our bakery.`);
}

// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].
const A = [24, 53, 78, 91, 12];
document.write(`Array items: ${A}`);
document.write(`The largest number is ${Math.max(24, 53, 78, 91, 12)}`);

// 9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]
const A = [24, 53, 78, 91, 12];
document.write(`Array items: ${A}`);
document.write(`The smallest number is ${Math.min(24, 53, 78, 91, 12)}`);

// 10. Write a program to print multiples of 5 ranging 1 to 100.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i + " ");
  }
}

// chapter 21-25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.Greet the user using his full name.
const firstName = prompt("Enter your first name");
const lastName = prompt("Enter your last name");
alert(`Your full name is ${firstName} ${lastName}`);

// 2. Write a program to take a user input about his favorite mobile phone model.Find and display the length of user input in your browser
const favoriteMobileModel = prompt("What is your favorite mobile model?");
document.write(`Length of string: ${favoriteMobileModel.length}`);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
const givenString = "Pakistani";
const indexOfN = givenString.indexOf("n");
document.write(`String: ${givenString}`);
document.write(`Index of 'n': ${indexOfN}`);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
const givenString = "Hello World";
const lastIndexOfL = givenString.lastIndexOf("l");
document.write(`String: ${givenString}`);
document.write(`Last index of 'l': ${lastIndexOfL}`);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
const givenString = "Pakistani";
const charAtIndex3 = givenString[3];
document.write(`String: ${givenString}`);
document.write(`Character at index 3: ${charAtIndex3}`);

// 6. Repeat Q1 using string concat() method.
const firstName = prompt("Enter your first name");
const lastName = prompt("Enter your last name");
const fullName = firstName.concat(lastName);
alert(`Your full name is ${fullName}`);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
let cityName = "Hyderabad";
const newName = cityName.replace("Hyder", "Islam");
document.write(`City: ${cityName}`);
document.write(`After replacement: ${newName}`);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
let message =
  "Ali and Sami are best friends.They play cricket and football together.";

document.write(message.replace("and", "&"));

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
const givenString = "472";
const converted = Number(givenString);
document.write(`Value: ${givenString}`);
document.write(`Type: ${typeof givenString}`);
document.write(`Value: ${converted}`);
document.write(`Type: ${typeof converted}`);

// 10. Write a program that takes user input.Convert and show the input in capital letters.
let userInput = "peanuts";
document.write(`User input: ${userInput}`);
document.write(`Upper case: ${userInput.toUpperCase()}`);

// 11. Write a program that takes user input.Convert and show the input in title case.
let userInput = prompt("Your favorite programming language");
document.write(`User input: ${userInput}`);
document.write(`Title case: ${userInput.titleCase()}`);

// 12. Write a program that converts the variable num to string.var num = 35.36; Remove the dot to display “3536” display in your browser.
let num = 35.36;
document.write(`Number: ${num}`);
document.write(" Converted to string: " + num.toString());

// 13. Write a program to take user input and store username in a variable.If the username contains any special symbol among[@ . , !], prompt the user to enter a valid username.
const userName = prompt("User name");
if (
  userName.includes("@") ||
  userName.includes(".") ||
  userName.includes(",") ||
  userName.includes("!")
) {
  alert("Please enter a valid username!");
}

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching, prompt the user whether the given item is found in the list or not.
const a = ["cake", "apple pie", "cookie", "chips", "pattries"];
const userInput = prompt("Search your item").toLowerCase();
if (a.includes(userInput)) {
  alert(`${userInput} is available!`);
} else {
  alert(`${userInput} is not available!`);
}

// 16. Write a program to convert the following string to an array using string split method.var university = “University of Karachi”; Display the elements of array in your browser.
const university = "University of Karachi";
const splitted = university.split("");
splitted.forEach((letter) => document.writeln(letter));

// 17. Write a program to display the last character of a user input.
const userInput = prompt("Your input");
document.writeln(`User input: ${userInput}`);
const userInputLength = userInput.length;
document.write(`Last character of input: ${userInput[userInputLength - 1]}`);

// 18. You have a string “The quick brown fox jumps over the lazy dog”.Write a program to count number of occurrences of word “the” in given string.

// chapter 26-30

// 1. Write a program that takes a positive integer from user & display the following in your browser.a.number b.round off value of the number c.floor value of the number d.ceil value of the number
const number = 3.45214;
document.write(`number: ${number}`);
document.write(`round off value: ${Math.round(number)}`);
document.write(`floor value: ${Math.floor(number)}`);
document.write(`ceil value: ${Math.ceil(number)}`);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.a.number b.round off value of the number c.floor value of the number d.ceil value of the number
const number = prompt("Please enter a negative floating point number");
document.write(`number: ${number}`);
document.write(`round off value: ${Math.round(number)}`);
document.write(`floor value: ${Math.floor(number)}`);
document.write(`ceil value: ${Math.ceil(number)}`);

// 3. Write a program that displays the absolute value of a number.
const number = prompt("Please enter a number");
document.write(`The absolute value of ${number} is ${Math.abs(number)}`);

// 4. Write a program that simulates a dice using random() method of JS Math class.Display the value of dice in your browser.
const randomNumber = Math.round(Math.random() * 6);
document.write(`random dice value: ${randomNumber}`);

// 5. Write a program that simulates a coin toss using random() method of JS Math class.Display the value of coin in your browser
const tossValues = ["heads", "tails"];
const targetingIndex = Math.round(Math.random());
document.write(`random coin value: ${tossValues[targetingIndex]}`);

// 6. Write a program that shows a random number between 1 and 100 in your browser.const randomNumber = Math.round(Math.random() * 100)
document.write(`Random number between 1 and 100: ${randomNumber}`);

// 7. Write a program that asks the user about his weight.Parse the user input and display his weight in your browser.Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
const userWeight = prompt("Enter your weight");
document.write(`The weight of user is ${parseFloat(userWeight)} kilograms`);

// 8. Write a program that stores a random secret number from 1 to 10 in a variable.Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
const secretNumber = Math.round(Math.random() * 10);
document.write(secretNumber);
const userInput = Number(prompt("I have a secret number. Can you guess it?"));
if (userInput === secretNumber) {
  document.write("Congratulations, you did it!");
} else {
  document.write("Sorry you failed!");
}

// chapter 31-34

// 1. Write a program that displays current date and time in your browser.
document.write(new Date().toString());

// 2. Write a program that alerts the current month in words.
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentTime = new Date();
const targettedMonth = currentTime.getMonth();
document.write(`Current month: ${months[targettedMonth]}`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const currentTime = new Date();
const targettedMonth = currentTime.getMonth();
document.write(`Today is: ${months[targettedMonth]}`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
const currentTime = new Date();
const today = currentTime.getDay();
if (today === 0 || today === 6) {
  document.write("It's fun day!");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
const currentTime = new Date();
const today = currentTime.getDate();
if (today < 16) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
const past = new Date("January 1, 1970");
const present = new Date();
const elapsedTimeInMilliseconds = present - past;
const elapsedTimeInMinutes = elapsedTimeInMilliseconds / 60000;
document.write(`Current Date: ${present}`);
document.write(
  `Elapsed milliseconds since January 1, 1970: ${elapsedTimeInMilliseconds}`
);
document.write(
  `Elapsed minutes since January 1, 1970: ${elapsedTimeInMinutes}`
);

// chapter 35-38

// 1. Write a function that displays current date & time in your browser.
const currentTime = function () {
  document.write(new Date());
};

// 2. Write a function that takes first & last name and then it greets the user using his full name.
const greetUser = function (firstName, lastName) {
  document.write(`Hello ${firstName} ${lastName}`);
};

// 3. Write a function that adds two numbers(input by user) and returns the sum of two numbers.
const add = function (numOne, numTwo) {
  return numOne + numTwo;
};

// 5. Write a function that squares its argument.
const square = function (number) {
  return number * number;
};

// 6. Write a function that computes factorial of a number.

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
const counterPrinter = function () {
  let start = Number(prompt("Enter a number to start with"));
  const end = Number(prompt("Enter a number to end with"));

  while (start <= end) {
    document.write(start);
    start++;
  }
};

// 9. Write a function that calculates the area of a rectangle.
//     A = width * height
// Pass width and height in following manner:
// i.Arguments as value
// ii.Arguments as variables
const rectangleArea = function (width, height) {
  area = width * height;
  return area;
};

const width = 10;
const height = 16;

document.write(rectangleArea(20, 3));
document.write(rectangleArea(width, height));

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not ?
const passedString = prompt("Please enter a word");
const stringLength = passedString.length;
let reversed = "";
for (let i = stringLength - 1; i >= 0; i--) {
  reversed += passedString[i];
}

if (passedString === reversed) {
  document.write(`${passedString} is a palindrome.`);
} else {
  document.write(`${passedString} is not a palindrome.`);
}

// chapter 38-42

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
function check_leapyear() {
  //define variables
  var year;

  //get the entered year from text box
  year = document.getElementById("year").value;

  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    alert(year + " is a leap year");
  } else {
    alert(year + " is not a leap year");
  }
}

// Write a function to delete all vowels from a sentence.Assume that the sentence is not more than 25 characters long.

// chapter 58-67
// i.Get element of id “main - content” and assign them in a variable.
const desiredElement = document.getElementById("main-content");

// ii.Display all child elements of “main - content” element.
console.log(desiredElement.childNodes);

// iii.Get all elements of class “render” and show their innerHTML in browser.
const renderElements = document.getElementsByClassName("render");
renderElements.forEach((element) => {
  console.log(element.innerHTML);
});

// iv.Fill input value whose element id first - name using javascript.
const theElement = document.getElementById("first-name");
theElement.innerHTML = "mehtab";

// v.Repeat part iv for id ”last - name” and “email”.
// for last-name
const lnElement = document.getElementById("last-name");
lnElement.innerHTML = "alam";

// for email
const emailElement = document.getElementById("email");
emailElement.innerHTML = "mehtaba728@gmail.com";

// i.What is node type of element having id “form - content”.
const theEl = document.getElementById("form-content");
console.log(theEl.nodeType);
// output: 1

// ii.Show node type of element having id “lastName” and its child node.
const theEl = document.getElementById("lastName");
console.log(theEl.nodeType);
//the node type is 1
//child node is 3

// iii.Update child node of element having id “lastName”.
const theEl = document.getElementById("lastName");
const child = theEl.firstChild;
child.textContent = "updated";
console.log(child);

// iv.Get First and last child of id “main - content”.
const targetEl = document.getElementById("main-content");
const first = targetEl.firstChild;
const last = targetEl.lastChild;

// v.Get next and previous siblings of id “lastName”.
const targetEl = document.getElementById("lastName");
const next = targetEl.nextSibling;
const previous = targetEl.previousSibling;

// vi.Get parent node and node type of element having id “email”
const targetElement = document.getElementById("email");
const parent = targetElement.parentNode;
console.log(parent.nodeType);

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
//                            ***ASSIGNMENT ENDED HERE***                                   //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
