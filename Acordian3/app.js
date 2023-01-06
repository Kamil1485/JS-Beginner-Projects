const items=document.querySelectorAll(".item");
items.forEach((item)=>{
    item.addEventListener("click",()=>{

        const active=document.querySelectorAll(".item.active");
        if((active)){
            active.forEach((act)=>{
                if(act!=item){
                    act.lastElementChild.style.maxHeight=0;
                    act.classList.toggle(active);

                }

            })
        }
        item.classList.toggle("active");
        const elemntbody=item.querySelector(".body");
        if(item.classList.contains("active")){
            elemntbody.style.maxHeight=elemntbody.scrollHeight+"px";
        }
        else{
            elemntbody.style.maxHeight=0;
        }
    })
})
//BU KOD HATALI