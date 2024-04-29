
// Start Find the Exit (solo) after checking that the conditions are OK
function	launchExitSolo()

{
	let	levels = document.getElementById("exitSoloLevel");
	let	NumberLevels = parseInt(levels.value);

	if (isNaN(NumberLevels))
	{
		updateModalMessage('exit_solo_modal');
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
		updateModalMessage('exit_versus_modal');
		return;
	}
	console.log("Selected Players: " + selectedPlayers);
	if (window.startGame) {  // Check if function exists (avoid errors)
		console.log("Starting game");
		window.startGame(selectedPlayers, (data) => {
			// const scores = data.scores;
			console.log('Game Loop : (scores + player 1 x pos)', data);
			// Display scores on the website (on html : <p id="scorePlayer1"></p>)
			// document.getElementById('scorePlayer1').textContent = scores.player1;
		  });
	} else {
		console.error('startGame function not available.');
	}

}

