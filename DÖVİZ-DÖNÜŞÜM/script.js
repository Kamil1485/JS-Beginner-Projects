const button=document.querySelector("form button");
const dropList = document.querySelectorAll("form select")
const fromCurrency = document.querySelector(".from select")
const toCurrency = document.querySelector(".to select")
//console.log(dropList)

console.log(dropList[0]) //TRY KISMI SELECTED
console.log(dropList[1])//USD

//* dropList.length=2 2 tane option kısmımız var !!*/
for (let i = 0; i < dropList.length; i++) {

    for(let currency_code in country_list){
        //let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        let secilen;
        //!DEFAULT OLARAK SECİLENLERİ AYARLIYORUZ TRY VE USD 

        if(i==0){
            secilen=currency_code=="TRY" ?"selected": "";
        }
        else if(i==1){
            secilen=currency_code=="USD" ?"selected": "";
        }
        let optionTag = `<option value="${currency_code}" ${secilen}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag); //   dropList[i].insertAdjacentHTML("afterbegin", optionTag); de olur
      
    }
    dropList[i].addEventListener("change",e=>{
        loadFlag(e.target);
    })
}

//?bayrak degistirme option her degistiginde change,  bayrakyükle fonks cagrılır option hangisi tıklandıysa =e.target ı gönderilir e.target.value tıklananın ta kendisi,
//& gonderilen degeri bakarsın tek tek ülkeler listesinde  mesela e.target.value=MDL sectin country_list[4] o  olsun bunu img  src üne ata.!


function loadFlag(element){
   //console.log(element)//!element=e.target burda tüm optionlar geliyor e.target ile
for(let kod in country_list){
    if(kod==element.value){ //kod burda gonderilen TRY GİBİ  KEY bize  foto degistirmede valuesi lazım oda sehir[kod] ile olur
        let img=element.parentElement.querySelector("img");
        img.src = `https://flagcdn.com/48x36/${country_list[kod].toLowerCase()}.png`; //!kücük harfe cevir country listesinin degerini yani: us.png olmalı ama country_listte US yazmıs büyük harfle tüm sehirler!!

    }
}

}


window.addEventListener("load",()=>{
getExchangeRate();
})

button.addEventListener("click",e=>{//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    e.preventDefault(); //!ilk kısımlardan KODUN TÜM SAYFA İCİN İLK KISIMLARDAN
       getExchangeRate();//!donusum hesaplama fiyatı ve tüm girilenlerle berebare!!!!1
})


//!SON KISIM KODLARIN TÜM
const yerdegistirmeicon=document.querySelector(".drop-list .icon");

yerdegistirmeicon.addEventListener("click",()=>{
    //!SWAP İSLEMİ YAPTIK GECİCİ DEGİSKENİİLE
    let gecicikod=fromCurrency.value; //!SWAP İŞLEMİ İCİN TEMP(GECİCİ)DEGİSKEN TEMPAD TEMP SOYAD NEYSE ! TUTMA!!!!!!!!!!!!!!!!
    fromCurrency.value=toCurrency.value;
    toCurrency.value=gecicikod;

loadFlag(fromCurrency);
loadFlag(toCurrency)
getExchangeRate(); //hesapmalayı tekrar yaptırıyoruz swap islemi oldugu icin 
//üstte yeni bayrakları güncelleyecek fromcurrency kısmının bayragını ve tocurrency yenileyecek degistirdiler ülke adlarını
//daha sonra  degismis bayraklarla hesaplama butonuna basmadan hesaplasın diye otomatik hesaplama yoksa butona basıp aynı hesap olurdu.1


   
})

function getExchangeRate(){ //! PARA BİRİMİNİN DİGER PARA BİRİMİNDEKİ DEGERİ KAÇ ONU HESAPLIYORUZ!!!
    const amount = document.querySelector("form input"); //!İNPUT  TAG İNİ ALDIK
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value; / İNPUTA GİRİLEN DEGER / 
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/603594725a93afb6782848d4/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result =>{
        console.log("datamız:result yani:")
        console.log(result) 
        let exchangeRate = result.conversion_rates[toCurrency.value]; //! DÖNÜSTÜRÜLMEK İSTENENİN DEGERİ
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
                                    //!kullanıcın girdideger from olan yerin secilmis degeri(usd gibi)= girilen deger * donusturulmek istenenin degeri(birim degeri oluyor apide )
    }).catch(() =>{                 //?15 USD=... NPR NDEMEK İCİN MESELA
        exchangeRateTxt.innerText = "Something went wrong";
    });
}














