let input = document.querySelector('.text');
let btn = document.querySelector('.btn');
let img = document.querySelector('img');
let imgContainer = document.querySelector('.image');

btn.addEventListener('click', generate);

function generate(){
    if(input.value !== ""){
        btn.value = "Generating QR Code...";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value} `;
        img.addEventListener('load',()=>{
            btn.value = "Generate QR Code";
            imgContainer.classList.add("active");
        })
        
    }
}

input.addEventListener("keyup",()=>{
    if(!input.value){
        img.src = "";
        imgContainer.classList.remove("active");

    }
})



