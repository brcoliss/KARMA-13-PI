 const dvds = document.querySelectorAll(".dvd");
const modal = document.getElementById("dvdModal");
const modalImg = document.getElementById("modalImg");
const modalMusica = document.getElementById("modalMusica");
const modalViews = document.getElementById("modalViews");
const closeBtn = document.querySelector(".close");

// Quando clicar no DVD abre o modal
dvds.forEach(dvd => {
  dvd.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = dvd.dataset.img;
    modalMusica.textContent = dvd.dataset.musica;
    modalViews.textContent = dvd.dataset.views;
  });
});

// Fechar modal
closeBtn.onclick = () => modal.style.display = "none";

// Fechar clicando fora
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};