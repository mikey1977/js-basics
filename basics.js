/* Create a `myName` variable and assign it a String value */
var myName = "DevLeague";
/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person  = {name: "DevLeague", age: 38};
/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
function greet(name){
  console.log("Hello, my name is " + name);
}
/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
var canDrive;
  if (person.age >= 16) {
    canDrive = true;
  }
  else {
    canDrive = false;
  }
/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
var dataTypes = [
  str = "string",
  2 > 1,
  {cheese: "gouda", veg: "broccoli"},
  age = null,
  num = 5,
  abc = undefined,


];

/* Create a Dog object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
dog = {
  name: "Spot",
  bark: function () {
    console.log("bark");
  }
};
dog.bark();
