const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

// JS events can be handled using setInterval()
//function() is repeated every 1000ms (1s)
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
