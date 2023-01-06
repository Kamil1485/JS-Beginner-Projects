const open=document.querySelector(".open")
const modal=document.querySelector(".modal_container")
const close=document.querySelector("#close")
const modal2=document.querySelector(".modal")

open.addEventListener("click",()=>{
    modal.classList.remove("show");
   modal2.classList.add("show2")
})
close.addEventListener("click",()=>{
    modal.classList.add("show");
    console.log(modal)
})
