document.addEventListener('DOMContentLoaded', function() {
	const dvds = document.querySelectorAll('.dvd');
	const modal = document.getElementById('dvdModal');
	const modalImg = document.getElementById('modalImg');
	const modalMusica = document.getElementById('modalMusica');
	const modalViews = document.getElementById('modalViews');
	const closeBtn = document.querySelector('.modal .close');

	dvds.forEach(dvd => {
		dvd.addEventListener('click', function() {
			modal.style.display = 'block';
			modalImg.src = dvd.getAttribute('data-img');
			modalMusica.textContent = dvd.getAttribute('data-musica');
			modalViews.textContent = dvd.getAttribute('data-views');
		});
	});

	closeBtn.addEventListener('click', function() {
		modal.style.display = 'none';
	});

	window.addEventListener('click', function(event) {
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	});
});
