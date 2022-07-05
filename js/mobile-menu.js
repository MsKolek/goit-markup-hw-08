(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-menu-open]"),
    closeMenuBtn: document.querySelector("[js-menu-close]"),
    menu: document.querySelector("[js-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("backdrop--hidden");
  }
})();
