// functions

// function declaration - this get's hoisted -> we can call the function
// before the declaration
// function greet() {
//     console.log('hello world')
// }

// function expression - this does not get hoisted
// const greet = function () {
//     console.log('hellow world');
// }

function greet(greeting, name) {
    const message = greeting + ' ' + name;
    return message;
}

const message = greet('hi', 'ahmed')
console.log(message) // -> 'hello katka'

function sum(a, b) {
    // const res = a + b;
    // return res;
    return a + b
    // this is unreachable as soon as we process the 'return' we lwwave the function
    const user = 'jan'
}
const result = sum(2, 3); // -> 5
console.log(result)
console.clear();
// Arrays - an ordered collection of different values 

const numbers = [2, 4, 6, 8];
console.table(numbers);

// access one specific value
console.log(numbers[1])

console.clear();
const empty = [];
// adding elements to the array 
// empty[7] = 'a';
// empty[10] = 'b';
// console.log(empty)

// more common way to add elements to an array
// push -> adds elements to the end of the array
empty.push('x');
empty.push('y');
// pop() -> removes elements from the end of the array
empty.pop(); // -> this removes 'y'
empty.pop(); // -> this removes 'x'
console.log(empty)

// adding and removing elements from the beginning of the array
// unshift() and shift()

empty.unshift('a')
empty.unshift('b')
console.log(empty) // -> ['b', 'a']
empty.shift();
console.log(empty) // -> ['a']

// you can also use indexOf the same way as with strings 
// to check if an element is present

const countries = ['usa', 'france', 'uruguay', 'england', 'poland'];

// splice() -> (start, deleteCount, elementsToAdd);
// countries.splice(1, 0, 'spain');
// console.log(countries)
console.clear();
// return an array of all countries starting with 'u'
// function filterOutCountriesWithU(arr) {
//     const filtered = [];
//     // iterate over the input array 
//     for (let i = 0; i < arr.length; i++) {
//         // check if the element we are at starts with u
//         if (arr[i][0] === 'u') {
//             // if yes add it to the result array
//             filtered.push(arr[i])
//         }
//     }
//     return filtered;
// }
// same with for of loop
function filterOutCountriesWithU(arr) {
    const filtered = [];
    // iterate over the input array 
    for (let country of arr) {
        // check if the element we are at starts with u
        if (country[0] === 'u') {
            // if yes add it to the result array
            filtered.push(country)
        }
    }
    return filtered;
}
const filtered = filterOutCountriesWithU(countries)
console.log(filtered)
// iterating over arrays
// using the for loop
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i])
// }

// using the for of loop -> for (let <oneOfTheElements> of <nameOfTheArray>)
// for (let country of countries) {
//     console.log(country)
// }

// forEach()
// countries.forEach(function (country) {
//     console.log(country);
// })

// const countries = ['usa', 'france', 'uruguay', 'england', 'poland'];
function findFrance(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'france') {
            return i;
        }
    }
}
console.log(findFrance(countries))


// multidimensional arrays
const multi = [['a', 'b', 'c'], ['d', 'e', 'f'], ['x', 'y', 'z']];
console.log(multi[0][1]);