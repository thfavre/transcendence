async function	fetchLanguageData(lang)
{
	const response = await fetch(`static/languages/${lang}.json`);
	return response.json();
}

function	setLanguagePreference(lang)
{
	localStorage.setItem('language', lang);
	let test = localStorage.getItem('language');
	console.log(test, "setLanguagePreference");
	// location.reload(); //TO KEEP OR NOT TO KEEP?
}

function	updateContent(langData)
{
	document.querySelectorAll('[data-i18n]').forEach(element => {
		const key = element.getAttribute('data-i18n');
		element.textContent = langData[key];
	});
}

async function	changeLanguage(lang)
{
	await setLanguagePreference(lang);
	const langData = await fetchLanguageData(lang);
	updateContent(langData);
}

document.addEventListener('DOMContentLoaded', async () => {
	console.log("aaaaa");
	const userPreferredLanguage = localStorage.getItem('language') || 'en';
	const langData = await fetchLanguageData(userPreferredLanguage);
	updateContent(langData);
	document.querySelector('.form-select.custom-select').value = userPreferredLanguage;
});
