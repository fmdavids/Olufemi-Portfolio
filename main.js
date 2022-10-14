// document.querySelectorAll()
let txt = "React, Node. See my projects.";

let i = "";
speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// function scrollToWorks() {
//   setTimeout(scrollToWorks, 15000)
//   document.getElementById("works").scrollIntoView({
//     behavior: "smooth",
//   });
// }

setTimeout(() => document.getElementById("works").scrollIntoView({
      behavior: "smooth",
    }), 6000)

let copyRightYear = new Date().getFullYear();

document.getElementById("year").innerHTML = copyRightYear;

let mobileSideNave = document.querySelector(".sideNavBar");
let mobileSideMenu = document.querySelector(".navMenu");
document.getElementById("mobileNav").addEventListener("click", function () {
  mobileSideNave.classList.add("sideNavBar2");
});

mobileSideMenu.addEventListener("click", function () {
  mobileSideNave.classList.remove("sideNavBar2");
});

let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

li.forEach((element) => {
  element.addEventListener("click", function () {
    ul.querySelector(".active").classList.remove("active");
    element.classList.add("active");
  });
});
