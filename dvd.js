document.addEventListener('DOMContentLoaded', function() {
    const dvds = document.querySelectorAll('.dvd');
    const modal = document.getElementById('dvdModal');
    const modalMusica = document.getElementById('modalMusica');
    const modalViews = document.getElementById('modalViews');
    const modalLink = document.getElementById('modalLink'); // may be null
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal .close');

    dvds.forEach(dvd => {
        dvd.addEventListener('click', function() {
            if (!modal) return;
            modal.style.display = 'block';
            if (modalMusica) modalMusica.textContent = dvd.getAttribute('data-musica') || '';
            if (modalViews) modalViews.textContent = dvd.getAttribute('data-views') || '';

            // set modal image from inner .dvd-img if present
            const img = dvd.querySelector('.dvd-img') || dvd.querySelector('img');
            if (modalImg) {
                if (img && (img.src || img.getAttribute('src'))) {
                    modalImg.src = img.src || img.getAttribute('src');
                    modalImg.style.display = 'block';
                } else {
                    modalImg.style.display = 'none';
                }
            }

            // handle optional link (guarded)
            const link = dvd.getAttribute('data-link');
            if (modalLink) {
                if (link) {
                    modalLink.href = link;
                    modalLink.style.display = 'block';
                } else {
                    modalLink.style.display = 'none';
                }
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', function(event) {
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
