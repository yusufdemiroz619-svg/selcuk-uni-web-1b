console.log("menü çalışıyor");
document.querySelectorAll(".dropdown-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.nextElementSibling.classList.toggle("show");
  });
});