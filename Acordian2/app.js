let listElements = document.querySelectorAll('.link');
/*                   <li class="link">
                  <div class="dropdown">
                    <i class="fa-brands fa-react"></i> 
                    React
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <ul class="submenuItems">
                    <li><a href="#">React Level 1</a></li>
                    <li><a href="#">React Level 2</a></li>
                    <li><a href="#">React Level 3</a></li>
                </ul>
            </li>*/

listElements.forEach(listElement => {
    console.log(listElements)//LİSTELEMENT BURDA DROPDOWN,İCON,SUBMENU,LİLERİ TEMSİL EDİYOR TEKTEK HEPSİNİ.
    listElement.addEventListener('click', ()=>{// baslıklara tıklandıgında active class iceriyorsa sil
        if (listElement.classList.contains('active')){// eger linkler active clası iceriyorsa sil
            /*.accordion-menu li.active .submenuItems{
                 display: block;
                }*/
                /*.accordion-menu li.active .submenuItems{
    display: block;
}

*/
            listElement.classList.remove('active');
        }
        else{
            listElements.forEach (listE => {// if kısmı eger tek tek elementler active classı iceriyorsa sil ksmı else 
                listE.classList.remove('active'); // bunun amacıda onceden kalan activeleri silmek icin
            })
            listElement.classList.toggle('active'); ////bu kodun amacı 1.tıkladın acıldı 2.tıkladıgın acılıp 1.si kapanmaası icin 
        }
    })
});