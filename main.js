// document.querySelectorAll()
let txt = "HTML Email, WordPress and Web App Developer.";


let i = "";
speed= 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let copyRightYear = new Date().getFullYear();

document.getElementById('year').innerHTML = copyRightYear;

let mobileSideNave = document.querySelector(".sideNavBar")
let mobileSideMenu = document.querySelector('.navMenu');
document.getElementById("mobileNav").addEventListener("click", function(){

  mobileSideNave.classList.add('sideNavBar2')
})

mobileSideMenu.addEventListener("click", function(){
  mobileSideNave.classList.remove('sideNavBar2')
  })
  
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach(element => {
  element.addEventListener("click", function(){
    // navMenu.classList.remove('.active')
    ul.querySelector(".active").classList.remove('active')
    
    element.classList.add('active')
    
  })
  
})



