const input=document.querySelector("input");

const downloadBtn=document.querySelector("form button");


downloadBtn.addEventListener("click",e=>{

    e.preventDefault();
    downloadBtn.innerText="DOSYA İNDİRİLİYOR..."
    urlekle(input.value)// girilen deger www....
});
/* //!calısıyor
function urlekle(e){
    e.preventDefault();
    atag.href=`https://www.youtube.com/watch?v=gXuzkwRivfg&list=PPSV`
    
}
*/

function urlekle(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("DOSYAYI İNDİRKEN HATA OLUŞTU");
        downloadBtn.innerText = "Dosyayı İndir";
    });
}


/*const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");
downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});
function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
             alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}
*/