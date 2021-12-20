
// Write a JavaScript function to get the minimum date from an array of dates.   

// Test Data :
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"

function min_date(all_dates) {
    var min_dt = all_dates[0],
     min_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function(dt, index)
     {
     if ( new Date( dt ) < min_dtObj)
     {
     min_dt = dt;
     min_dtObj = new Date(dt);
     }
     });
    return min_dt;
     }
   console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

   
   //Write a JavaScript function that will return the number of minutes in hours and minutes.   

// Test Data :
// console.log(timeConvert(200));
// Output :
// "200 minutes = 3 hour(s) and 20 minute(s)."


function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));

    
    //Write a JavaScript function to get the amount of days of a year.   

// Test Data :
// console.log(days_of_a_year(2015));
// 365
// console.log(days_of_a_year(2016));
// 366

function days_of_a_year(year) 
{
   
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
     return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(days_of_a_year(2015));
console.log(days_of_a_year(2016));


// Write a JavaScript function to get the quarter (1 to 4) of the year.   

// Test Data :
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));
// 2
// console.log(quarter_of_the_year(new Date(2015, 10, 18)));

4function quarter_of_the_year(date) 
  {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
  }


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18)));


// Write a JavaScript function to count the number of days passed since beginning of the year.   

// Test Data :
// console.log(days_passed(new Date(2015, 0, 15)));
// 15
// console.log(days_passed(new Date(2015, 11, 14)));
// 348

function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  console.log(days_passed(new Date(2015, 0, 15)));
  console.log(days_passed(new Date(2015, 11, 14)));
  



 



