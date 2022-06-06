const createElem = (tag, attr) => {
  const elem = document.createElement(tag);

  return Object.assign(elem, { ...attr });
};

const createModal = (title, description) => {
  const overlayElem = createElem('div', { className: 'modal' });
  const modalElem = createElem('div', { className: 'modal__block' });
  const modalContainerElem = createElem('div', { className: 'modal__container' });

  const titleElem = createElem('h2', { 
    className: 'modal__title',
    textContent: `Заказать ${title}` });

    modalContainerElem.append(titleElem)
    modalElem.append(modalContainerElem);

  overlayElem.append(modalElem);
  return overlayElem;
}

const productTitle = document.querySelectorAll('.product__title');
const productDescription = document.querySelectorAll('.product__description');
const productBtn = document.querySelectorAll('.product__btn');

for (let i = 0; i < productBtn.length; i++) {
  productBtn[i].addEventListener('click', () => {
    const title = productTitle[i].textContent;
    const description = productDescription[i].textContent;

    const modal = createModal(title, description);

    document.body.append(modal);
  })
}





















// yandex map

// const init = () => {
//     const myMap = new ymaps.Map(
//       'map',
//       {
//         center: [55.7718, 37.6316],
//         zoom: 16,
//         controls: ['smallMapDefaultSet'],
//       },
//       {},
//     );
//     const myPlacemark = new ymaps.Placemark(
//       [55.7724, 37.6252],
//       {},
//       {
//         iconLayout: 'default#image',
//         iconImageHref: 'image/mark.svg',
//         iconImageSize: [70, 70],
//         iconImageOffset: [-35, -70],
//       },
//     );
//     myMap.geoObjects.add(myPlacemark);
//   };
//   ymaps.ready(init);
  

  // Leaflet

  const map = L.map('map').setView([55.7726, 37.63], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([55.7724, 37.6252])
  .addTo(map)
  .bindPopup('E-trans')
  .openPopup();

