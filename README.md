# Prototypal Inheritance in JavaScript
This will describe how prototype inheritance working in JavaScript

### Prototype
When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

### Prototypal Inheritance
When we read a property from Object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

The property [[prototype]] is internal and hidden, but there are many ways to set it. One of them is to use the special name _proto_, like this:

![Alt text](/images/proto.PNG?raw=true "Optional Title")

Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal. So if animal has a lot of useful properties and methods, then they become automatically available in rabbit. Such properties are called “inherited”.

### Objects
A JavaScript object is a collection of named values. It is a common practice to declare objects with the const keyword.

const person = {firstName:”John”, lastName:”Doe”,age:50};

The named values, in JavaScript objects, are called properties. Methods are actions that can be performed on objects.

If we want to create multiple objects with same type of values, it is difficult to create every object in above way. Instead of that we can create object constructor function. We can create object with new keyword and pass values as parameters to the constructor function.

![Alt text](/images/constructor%20function.PNG?raw=true "Optional Title")

Okay. What if we want to add new property to the Person object now. If it is for a single object we can just add it as,

myFather.nationality= “English”;

But if we want to add new property to every object, we have to add that to the constructor function. In this case prototype inheritance comes into action. We can add new property using prototype.

Person.prototype.nationality = “English”;

All JavaScript objects inherit properties and methods from a prototype. The Object.prototype is on the top of the prototype inheritance chain.

### Summary
In JavaScript, all objects have a hidden [[prototype]] property that’s either another object or null.
We can use obj.__proto__ to access it.
The object referenced by [[prototype]] is called a “prototype”.
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
If we call obj.method(), and the method is taken from the prototype, this still references obj . So methods always work with the current object even if they are inherited.

### Get in touch
Linkedin -> https://www.linkedin.com/in/tharaka-udayanga-61a424166/