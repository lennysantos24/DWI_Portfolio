const buttons = document.querySelectorAll(".nav-menu-item");

function handleButton() {
  document.querySelector(
    ".item-triggered"
  ).innerHTML = `<span>${this.innerText}</span> triggered / ativado`;
}

buttons.forEach((item) => item.addEventListener("pointerdown", handleButton));