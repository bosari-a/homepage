window.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".cstm-cards > button");
  const cstmCards = document.querySelector(".cstm-cards");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("right-btn")) {
        cstmCards.scrollLeft += 800;
      } else {
        cstmCards.scrollLeft -= 800;
      }
    });
  });
});
