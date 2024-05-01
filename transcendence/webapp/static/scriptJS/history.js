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
