const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPlayer1BtnElement = document.getElementById("Edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("Edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlayerconfig);
editPlayer2BtnElement.addEventListener("click", openPlayerconfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
