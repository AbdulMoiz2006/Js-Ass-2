
var dayOfBirth = prompt("Please enter your day of birth");
var monthOfBirth = prompt("Please enter your month of birth");
var yearOfBirth = prompt("Please enter your year of birth");


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

var age = currentYear - yearOfBirth;
var ageofmonth = currentMonth - monthOfBirth;
var ageofday = currentDay - dayOfBirth;


if (currentMonth < monthOfBirth || (currentMonth == monthOfBirth && currentDay < dayOfBirth)) {

  age--;
  ageofmonth--;
  ageofday--;

}
 

alert("You are " + age + " Years " + ageofmonth + " Months " + ageofday +  " Days old ");









// var currentDate = new Date();
// var currentYear = currentDate.getFullYear();
// var currentMonth = currentDate.getMonth() + 1;
// // var currentDay = currentDate.getDate();



// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(day[currentDate.getDay()]);


// alert(




// var today = new Date()

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var weekday = today.getDay();


// var date = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear();


// alert(" Today is " + days[weekday] + " " + date +  "/"  + month + "/" + year)

