const hareketler=document.getElementById("hareketler-sayacı");
const zamandegeri=document.getElementById("zaman");
const baslamabutonu=document.getElementById("baslat");
const stopbutonu=document.getElementById("stop");
const oyuncontainer=document.querySelector(".oyun-container")
const sonuc=document.getElementById("sonuc")
const input=document.querySelector(".giris");
const controls=document.querySelector(".controls-container");
const buton=document.querySelector(".al");

let cards;
let interval;
let ilkkart=false;
let ikincikart=false;

//item array //hayvanlar knesnesi burası
const items = [
    { name: "ıntersaller", image: "ıntersaller.jpg" },
    { name: "crocodile", image: "crocodile.png" },
    { name: "macaw", image: "macaw.png" },
    { name: "gorilla", image: "gorilla.png" },
    { name: "tiger", image: "tiger.png" },
    { name: "monkey", image: "monkey.png" },
    { name: "chameleon", image: "chameleon.png" },
    { name: "laram", image: "laram3.png" },
    { name: "piranha", image: "piranha.png" },
    { name: "anaconda", image: "anaconda.png" },
    { name: "sloth", image: "sloth.png" },
    { name: "cockatoo", image: "cockatoo.png" },
    { name: "toucan", image: "toucan.png" },
    { name: "gokyuzu", image: "gokyuzu.jpg" },
   
  ];
//console.log(items[0]["name"])//bee
items.forEach((item)=>()=>{
  item.stlye.height="100px";
  item.stlye.width="100px";


})
//baslama zamanı
let seconds=0;
let minutes=0;
// hareket ve kazanma sayacı
let hareketSayacı=0;
kazanmaSayacı=0;
//zaman süre kısıtlaması
const timeGenarator = () => {
    seconds += 1;
    //minutes logic
    if (seconds >= 60) {
      minutes += 1;
      seconds = 0;
    }
    //format time before displaying
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    zamandegeri.innerHTML = `<span>Zaman:</span>${minutesValue}:${secondsValue}`;
  };

  //For calculating moves
  const sayHaraket = () => {
    hareketSayacı += 1;
    hareketler.innerHTML = `<span>Moves-Hadi:</span>${hareketSayacı}`;
  };
//rastgele obje çekme items den rastgele foto bilgisi iceren
const rastgelecek = (size = 4) => {
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardValues = [];
    //size should be double (4*4 matrix)/2 since pairs of objects would exist
    size = (size * size) / 2;
    //Random object selection //RASGELE RESİM SEÇME KISMI //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (let i = 0; i < size; i++) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      cardValues.push(tempArray[randomIndex]);
      //once selected remove the object from temp array
      tempArray.splice(randomIndex, 1);
    }
    return cardValues;
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! matrixkarıstırıcıda baslıyor tum
  const matrixKarıstırıcısı = (cardValues, size = 4) => {
    oyuncontainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    //simple shuffle
  
  
    cardValues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
      /*
          Create Cards
          before => front side (contains question mark ????)
          after => back side (contains actual image);
          data-card-values is a custom attribute which stores the names of the cards to match later
        */
      oyuncontainer.innerHTML += `
       <div class="card-container" data-card-value="${cardValues[i].name}">
          <div class="card-once">?</div>
          <div class="card-sonra">
          <img src="${cardValues[i].image}" class="image"/></div>
       </div>
       `;
    }


//grid kısmı  kutuya  4 er tane sıgsın
// " auto auto auto auto"  `auto auto auto auto ` da olur farkı 2.sine js degeri ekleyebilrsin $ {size} gibi 4  adet yan yana sütün olacak sekilde olusturma 
oyuncontainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
/*
.oyun-container{
    position: relative;
  width: 100%;
  display: grid;
  gap: 0.6em;



}*/// css de gird tanımlı zaten column ayarladı.!


