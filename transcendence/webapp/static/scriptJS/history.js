function sendGameData(gameData) {
    // Make sure gameData is a JavaScript object containing the necessary data

    // Convert gameData to JSON
    const jsonData = JSON.stringify(gameData);

    // Send JSON data to the backend using fetch API
    fetch('/save_game_result/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') // Include CSRF token in headers
        },
        body: jsonData
    })
    .then(response => {
        if (response.ok) {
            // Game data saved successfully
            console.log('Game data saved successfully');
        } else {
            // Error handling if saving failed
            console.error('Failed to save game data');
        }
    })
    .catch(error => {
        console.error('Error sending game data:', error);
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
