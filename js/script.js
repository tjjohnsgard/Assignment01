// STEP 01: Convert identifiers to Camel Case
//let someMonth
//function theMonth()
//let currentMonth
//let summerMonth
//let myLibraryFunction

//STEP 02: Sample expressions
//numeric literal expression
//59.9
//string literal expression
//'Todd'
//Boolean literal expression
//true
//null literal expression
//null

//STEP 03: Two examples of complex / variable expressions
//let anExpr1 = 0 + 7
//let anExpr2 = 9 - 2

//STEP 04: Declare (but do not assign) 9 variables
//firstName =
//lastName =
//address =
//city =
//strState = 
// Presumes 'state' to be a string
//nZipCode
// Presumes 'zip code' to be a number
//nYourAge =
// Presumes 'your age' to be a number
//strReferralSource =
// Presumes 'referral source' to be a string
//bMayWeContactYou =
// Presumes 'may we contact you' to be a boolean

//STEP 05: 3 ways for declaring and assigning values
//nZipCode = 92111
//strState = "CA"
//bMayWeContactYou = false

//STEP 06: Create a variable
//var add = number + string;

//STEP 07: Create two variables
//var booleanVal = true;
//var stringVal = "Jay";
//var add = booleanVal + stringVal;
//console.log("Coerce add:", add);
//Output: "trueJay"

//STEP 08: String literal valid?
//not valid
//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
//console.log(someString)
//valid
//let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
//console.log(someString);

//STEP 09: Null value variable
//let mNullVar = null;
//console.log(mNullVar);

//let mUndefVar;
//console.log(mUndefVar);

//STEP 10: unary operator on various literals
//console.log(typeof "Hiya");
// Output: string
//console.log(typeof 789);
// Output: number
//console.log(typeof true);
// Output: boolean
//console.log(typeof {});
// Output: object
//console.log(typeof undefined);
// Output: undefined

//STEP 11: In a alert box, use concatenation operator
//var firstName = "Todd";
//var lastName = "Johnsgard";
//var msg = "Hello " + firstName + " " + lastName + ", welcome to the JavaScript class!";
//alert(msg);

//STEP 12: Var 'name'. Sub name alert string with variable
//var name = "Todd Johnsgard";
//alert(name);

//STEP 13: Var 'course' = “JavaScript”. alert string using variables
//var course = "JavaScript";
//alert("Welcome to the " + course + " course!");

//STEP 14: Rework string, add line break “Welcome”
//var firstName = "Todd";
//var lastName = "Johnsgard";
//var course = "JavaScript";
//var msg = "Hello " + firstName + " " + lastName + ".\nWelcome to the " + course + " class!";
//alert(msg);

//STEP 15: Replace hardcoded string of name with prompt ask for  name
//var name = prompt("What is your name?");
//var course = "JavaScript";
//var msg = "Hello " + name + ".\nWelcome to the " + course + " class!";
//alert(msg);

//STEP 16: Replace hardcode string class w/prompt ask user class prompt response = course var
//var name = prompt("What is your name?");
//var course = prompt("What class are you in?");
//var msg = "Hello " + name + ".\nWelcome to the " + course + " class!";
//alert(msg);

//STEP 17: Declare x = 10, y = 20, add values, console display
//var x = 10;
//var y = 20;
//var sum = x + y;
//console.log("Sum of", x, "and", y, "is:", sum);

//STEP 18: Var x assign 20, Add assign 20 to var, display result in console
//var x = 20;
//x += 20;
//console.log("Value of x + 20 is:", x);

//STEP 19: var x = 20, multiply by 5 variable, display in console
//var x = 20;
//x *= 5;
//console.log("Value of x after multiply by 5 is:", x);

//STEP 20: Var x = remainder of 20/3. Divide assign 1 to var display console
//var x = 20 % 3;
//console.log("Remainder of 20 divided by 3 is:", x);

//STEP 21: Set Compare & Logical ops, write appl eval true display console
//var x = 3;
//var y = 6;
//var res = (x < y) && ((x + y) === 9);
//console.log("Result of expression is:", res);

//STEP 22: Set Compare & Logical ops, appl eval false, display console
//var x = 4;
//var y = 7;
//var res = (x >= y) && ((x * y) === 28);
//console.log("Result of expression is:", res);