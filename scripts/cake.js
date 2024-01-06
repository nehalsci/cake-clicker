document.addEventListener("DOMContentLoaded", main);

function main() {
	loadData();
	detectClick();
}

function detectClick() {
	const cake = document.getElementById("cake");

	cake.addEventListener("click", function() {
		addCake(1);
	});
}

function addCake(num = 1) {
	let cakes = getCakesData();
	localStorage.setItem("cakes", cakes + 1);

	return loadData();
}


function loadData() {
	let cakes = getCakesData();

	const cakeData = document.getElementById("cake-d");
	cakeData.textContent = `Collected Cakes: ${cakes}`;
}

function getCakesData() {
	let cakes = Number(localStorage.getItem("cakes"))

	if (!cakes || isNaN(cakes)) {
		cakes = 0;
		localStorage.setItem("cakes", cakes);
	}

	return cakes;
}