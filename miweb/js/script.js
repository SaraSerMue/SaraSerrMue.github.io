document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-pestana');
  const secciones = document.querySelectorAll('.contenido-seccion');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      botones.forEach(b => b.classList.remove('activo'));
      boton.classList.add('activo');

      secciones.forEach(sec => sec.classList.remove('activo'));
      document.getElementById(boton.dataset.tab).classList.add('activo');
    });
  });

  const formulario = document.getElementById('formularioBoletin');
  if (formulario) {
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      if (!nombre) {
        alert('Por favor, introduce tu nombre.');
        return;
      }
      document.getElementById('gracias').style.display = 'block';
      alert('¡Gracias por suscribirte, ' + nombre + '!');
      this.reset();
    });
  }

  // Carruseles con scroll suave por botones
  document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    container.querySelector('.carousel-button.left').addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    container.querySelector('.carousel-button.right').addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });
});
