//set the date we're counting down to.
var countDownDate = new Date("Nov 30, 2021 16:00:00").getTime();


//Make the countdown update every second
var x = setInterval(function() {
  //Today's Date and Time
  var now = new Date().getTime();

  //Check distance between now and the date
  var distance = countDownDate - now;
  //Calculate for days, hours, minutes and seconds.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  //display result in the timer
  document.getElementById('timer').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds...`;

  //in case the timer ends befre you get there:
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = "The time has Come..."
  }
},1000);
