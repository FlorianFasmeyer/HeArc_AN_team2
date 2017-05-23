/*
 *   Numerical Algorithm - 6th Labo.
 *   By Florian Fasmeyer.
 *   21.05.2017
 */
/**
* Simulate a parachute slowing down using Euler's formula.
* Meant to be quick in order to give a fast approximate
* so the user can toy with in on the control panel.
*/
function Parachute(){
	
	//Default(to set)
	this.height = 100;
	this.velocity = -10;
	this.area = 30;
	this.mass = 70;
	//Default(not to set).
	this.airDensity = 1.229;
	this.dragCoef = 1.75;
	this.ΔT = 0.005;
	this.error = false;
	this.procTime=0;
	//Accuracy: (terminal velocity - velocity), stop iteration.
	this.accuracy = 0.0001; 
	this.nbIter = 1E6;
	//Plot points, data to plot things. :-)
	this.points = new Array();
	
	/**
	 * Simulate the parachute being open for ΔT.
	 * @return {Number} velocity - In m/s.
	 */
	this.open = function(){
		let acceleration = (this.drag()+this.gravity())/this.mass;
		let tempVelocity = this.velocity+acceleration*this.ΔT;
	
		if(this.velocity<0 && (tempVelocity>0 || (this.velocity<this.termVel() && tempVelocity>this.termVel()))){
			this.velocity=this.termVel();
			this.error=true;
			return this.termVel();
		}
		else{
			this.velocity = tempVelocity;
			return this.velocity;
		}
	}
	
	/**
	 * Simulate the parachute's deployment until it reaches terminal velocity.
	 * @return {Array[x][y]} points - Points used to plot a graph velocity/time.
	 */
	this.deploy = function(){
		let termVel = this.termVel();
		let timer = performance.now();	
		let stopAt = this.nbIter*this.ΔT;
		this.points.push([0,-this.velocity]);
		for(let i=this.ΔT; i<stopAt && Math.abs(termVel-this.velocity)>this.accuracy; i+=this.ΔT){
			this.open();
			this.points.push([i,-this.velocity]);
		}
		this.procTime=performance.now()-timer;
		return this.points;
	}
	
	/**
	 * Calculate the force of gravity applied on the parachute. 
	 * @return {Number} gravForce - Always negative, in Newtons.
	 */
	this.gravity = function(){
		return -this.mass*9.81;
	}
	
	/**
	 * Calculate the drag of the parachute. The parachute does not work both ways.
	 * @return {Number} dragForce - Always positive as it pushes up, in Newtons.
	 */
	this.drag = function(){
		if(this.velocity>0)
			return 0;
		return Math.pow(this.velocity,2)*this.dragCoef*this.airDensity*this.area*0.5;
	}
	
	/**
	 * Calculate the terminal velocity of the parachute.
	 * @return {Number} terminalVelocity - Negative as it falls, in m/s.
	 */
	this.termVel = function(){
		//dv/dt*m = (v^2)*C1-g*m = 0
		return -Math.sqrt(2*Math.abs(this.gravity())/(this.dragCoef*this.airDensity*this.area));
	}
	
	/**
	 * Set the height of the object.
	 * As it is now, height has no impact on the calculations,
	 * it is meant for future update.
	 * @param {Number} height - Height of the object, in meters.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setHeight = function(height){
		if(height<=0){
			return false;
		}
		else{
			this.height = height;
			return true;
		}
	}
	
	/**
	 * Set the mass of the object+parachute.
	 * Does not simulate the distance between 
	 * @param {Number} mass	- Mass of the object+parachute, in Kg.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setMass = function(mass){
		if(mass<=0){
			return false;
		}
		else{
			this.mass = mass;
			return true;
		}
	}
	
	/**
	 * Set the area of the parachute.
	 * @param {Number} area	- Area of the parachute, in m^2.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setArea = function(area){
		if(area<=0){
			return false;
		}
		else{
			this.area = area;
			return true;
		}
	}
	
	/**
	 * Set the velocity of the object.
	 * @param {Number} velocity	- Velocity of the object, in m/s.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setVelocity = function(velocity){
		this.velocity=velocity;
		return true;
	}
	
	/**
	 * Set ΔT between each iterations, for advanced users.
	 * Be careful you might crash your web browser!
	 * @param {Number} ΔT	- Time differential between each iterations.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setDt = function(dt){
		if(dt<=0)
			return false;
		else
			this.ΔT = dt;
		return true;
	}
	
	/**
	 * Maximum iterations before the approximation stop, for advanced users.
	 * Be careful you might crash your web browser!
	 * @param {Number} iter	- Number of max iterations.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setIterMax = function(iter){
		if(iter<=2)
			return false;
		else
			this.nbIter = iter;
		return true;
	}
	
	/**
	 * Maximum terminal velocity accuracy before the approximation stops.
	 * For advanced users. Be careful you might crash your web browser!
	 * @param {Number} accu	- Accuracy.
	 * @return {Number} bool - True if everything went well.
	 */
	this.setAccuracy = function(accu){
		if(accu<0)
			return false;
		else
			this.accuracy = accu;
		return true;
	}
	
	/**
	 * Display some text on the html page.
	 * @param {String} text	- Text to display.
	 * @param {String} id	- Div to put it on.
	 */
	this.displayText = function(text, id){
		document.getElementById(id).innerHTML=(text);
	}
}
