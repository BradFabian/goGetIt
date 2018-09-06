var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
   greeting = ' Good Evening, Tomato Gardens! ';
} else if (hourNow > 12){
    greeting = ' Good Afternoon, Tomato Gardens! ';
} else if (hourNow > 0){
    greeting = ' Good Morning, Tomato Gardens! ';
} else {
    greeting = ' Welcome, Tomato Gardens! ';
}

$("#showGreeting").html('<span>' + greeting + '</span>');