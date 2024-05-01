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
	if (window.gameEscape) {  // Check if function exists (avoid errors)
		console.log("Starting Versus game with " + NumberLevels + " levels");
 		window.gameEscape(1, NumberLevels, 'solo', false, (tournement) => {
				if (tournement.isOver) {
					console.log('SAVE THE SCORES here');
					console.log('Solo game is over, time :', tournement.time);
				}
			});
	} else {
		console.error('gameEscape function not available.');
	}


	findExitMenu.classList.add('d-none');
	findExitSoloIG.classList.remove('d-none');
}

// Start Find the Exit (Versus) after checking that the conditions are OK

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
	if (window.gameEscape) {  // Check if function exists (avoid errors)
		console.log("Starting Versus game with ", selectedPlayers, " players and ", NumberLevels, " levels");
 		window.gameEscape(selectedPlayers, NumberLevels, 'tournement', false, (tournement) => {
				if (tournement.isOver) {
					console.log('SAVE THE SCORES here');
					console.log('Tournement is over', tournement.scores);
				}
			});

		findExitMenu.classList.add('d-none');
		findExitVersusIG.classList.remove('d-none');
	} else {
		console.error('gameEscape function not available.');
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
