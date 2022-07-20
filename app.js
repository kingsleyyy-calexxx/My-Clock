// DATE
window.onload = () =>{
    
    var dt = new Date();
    document.getElementById("date").innerHTML = dt.toLocaleDateString();
    }
  
  
  // ANALOG
  setInterval(() => {
      d = new Date(); //object of date()
      hr = d.getHours();
      min = d.getMinutes();
      sec = d.getSeconds();
      hr_rotation = 30 * hr + min / 2; //converting current time
      min_rotation = 6 * min;
      sec_rotation = 6 * sec;
    
      hour.style.transform = `rotate(${hr_rotation}deg)`;
      minute.style.transform = `rotate(${min_rotation}deg)`;
      second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
    // digital
    setInterval(showTime, 1000);
  function showTime() {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      am_pm = "AM";
  
      if (hour > 12) {
          hour -= 12;
          am_pm = "PM";
      }
      if (hour == 0) {
          hr = 12;
          am_pm = "AM";
      }
      if(hour=12){
        hr=12;
        am_pm="PM"
      }
  
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
  
      let currentTime = hour + ":"
              + min + ":" + sec +  am_pm;
  
      document.getElementById("time")
              .innerHTML = currentTime;
  }
  showTime();
  
  const btn = document.getElementById('toggleButton');
  let count = 0;
  btn.addEventListener('click', function onClick(event) {
   
    count++;
  
    if(count%2==1)  
    {
      console.log(count);
    document.body.style.backgroundColor = 'black';
  
    var clc = document.getElementById("clock");
    // clc.setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
    
  
    clc.style.backgroundColor=`blue`;
  
  
    var element = document.getElementById("time");
          element.style.color = "#FF0000";
  
          var variable = document.getElementById("date");
          variable.style.color = "yellow";
          var variable1 = document.getElementById("setup");
          variable1.style.color = "ghostwhite";
  
  }
    else
    {document.body.style.backgroundColor = 'white';
    var clc = document.getElementById("clock");
    // clc.setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=0)");
    
  
    clc.style.backgroundColor=`white`;
  
  
    var element = document.getElementById("time");
          element.style.color = "black";
  
          var variable = document.getElementById("date");
          variable.style.color = "black";
          var variable1 = document.getElementById("setup");
          variable1.style.color = "black";
  }
  });