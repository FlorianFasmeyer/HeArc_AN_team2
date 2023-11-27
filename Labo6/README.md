Numerical Algorithm - 6th Laboratory
====================================

    Authors: Florian Fasmeyer
    School: HE-Arc - Ingénierie (Neuchâtel, Switzerland)
    Date: 23rd May 2017
    [Readable README](https://github.com/TheGoo-ooo/HeArc_AN_team2/tree/master/Labo6)

![Example](https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo6/standard.png)

Try It Yourself
---------------

Click on the link to [run the tool](https://htmlpreview.github.io/?https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo6/AN_Labo6_Florian_Fasmeyer.html).


Objectives
----------

This laboratory aims to develop a program that simulates the velocity over time of a falling object equipped with a parachute. The primary goal is to keep the code simple for ease of use. The simulation is designed to provide quick approximations, enabling users to interact with the interface in real-time. Additionally, users should have the flexibility to set limits on the maximum number of iterations or memory usage to ensure that the program remains accessible even for users with potato-spec computers (my laptop).

In essence, this project serves as a thinly veiled pretext to indulge in my passion for space exploration while ostensibly aligning with the coursework requirements of my Bachelor's program. It involves advancing skills in [Kerbal Space Program](https://www.kerbalspaceprogram.com/), creating a valuable tool for the realism mod (In which the starting planet has a similar atmosphere density), all the while fulfilling a crucial graded assignment.



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

Open the [HTML file](https://htmlpreview.github.io/?https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo6/AN_Labo6_Florian_Fasmeyer.html) in a web browser (Firefox, NO chromium!) and have fun!

### Options

* Mass: Set the mass of your object + parachute
* Velocity: Set the initial velocity of your object. Positive is going up.
* Area: Area of the parachute. The bigger, the faster it will slow.

### Advanced options

Before using those variables, you must know what you are doing; you might freeze your browser for a few seconds otherwise.

* Accuracy: Set the accuracy of dv. The smaller the more accurate it will be. If dt is too high, you might lose time accuracy as the velocity already reached the best terminal velocity given dt.
* Iter.: Set the maximum number of iterations. Make sure you never require more memory than your computer can provide. 
* dt: Set the difference of time between each step of the simulation. The smaller, the better will be the time accuracy, but you will need more time to process and use more memory.

### Error messages

![Example - trans sonic](https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo6/transsonic.png)

![Example - super sonic](https://github.com/FlorianFasmeyer/HeArc_AN_team2/blob/master/Labo6/supersonic.png)

Files
-----

* **AN_Labo6_Florian_Fasmeyer.html:** Program view
* **AN_Labo6_Florian_Fasmeyer.js:** Script
* **js:** Contains .js files (libraries used to plot graphs and do nice things)

Conclusion
----------

This program works well; the default advanced settings allow the user enough freedom to play and experiment while being incredibly fast and seamless. Advanced settings are available for users with more RAM and computational power to require more accurate results.

NB: This application is meant to be used live, with the graph changing as the user changes the variables. Due to the nature of differential functions, allowing too many iterations to occur can cause issues since every change in the variable will trigger a calculation.
