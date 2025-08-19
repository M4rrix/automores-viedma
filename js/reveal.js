
(function(){
  const els = document.querySelectorAll('.reveal');

  // Permite leer data-delay y aplicarlo a cada elemento
  els.forEach(el => {
    const d = el.getAttribute('data-delay');
    if (d) el.style.transitionDelay = `${parseInt(d,10)}ms`;
  });

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animar una vez
      }
    });
  }, {
    root: null,
    threshold: 0.15,     // aparece cuando ~15% es visible
    rootMargin: "0px 0px -5% 0px" // dispara un pelín antes
  });

  els.forEach(el => obs.observe(el));
})();

