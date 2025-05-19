window.addEventListener("load", function () {
  document.getElementById("main").style.display = "none";
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("main").style.display = "block";
  }, 2000);
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
