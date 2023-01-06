


const simulateDownload = (ilerleme) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ilerleme + 1);
        }, 40);
        //
    }).then(res => res);
};

document.querySelector('.download-button').onclick = () => {
    const documentStyles = document.documentElement.style;
    const progressButton = document.querySelector('.progress-button');
    const percentage = document.querySelector('.percentage');
    const loadingText = document.querySelector('.loading-text');
    const buttonText = document.querySelector('.button-text');

    progressButton.classList.add('in-progress');

    (async () => {
        let progress = 0;

        while (progress < 100) {
            progress = await simulateDownload(progress);// %4 olma nedeni progres mesela 15  progres %4 1 20 olunca 0 yani eklemiyor 4ve 5 in ortak katına gelince
//////////////// //&ONEMLİ BURASI LOADİNG İCİN GECERLİ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!////////////////////////////////
            if (progress % 5 === 0) {//her yüzde 5 lik dolumda . işareti eklenecek loading. ekleyecek
                loadingText.innerHTML = `Loading${Array(progress %4).fill('.').join('')}`; //!progres=5 olsun 5%4 1  eklers
                documentStyles.setProperty('--progress', `${progress}%`);
            }

            percentage.innerText = `${progress}%`;
        }

        buttonText.innerText = '🎉 Done';
        setTimeout(() => progressButton.classList.replace('in-progress', 'finished'), 1000);
    })();
   
}
