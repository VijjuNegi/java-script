let slide = document.getElementsByClassName("slide");
let ul = document.getElementById("ul");
let dots = ul.getElementsByTagName("li");
let mySlide = slide.length;

console.log(dots);
var i, index=0;


document.getElementById("next").addEventListener("click", function(){
   index +=1;
   goSlide();
});

document.getElementById("pre").addEventListener("click", function(){
    index -=1;
    goSlide();
 });
  

function goSlide(){
if(index > 3){
    index = 0;
}
if(index < 0){
    index = 3;
}

for(i = 0; i < mySlide; i++){
    slide[i].classList.remove("active");
    dots[i].classList.remove("active");
}
slide[index].classList.add("active");
dots[index].classList.add("active");
};


