let usernameRef=document.getElementById("username");
let passwordRef=document.getElementById("password");
let solgöz=document.querySelector(".solgözici");
let saggöz=document.querySelector(".saggözici");
let solel=document.querySelector(".solel");
let sagel=document.querySelector(".sagel");
let agız=document.querySelector(".agız");
let button=document.querySelector(".login");
/*
button.addEventListener("click",(e)=>{
  e.preventDefault();
})
*/


let normalGözsitili=()=>{
    solgöz.style.cssText=`
    left:0.6em;
    top:0.6em;    
    `;
    saggöz.style.cssText=`
    right:0.6em;
    top:0.6em;
    `;
    agız.style.cssText=`
    right:4.6em;
    transform: rotate(180deg);
    top:104px;
    left:65px
    `;
};

let normalElstili = () => {
    solel.style.cssText = `
          height: 3.81em;
          top:8.4em;
          left:7.5em;
          transform: rotate(0deg);
      `;
    sagel.style.cssText = `
          height: 3.81em;
          top: 8.4em;
          right: 7.5em;
          transform: rotate(0deg)
      `;
      agız.style.cssText=`
    
      top: 5.31em;
      left: 3.12em;
    
  
    `;
  
    
    
  };
  usernameRef.addEventListener("focus", () => {
    solgöz.style.cssText = `
      left: 0.75em;
      top: 1.12em;  
    `;
    saggöz.style.cssText = `
      right: 0.75em;
      top: 1.12em;
    `;
   
    
normalElstili();
  });
  
  passwordRef.addEventListener("focus", () => {
    solel.style.cssText = `
          height: 6.56em;
          top: 3.87em;
          left: 11.75em;
          transform: rotate(-105deg);    
      `;
    sagel.style.cssText = `
      height: 6.56em;
      top: 3.87em;
      right: 11.75em;
      transform: rotate(155deg);
    `;
    normalGözsitili();
  });
  //When clicked outside username and password input
  document.addEventListener("click", (e) => {
    let clickedElem = e.target;// eger kullanıcı username icine veya password icine tıklamazsa
    if (clickedElem != usernameRef && clickedElem != passwordRef) {
      normalGözsitili(); //pasworda tıklanıca göz sitili oncelikde degisecek agızda var 
      normalElstili();//daha sonra el stili degisecek yani once gözler oynayacak sonra el
    }
  });