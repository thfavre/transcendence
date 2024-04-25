// Start Find the Exit (solo) after checking that the conditions are OK

function	launchExitSolo()
{
	let	levels = document.getElementById("exitSoloLevel");
	let	NumberLevels = parseInt(levels.value);

	if (isNaN(NumberLevels))
	{
		let	modalBody = document.getElementById('errorMessage');
		modalBody.textContent = "Please select an option to start the game.";
		let	alertModal = new bootstrap.Modal(document.getElementById('errorModal'));
		alertModal.show();
		return;
	}
}

// Start Find the Exi (Versus) after checking that the conditions are OK

function launchExitVersus()
{
	let	playerSelect = document.getElementById("exitVersusPlayers");
	let	levels = document.getElementById("exitVersusLevel");

	let	NumberLevels = parseInt(levels.value);
	let	selectedPlayers = parseInt(playerSelect.value);

	if (isNaN(NumberLevels) || isNaN(selectedPlayers))
	{
		let	modalBody = document.getElementById('errorMessage');
		modalBody.textContent = "Please select the number of players and the Best of X to start the game";
		let	alertModal = new bootstrap.Modal(document.getElementById('errorModal'));
		alertModal.show();
		return;
	}
}
