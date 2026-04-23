/**
 * VIEW
 * Maneja todo lo que el usuario ve.
 * Se comunica con el controlador, nunca directamente con el modelo.
 */

/* ─── Vista: Lista de autos ─────────────────────────────────────── */
const carListView = {
  init() {
    this.carListElem = document.getElementById('car-list');
    this.render();
  },

  render() {
    const cars = controller.getCars();
    this.carListElem.innerHTML = '';

    cars.forEach((car) => {
      const elem = document.createElement('li');
      elem.className =
        'list-group-item d-flex justify-content-between align-items-center car-list-item';
      elem.textContent = car.name;

      // Badge de clics
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = car.clickCount;
      elem.appendChild(badge);

      elem.addEventListener('click', (function (carCopy) {
        return function () {
          // Marcar item activo
          document
            .querySelectorAll('.car-list-item')
            .forEach((el) => el.classList.remove('active'));
          elem.classList.add('active');

          controller.setCurrentCar(carCopy);
          carView.render();
        };
      })(car));

      this.carListElem.appendChild(elem);
    });
  },

  /** Actualiza solo los badges sin re-renderizar toda la lista */
  updateBadges() {
    const cars = controller.getCars();
    const items = this.carListElem.querySelectorAll('.car-list-item');
    items.forEach((item, i) => {
      item.querySelector('.badge').textContent = cars[i].clickCount;
    });
  },
};

/* ─── Vista: Detalle del auto ────────────────────────────────────── */
const carView = {
  init() {
    this.carNameElem  = document.getElementById('car-name');
    this.carImageElem = document.getElementById('car-img');
    this.countElem    = document.getElementById('car-count');

    this.carImageElem.addEventListener('click', () => {
      controller.incrementCounter();
    });

    this.render();
  },

  render() {
    const currentCar = controller.getCurrentCar();

    // Animación de pulso al cambiar de auto
    this.carImageElem.classList.remove('pop');
    void this.carImageElem.offsetWidth; // reflow para reiniciar animación
    this.carImageElem.classList.add('pop');

    this.carNameElem.textContent  = currentCar.name;
    this.carImageElem.src         = currentCar.imgSrc;
    this.carImageElem.alt         = currentCar.name;
    this.countElem.textContent    = currentCar.clickCount;
  },
};
