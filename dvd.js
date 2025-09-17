  const dvds = document.querySelectorAll('.dvd');

    dvds.forEach((dvd, index) => {
      setTimeout(() => {
        dvd.style.animationDelay = "0s";
        dvd.style.opacity = "1";
      }, index * 1000); 
    });

    dvds.forEach(dvd => {
      dvd.addEventListener("click", () => {
        const modal = document.getElementById("modal");
        const img = document.getElementById("modal-img");
        const title = document.getElementById("modal-title");

        img.src = dvd.dataset.img;
        title.innerText = dvd.dataset.musica;
        modal.style.display = "flex";
      });
    });

    function fecharModal() {
      document.getElementById("modal").style.display = "none";
    }
      document.addEventListener('DOMContentLoaded', ()=> {
      const row = document.getElementById('cdRow');
      const cds = Array.from(row.querySelectorAll('.cd'));

      if ('IntersectionObserver' in window){
        const obs = new IntersectionObserver((entries, observer)=>{
          entries.forEach(entry=>{
            if (entry.isIntersecting){
              triggerEnter();
              observer.unobserve(entry.target);
            }
          });
        }, {threshold: 0.25});
        obs.observe(row);
      } else {
        // fallback
        setTimeout(triggerEnter, 600);
      }

      function triggerEnter(){

        cds.forEach((cd, i)=>{
        
          void cd.offsetWidth;
          setTimeout(()=> cd.classList.add('in'), i * 120);
        });
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
  const row = document.getElementById('cdRow');
  const cds = row.querySelectorAll('.dvd');

  function triggerEnter() {
    cds.forEach((cd, i) => {
      setTimeout(() => {
        cd.classList.add('in');
      }, i * 400); // delay entre cada CD
    });
  }

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerEnter();
          observer.unobserve(entry.target); // só roda uma vez
        }
      });
    }, { threshold: 0.3 }); // 30% visível já dispara
    obs.observe(row);
  } else {
    // fallback
    setTimeout(triggerEnter, 600);
  }
});
setTimeout(() => {
  document.querySelector(".dvds").classList.add("juntos");
}, 2000); // 2s depois