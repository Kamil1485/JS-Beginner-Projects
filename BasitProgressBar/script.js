var başlat=document.querySelector(".button")
başlat.addEventListener("click",hareket);
var i=0;
function hareket() {
    if(i==0){
        i=1;
        var ilerlemebarı=document.querySelector(".bar");
        var genişlik=0;
        var id=setInterval(cerceve,100); //her biri 1 sn de dolacak 100s de doluyor 
       
        function  cerceve() {
          

            if(genişlik>=100){
                clearInterval(id)//yani ilerleme barı 100 ü geçmesin 100
                i=0; //i yi başa cek 100 e gelince yani
            }
           
            else{
                genişlik+=1;
                ilerlemebarı.style.width=genişlik+"%";//başlangıcta 0 dan başlamasını istiyorum onun icin genişlik 0 verdim
                ilerlemebarı.innerHTML=genişlik+"%";// 5% 6% yazan kısım


            }
           
     
            
            
          } 



    }
    ilerlemebarı.classList.add("active")
  }
 