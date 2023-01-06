const button=document.querySelector(".button");
const features=document.querySelector(".hamburger");
button.addEventListener("click",()=>{
    features.classList.toggle("active");
})