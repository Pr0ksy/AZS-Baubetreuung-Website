const images = [];
for (let i = 1; i <= 36; i++) {
  images.push("assets/gallery/photo" + i + ".jpg"); // <-- key
}

let currentIndex = 0;
const currentImage = document.getElementById("currentImage");
const thumbnailsContainer = document.querySelector(".thumbnails");

function setImage(index) {
  currentIndex = index;
  currentImage.src = images[index];
  updateActiveThumbnail();
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  currentImage.src = images[currentIndex];
  updateActiveThumbnail();
}

function updateActiveThumbnail() {
  const allThumbs = document.querySelectorAll(".thumbnails img");
  allThumbs.forEach((img, i) => {
    img.classList.toggle("active", i === currentIndex);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setImage(0);
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `AZS Bildergalerie ${index + 1}`;
    img.onclick = () => setImage(index);
    thumbnailsContainer.appendChild(img);
  });

  document.getElementById("prevBtn").onclick = () => changeImage(-1);
  document.getElementById("nextBtn").onclick = () => changeImage(1);
});
