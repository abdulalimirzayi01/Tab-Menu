let btn = document.querySelectorAll(".btn-box");
let cnt = document.querySelectorAll(".title-box-content div");
console.log(cnt);
for (let a = 0; a < btn.length; a++) {
btn[a].addEventListener('click',()=>{
    for (let m = 0; m < cnt.length; m++) {
   cnt[m].classList.remove("active")
        
    }
    cnt[a].classList.add("active");
})
    
}