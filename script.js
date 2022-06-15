let powerOff = document.getElementById("powerOff");
let powerOn = document.getElementById("powerOn");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let modulus = document.getElementById("modulus");
let add = document.getElementById("add");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let subtract = document.getElementById("subtract");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let multiply = document.getElementById("multiply");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let divide = document.getElementById("divide");
let point = document.getElementById("point");
let num0 = document.getElementById("num0");
let equals = document.getElementById("equals");

let display = document.getElementById("display");

powerOff.addEventListener('click', function() {
    display.value = " ";
})

powerOn.addEventListener('click', function() {
    display.value = document.getElementById("display").innerHTML;
})

clear.addEventListener('click', function() {
    console.log(clearOutput());
})

del.addEventListener('click', function() {
    console.log(deleteInput());
})

modulus.addEventListener('click', function() {
    console.log(displayValue("%"));
})

add.addEventListener('click', function() {
    console.log(displayValue("+"));
})

num7.addEventListener('click', function() {
    console.log(displayValue("7"));
})

num8.addEventListener('click', function() {
    console.log(displayValue("8"));
})

num9.addEventListener('click', function() {
    console.log(displayValue("9"));
})

subtract.addEventListener('click', function() {
    console.log(displayValue("-"));
})

num4.addEventListener('click', function() {
    console.log(displayValue("4"));
})

num5.addEventListener('click', function() {
    console.log(displayValue("5"));
})

num6.addEventListener('click', function() {
    console.log(displayValue("6"));
})

multiply.addEventListener('click', function() {
    console.log(displayValue("*"));
})

num1.addEventListener('click', function() {
    console.log(displayValue("1"));
})

num2.addEventListener('click', function() {
    console.log(displayValue("2"));
})

num3.addEventListener('click', function() {
    console.log(displayValue("3"));
})

divide.addEventListener('click', function() {
    console.log(displayValue("/"));
})

point.addEventListener('click', function() {
    console.log(displayValue("."));
})

num0.addEventListener('click', function() {
    console.log(displayValue("0"));
})

equals.addEventListener('click', function() {
    console.log(calculate());
})


function displayValue(number) {
    display.value += number;
}

function clearOutput() {
    display.value = " ";
}

function deleteInput() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}