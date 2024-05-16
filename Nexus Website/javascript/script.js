/* $(window).scroll(function () {
  if ($(document).scrollTop() > 100) {
    $(".navbar").addClass("color-change");
  } else {
    $(".navbar").removeClass("color-change");
  }
}); */

/* var navbar = document.getElementsByClassName(".navbar");
function window(scroll) {
  if (document.scrollTop() >= 100) {
    navbar.addClass("color-change");
  } else {
    navbar.removeClass("color-change");
  }
}
window.onscroll = function () {
  scrollFunction();
}; */
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 10) {
    document.getElementById("bacground").style.transform = "translateY(0%)";
    document.getElementById("bacground").style.width = "89%";
    document.getElementById("bacground").style.height = "100%";
    document.getElementById("bacground").style.backgroundColor = "#fff";
    document.getElementById("bacground").style.border = "1px solid #ececec";
    document.getElementById("bacground").style.borderTopStyle = "none";
    document.getElementById("bacground").style.borderRadius = " 0 0 24px 24px";
    document.getElementById("bacground").style.transition =
      "transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)";
    document.getElementById("bacground").style.margin = " 0 auto";
    document.getElementById("bacground").style.overflow = "hidden";
    document.getElementById("bacground").style.position = "absolute";
    document.getElementById("bacground").style.top = "0%";
    document.getElementById("bacground").style.display = "flex";
    document.getElementById("bacground").style.alignItems = "center";
    document.getElementById("bacground").style.justifyContent = "center";
    document.getElementById("bacground").style.zIndex = "-1";
    document.getElementById("bacground").style.boxShadow =
      "0 24px 48px -24px rgba(56, 56, 138, 0.16)";
  } else {
    document.getElementById("bacground").style.transform = "translateY(-100%)";
  }
}
function myfunction1() {
  var drop1 = document.getElementById("drop1");
  var drop2 = document.getElementById("drop2");
  drop1.classList.remove("show");
  drop2.classList.remove("show");
}
function myfunction2() {
  var drop1 = document.getElementById("drop1");
  var drop2 = document.getElementById("drop2");
  drop1.classList.add("show");
  drop2.classList.add("show");
}

function myfunction3() {
  var drop3 = document.getElementById("drop3");
  var drop4 = document.getElementById("drop4");
  drop3.classList.remove("show");
  drop4.classList.remove("show");
}
function myfunction4() {
  var drop3 = document.getElementById("drop3");
  var drop4 = document.getElementById("drop4");
  drop3.classList.add("show");
  drop4.classList.add("show");
}

/* 



    filter: blur(4px);
    opacity: 0;
    transform: translate3d(0px, 2rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;

*/

// hover

/* 

*/
