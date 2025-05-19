window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2000);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
