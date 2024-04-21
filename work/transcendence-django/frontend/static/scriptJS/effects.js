const	videoLaunch = document.getElementById("videoLaunch");
const	menu = document.getElementById("menu");
const	menuButtons = document.getElementById("menuButtons");
const	newGameButton = document.getElementById("newGameButton");
const	optionsButton = document.getElementById("optionsButton");
const	highScoreButton = document.getElementById("highScoreButton");
const	creditsButton = document.getElementById("creditsButton");
const	newGameMenu = document.getElementById("newGameMenu");
const	optionsMenu = document.getElementById("optionsMenu");
const	highScoreMenu = document.getElementById("highScoreMenu");
const	creditsMenu = document.getElementById("creditsMenu");
const	backButtonNG = document.getElementById("backButtonNG");
const	backButtonOptions = document.getElementById("backButtonOptions");
const	backButtonHS = document.getElementById("backButtonHS");
const	backButtonCredits = document.getElementById("backButtonCredits");

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
	menuToShow.classList.remove("d-none");
	menuToRemove.classList.add("d-none");
	history.pushState({menu: menuToShow.id}, "", url);
}

newGameButton.addEventListener("click", () => switchMenu(newGameMenu, menuButtons, "/newGame"));
optionsButton.addEventListener("click", () => switchMenu(optionsMenu, menuButtons, "/options"));
highScoreButton.addEventListener("click", () => switchMenu(highScoreMenu, menuButtons, "/highScore"));
creditsButton.addEventListener("click", () => switchMenu(creditsMenu, menuButtons, "/credits"));
backButtonNG.addEventListener("click", () => switchMenu(menuButtons, newGameMenu, "/"));
backButtonOptions.addEventListener("click", () => switchMenu(menuButtons, optionsMenu, "/"));
backButtonHS.addEventListener("click", () => switchMenu(menuButtons, highScoreMenu, "/"));
backButtonCredits.addEventListener("click", () => switchMenu(menuButtons, creditsMenu, "/"));

// Navigation with the browser's button (back and forward) and the history API (pushState and popstate)

window.addEventListener("popstate", function(event)
{
	console.log("Historique modifié :", event.state);
	const allMenus = [menuButtons, newGameMenu, optionsMenu, highScoreMenu, creditsMenu];
	allMenus.forEach(menu => menu.classList.add("d-none"));
	if (event.state !== null)
	{
		const activeMenu = document.getElementById(event.state.menu);
		if (activeMenu)
			activeMenu.classList.remove(
		"d-none");
	}
	else
		menuButtons.classList.remove("d-none");
});

// Cursor's Animation

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
let cursorTimeout;

window.addEventListener("mousemove", function (e)
{
	const	posX = e.clientX;
	const	posY = e.clientY;

	cursorDot.style.left = `${posX}px`;
	cursorDot.style.top = `${posY}px`;

	cursorOutline.animate({
		left: `${posX}px`,
		top: `${posY}px`
	}, {duration: 200, fill: "forwards"});

	showCursor();
});

function hideCursor()
{
	cursorDot.style.display = "none";
	cursorOutline.style.display = "none";
}

function showCursor()
{
	cursorDot.style.display = "block";
	cursorOutline.style.display = "block";

	clearTimeout(cursorTimeout);

	cursorTimeout = setTimeout(hideCursor, 1000);
}

cursorTimeout = setTimeout(hideCursor, 1000);

// Background effect with floating dots

function createBackgroundSpots()
{
	const spotsCount = 100;
	const animations = ['floatAnimation1', 'floatAnimation2', 'floatAnimation3']; // Les noms des animations
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
		document.body.appendChild(spot);
	}
}
