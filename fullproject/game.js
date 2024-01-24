let pet = {
  health: 100,
  happiness: 100,
};

let image = document.getElementById("pet-pic");

document.getElementById("feed-button").addEventListener("click", function () {
  feedPet();
  buttonReaction(this);
  catShake();
});

document.getElementById("play-button").addEventListener("click", function () {
  playWithPet();
  buttonReaction(this);
  catShake();
});

// Dette skjer når du trykker på knappene
function feedPet() {
  pet.health = Math.min(pet.health + 10, 100);
  updateStatus();
}

function playWithPet() {
  pet.happiness = Math.min(pet.happiness + 10, 100);
  updateStatus();
}

function updateStatus() {
  document.getElementById("health").textContent = `Health: ${pet.health}`;
  document.getElementById(
    "happiness"
  ).textContent = `Happiness: ${pet.happiness}`;
  imageChange();
}

function imageChange() {
  if (pet.health === 0 || pet.happiness === 0) {
    image.src = "pictures/animalpicture-dead.png";
  } else {
    image.src =
      "https://github.com/Kodehode-Stavanger/javascript-basic-mini-project-Jonas-Kodehode/blob/main/petsimulator/pictures/animalpicture.png?raw=true";
  }
}
// Denne funksjonen får liv og glede til å gå ned tilfeldig fra 1-10 hvert 1-10 sekund
function decreaseStatusRandomly() {
  pet.health -= Math.floor(Math.random() * 10);
  pet.happiness -= Math.floor(Math.random() * 10);

  pet.health = Math.max(pet.health, 0);
  pet.happiness = Math.max(pet.happiness, 0);

  updateStatus();

  const randomDelay = Math.random() * 9000 + 1000;
  setTimeout(decreaseStatusRandomly, randomDelay);
}

// Denne funksjonen endrer classen i css til forskjellige animasjoner
function buttonReaction(button) {
  button.classList.add("button-clicked");
  setTimeout(() => {
    button.classList.remove("button-clicked");
  }, 200);
}

function catShake() {
  const petImage = document.getElementById("pet-pic");
  petImage.classList.add("pet-shake");
  setTimeout(() => {
    petImage.classList.remove("pet-shake");
  }, 500);
}

decreaseStatusRandomly();
