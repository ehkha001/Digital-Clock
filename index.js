    const hourEl = document.getElementById("hours");
    const minutEl= document.getElementById("minutes");
    const secondEl= document.getElementById("second");
    const ampmEl= document.getElementById("ampm");
   
updateClock();

    function updateClock() {
       let h = new Date().getHours();
       let m = new Date().getMinutes();
       let s = new Date().getSeconds();
       let a = "AM";
       
if (h < 12) {
    a = "PM";
}

       /*
       if(h < 10){
        h = "0" + h;
       }
      */
       // Conditional Operator eller Ternary Operator
       h = h < 10 ? "0" + h : h;
       m = m < 10 ? "0" + m : m;
       s = s < 10 ? "0" + s : s;

      /*  if(m < 10) {
        m = "0" + m;
       } */
    /*
       // Conditional Operator eller Ternary Operator
       m = m < 10 ? "0" + m : m;
     
       if(s < 10) {
        s = "0" + s;
       }
    */
      hourEl.innerText = h; 
      minutEl.innerText = m;
      secondEl.innerText = s;
      ampmEl.innerText = a;

      setTimeout(() => {
        updateClock();
      }, 1000) ;

    }

