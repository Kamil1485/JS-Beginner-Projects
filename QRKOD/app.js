const wrapper=document.querySelector(".wrapper");
const button=document.querySelector(".button");
const ınput=document.querySelector(".form input");
const ımg = wrapper.querySelector(".qr-code img")
let oncekideger;
button.addEventListener("click",()=>{
    let qrdegeri=ınput.value;
    if(qrdegeri!=null || oncekideger != ınput){
      
    

        preValue = ınput;
        button.innerText="Generating..."
        ımg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example`
        ımg.addEventListener("load",()=>{
           
            wrapper.classList.add("active");
            button.innerText="Generate A QR"
         
        })
    
    };


 
})
ınput.addEventListener("keyup",()=>{
    if(!ınput.value.trim()){
        wrapper.classList.remove("active");
        preValue = "";
    }
})
