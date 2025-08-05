const openBtn = document.getElementById("open-about");
const popup = document.getElementById("about-popup");
const closeBtn = document.getElementById("close-popup");

openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
});