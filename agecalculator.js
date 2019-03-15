/* _____________switching code to a function

var birth_date = '1/11/1988'; //initialis a var to hold my birth date

var pick_date = birth_date.split("/"); //Split my birth date into an array and save the values in a new variable
var birth_year = parseInt(pick_date[2]); //Pick the last value of the array which will be the year and save it in another var
var my_birth_date = 2019 - birth_year; //subtract my birth year(after changing its string returned type to an integer) from the current year to get my age and save it in another variable
console.log("I am " +my_birth_date +" years old"); //print my calculated age a long with some words
______________ */

/* use arrow functions

function calculate_myage (birth_date)
{
var my_array = birth_date.split("/");

var birth_year = parseInt(my_array[2]);

var my_age =2019 - birth_year;

console.log ("I am " + my_age +" years old");
}
calculate_myage('1/11/1988'); 
switching to arrow function */

calculate_myage = (birth_date) => 
{
var my_array = birth_date.split("/");

var birth_year = parseInt(my_array[2]);

var my_age =2019 - birth_year;

console.log ("I am " + my_age +" years old");	
}

calculate_myage("1/11/1988")
