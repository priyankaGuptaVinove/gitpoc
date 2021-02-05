const items = [{
    name: "Bike",
    price: 100,
    name: "TV",
    price: 200,
    name: "Album",
    price: 300,
    name: "Book",
    price: 400,
    name: "Phone",
    price: 500,
    name: "Computer",
    price: 600,
}, ];
const filterArray = items.filter((value) => {
    // console.log(value.price)
    return value.price < 600;
});

//console.log(filterArray);

// second practice
let c = {
    greeting: "Hey!"
};
let d;
d = c;
c.greeting = "hello";
//console.log(d);

// third practice 
function bark() {
    console.log('Hello');
}

bark.animal = 'Dog!';
//console.log(bark); // no error
// This is possible in JavaScript, because functions are objects!
//(Everything besides primitive types are objects)
//function is a special type of object.The code you write yourself isn 't the actual function. 
//The function is an object with properties.This property is invocable.

//4th practice
var z = 1,
    y = z = typeof y;
//console.log(y);
/**
 * The above code will output undefined. The order of execution with the = operator is right to left, which means typeof y will execute first and will return undefined, which will then pass to z and y. Thus, console.log(y); will print undefined.
 * */

// 5th Practice
var Employee = {
    company: 'Vinove'
}
var employee1 = Object.create(Employee);
delete employee1.company;
//console.log(employee1);
/**
 *  For the object employee1, company is a prototype property that can't be deleted using the delete operator
 */

//6th Practice
var a = [1, 2, 3];
a[10] = [99];
console.log(a[6]);