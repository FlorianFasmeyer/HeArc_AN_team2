	
	Numeric Algorithm course, team2 
	HES-SO HE-ARC - 09.03.2017
	
	Florian Fasmeyer
	Marc Friedli
	Paul Ami Jeanbourquin

## Explore the 37-Bit Precision floating-point variable with JavaScript

Click on the link to access the [floating-point sandbox](https://htmlpreview.github.io/?https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo1/labo1.html) using HTML Preview.



## Description

In this exercise, we crafted a custom floating-point type with 37 pseudo bits instead of 32. Floating-point types are designed to represent real numbers, such as the constant Pi (e.g., Pi = 3.14159). The structure of the floating-point type involves a sign bit, indicating the positive or negative sign, an exponent that determines the scale of the number, and the storage of the value in the mantissa array.

Our type uses 1 bit for the sign (+/-), 9 bits for the exponent and 27 bits for the mantissa.
	
## Exponent (9 bits)

The exponent is capable of storing 511 different values in binary. To accommodate the representation of infinitesimally small values in our floating point system, we adjust the exponent to support negative values. To achieve this, we subtract half of 510 (i.e., 255) from the exponent. This modification results in an exponent range spanning from 255 to -255.

	e		[510;0]
	e-255 		[255;-255]
 	e (decimal)	[+76;-77]

			
## Mantissa (27 bits)

A mantissa represents the number being used in the numerical representation. In the following (but simplified) example, a decimal representation, -1.234, has a sign of (-), an exponent of -3 and a mantissa of 1234.

	# This representation might be inaccurate but conveys the idea effectively.
 	-1.234 =  (-)1234 * 10^-3 

In binary, the first bit of the mantissa is always active. Therefore, it is not stored and is instead implied. This means that our floating-point number is 37 bits + 1 implied bit.

The mantissa determines the accuracy of our results. In the classical 32-bit floating points, numbers with more than 6 significative decimals tend to lose accuracy. For example, in Python, 0.2 + 0.1 = 0.30000000000000004. Given the 17 decimal accuracy (before encountering an error), we can deduce that Python's floating points use 64-bit floating-points. As shown, we can represent every integer from 268'435'456 to -268'435'456 without inaccuracy.

	# This example demonstrates the existence of the hidden bit and how we determine...
 	# ... the min/max value before losing accuracy.
	accuracy		27 + 1 bits	[1]111 1111 1111 1111 1111 1111 1111
	accuracy (decimal)   	8 decimals	268'435'456


Accurate up to 2^28 for exponents*. In other words, the accuracy spans the range from 0 to 268,435,456. However, as soon as you add 1 to this range, the first inaccuracy emerges, as the precision fails to increment. As a rule of thumb, with our 37-bit type, you need to maintain at least 8 decimals of accuracy consistently. The following example demonstrates those "ranges" of accuracy. Every line represents a number covered by the floating-point representation, with each stack composed of 268'435'456 lines:
	
![visualisation of every values covered by a floating point type](https://jasss.soc.surrey.ac.uk/9/4/4/fig1.jpg)

 
## Manual

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
		
## File content
	
	README.txt	-	YOU ARE HERE !
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
		
## Author commentary

We initially chose not to utilize typedArray objects, stating that for sizes exceeding 32 bits, only 'Float64Array' was available. However, we later discovered that this statement was inaccurate. We could have employed a 32-bit typed array, such as Uint32Array for the mantissa, Uint16Array for the exponent, and a single boolean for the sign. The decision to stick with the initial approach was made despite this realization, leading to relatively processor-intensive binary operations for their intended purpose.

