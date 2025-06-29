function bukaModal() {
  document.getElementById("modalKontak").classList.add("show");
}

function tutupModal() {
  document.getElementById("modalKontak").classList.remove("show");
}

window.onclick = function(event) {
  const modal = document.getElementById("modalKontak");
  if (event.target === modal) {
    modal.classList.remove("show");
  }
}
