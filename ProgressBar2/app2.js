


const İlerlemeSimulasyonu = (ilerleme) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ilerleme + 1);
        }, 20);
        /* 10ms de 1 artar ilerleme degeri*/
    }).then(res => res);
};

document.querySelector('.indirme-button').onclick = () => {
    const documentStyles = document.documentElement.style;
    const progressButton = document.querySelector('.ilerleme-button');
    const percentage = document.querySelector('.yüzde');
    const loadingText = document.querySelector('.yükleme-text');
    const buttonText = document.querySelector('.button-text');

    progressButton.classList.add('in-ilerleme');

    (async () => {
        let progress = 0;

        while (progress < 100) {
            progress = await İlerlemeSimulasyonu(progress);/!İlerlemeSimulasyonu(progress) BU FONKSİYON İŞİ BİTENE KADAR ALT  KODLAR CALISMAYACAK BEKLEYECEK.!/
            if (progress % 5 === 0) {
                loadingText.innerHTML = `Loading${Array(progress % 4).fill('.').join('')}`;//! NOKTA KOYMA KISMI LOADİNG. LOADİNG.. LOADİNG... SONRA 0 NOKTA YANİ BAŞA DÖNÜYOR.!
                
                documentStyles.setProperty('--progress', `${progress}%`); //& BU KISIM YEŞİL BAR YANİ TAMAMLANAN BAR KISMI İNDİRME BUTONU KISMI
             
                /*
                .indirme-button::after{
    content: ''; 

    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

             width: var(--progress) 

   background-color: greenyellow;
    background-size: 50px 50px;
    border-radius: 25px;
    transition: all .6s cubic-bezier(0.4, 0.0, 0.2, 1);
     */




            }

            percentage.innerText = `${progress}%`; /YÜZDE GÜNCELLEME 1,2,3 4 85.../
        }
     
        buttonText.innerText = '🎉 Done';
        setTimeout(() => progressButton.classList.replace('in-ilerleme', 'finished'), 1000);
    })();
  
}
