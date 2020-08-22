/*alert("Hello there, welcome to my page👋");*/ 
/*let greeting = "Hello there, welcome to my page👋";
alert(greeting);*/


let name = prompt("What is your name?");
let country = prompt("Where are you from?");

if(name.length > 0 && country !== "Ireland"){
    alert("Hello " + name + "," + " welcome to my page 🤗");
} 
else if (name.length > 0 && country === "Ireland"){
    alert("Fáilte " + name + ", " + " welcome to my page 🤗");
} else{
    alert("Hello" + " stranger!" + " welcome to my page 🤗");
}

