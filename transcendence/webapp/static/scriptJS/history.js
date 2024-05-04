// function	showHistory()
// {

// }




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

// NO TOUCH

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
