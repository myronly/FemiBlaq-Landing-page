header__content_btn.addEventListener("click", () => {
  without__header.classList.add("blur");
  contact__me.classList.add("show");
});
header__content_btn_.addEventListener("click", () => {
  without__header.classList.add("blur");
  contact__me.classList.add("show");
});
close__link.addEventListener("click", () => {
  without__header.classList.remove("blur");
  contact__me.classList.remove("show");
});
header__menu.addEventListener("click", () => {
  without__header.classList.remove("blur");
  contact__me.classList.remove("show");
});
menu.addEventListener("click", () => {
  container__links.classList.add("show");
});
menu__close.addEventListener("click", () => {
  container__links.classList.remove("show");
});
menu__link1.addEventListener("click", () => {
  container__links.classList.remove("show");
});
menu__link2.addEventListener("click", () => {
  container__links.classList.remove("show");
});
menu__link3.addEventListener("click", () => {
  container__links.classList.remove("show");
});
