window.addEventListener("load", () => {
    const overlay = document.getElementById("overlay");

    // 1) Mostramos el logo suavemente
    overlay.classList.add("ready");

    // 2) Abrimos las "cortinas" con un pequeño delay
    setTimeout(() => {
      overlay.classList.add("open");
    }, 400);

    // 3) Cuando termina la transición de los paneles, ocultamos el overlay
    const onTransitionEnd = (e) => {
      // Solo esperamos la transición de un panel para marcar como done
      if (e.propertyName === "transform") {
        overlay.classList.add("done");
        // Limpiamos el listener
        overlay.removeEventListener("transitionend", onTransitionEnd, true);
      }
    };
    overlay.addEventListener("transitionend", onTransitionEnd, true);
  });