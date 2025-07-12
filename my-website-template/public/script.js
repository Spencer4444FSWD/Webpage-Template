const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
	navToggle.classList.toggle('active');
	mainNav.classList.toggle('active');

	const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
	navToggle.setAttribute('aria-expanded', !isExpanded);
	});