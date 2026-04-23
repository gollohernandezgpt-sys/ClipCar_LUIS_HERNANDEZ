/**
 * CONTROLLER
 * Actúa como puente entre el Model y las Views.
 * Contiene la lógica de negocio de la aplicación.
 */
const controller = {
  init() {
    // Establecer el primer auto como seleccionado por defecto
    model.currentCar = model.cars[0];

    // Inicializar las vistas
    carListView.init();
    carView.init();

    // Marcar el primer item como activo en la lista
    const firstItem = document.querySelector('.car-list-item');
    if (firstItem) firstItem.classList.add('active');
  },

  getCurrentCar() {
    return model.currentCar;
  },

  getCars() {
    return model.cars;
  },

  setCurrentCar(car) {
    model.currentCar = car;
  },

  incrementCounter() {
    model.currentCar.clickCount++;
    carView.render();
    carListView.updateBadges(); // actualiza el badge en la lista
  },
};

// ¡Arrancamos!
controller.init();
