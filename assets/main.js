let menu = document.querySelector(".menu");
document.querySelector("#menuToggle").onclick = () => {
  menu.classList.add("active");
};
document.querySelector("#menuClose").onclick = () => {
  menu.classList.remove("active");
};
