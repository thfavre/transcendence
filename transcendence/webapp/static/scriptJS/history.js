// Fetches the history data from the server when the page is loaded

document.addEventListener('DOMContentLoaded', function()
{
	fetchHistoryData();
});

// Updates the history tables with the data from the server

function	fetchHistoryData()
{
	fetch('/api/history/') // Correct URL ? Check with Fgrasset
	.then(response => response.json())
	.then(data => {
		updateHistoryTables(data);
	})
}

function	updateHistoryTables(data)
{
	const	gamesID = ['pongVersus', 'pongTournament', 'exitSolo', 'exitVersus']; // to adapt to the correct gameID

	gamesID.forEach(gameID => {
		switch(gameID)
		{
			case 'PongVersus':
				updatePongVersusHistory(data);
				break;
			case 'PongTournament':
				updatePongTournamentHistory(data);
				break;
			case 'ExitSolo':
				updateExitSoloHistory(data);
				break;
			case 'ExitVersus':
				updateExitVersusHistory(data);
				break;
		}
	});
}

// Adapt the history for Pong Versus

function	updatePongVersusHistory(data)
{
	const	lang = localStorage.getItem('language') || 'en';
	let	columns;

	if (lang === 'fr')
		columns = ['Joueur', 'Victoire', 'Date'];
	else if (lang === 'de')
		columns = ['Spieler', 'Sieg', 'Datum'];
	else
		columns = ['Player', 'Win', 'Date'];
	updateTable('PongVersus', data, columns);
}

// Adapt the history for Pong Tournament

function	updatePongTournamentHistory(data)
{
	const	lang = localStorage.getItem('language') || 'en';
	let	columns;

	if (lang === 'fr')
		columns = ['Joueur', 'Place', 'Nombre de joueurs', 'Date'];
	else if (lang === 'de')
		columns = ['Spieler', 'Platz', 'Anzahl der Spieler', 'Datum'];
	else
		columns = ['Player', 'Rank', 'Number of players', 'Date'];

	updateTable('PongTournament', data, columns);
}

// Adapt the history for Find the Exit Solo

function	updateExitSolo(data)
{
	const	lang = localStorage.getItem('language') || 'en';
	let	columns;

	if (lang === 'fr')
		columns = ['Joueur', 'Nombre de niveaux', 'Temps', 'Date'];
	else if (lang === 'de')
		columns = ['Spieler', 'Anzahl der Ebenen', 'Zeit', 'Datum'];
	else
		columns = ['Player', 'Number of levels', 'Time', 'Date'];

	updateTable('ExitSolo', data, columns);
}

// Adapt the history for Find the Exit Versus

function	updateExitVersus(data)
{
	const	lang = localStorage.getItem('language') || 'en';
	let	columns;

	if (lang === 'fr')
		columns = ['Joueur', 'Place', 'Meilleur des X victoires', 'Date'];
	else if (lang === 'de')
		columns = ['Spieler', 'Platz', 'Beste von X Siegen', 'Datum'];
	else
		columns = ['Player', 'Rank', 'Best of X wins', 'Date'];

	updateTable('ExitVersus', data, columns);
}

// function	updateTable(gameID, data, columns)
// {

// }
function sendGameData(gameHistory) {
    // Make sure gameData is a JavaScript object containing the necessary data

    // Convert gameData to JSON
	const username = localStorage.getItem('userAlias')
	const csrfToken = getCookie('csrftoken')
    const jsonData = JSON.stringify({username: username, gameHistory: gameHistory});

    // Send JSON data to the backend using fetch API
    fetch('/save_game_result/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken // Include CSRF token in headers
        },
        body: jsonData
    })
    .then(response => {
        if (response.ok) {
            // Game data saved successfully
            console.log('Game history saved successfully');
        } else {
            // Error handling if saving failed
            console.error('Failed to save game data');
        }
    })
    .catch(error => {
        console.error('Error sending game data:', error);
    });
}

// retrieves the last 10 games of 'game_id' associated to 'username'
function getGameHistory(username, game_id) {
    fetch(`/get_game_history?username=${username}&game_id=${game_id}`, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch game history data.');
        }
    })
    .then(data => {
        if (data.error) {
            console.error("Error:", data.error);
        } else {
            console.log("Game history:", data);
            // Process the game history data (e.g., display it on the webpage)
        }
    })
    .catch(error => {
        console.error(error);
    });
}


// retrieves the last game played by the user
function getLastGame(username) {
    fetch(`/get_last_game?username=${username}`, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch last game data.');
        }
    })
    .then(data => {
        if (data.error) { // Check for 'error' property in the response
            console.log("No game found:", data.error);
        } else {
            // Process the data (e.g., display it on the webpage)
            console.log(data);
        }
    })
    .catch(error => {
        console.error(error);
    });
}

function getDatabase() {
	fetch('/print_all_records/')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data.');
        }
    })
    .then(data => {
        console.log(data);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });

}
