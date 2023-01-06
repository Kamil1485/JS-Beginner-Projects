const ilerleme=document.querySelector(".ilerleme");
const circles=document.querySelectorAll(".circle");
const geributonu=document.getElementById("btngeri");
const ileributonu=document.getElementById("btnileri");
let suankideger=1;
ileributonu.addEventListener("click",()=>{
    suankideger++;
    if(suankideger>circles.length){
        suankideger=circles.length//!degerimiz circlelların sayısının fazlası olmamalı circellar 1234 sayı olan

    }
    console.log(suankideger);
  //  ilerleme.innerText=suankideger
   güncelle();
})

geributonu.addEventListener("click",()=>{

    suankideger--;
    if(suankideger<1){
        suankideger=0;//&suankidegerimiz circelların uzunlugundan kucuk olmamalı 1234 tane circle varken degeri eger 0 olursa gidecek yer yok!

    }
    //ilerleme.innerText=suankideger
    güncelle();
})


function güncelle(){
    console.log(circles);//dizi döndürür
  
    console.log(circles.length) //4
    circles.forEach((circle,index=index+1)=>{
        console.log(circle)// class verir 4 tane 
        console.log(index)//0 1 2 3 olacak 4 tane circle clası var ve 
      if(index<suankideger){
        circle.classList.add("active");// !mesela index 0 suankideger 1 0.index  active clası eklenecek eger bu guncelle metodu cagrılırsa
        //& active clası  border colorunu degistiriyor
      }
      else{
        circle.classList.remove("active")
      }
    })

    const actives=document.querySelectorAll(".active");
   // ilerleme.style.width=((actives.length-1)/(circles.length-1))*100+"%";
    ilerleme.style.width=((actives.length-1)/(circles.length-1))*100+"%"; //index 0 dan baslıyor foreach ile circlelları aldık onun icin circles.length=4 ama  index olarak 1 2 3 4 demek 0 dan baslatmak icin -1
if(suankideger==circles.length){
    ileributonu.disabled=true;
}
else if(suankideger<1){
    geributonu.disabled=true;
}

else{
    ileributonu.disabled=false;
    geributonu.disabled=false;
}
//&bu ksımlar  tutugumuz ındıs degeri tasma olursa ussteki kodlarla buton  üzerinde uyarı isareti olusuyor tıklanmıyor!
console.log(actives.length-1)// 
}

/*
const progress = document.getElementById("ilerleme");
const prev = document.getElementById("btngeri");
const next = document.getElementById("btnileri");
const circles = document.querySelectorAll(".circle");


let currentValue = 1;

next.addEventListener("click", function () {
    currentValue++;
    if (currentValue > circles.length) {
        currentValue = circles.length;
    }
    update();
});

prev.addEventListener("click", function () {
    currentValue--;
    if (currentValue < 1) {
        currentValue = 1;
    }
    update();
});

function update() {
    console.log(circles);
    circles.forEach((circle, index) => {
        if (index < currentValue) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentValue === circles.length) {
        next.disabled = true;
    } else if (currentValue <= 1) {
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }
}
*/