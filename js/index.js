window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    const nav = document.getElementsByTagName("navbar")[0];
    nav.querySelector("ul").style.height = "60px";
    nav.querySelectorAll("li").forEach(e => e.style.height = "60px");
    
  } else {
    const nav = document.getElementsByTagName("navbar")[0];
    nav.querySelector("ul").style.height = "80px";
    nav.querySelectorAll("li").forEach(e => e.style.height = "80px");
  }
}