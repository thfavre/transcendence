// Selecting the number of players for Pong versus

function	updatePongPlayersVersus()
{
	let	playerSelect = document.getElementById("pongVersusPlayer");
	let	aiSelect = document.getElementById("pongVersusAI");
	let	totalParticipants = 5;

	let	selectedPlayers = parseInt(playerSelect.value);
	let	selectedAI = parseInt(aiSelect.value);

	if (isNaN(selectedPlayers))
		selectedPlayers = 0;
	if (isNaN(selectedAI))
		selectedAI = 0;

	for (let i = 1; i < playerSelect.options.length; i++)
	{
		let playerOptionValue = parseInt(playerSelect.options[i].value);
		if (playerOptionValue + selectedAI > totalParticipants)
			playerSelect.options[i].disabled = true;
		else
			playerSelect.options[i].disabled = false;
	}

	for (let i = 1; i < aiSelect.options.length; i++)
	{
		let aiOptionValue = parseInt(aiSelect.options[i].value);
		if (aiOptionValue + selectedPlayers > totalParticipants)
			aiSelect.options[i].disabled = true;
		else
			aiSelect.options[i].disabled = false;
	}
}

document.addEventListener('DOMContentLoaded', updatePongPlayersVersus);

// Start Pong Versus after checking that the conditions are OK

function	launchPongVersus()
{
	let	playerSelect = document.getElementById("pongVersusPlayer");
	let	aiSelect = document.getElementById("pongVersusAI");
	let	selectedPlayers = parseInt(playerSelect.value);
	let	selectedAI = parseInt(aiSelect.value);

	if (isNaN(selectedPlayers))
		selectedPlayers = 0;
	if (isNaN(selectedAI))
		selectedAI = 0;

	let	totalParticipants = selectedPlayers + selectedAI;

	if (totalParticipants < 2 || selectedPlayers < 1)
	{
		updateModalMessage('pong_versus_modal');
		return;
	}
	if (window.gamePong) {  // Check if function exists (avoid errors)
		console.log("Starting Pong game with ", selectedPlayers, " players and ", selectedAI, " AI");
		var humanNames = [];
		for (let i = 1; i <= selectedPlayers; i++)
		{
			let playerName = "Guest " + i;
			humanNames.push(playerName);
		}
		window.gamePong(humanNames, selectedAI, 'versus', false, (tournament) => {
				if (tournament.isOver) {
					console.log('SAVE THE SCORES here');
					console.log('Tournament is over', tournament.scores);
				}
			});
	} else {
		console.error('gamePong function not available.');
	}

	pongMenu.classList.add('d-none');
	pongVersusIG.classList.remove('d-none');
}

// Start Pong Tournament after checking that the conditions are OK

function	launchPongTournament()
{
	let	playerSelect = document.getElementById("pongTournamentPlayer");
	let	selectedPlayers = parseInt(playerSelect.value);

	if (isNaN(selectedPlayers))
	{
		updateModalMessage('pong_tournament_modal');
		return;
	}
	selectPlayersNames(selectedPlayers);

	pongMenu.classList.add('d-none'); // TO MOVE - NOT THE RIGHT PLACE TO PUT IT
	pongTournamentIG.classList.remove('d-none'); // TO MOVE - NOT THE RIGHT PLACE TO PUT IT
}

// Select the players names for the Pong Tournament

async function	selectPlayersNames(selectedPlayers)
{
	let	form = document.getElementById("playerNamesForm");
	let	fragment = document.createDocumentFragment();
	let	player = await updateModalTournament();
	form.innerHTML = '';

	for (let i = 1; i < selectedPlayers; i++)
	{
		let	inputGroup = document.createElement("div");
		inputGroup.classList.add("input-group", "mb-3");

		let inputLabel = document.createElement("label");
		inputLabel.textContent = player + ` ${i + 1} : `;
		inputLabel.setAttribute("for", `playerName${i}`);
		inputLabel.classList.add("form-label", "custom-input");

		let inputField = document.createElement("input");
		inputField.type = "text";
		inputField.id = `playerName${i}`;
		inputField.name = `playerName${i}`;
		inputField.classList.add("form-control", "custom-input");

		inputGroup.appendChild(inputLabel);
		inputGroup.appendChild(inputField);
		fragment.appendChild(inputGroup);
	}
	form.appendChild(fragment);
	let playerNamesModal = new bootstrap.Modal(document.getElementById('tournamentModal'), {
		backdrop: 'static'
	});
	playerNamesModal.show();
}
