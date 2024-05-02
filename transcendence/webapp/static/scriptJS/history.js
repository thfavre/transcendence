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
