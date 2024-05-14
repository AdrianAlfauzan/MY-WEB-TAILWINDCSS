document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel-container");
  const images = document.querySelector(".carousel-images");

  let currentIndex = 0;

  function showImage(index) {
    const imageHeight = document.querySelector(".carousel-image").clientHeight;
    images.style.transform = `translateY(${-index * imageHeight}px)`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.children.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.children.length) % images.children.length;
    showImage(currentIndex);
  }

  setInterval(nextImage, 3000); // Berganti gambar setiap 3 detik
});
