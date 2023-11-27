	
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Florian Fasmeyer
	Marc Friedli
	Paul Ami Jeanbourquin


# Description:	

In this exercise, we create a custom floating
point type with 37 pseudo bits. Those pseudo
bits are simulated within three arrays.

What is a floating point type?
A floating point is a way to represent real
numbers such as Pi = 3.14159.

How is a floating point structured?
A sign bit to indicate the +/- signed.
An exponent to choose the scale of the number.
And finally, the value is stored in the mantissa.
	
Specs:
	
# Exponent:	

e	[510;0]
e-255 	[255;-255]

With an exponent of 0 the hidden bit has a value of 0.5
as our mantissa with hidden bit looks like:

	0.1xxx xxxx xxxx xxxx xxxx xxxx xxxx

e(deci)	[+76;-77]
			
# Mantissa:	

accuracy		28 bits	  	[1]111 1111 1111 1111 1111 1111 1111
accuracy(deci) 	   	8 decimals	268'435'456

Can represent every integer from 268'435'456 to -268'435'456 without inaccuracy

Accurate on 2^28 per exponents*. In other words, from 0 to 268'435'456
as soon as you add 1, you get your first inaccuracy, as it does not 
increment. Rule of thumbs: in decimal, you always have at least 8 bits 
of accuracy. You can have 9 bits but not for all values; be careful!
	
![visualisation of every values covered by a floating point type](https://jasss.soc.surrey.ac.uk/9/4/4/fig1.jpg)

every line in this picture represents a number. Each stack is composed
of 268'435'456 lines.
		
	
# Manual:

	Numerical operations:
		
		declaration		var num = new TeamTwo;
		initialisation		num.equ(n);
		addition		num.add(n);
		substraction		num.sub(n);
		Reading			num.getNumeric();	return n
		
	Binary operations:
		n = {1,0}
		
		num.init(n, [n x 9], [n x 28]);
		
		num.setSgn		(n);  
		num.setExp		([n x 9]);
		num.setMant		([n x 28]);*
		
		num.getSgn();		return  n
		num.getExp();		return [n x 9]
		num.getMant();		return [n x 28]*
		
	* hidden bit + [n x 27]
	
	1.	You can give [n x y] values to setExp(), setMant(). They 
		will only take 28 of most significant bits.
	2.	You can also feet the setters with less values than needed,
		they will assume every forgotten or abnormal bit to be 0.
	3.	Setters and getters are protected against corrupted data.
	4.	You can exceptionally feed setSgn() with -1. It will assume
		it to be 1 (negative)

	Special cases:
				<sgn 1>	<exp 9>	<mant 27>	info
		 0 		0	 	0 		0
		-0 		1	 	0 		0
		NaN		0		1		X			X>0	
		INF+		0		1		0
		INF-		1		1 		0
		
		note: any value returned is compatible with js std,
		-0 even if only displayed as 0 will behave properly
		as 1/(-0) = -Infinity
		
# File content:
	
	README.txt	-	The very file you are reading right now...
	labo1.html	-	Display the results of the project
	js
		main.js			-	demonstrate the use of the TeamTwo type
		typeTeamTwo.js		-	Heart of the project! The type we worked on
		binaryOperatoin.js	-	Simulate byte operations with arrays
		arrayFunc.js		-	Utility functions to work with arrays 
		
	testFiles	-	Some test files used during the project
		adder.html
		test.html
		test2.html
		
# Author commentary:

We initially chose not to utilize typedArray objects, stating that for sizes exceeding 32 bits, only 'Float64Array' was available. However, we later discovered that this statement was inaccurate. We could have employed a 32-bit typed array, such as Uint32Array for the mantissa, Uint16Array for the exponent, and a single boolean for the sign. The decision to stick with the initial approach was made despite this realization, leading to relatively processor-intensive binary operations for their intended purpose.

