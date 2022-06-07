const disabledScroll = () => {
  document.body.scrollPosition = window.scrollY;
  document.body.style.cssText = `
    overflow: hidden;
    position: fixed;
    top: -${document.body.scrollPosition}px;
    left: 0;
    height: 100wh;
    width: 100wv;
    padding-right: ${window.innerWidth - document.body.offsetWidth}px;
  `;
}

const enabledScroll = () => {
  document.body.style.cssText = '';
  window.scroll({top: document.body.scrollPosition})
};

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

  const descriptionElem = createElem('p', { 
    className: 'modal__description',
    textContent: description });

  const formElem = createElem('form', { 
      className: 'modal__form',
      method: 'post',
      action: 'https://jsonplaceholder.typicode.com/posts',
      id: 'order',
    });

  const nameLabelElem = createElem('label', { 
    className: 'modal__label', 
  });

  const nameSpanElem = createElem('span', { 
    className: 'modal__text',
    textContent: 'Имя',
  });

  const nameInputElem = createElem('input', { 
    className: 'modal__input',
    placeholder: 'Введите ваше имя',
    name: 'name',
    required: true,
  });

  const phoneLabelElem = createElem('label', { className: 'modal__label' });
  const phoneSpanElem = createElem('span', { 
    className: 'modal__text',
    textContent: 'Телефон',
   });

  const phoneInputElem = createElem('input', { 
    className: 'modal__input',
    placeholder: 'Введите ваш телефон',
    name: 'phone',
    required: true,
  });

  const hideInput = createElem('input', {
    type: 'hidden',
    name: 'product',
    value: title,
  });

  const btnSubmit = createElem('button', {
    className: 'modal__btn',
    textContent: 'Заказать',
    type: 'submit',
  });
  btnSubmit.setAttribute('form', 'order');

  const closeModalBtn = createElem('button', {
    className: 'modal__close',
    innerHTML: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z" fill="#18171A"/>
    </svg>
    `,
  });

  overlayElem.addEventListener('click', event => {
    const target = event.target;
    if(target === overlayElem || target.closest('.modal__close')) {
      overlayElem.remove();
      enabledScroll();
    }
  })

  nameLabelElem.append(nameSpanElem, nameInputElem);
  phoneLabelElem.append(phoneSpanElem, phoneInputElem);
  formElem.append(nameLabelElem, phoneLabelElem, hideInput);

  modalContainerElem.append(titleElem, descriptionElem, formElem, btnSubmit, closeModalBtn);
  modalElem.append(modalContainerElem);
  overlayElem.append(modalElem);
  disabledScroll();
  document.body.append(overlayElem);
}

const productTitle = document.querySelectorAll('.product__title');
const productDescription = document.querySelectorAll('.product__description');
const productBtn = document.querySelectorAll('.product__btn');

for (let i = 0; i < productBtn.length; i++) {
  productBtn[i].addEventListener('click', () => {
    const title = productTitle[i].textContent;
    const description = productDescription[i].textContent;
    createModal(title, description);
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

