import { state } from "../models/Race.js";

export function renderCarNames() {
  const racingCars = document.getElementById("racing-cars");
  state.cars.forEach((car) => {
    const racingProgress = document.createElement("div");
    racingProgress.className = "racing-progress flex-column";
    racingCars.appendChild(racingProgress);
    const carNameBox = document.createElement("div");
    carNameBox.className = "car-name-box";
    carNameBox.insertAdjacentHTML("afterbegin", car.name);
    racingProgress.appendChild(carNameBox);
  });
}

export function renderProgressArrow(index) {
  const racingProgress = document.getElementsByClassName("racing-progress");
  const racingArrow = document.createElement("div");
  racingArrow.className = "racing-progress-arrow";
  racingArrow.insertAdjacentHTML("afterbegin", "⬇️️");
  racingProgress[index].appendChild(racingArrow);
}

export function renderWinners(names) {
  const racingWinner = document.getElementById("racing-winner");
  racingWinner.insertAdjacentHTML("afterbegin", `🏆 최종우승자: ${names} 🏆`);
}

export function renderRacingInputForm() {
  const racingInputForm = document.getElementById("racing-input-form");
  racingInputForm.style.display = "flex";
}

export function renderRacingContainer() {
  const racingContainer = document.getElementById("racing-container");
  racingContainer.style.display = "flex";
}

export function disableUserInputs() {
  const carNamesInput = document.getElementById("car-name-input");
  const carNamesInputBtn = document.getElementById("car-name-input-button");
  const racingNumberInput = document.getElementById("racing-number-input");
  const racingNumberInputBtn = document.getElementById(
    "racing-number-input-button"
  );
  carNamesInput.disabled = true;
  carNamesInputBtn.disabled = true;
  racingNumberInput.disabled = true;
  racingNumberInputBtn.disabled = true;
}
