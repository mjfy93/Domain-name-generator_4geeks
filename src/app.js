"bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



const myButton = document.getElementById('myButton');
const myText = document.getElementById('myDomain');
//Arrays
let pronouns = ["the", "my", "his", "a", "our"];
let adjectives = ["happy", "strange", "bright", "sleepy", "great"];
let nouns = ["xylophone", "cactus", "hummingbird", "tulip", "waterfall"];
let extensions = [".com", ".net", ".co", ".io", ".gov"];

//Randomizers
let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
let randomExtension= extensions[Math.floor(Math.random() * extensions.length)];

let newDomain = `${randomPronoun}${randomAdjective}${randomNoun}${randomExtension}`;

myText.textContent = newDomain;


myButton.addEventListener("click", function(){
  let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  let randomExtension = extensions[Math.floor(Math.random() * extensions.length)];

  let newDomain = `${randomPronoun}${randomAdjective}${randomNoun}${randomExtension}`;

  myText.textContent = newDomain;

});
