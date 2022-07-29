const myAge = 24;
// my age is 24 years old
let earlyYears = 2;
// early years is 2 and value will change
earlyYears *= 10.5;
let laterYears = myAge - 2
// my age minus 2 equals laterYears
laterYears *= 4; 
// laterYaers * 4 equals new value of later years
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
// added together this is your dog age
let myName = 'Ezra'.toLowerCase();
// should return ezra
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// should console log a string with all variables interpolated
