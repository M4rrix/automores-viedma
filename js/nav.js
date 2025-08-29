(function () {
    const NAV_H = 80; // ajustá según tu navbar
    const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    links.forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href');
        const el = document.querySelector(id);
        if (!el) return;

        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_H;
        window.scrollTo({ top: y, behavior: 'smooth' });

        // Cerrar el menú colapsable en mobile (Bootstrap)
        const collapse = document.querySelector('.navbar-collapse.show');
        if (collapse && window.bootstrap) {
          window.bootstrap.Collapse.getInstance(collapse)?.hide();
        }
      });
    });
  })();