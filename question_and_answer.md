## Question & Answer

### 1. Write the correct answer from the following options and give an explanation (2-5 lines).
```JavaScript
let greeting;
greetign = {};
console.log(greetign);
```

* Ans: A: {}
**Explanation:** Here, declared a variable called 'greeting', but assigning an empty object to a variable called 'greetign'.So, the 'greeting' variable is assigned an empty object.

### 2.  Write the correct answer from the following options and give an explanation (2-5 lines).
```JavaScript
function sum(a, b) {
  return a + b;
}
sum(1, "2");
```

* Ans: D: 3
**Explanation:** Here, two parameters, 'a' and 'b' and returns their sum.However, when call the function the second parameter passing the string "2".But we know JS is dynamically typed language, so it
converting the string to a number before performaing the addition. So, the second parameter converted string to number. Therefore, the result of the sum function would be 3.

### 3. Write the correct answer from the following options and give an explanation (2-5 lines).
```JavaScript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

* Ans: A: ['🍕', '🍫', '🥑', '🍔']
**Explanation:** Here, food is an array and info is an object with a property of 'favoriteFood'initialized to the first element of the food array. Then we reassign the 'favoriteFood' property but 'food' array itself is not 
modifies. So, it will remain the same. So, correct ans is A.

### 4. Write the correct answer from the following options and give an explanation (2-5 lines).
```JavaScript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

* Ans: B: Hi there, undefined
**Explanation:** Here, sayHi function we have a parameter 'name'. But when we call the function with sayHi(), there no parameter provide. So, parameter will be undefined.

### 5. Write the correct answer from the following options and give an explanation (2-5 lines).
```JavaScript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);
```

* Ans: C: 3
**Explanation:** Here, we initialized a variable count to 0 and an array 'nums' with elements 0-3. When we using forEach method to iterate over the array 'nums' and increment the count variable. If condition is true than count otherwise no. 
So, the correct ans is 3.