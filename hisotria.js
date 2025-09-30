document.addEventListener('DOMContentLoaded', function() {

 const imgs = document.querySelectorAll('.carousel-img');
 const container = document.querySelector('.carousel-imgs');
 const prev = document.querySelector('.carousel-btn.prev');
 const next = document.querySelector('.carousel-btn.next');
 let idx = 0;
 function show(idx) {
   container.style.transform = `translateX(-${idx * 400}px)`;
}
 prev.onclick = () => {
   idx = (idx - 1 + imgs.length) % imgs.length;
   show(idx);
};
 next.onclick = () => {
   idx = (idx + 1) % imgs.length;
   show(idx);
};
 setInterval(() => {
   idx = (idx + 1) % imgs.length;
   show(idx);
}, 4500);
 show(idx);
});