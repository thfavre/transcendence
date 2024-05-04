let	isSwitchOn = false;

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

	findExitMenu.classList.add('d-none');
	findExitSoloIG.classList.remove('d-none');

	if (window.exitGame) {  // Check if function exists (avoid errors)
		const language = localStorage.getItem('language') || 'en';
		console.log("Starting SOLO game with " + NumberLevels + " levels in " + language + " language.");
	window.exitGame(1, NumberLevels, false, 'solo', language, '#webglExitSolo', false, (tournement) => {
		if (tournement.isOver)
		{
			console.log('Solo game is over, time :', tournement.time);
			let Result = {
				username: localStorage.getItem('userAlias'),
				game_id: 'ES',
				position: [tournement.time, NumberLevels]
			}
			sendGameData(Result);
		}
			});
	} else {
		console.error('exitGame function not available.');
	}
}

// Start Find the Exit (Versus) after checking that the conditions are OK

function launchExitVersus()
{
	let	playerSelect = document.getElementById("exitVersusPlayers");
	let	levels = document.getElementById("exitVersusLevel");

	let	FirstTo = parseInt(levels.value);
	let	selectedPlayers = parseInt(playerSelect.value);

	// 1 if the players won, 0 if he lost
	function isFirst(scores, FirstTo)
	{
		if (scores[0] === FirstTo)
			return 1;
		return 0;
	}

	if (isNaN(FirstTo) || isNaN(selectedPlayers))
	{
		updateModalMessage('exit_versus_modal');
		return;
	}
	if (window.exitGame) {  // Check if function exists (avoid errors)
		console.log("Starting Versus game with ", selectedPlayers, " players and ", NumberLevels, " levels");
 		window.exitGame(selectedPlayers, NumberLevels, isSwitchOn, 'tournament', '#webglExitVersus', false, (tournament) => {
				if (tournament.isOver) {
					console.log('SAVE THE SCORES here');
					console.log('Tournament is over', tournament.scores);
				}
				sendGameData(Result);
			});
		findExitMenu.classList.add('d-none');
		findExitVersusIG.classList.remove('d-none');
	} else {
		console.error('exitGame function not available.');
	}

}

// Caught the switch button state

document.addEventListener('DOMContentLoaded', function()
{
	let switchInput = document.getElementById('switchBonus');

	switchInput.addEventListener('change', function()
	{
		isSwitchOn = this.checked;
		console.log(isSwitchOn);
	});
});
