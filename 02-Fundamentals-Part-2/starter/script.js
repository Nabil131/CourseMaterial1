// let abs = "hello";

// function keepTry(s) {
//   console.log(s);
// }

// keepTry(abs);
// keepTry();
// keepTry();

/*

// function declaration because it uses function keyword to declare a function
function juiceMaker(apple, juice) {
  const juices = `${apple} apples and ${juice} juices`;
  return juices;
}

console.log(juiceMaker(3, 2));

const appleJuice = juiceMaker(10, 3);
console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1977);
console.log(age1, age2);

// arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1980));

const retirement = (birth) => {
  const age = 2022 - birth;
  const retireYears = 65 - age;
  return retireYears;
};

const yearsUntilRetirment = function (birthYear, names) {
  const retire = retirement(birthYear);
  if (retire > 0) {
    console.log(`${names} will retire aftter ${retire} years`);
    return retire;
  } else {
    console.log(`${names} has already retired`);
    return -1;
  }
  // return `${names} will retire aftter ${retire} years`;
};
console.log(yearsUntilRetirment(1983, "tim"));
console.log(yearsUntilRetirment(1950, "david"));

// examples
const cutFruit = (fruit) => fruit * 3;
const fruitMaker = (apple, orange) => {
  const appleJuice = cutFruit(apple);
  const orangeJuice = cutFruit(orange);
  return `${appleJuice} apples and ${orangeJuice} oranges`;
};
console.log(fruitMaker(5, 2));

*/

const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

// let avgScore = 0;

const averageScore = function (scores) {
  let avgScore = 0;
  for (let i = 0; i < scores.length; i++) {
    avgScore += scores[i];
  }
  return avgScore / scores.length;
};

const avgDolphins = averageScore(dolphinsScore);
const avgKoalas = averageScore(koalasScore);

console.log(avgDolphins);
console.log(avgKoalas);
