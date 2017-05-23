Numerical Algorithm - 6th Laboratory
====================================

* Authors : Florian Fasmeyer
* School : HE-Arc - Ingénierie (Neuchâtel, Switzerland)
* Date : 23th May, 2017

Objectives
----------

The objective of this laboratory is to create a program capable of simulating the velocity over time of a 
falling object with a parachute. The code must be as simple as possible. The approximation is meant to be 
quick so the user can toy around with the interface in real time. The user should be able to limit the 
maximum number of iterations/use of memory so as it does not prevent users with potato level spec 
computers to run it.

Method
------

### Choice of algorithm

The program use Euler's method as it is simple to implement and easy on processing time, ideal
for live 
calculations while the user plays with the variables.


### Velocity accuracy

The terminal velocity is known, we can compare it with the final velocity to get the accuracy. NB. We are 
using a convergent funciton on dv(velocity), the more we let it turn the more we will approach the real 
value. The only thing that may diverge is not the velocity but the time at wich we reach terminal velocity.

### Time accuracy

To get a better accuracy of the time at wich we reach terminal velocity we must lower tha value of dt.
The more we lower dt the more memory wand processing time we will use.


User manual
-------------

### How to use this parachute simulator?

Open the html file in a web browser (fire fox) and have fun!

### Options

Mass: Set the mass of your object + parachute
Velocity : Set the initial velocity of your object. Positive is going up.
Area : Area of the parachute. The bigger, the faster it will slow.

### Advanced options

Before using thoses variables you must know what you are doing, you might freez your browser for a few 
seconds otherwise.

accuracy: Set the accuracy of dv. The smaller the more accurate it will be. If dt it too high you might
lose on time accuracy as the velocity already reached the best terminal velocity given dt.
iter.: Set the maximum number of iterations. Makes sure you never require more memory than your computer
can provide. 
dt : Set the difference of time between each step of the simulation. The smaller, the better will be the
time accuracy, but you will need more time to process and use more memory.

--

Advanced options are for advanced users they might cause your web browser to freez. To avoid that you
can set the maximum iterations to a desired value. Be warned, if the maximum iteration is too low
the computation of your function will be stopped and plotted as is.

If your can not afford too much iterations you might want a higher Δt 0.001 -> 0.1. On the other side if you have
enought computational power and want more accuracy on the time it takes to reach terminal velocity
you might want to lower Δt 0.1 -> 0.001.


Files
-----

* **AN_Labo6_Florian_Fasmeyer.html** Program view
* **AN_Labo6_Florian_Fasmeyer.js**  Script
* **js** contain .js file (libraries used to plot graphs and do nice things)

Conclusion
----------

This programm works well, the default advanced settings allow the user enought freedom to play
and experiment while being incredibly fast and seamless. Advanced settings are avaliable for
users with more RAM and computational power to require more accurate results.

NB: This application is meant to be used live with the graph changing as the user change the variables.
Due to the nature of differential functions, allowing too much iterations to occure can cause isues since
every change in variable will trigger a calculation.