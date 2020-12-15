const gallery = document.querySelector(".gallery");
const prevBtn = document.querySelector(".previous");
const nexBtn = document.querySelector(".next");

let imgNo = 0;
prevBtn.classList.add("faded");

nexBtn.addEventListener("click", function(event){
  if(imgNo === gallery.childElementCount - 1) return;

  imgNo++;
  gallery.style.transform = `translateX(${-imgNo * 220}px)`;
  setBtnDisplay();
})

prevBtn.addEventListener("click", function(){
  if(imgNo == 0) return;

  imgNo--;
  gallery.style.transform = `translateX(${-imgNo * 220}px)`;
  setBtnDisplay();
})

function setBtnDisplay() {
  prevBtn.classList.remove("faded");
  nexBtn.classList.remove("faded");

  if(imgNo === 0) prevBtn.classList.add("faded");
  if(imgNo === gallery.childElementCount - 1) nexBtn.classList.add("faded");
}
