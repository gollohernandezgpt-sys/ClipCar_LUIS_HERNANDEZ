/**
 * MODEL
 * Contiene los datos de la aplicación.
 * No sabe nada de la UI ni del controlador.
 */
const model = {
  currentCar: null,

  cars: [
    {
      clickCount: 0,
      name: 'Coupe Maserati',
      imgSrc: 'img/black-convertible-coupe.jpg',
    },
    {
      clickCount: 0,
      name: 'Camaro SS 1LE',
      imgSrc: 'img/chevrolet-camaro.jpg',
    },
    {
      clickCount: 0,
      name: 'Dodge Charger 1970',
      imgSrc: 'img/dodge-charger.jpg',
    },
    {
      clickCount: 0,
      name: 'Ford Mustang 1966',
      imgSrc: 'img/ford-mustang.jpg',
    },
    {
      clickCount: 0,
      name: '190 SL Roadster 1962',
      imgSrc: 'img/mercedes-benz.jpg',
    },
  ],
};
