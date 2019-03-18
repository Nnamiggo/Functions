/*
Using if..else, write the code which gets a number using prompt and then shows in console.log:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
Save the file as null_checker in the same folder that you saved yesterday's work 
*/

// console.log("my favorite number is 7") // This for the user to see what is happening

// var mynumber = 7;  // initialise the number to seven why? it is my favorite number

// if (mynumber>0) 

// 	{
	
// 	console.log(1 +"-----this means My favorite number is greator than zero"); //Execute this block if my number is grater than 0
// 	}

// 	else if (mynumber<0)
// 	{
// 	console.log (-1 +"-----this means My favorite number is less than zero") //Execute this block if my number is less than 0
// 	}

// 	else
// 	{
// 		console.log(0 +"-----this means My favorite number is equal to zero");  //and this block if my number is equal to zero
// 	}

function mynumber(x) {
	
	console.log("My favorite number is " +x); // This for the user to see what is happening
	
	var test;

if (x>0) 

	{
	
	test = (1 +"-----this means My favorite number is greator than zero"); //Execute this block if my number is grater than 0
	
	}

	else if (x<0)
	{
	test = (-1 +"-----this means My favorite number is less than zero") //Execute this block if my number is less than 0
	
	}

	else
	{
		test=( 0 +"-----this means My favorite number is equal to zero");  //and this block if my number is equal to zero
		 
	}
	
	console.log(test);
}
mynumber(7)
