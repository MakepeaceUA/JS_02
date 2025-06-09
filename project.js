/*Задание 1
const car = {
  manufacturer: "Manufacturer",
  model: "Model",
  year: 2025,
  avgSpeed: 100,

  display() {
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Speed: ${this.avgSpeed} km/h`);
  },

  TravelTime(distance) {
    const speed = this.avgSpeed;
    const driveTime = distance / speed;
    const breaks = Math.floor(driveTime / 4);
    const totalTime = driveTime + breaks; 
    return totalTime;
  }
};

car.display();

const distance = 1000; 
const timeNeeded = car.TravelTime(distance);
console.log(`Time needed to cover ${distance} km: ${timeNeeded.toFixed(2)} hours`);*/


/*Задание 2
function Fraction(num, denom) 
{
  numerator = num;
  denominator = denom;

  this.reduce = function() 
  {
    const gcd = function(a, b) 
    {
      return b === 0 ? a : gcd(b, a % b);
    };
    const CommonDivisor = gcd(Math.abs(numerator), Math.abs(denominator));
    numerator /= CommonDivisor;
    denominator /= CommonDivisor;

    if (denominator < 0) 
    {
      denominator = -denominator;
      numerator = -numerator;
    }
    return this;
  };

  this.add = function(other) 
  {
    const newNumerator = numerator * denom + num * denominator;
    const newDenominator = denominator * denom;
    return new Fraction(newNumerator, newDenominator).reduce();
  };

  this.subtract = function(other) 
  {
    const newNumerator = numerator * denom - num * denominator;
    const newDenominator = denominator * denom;
    return new Fraction(newNumerator, newDenominator).reduce();
  };

  this.multiply = function(other) 
  {
    const newNumerator = numerator * num;
    const newDenominator = denominator * denom;
    return new Fraction(newNumerator, newDenominator).reduce();
  };

  this.divide = function(other) 
  {
    if (other.numerator === 0) 
        {
           throw new Error("Cannot divide by zero");
        }
    const newNumerator = numerator * denom;
    const newDenominator = denominator * num;
    return new Fraction(newNumerator, newDenominator).reduce();
  };

  this.print = function() 
  {
    if (denominator === 1) 
        {
           return `${this.numerator}`;
        }
    return `${numerator}/${denominator}`;
  };
}

const f = new Fraction(3, 4);

console.log("f =", f.print());

console.log("Add:", f.add(5,6).print());
console.log("Subtract:", f.subtract(5,6).print());
console.log("Multiply:", f.multiply(5,6).print());
console.log("Divide:", f.divide(5,6).print());*/



function Time(h, m, s) 
{
  this.hours = h;
  this.minutes = m;
  this.seconds = s;

  this.normalize = function() 
  {
    if (this.seconds >= 60 || this.seconds < 0) 
    {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = ((this.seconds % 60) + 60) % 60;
    }

    if (this.minutes >= 60 || this.minutes < 0) 
    {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = ((this.minutes % 60) + 60) % 60;
    }

    this.hours = ((this.hours % 24) + 24) % 24;

    return this;
  };

  this.changeSec = function(sec) 
  {
    this.seconds += sec;
    return this.normalize();
  };

  this.changeMin = function(min) 
  {
    this.minutes += min;
    return this.normalize();
  };

  this.changeHr = function(hr) 
  {
    this.hours += hr;
    return this.normalize();
  };

  this.print = function() 
  {
    const pad = (num) => String(num).padStart(2, "0");
    console.log(`${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`);
  };
}

const time = new Time(20, 30, 45);
time.print();

time.changeSec(40);
time.print();

time.changeMin(100);
time.print();

time.changeHr(10);
time.print();