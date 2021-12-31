var person = prompt("Please enter your name:", "Your name here");
if (person == null || person == "") {
  text = "Hey Visitor,\n Wish you a very\nHappy New Year\n2022";
} else {
  text = "Hey " + person + ", <br/> Wish you a very <br/> Happy New Year <br> 2022";
}
document.getElementById("demo").innerHTML = text;



var index = 0;
var text = 'Hello Geeks of GeeksforGeeks';
var speed = 50;
  
function textEffect() {
    if (index < text.length) {
        document.getElementById("effect")
                .innerHTML += text.charAt(index);
        index++;
        setTimeout(textEffect, speed);
    }
}