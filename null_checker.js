/*
Using if..else, write the code which gets a number using prompt and then shows in console.log:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
Save the file as null_checker in the same folder that you saved yesterday's work 
*/

// Pseudo code

/*
1. Define a an arrow function that takes in one number as an argument
2. Print the number out
3. Test the number for the given three alternatives, print the required block if the code block evaluates to true
*/


test_number=(mynumber) => { 

 	console.log("my favorite number is " + mynumber)

	if (mynumber>0) 


	{

	console.log(1 +"-----this means My favorite number is greator than zero"); //Execute this block if my number is grater than 0
	}

	else if (mynumber<0)
	{
	console.log (-1 +"-----this means My favorite number is less than zero") //Execute this block if my number is less than 0
	}

	else
	{
		console.log(0 +"-----this means My favorite number is equal to zero");  //and this block if my number is equal to zero
	}
}

test_number(7);