// myToggle

var myToggle = document.getElementsByClassName("boxToggle");
console.log(myToggle);
for(var i = 0; i < myToggle.length; i++){

    myToggle[i].onmouseenter = function(){
        this.classList.add("boxChange");
    }
    myToggle[i].onmouseleave = function(){
        this.classList.remove("boxChange");
    }
}
