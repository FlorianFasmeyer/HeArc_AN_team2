Numerical Algorithm - 6th Laboratory
====================================

    Authors: Florian Fasmeyer
    School: HE-Arc - Ingénierie (Neuchâtel, Switzerland)
    Date: 23rd May 2017
    [Readable README](https://github.com/TheGoo-ooo/HeArc_AN_team2/tree/master/Labo6)

Objectives
----------

The objective of this laboratory is to create a program capable of simulating the velocity over time of a falling object with a parachute. The code must be as simple as possible. The approximation is meant to be quick so the user can toy around with the interface in real time. The user should be able to limit the maximum number of iterations/use of memory so that it does not prevent users with potato-level spec computers from running it.

Method
------

### Choice of algorithm

The program uses Euler's method as it is simple to implement and easy on processing time, ideal for live calculations while the user plays with the variables.

### Velocity accuracy

The terminal velocity is known; we can compare it with the final velocity to get the accuracy. NB. We are using a convergent function on dv(velocity), the more we let it run the more we will approach the real value. The only thing that may diverge is not the velocity but the time at which we reach terminal velocity.

### Time accuracy

To get better accuracy of the time at which we reach terminal velocity, we must lower the value of dt. The lower dt is, the more memory and processing time we will use.

User manual
-------------

### How to use this parachute simulator?

Open the HTML file in a web browser (Firefox) and have fun!

### Options

* Mass: Set the mass of your object + parachute
* Velocity: Set the initial velocity of your object. Positive is going up.
* Area: Area of the parachute. The bigger, the faster it will slow.

### Advanced options

Before using those variables, you must know what you are doing; you might freeze your browser for a few seconds otherwise.

* Accuracy: Set the accuracy of dv. The smaller the more accurate it will be. If dt is too high, you might lose time accuracy as the velocity already reached the best terminal velocity given dt.
* Iter.: Set the maximum number of iterations. Make sure you never require more memory than your computer can provide. 
* dt: Set the difference of time between each step of the simulation. The smaller, the better will be the time accuracy, but you will need more time to process and use more memory.

Files
-----

* **AN_Labo6_Florian_Fasmeyer.html:** Program view
* **AN_Labo6_Florian_Fasmeyer.js:** Script
* **js:** Contains .js files (libraries used to plot graphs and do nice things)

Conclusion
----------

This program works well; the default advanced settings allow the user enough freedom to play and experiment while being incredibly fast and seamless. Advanced settings are available for users with more RAM and computational power to require more accurate results.

NB: This application is meant to be used live with the graph changing as the user changes the variables. Due to the nature of differential functions, allowing too many iterations to occur can cause issues since every change in variable will trigger a calculation.
