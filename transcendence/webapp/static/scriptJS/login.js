let username = localStorage.getItem('userAlias');

// Redirection to the main page to register a username

function	registerUsernameModal()
{
	function getCookie(name) {
		const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
		return cookieValue ? cookieValue.pop() : '';
	}

	const usernameModal = new bootstrap.Modal(document.getElementById('usernameModal'),
	{
		backdrop: 'static',
		keyboard: false
	});
	history.pushState(null, "", '/');
	menuButtons.classList.remove('d-none');
	usernameModal.show();

	document.getElementById('usernameForm').addEventListener('submit', function (event) {
		event.preventDefault();
		const username = document.getElementById('userAlias').value; // TODO - CHECK VALUE

		if (!username) {
			alert("Please enter a username.");
			return;
		} else if (!/^[a-zA-Z0-9]+$/.test(username)) {
			alert("Username can only contain letters and numbers.");	//TODO Need to change the way error is returned to make it prettier
			return;
		}

		// Send username to backend
		const csrfToken = getCookie('csrftoken'); // Function to retrieve CSRF token from cookie

		fetch('/registerUsername', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': csrfToken // Include CSRF token in headers
			},
			body: JSON.stringify({ username: username })
		})
		.then(response => {
			if (response.ok) {
				localStorage.setItem('userAlias', username);
				usernameModal.hide();
			} else {
				return response.json().then(data => {
					alert('Error registering username: ' + data.error);
				});
			}
		})
		.catch(error => console.error('Error sending data:', error));
	});
}

// Disconnect the user and redirect to the main page

function	disconnectUser()
{
	localStorage.removeItem('userAlias');
	username = '';
	route();
}
