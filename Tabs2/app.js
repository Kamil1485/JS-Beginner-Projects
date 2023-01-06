let sayfalar=document.querySelectorAll(".tabs h3");
let tabicerikleri=document.querySelectorAll(".tab-content div");
sayfalar.forEach((sayfa,index)=>{
    sayfa.addEventListener("click",()=>{//!baslangıc burdan bak, hangi sayfa üzerine tıklanırsa alttaki islem olcaack baslayacak islemler.
//&mantık su her 1.,2.,3.sayfa icin asagıdaki islemler uygulanacak hangisine tıklarsan mesela 3.tıkladın index 3 olacak herbir kod uygulanacak.
        tabicerikleri.forEach((tabicerği)=>{ 
           //? tabicerği.classList.toggle("active"); //kendim sayfayı gizleme 
            tabicerği.classList.remove("active");
        })
        
        sayfalar.forEach((sayfa)=>{ 
            sayfa.classList.remove("active");
        })
        tabicerikleri[index].classList.add("active");
        sayfalar[index].classList.add("active")
        console.log(index)//&burada sayfalar  3 tane tani foreach ile 3 adetten olusan bir dizi gibi her bir dizi indexi var yani sayfarlar[0]=1.sayfa mesela 


    })//! tıklama  burada bitiyor
})
/* //! active classı tab-contente ayrı tabslara ayrı etki ediyor dikkat et!!
.tab-content .active {
  display: block;
}
.tabs .active {
  background-color: #ffffff;
  color: #4d5bf9;
}


*/

//? selamlar