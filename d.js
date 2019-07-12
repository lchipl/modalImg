const imgMini =document.getElementById("myimg");
const modalW = document.getElementById("mymodal");
const modalImg = document.querySelector(".modalcontent");
imgMini.addEventListener("click",function(){
modalW.style.display="block";
imgMini.style.display="none";
modalImg.setAttribute("src","look.com.ua-75408.jpg" );
});

window.addEventListener("click",function(event){
if(event.target==modalW){
modalW.style.display="none";
imgMini.style.display="block";
}
});