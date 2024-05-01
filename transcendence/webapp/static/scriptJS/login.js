let username = localStorage.getItem('userAlias');

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

	document.getElementById('usernameForm').addEventListener('submit', function (event) {
		event.preventDefault();
		username = document.getElementById('userAlias').value; // TO DO - CHECK VALUE
		localStorage.setItem('userAlias', username);
		usernameModal.hide();
	});
}

// Disconnect the user and redirect to the main page

function	disconnectUser()
{
	localStorage.removeItem('userAlias');
	username = '';
	route();
}