//tüm cardlar
cards=document.querySelectorAll(".card-container");// dikkat et
cards.forEach((card)=>{ //cardlara tıklamada olacak islem
    card.addEventListener("click",()=>{

        if(!card.classList.contains("matched")){//
        //ters cevir tıklanan kartı //eşleşme icermiyorsa
        card.classList.add("flipped")// ters cevirme işlemi

        //secilen ilk kartsa  
        if(!ilkkart){
            ilkkart=card; //resimlerden biri ilk kart herhangi biri
            //suanki card  degeri ilk karta eşitle demek.!
           ilkkartdegeri=card.getAttribute("data-card-value")//
        }
    
    else{
        // arttır hareketi(hareket sayısı her  2 tıklama 1 arttırır) sectigi kartı ve  2.kartı 
        sayHaraket();
        //ikinci kart ve degeri secme
        ikincikart=card;
        let ikincikartdegeri=card.getAttribute("data-card-value");
        if(ilkkartdegeri==ikincikartdegeri){
            //EGER KULLANICINI SECTİGİ 2 KART EŞİTSE 
             //if both cards match add matched class so these cards would beignored next time
             //YANİ AÇIK KALACAK TERS CEVRİLMEYECEK KARTLAR HER İKİSİNE DE matched sınıfı ekleniyor.
            ilkkart.classList.add("matched")
            ikincikart.classList.add("matched")
            //ilkkartı false ayarla 
            /*bir sonraki kart şimdi ilk olacağından firstCard'ı false olarak ayarlayın*/
            ilkkart=false;
            //kazanmasayacını 1 arttır 
            kazanmaSayacı+=1;

            if(kazanmaSayacı==Math.floor(cardValues.length/2)){
            sonuc.innerHTML=`<h2> Kazandın:</h2>
                             <h4>HareketSayısı:${hareketSayacı}</h4>`   
                    stopgame();//oyunu durdurma cagırıyor daha tanımlamadı bu asamya kadar.
                    if(hareketSayacı<20){
                        sonuc.innerHTML=`
                        <h1>Tebrikler-Güzel Skor:${hareketSayacı}</h1>
                        <h2> Kazandın:</h2>
                        <h4>HareketSayısı:${hareketSayacı}</h4>
                        `  
                        
                    }

                            }
                        }
                            else{
                                //kartlar eşleşmezsee kartları ters cevir //ilkkart ve ikinci kartın degerlrini iceren tempfirst ve tempsecond degiskeni olusyrudu.

                                let[tempFirst,tempSecond]=[ilkkart,ikincikart];
                                ilkkart=false;
                                ikincikart=false;
                                let delay=setTimeout(() => {
                                    tempFirst.classList.remove("flipped");
                                    tempSecond.classList.remove("flipped");
                                }, 900);
                            } 
             }
        
    }
})
})

};



//START  KISMI 
baslamabutonu.addEventListener("click",()=>{ //baslama butonu basınca gizlenecekler

    hareketSayacı=0;
    seconds=0;
    minutes=0;
    //controls ve buttonlar gizli ilk başta
    controls.classList.add("hide");
    stopbutonu.classList.remove("hide");
    baslamabutonu.classList.add("hide")
    //zamanı baslat time
    interval=setInterval(timeGenarator,1000);
    //baslangıc hareketleri
    hareketler.innerHTML = `<span>Moves:</span> ${hareketSayacı}`;
    başlatıcı();


   
})

//oyunu durdurma!
stopbutonu.addEventListener("click",
(stopgame=()=>{
    controls.classList.remove("hide")
    stopbutonu.classList.add("hide")
    baslamabutonu.classList.remove("hide")
    clearInterval(interval);
})
);
// degerleri ve fonksiyon cagrılarını başlatalım
const başlatıcı=()=>{
    sonuc.innerHTML="";
    kazanmaSayacı=0;
    let cardValues=rastgelecek();
    matrixKarıstırıcısı(cardValues); //bu kısım her defasında fotoların  indislerinin yerinin degistiği yer.

    console.log(cardValues) //

}

buton.addEventListener("click",()=>{
    
    let degistirsize=input.value;
    if(degistirsize<=4){
    rastgelecek(degistirsize);
    let card=rastgelecek();
    matrixKarıstırıcısı(card,degistirsize)
    input.value=""
    }
    else{
        alert("Hocamm sana 0-4 arası gir diyorum dikkatli oku")
        input.value="";
    }
    
    })