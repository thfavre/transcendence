const	videoLaunch = document.getElementById("videoLaunch");
const	menu = document.getElementById("menu");
const	menuButtons = document.getElementById("menuButtons");
const	newGameButton = document.getElementById("newGameButton");
const	historyButton = document.getElementById("historyButton");
const	creditsButton = document.getElementById("creditsButton");
const	pongButton = document.getElementById("pongButton");
const	findExitButton = document.getElementById("findExitButton");
const	newGameMenu = document.getElementById("newGameMenu");
const	historyMenu = document.getElementById("historyMenu");
const	creditsMenu = document.getElementById("creditsMenu");
const	pongMenu = document.getElementById("pongMenu");
const	findExitMenu = document.getElementById("findExitMenu");
const	backButtonNG = document.getElementById("backButtonNG");
const	backButtonHistory = document.getElementById("backButtonHistory");
const	backButtonCredits = document.getElementById("backButtonCredits");
const	backButtonPong = document.getElementById("backButtonPong");
const	backButtonFindExit = document.getElementById("backButtonFindExit");
const	backButtonFindExitSolo = document.getElementById("backButtonFindExitSolo");
const	backButtonFindExitVersus = document.getElementById("backButtonFindExitVersus");
const	backButtonPongVersus = document.getElementById("backButtonPongVersus");
const	backButtonPongTournament = document.getElementById("backButtonPongTournament");
const	notFoundMenu = document.getElementById("notFoundMenu");
const	findExitSoloIG = document.getElementById("findExitSoloIG");
const	findExitVersusIG = document.getElementById("findExitVersusIG");
const	pongVersusIG = document.getElementById("pongVersusIG");
const	pongTournamentIG = document.getElementById("pongTournamentIG");
const	allMenus = [menuButtons, newGameMenu, historyMenu, creditsMenu, notFoundMenu, pongMenu,findExitMenu, findExitSoloIG, findExitVersusIG, pongVersusIG, pongTournamentIG];

// Hide the video and show the menu

function	hideVideo()
{
	videoLaunch.classList.remove("show");
	setTimeout(() => {
		videoLaunch.classList.add("d-none");
		menu.classList.remove("d-none");
		createBackgroundSpots();
	}, 200);
}

setTimeout(hideVideo, 1000);

// Navigation through the menus and the buttons

function	switchMenu(menuToShow, menuToRemove, url)
{
	console.log("Switching menu to", menuToShow.id);
	// close running game
	if (!forceStopGame)
	{
		forceStopGame = true;
		console.log("The game has been stopped");
	}
	menuToShow.classList.remove("d-none");
	menuToRemove.classList.add("d-none");
	history.pushState({menu: menuToShow.id}, "", url);

}

newGameButton.addEventListener("click", () => switchMenu(newGameMenu, menuButtons, "/newGame"));
historyButton.addEventListener("click", () => switchMenu(historyMenu, menuButtons, "/history"));
creditsButton.addEventListener("click", () => switchMenu(creditsMenu, menuButtons, "/credits"));
pongButton.addEventListener("click", () => switchMenu(pongMenu, newGameMenu, "/newGame/pong"));
findExitButton.addEventListener("click", () => switchMenu(findExitMenu, newGameMenu, "/newGame/findExit"));
backButtonNG.addEventListener("click", () => switchMenu(menuButtons, newGameMenu, "/"));
backButtonHistory.addEventListener("click", () => switchMenu(menuButtons, historyMenu, "/"));
backButtonCredits.addEventListener("click", () => switchMenu(menuButtons, creditsMenu, "/"));
backButtonPong.addEventListener("click", () => switchMenu(newGameMenu, pongMenu, "/newGame"));
backButtonFindExit.addEventListener("click", () => switchMenu(newGameMenu, findExitMenu, "/newGame"));
backButtonFindExitSolo.addEventListener("click", () => switchMenu(findExitMenu, findExitSoloIG, "/newGame/findExit"));
backButtonFindExitVersus.addEventListener("click", () => switchMenu(findExitMenu, findExitVersusIG, "/newGame/findExit"));
backButtonPongVersus.addEventListener("click", () => switchMenu(pongMenu, pongVersusIG, "/newGame/pong"));
backButtonPongTournament.addEventListener("click", () => switchMenu(pongMenu, pongTournamentIG, "/newGame/pong"));
notFoundMenu.addEventListener("click", () => switchMenu(menuButtons, notFoundMenu, "/"));

// Navigation with the browser's button (back and forward) and the history API (pushState and popstate)

window.addEventListener("popstate", function(event)
{
	console.log("Historique modifié :")
	if (!forceStopGame)
	{
		forceStopGame = true;
		console.log("The game has been stopped");
	}
	hideAllMenus();
	if (event.state !== null)
	{
		const activeMenu = document.getElementById(event.state.menu);
		if (activeMenu)
			activeMenu.classList.remove("d-none");
	}
	else
		menuButtons.classList.remove("d-none");
});

function	hideAllMenus()
{
	allMenus.forEach(menu => menu.classList.add("d-none"));
	document.querySelectorAll('.modal.show').forEach(modalElement => {
		let	modalInstance = bootstrap.Modal.getInstance(modalElement);
		if (modalInstance)
			modalInstance.hide();
	});
}

// Basic router for managing refresh and direct access to a page\

document.addEventListener('DOMContentLoaded', route);

function	route()
{
	const	path = window.location.pathname.toLowerCase();
	hideAllMenus();
	// username = '';
	if (!username)
	{
		registerUsernameModal();
		return;
	}

	switch (path)
	{
		case '/newgame/':
			newGameMenu.classList.remove('d-none');
			break;
		case '/history/':
			historyMenu.classList.remove('d-none');
			break;
		case '/credits/':
			creditsMenu.classList.remove('d-none');
			break;
		case '/newgame/pong/':
			pongMenu.classList.remove('d-none');
			break;
		case '/newgame/findexit/':
			findExitMenu.classList.remove('d-none');
			break;
		case '/':
			menuButtons.classList.remove('d-none');
			break;
		default:
			notFoundMenu.classList.remove('d-none');
			break;
	}
}

// Background effect with floating dots

function createBackgroundSpots()
{
	const spotsCount = 100;
	const animations = ['floatAnimation1', 'floatAnimation2', 'floatAnimation3'];
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < spotsCount; i++)
	{
		const spot = document.createElement('div');
		spot.className = 'custom-background-spot';
		const x = Math.random() * 100;
		const y = Math.random() * 100;
		const animation = animations[Math.floor(Math.random() * animations.length)];
		spot.style.animation = `${animation} ${5 + Math.random() * 5}s ${Math.random() * 2}s infinite cubic-bezier(.68,-0.55,.27,1.55)`;
		spot.style.left = `${x}vw`;
		spot.style.top = `${y}vh`;
		fragment.appendChild(spot);
	}
	document.body.appendChild(fragment);
}

// Back to the main menu from title

function	backToMain()
{
	console.log("Back to main menu");
	hideAllMenus();
	menuButtons.classList.remove("d-none");
	history.pushState({menu: "menuButtons"}, "", "/");
}
