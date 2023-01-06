const bilgisayarınsecimitag=document.getElementById("computer-choice");
const kullanıcısecimitag=document.getElementById("user-choice");
const sonuctag=document.getElementById("result");
const secenekler=document.querySelectorAll("button")
let kullanıcısecimi;
let bilgisayarınsecimi;
let sonuc;
secenekler.forEach(secenek=>secenek.addEventListener("click",(e)=>{
    kullanıcısecimi=e.target.id;
   kullanıcısecimitag.innerHTML=kullanıcısecimi;
   rastgelesecim();
   sonucugoster();

}))

function rastgelesecim(){
    let rasgelesayı=Math.floor(Math.random()*secenekler.length);
    if(rasgelesayı==0){
        bilgisayarınsecimi="rock";

    }
    if(rasgelesayı==1){
        bilgisayarınsecimi="scissors";

    }
    if(rasgelesayı==2){
        bilgisayarınsecimi="paper";

    }
    bilgisayarınsecimitag.innerHTML=bilgisayarınsecimi;
}




  function sonucugoster() {
    if (bilgisayarınsecimi === kullanıcısecimi) {
      sonuc = 'its a draw!'
    }
    if (bilgisayarınsecimi === 'rock' && kullanıcısecimi === "paper") {
      sonuc = 'you win!'
    }
    if (bilgisayarınsecimi === 'rock' && kullanıcısecimi === "scissors") {
      sonuc = 'you lost!'
    }
    if (bilgisayarınsecimi === 'paper' && kullanıcısecimi === "scissors") {
        sonuc = 'you win!'
    }
    if (bilgisayarınsecimi === 'paper' && kullanıcısecimi === "rock") {
        sonuc = 'you lose!'
    }
    if (bilgisayarınsecimi === 'scissors' && kullanıcısecimi === "rock") {
        sonuc = 'you win!'
    }
    if (bilgisayarınsecimi === 'scissors' && kullanıcısecimi === "paper") {
        sonuc = 'you lose!'
    }
    sonuctag.innerHTML = sonuc
  }
  