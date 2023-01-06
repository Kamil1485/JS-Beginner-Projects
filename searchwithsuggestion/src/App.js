import "./style.css"
import { useState} from "react";
var data=require("./data.json");

function App() {
//console.log(data)
/* //kendim
const veriler=document.createElement("div");
data.forEach((tekveri)=>{
  veriler.innerHTML+=`<p> ${tekveri.full_name} </p>`
})
console.log(veriler)
*/
function  degersil() {
  setValue(" ");
  }

//console.log(data[0].full_name) //!Farrel Hoggin

const[value,setValue]=useState("");

const onChange = (event) => {
  setValue(event.target.value);
};//& input icine yazılan degeri bizim value degerine atadık value degeri 
//!input value="selam " olsaydı  baslangıcta input.value yazınca selam verecekti,value degerini degisken yapıyoruz her 
//&input .value degerini onchange metodumuzla bizim tanımladıgımız value adındaki degiskenin icine atadık yani SEARCHE GİRİLEN DEGERLE AYNI DEGER.
const aramagoster=(valuedegerinigir)=>{
console.log("yazdıgın input-degeri:",valuedegerinigir) //! aranan kelime:a yazar searche a yazıp butona tıklarsak
setValue(valuedegerinigir)


//!3
//& fullName !==valuedegerinigir //boyle yazarak aramak istedigimzin üstüne tıkalyınca search kısmında aranacak deger yazacak ama altında listelenmesine gerek yok artık!


}
  return (
  
  <div className="App">
    <h1>ARAMA YAP</h1>
    <div className="search-container">
<div className="search-inner">
<input type="text" placeholder="Search" value={value} onChange={onChange}/>
<button onClick={()=>{aramagoster(value)}}>ARA</button>

</div>
<div className="dropdown">
{data.filter(item=>{
  const valuedegerinigir=value.toLocaleLowerCase();//&yazılan deger  kullanıcının girdigi degerlein kucuk harfe cevrilmisi.
  const fullName=item.full_name.toLocaleLowerCase();//&datadaki fullnameleride tek tek kucuk olarak yazdırıp atadık fullname degiskenimize.!
return  valuedegerinigir && fullName.startsWith(valuedegerinigir) && fullName !==valuedegerinigir/* 3.kısım yukarıdakıicin*/     ;//!3.KISIM ONEMLİ     //yazılan deger var olmalı fullname yazılan degerle baslarsa geri döndür eşleşme kısmı

})//&12 adet liste yapalım her arama icin eger eşleşme  cok fazlaysa,  mesela! ,filterden sonra yaptık cunku filter tüm  arama sonucunda eslesen verileri yazacak daha sonra slice ile 10 adete bolduk
.slice(0,12)

.map((item) => (//&BU KISIM EGER 12 TANESİNDEN BİRİNİ TIKLARSAN OLMASINI İSTEDİGİN KISIM!//her item icin div olusacak ve child olacak bu kısım ekranda bir üstündeki Ana div icinde her child element uniqe key i olmalı eger map arrayle islem yaparsan.!
              <div
                onClick={() => aramagoster(item.full_name)}
                className="dropdown-row"
                key={item.full_name} //!buda onemli dıkkat et !!!!
              >
                {item.full_name}
                
              </div>
            ))
            }
          
        </div>
      </div>
    </div>//app
  );
}

export default App;
