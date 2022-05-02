const navAppear = () => {
  const burger = document.querySelector("#menu-icon");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navAppear();