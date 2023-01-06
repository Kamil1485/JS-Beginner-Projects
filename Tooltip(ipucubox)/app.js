debugger
var spantext=document.getElementById("tooltip");
var foto=document.querySelector("#foto");
foto.addEventListener("mouseover",(e)=>{
  window.onmousemove=function (e) {
    var Sx=e.clientX;
    var y=e.clientY;
    spantext.style.top=(y+20)+ "px";
    spantexSt.style.left=(x +20)+ "px";
    console.log("s")
   
    
  }
})
