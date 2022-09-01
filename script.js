const btn = document.getElementById("check");
const nav = document.getElementById("menu");
btn.addEventListener("click", () => {
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
   
});
