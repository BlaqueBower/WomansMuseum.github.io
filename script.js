// Add interactivity if needed (e.g., animations, dynamic content)
console.log("Welcome to the Online Museum!");

function openModal(image) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = image.src;
  caption.textContent = image.alt;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Close modal when clicking the close button
document.querySelector(".close").addEventListener("click", closeModal);

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeModal();
  }
});
