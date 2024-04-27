async function	fetchLanguageData(lang)
{
	const response = await fetch(`/static/languages/${lang}.json`);
	return response.json();
}

function	setLanguagePreference(lang)
{
	localStorage.setItem('language', lang);
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
	const userPreferredLanguage = localStorage.getItem('language') || 'en';
	const langData = await fetchLanguageData(userPreferredLanguage);
	updateContent(langData);
	document.querySelector('.form-select.custom-select').value = userPreferredLanguage;
});

async function	updateModalMessage(errorKey)
{
	const lang = localStorage.getItem('language') || 'en';
	const langData = await fetchLanguageData(lang);
	document.getElementById('errorMessage').textContent = langData[errorKey];
	let alertModal = new bootstrap.Modal(document.getElementById('errorModal'));
	alertModal.show();
}
