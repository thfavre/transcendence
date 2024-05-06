let username = localStorage.getItem('userAlias');
let usernameFormSubmitted = false;

function getCookie(name) {
	const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
	return cookieValue ? cookieValue.pop() : '';
}
// Redirection to the main page to register a username
function	registerUsernameModal()
{

	const usernameModal = new bootstrap.Modal(document.getElementById('usernameModal'),
	{
		backdrop: 'static',
		keyboard: false
	});
	history.pushState(null, "", '/');
	menuButtons.classList.remove('d-none');
	usernameModal.show();

	const usernameForm = document.getElementById('usernameForm');

	function handleFormSubmit(event){
		event.preventDefault();
		const username = document.getElementById('userAlias').value;

		const errorMsg = validateUsername(username);
		if (errorMsg) {
			alert(errorMsg);
			return;
		}

		const csrfToken = getCookie('csrftoken');

		fetch('/registerUsername', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': csrfToken
			},
			body: JSON.stringify({ username: username })
		})
		.then(response => {
			if (response.ok) {
				localStorage.setItem('userAlias', username);
				console.log('Username registered:', username);
				getDatabase();
				usernameModal.hide();
				usernameForm.removeEventListener('submit',handleFormSubmit);
			} else {
				return response.json().then(data => {
					alert('Error registering username: ' + data.error);
				});
			}
		})
		.catch(error => console.error('Error sending data:', error));
	}

	usernameForm.addEventListener('submit', handleFormSubmit);

	function validateUsername(username) {
		if (!username) {
			return "Please enter a username.";
		} else if (!/^[a-zA-Z0-9]+$/.test(username)) {
			return "Username can only contain letters and numbers.";
		} else if (username.length < 2 || username.length > 20) {
			return "Username must be between 2 and 20 characters.";
		}
		return null;
	}
}

// Disconnect the user and redirect to the main page
function	disconnectUser()
{
	if (!forceStopGame)
	{
		forceStopGame = true;
		console.log("The game has been stopped");
	}
	localStorage.removeItem('userAlias');
	username = '';
	route();
	changeLanguageDropdown()
}
