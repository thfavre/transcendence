// Fetches the history data from the server when the page is loaded
// document.addEventListener('DOMContentLoaded', function()
// {
// 	fetchHistoryData();
// });

// document.addEventListener('DOMContentLoaded', function() {
// 	// Add event listeners to all history tabs buttons
// 	const historyTabButtons = document.querySelectorAll('.nav-link');
// 	historyTabButtons.forEach(button => {
// 		button.addEventListener('click', function() {
// 			// Get the game ID from the button's data attribute
// 			const gameId = this.getAttribute('data-bs-target').substring(1); // Remove the '#'

// 			// Call the updateHistoryTables function with the gameId
// 			updateHistoryTables(gameId);
// 		});
// 	});
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Bind tab click events to update functions
//     document.getElementById('jeu1-tab').addEventListener('click', updatePongVersusHistory);
//     document.getElementById('jeu2-tab').addEventListener('click', updatePongTournamentHistory);
//     document.getElementById('jeu3-tab').addEventListener('click', updateExitSoloHistory);
//     document.getElementById('jeu4-tab').addEventListener('click', updateExitVersusHistory);
// });


document.addEventListener("DOMContentLoaded", function() {
    // Get all the tab buttons
    const tabButtons = document.querySelectorAll('.nav-link');

    // Loop through each tab button and add event listener
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target tab pane ID
            const targetId = this.getAttribute('data-bs-target');

            // Call the corresponding update function based on the target ID
            if (targetId === '#historyPongVersus') {
                updatePongVersusHistory();
            } else if (targetId === '#historyPongTournament') {
                updatePongTournamentHistory();
            } else if (targetId === '#historyExitSolo') {
                updateExitSoloHistory();
            } else if (targetId === '#historyExitVersus') {
                updateExitVersusHistory();
            }
        });
    });

    // Add event listener for Bootstrap's tab show event
    document.querySelectorAll('.nav-link').forEach(function(tab) {
        tab.addEventListener('shown.bs.tab', function(e) {
            const targetId = e.target.getAttribute('data-bs-target');
            if (targetId === '#historyPongVersus') {
                updatePongVersusHistory();
            } else if (targetId === '#historyPongTournament') {
                updatePongTournamentHistory();
            } else if (targetId === '#historyExitSolo') {
                updateExitSoloHistory();
            } else if (targetId === '#historyExitVersus') {
                updateExitVersusHistory();
            }
        });
    });
});




// // Updates the history tables with the data from the server
// function	fetchHistoryData()
// {
// 	fetch('/api/history/') // Correct URL ? Check with Fgrasset
// 	.then(response => response.json())
// 	.then(data => {
// 		updateHistoryTables(data);
// 	})
// }

