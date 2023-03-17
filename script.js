const initialState = {
	hunger: 50,
	happiness: 50,
	health: 50
};

let state = Object.assign({}, initialState);

const faceElement = document.querySelector('.face');
const hungerElement = document.querySelector('#hunger');
const happinessElement = document.querySelector('#happiness');
const healthElement = document.querySelector('#health');

function updateFace() {
	if (state.hunger >= 75 && state.happiness >= 75) {
		faceElement.className = 'face happy';
	} else if (state.hunger < 25 && state.happiness < 25) {
		faceElement.className = 'face sad';
	} else {
		faceElement.className = 'face hungry';
	}
}

function updateStats() {
	hungerElement.innerText = state.hunger;
	happinessElement.innerText = state.happiness;
	healthElement.innerText = state.health;
}

function updateUI() {
	updateFace();
	updateStats();
}

function feed() {
	if (state.hunger < 100) {
		state.hunger += 10;
		if (state.hunger > 100) {
			state.hunger = 100;
		}
		updateUI();
	}
}

function play() {
	if (state.happiness < 100) {
		state.happiness += 10;
		if (state.happiness > 100) {
			state.happiness = 100;
		}
		updateUI();
	}
}

function giveTreat() {
	if (state.happiness < 100) {
		state.happiness += 20;
		if (state.happiness > 100) {
			state.happiness = 100;
		}
		updateUI();
	}
}

function heal() {
	if (state.health < 100) {
		state.health += 20;
		if (state.health > 100) {
			state.health = 100;
		}
		updateUI();
	}
}

function decrease() {
	state.hunger -= 2;
	state.happiness -= 2;
	state.health -= 1;

	if (state.hunger < 0) {
		state.hunger = 0;
	}

	if (state.happiness < 0) {
		state.happiness = 0;
	}

	if (state.health < 0) {
		state.health = 0;
	}

	updateUI();

	if (state.hunger === 0 && state.happiness === 0) {
		alert('Your tamagotchi has died :(');
		clearInterval(intervalId);
	}
}

const intervalId = setInterval(decrease, 5000);

document.querySelector('#feed').addEventListener('click', feed);
document.querySelector('#play').addEventListener('click', play);
document.querySelector('#treat').addEventListener('click', giveTreat);
document.querySelector('#heal').addEventListener('click', heal);

updateUI();