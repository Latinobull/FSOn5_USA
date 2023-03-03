import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerEl = document.querySelector('.gallery');
console.log(galleryItems);

galleryItems.forEach(item => {
  console.log(item);
  const div = document.createElement('div');
  div.classList.add('gallery__item');
  div.innerHTML = `
  <a class="gallery__link" href="${this}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${this}"
    alt="${this}"
  />
</a>
  `;
  containerEl.append(div);
});