function	updateHistoryTables(data)
{
	const	gamesID = ['pongVersus', 'pongTournament', 'exitSolo', 'exitVersus']; // to adapt to the correct gameID
	console.log("updateHistoryTables: ", data);

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


// function updateTable(mode, data, columns)
// {
// 	const modeData = data[mode.toLowerCase()];
// 	const tableId = `history${mode}`;
// 	const tableContainer = document.getElementById(tableId);

// 	if (modeData && modeData.length) {
// 		let tableHTML = `<table class="table table-striped"><thead><tr>`;
// 		columns.forEach(column => {
// 			tableHTML += `<th>${translate(column)}</th>`;
// 		});
// 		tableHTML += `</tr></thead><tbody>`;
// 		modeData.slice(0, 10).forEach(game => {
// 			tableHTML += '<tr>';
// 			columns.forEach(column => {
// 				tableHTML += `<td>${game[column]}</td>`;
// 			});
// 			tableHTML += '</tr>';
// 		});
// 		tableHTML += '</tbody></table>';
// 		tableContainer.innerHTML = tableHTML;
// 	} else {
// 		tableContainer.innerHTML = `<p>${translate('no_games')}</p>`;
// 	}
// }


// // Adapt the history for Pong Versus
// function	updatePongVersusHistory()
// {
// 	const	lang = localStorage.getItem('language') || 'en';
// 	let	columns;

// 	if (lang === 'fr')
// 		columns = ['Joueur', 'Victoire', 'Date'];
// 	else if (lang === 'de')
// 		columns = ['Spieler', 'Sieg', 'Datum'];
// 	else
// 		columns = ['Player', 'Win', 'Date'];
// 	updateTable('PongVersus', columns);
// }

// // Adapt the history for Pong Tournament
// function	updatePongTournamentHistory()
// {
// 	const	lang = localStorage.getItem('language') || 'en';
// 	let	columns;

// 	if (lang === 'fr')
// 		columns = ['Joueur', 'Place', 'Nombre de joueurs', 'Date'];
// 	else if (lang === 'de')
// 		columns = ['Spieler', 'Platz', 'Anzahl der Spieler', 'Datum'];
// 	else
// 		columns = ['Player', 'Rank', 'Number of players', 'Date'];

// 	updateTable('PongTournament', columns);
// }

// // Adapt the history for Find the Exit Solo
// function	updateExitSoloHistory()
// {
// 	const	lang = localStorage.getItem('language') || 'en';
// 	let	columns;
// 	const username = localStorage.getItem('userAlias')

// 	if (lang === 'fr')
// 		columns = ['Joueur', 'Nombre de niveaux', 'Temps', 'Date'];
// 	else if (lang === 'de')
// 		columns = ['Spieler', 'Anzahl der Ebenen', 'Zeit', 'Datum'];
// 	else
// 		columns = ['Player', 'Number of levels', 'Time', 'Date'];
// 	getGameHistory(username, 'ES').then(data => {
// 		console.log(data);
// 		updateTable('ExitSolo', data, ['game_id', 'position', 'date']);
// 	});
// 	// updateTable('ExitSolo', data, columns);
// }

// // Adapt the history for Find the Exit Versus
// function	updateExitVersusHistory()
// {
// 	const	lang = localStorage.getItem('language') || 'en';
// 	let	columns;

// 	if (lang === 'fr')
// 		columns = ['Joueur', 'Place', 'Meilleur des X victoires', 'Date'];
// 	else if (lang === 'de')
// 		columns = ['Spieler', 'Platz', 'Beste von X Siegen', 'Datum'];
// 	else
// 		columns = ['Player', 'Rank', 'Best of X wins', 'Date'];

// 	updateTable('ExitVersus', columns);
// }



// function updateTable(mode, columns, game_id) {
//     getGameHistory(localStorage.getItem('userAlias'), game_id)
//         .then(data => {
//             const modeData = data[mode.toLowerCase()];
//             const tableId = `history${mode}`;
//             const tableContainer = document.getElementById(tableId);

//             if (modeData && modeData.length) {
//                 let tableHTML = `<table class="table table-striped"><thead><tr>`;
//                 columns.forEach(column => {
//                     tableHTML += `<th>${column}</th>`;
//                 });
//                 tableHTML += `</tr></thead><tbody>`;
//                 modeData.slice(0, 10).forEach(game => {
//                     tableHTML += '<tr>';
//                     columns.forEach(column => {
//                         tableHTML += `<td>${game[column]}</td>`;
//                     });
//                     tableHTML += '</tr>';
//                 });
//                 tableHTML += '</tbody></table>';
//                 tableContainer.innerHTML = tableHTML;
//             } else {
//                 tableContainer.innerHTML = `<p>No games</p>`;
//             }
//         })
//         .catch(error => console.error('Error getting game history:', error));
// }

// function updateTable(mode, columns, game_id) {
//     const userAlias = localStorage.getItem('userAlias');
//     if (!userAlias) {
//         console.error('No user alias found in local storage');
//         return;
//     }

//     getGameHistory(userAlias, game_id)
//         .then(data => {
//             if (!data || !data.length) {
//                 console.error('No games data found');
//                 return;
//             }

//             const tableId = `history${mode}`;
//             const tableContainer = document.getElementById(tableId);
//             if (!tableContainer) {
//                 console.error(`No element found with id "${tableId}"`);
//                 return;
//             }

//             let tableHTML = `<table class="table table-striped"><thead><tr>`;
//             columns.forEach(column => {
//                 tableHTML += `<th>${column}</th>`;
//             });
//             tableHTML += `</tr></thead><tbody>`;
//             data.forEach(game => {
//                 tableHTML += '<tr>';
//                 columns.forEach(column => {
//                     const cellData = game[column];
//                     if (cellData === undefined) {
//                         console.warn(`No value found for column "${column}" in game data`);
//                     }
//                     tableHTML += `<td>${cellData}</td>`;
//                 });
//                 tableHTML += '</tr>';
//             });
//             tableHTML += '</tbody></table>';
//             tableContainer.innerHTML = tableHTML;
//         })
//         .catch(error => console.error('Error getting game history:', error));
// }
function updateTable(tableContainerId, mode, game_id) {
    console.log("updateTable: ", mode, game_id);
    const userAlias = localStorage.getItem('userAlias');
    if (!userAlias) {
        console.error('No user alias found in local storage');
        return;
    }

    getGameHistory(userAlias, game_id)
        .then(data => {
            const tableContainer = document.getElementById(tableContainerId);
            if (!tableContainer) {
                console.error(`No element found with id "${tableContainerId}"`);
                return;
            }

            if (!data || !data.length) {
                tableContainer.innerHTML = 'No games played';
                return;
            }

            let tableHTML = `<table class="table table-striped"><thead><tr><th>Player</th><th>Rank</th><th>Number of players</th><th>Date</th></tr></thead><tbody>`;
            data.forEach(game => {
                tableHTML += '<tr>';
                tableHTML += `<td>${game.user}</td>`;
                tableHTML += `<td>${game.position[0]}</td>`;
                tableHTML += `<td>${game.position[1]}</td>`;
                tableHTML += `<td>${new Date(game.date).toLocaleString()}</td>`;
                tableHTML += '</tr>';
            });
			console.log("tableHTML: ", tableHTML);
            tableHTML += '</tbody></table>';
            tableContainer.innerHTML = tableHTML;
        })
        .catch(error => console.error('Error getting game history:', error));
}



function updatePongVersusHistory() {
    const lang = localStorage.getItem('language') || 'en';
    let columns;

    if (lang === 'fr')
        columns = ['Joueur', 'Victoire', 'Date'];
    else if (lang === 'de')
        columns = ['Spieler', 'Sieg', 'Datum'];
    else
        columns = ['Player', 'Win', 'Date'];

	updateTable('historyPongVersusTableContainer', 'PongVersus', 'PV');
}

function updatePongTournamentHistory() {
    const lang = localStorage.getItem('language') || 'en';
    let columns;

    if (lang === 'fr')
        columns = ['Joueur', 'Place', 'Nombre de joueurs', 'Date'];
    else if (lang === 'de')
        columns = ['Spieler', 'Platz', 'Anzahl der Spieler', 'Datum'];
    else
        columns = ['Player', 'Rank', 'Number of players', 'Date'];

	updateTable('historyPongTournamentTableContainer', 'PongTournament', 'PT');
}

function updateExitSoloHistory() {
    const lang = localStorage.getItem('language') || 'en';
    let columns;

    if (lang === 'fr')
        columns = ['Joueur', 'Nombre de niveaux', 'Temps', 'Date'];
    else if (lang === 'de')
        columns = ['Spieler', 'Anzahl der Ebenen', 'Zeit', 'Datum'];
    else
        columns = ['Player', 'Number of levels', 'Time', 'Date'];

    updateTable('historyExitSoloTableContainer', 'ExitSolo', 'ES');
}

function updateExitVersusHistory() {
    const lang = localStorage.getItem('language') || 'en';
    let columns;

    if (lang === 'fr')
        columns = ['Joueur', 'Place', 'Meilleur des X victoires', 'Date'];
    else if (lang === 'de')
        columns = ['Spieler', 'Platz', 'Beste von X Siegen', 'Datum'];
    else
        columns = ['Player', 'Rank', 'Best of X wins', 'Date'];

    updateTable('historyExitVersusTableContainer', 'ExitVersus', 'EV');
}



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
    return new Promise((resolve, reject) => {
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
                reject(data.error); // Reject the Promise if there's an error
            } else {
                console.log("Game history:", data);
                resolve(data); // Resolve the Promise with the game history data
            }
        })
        .catch(error => {
            console.error(error);
            reject(error); // Reject the Promise if there's an error
        });
    });
}
// function getGameHistory(username, game_id) {
//     fetch(`/get_game_history?username=${username}&game_id=${game_id}`, {
//         method: 'GET'
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Failed to fetch game history data.');
//         }
//     })
//     .then(data => {
//         if (data.error) {
//             console.error("Error:", data.error);
//         } else {
//             console.log("Game history:", data);
//             // Process the game history data (e.g., display it on the webpage)
//         }
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }


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
