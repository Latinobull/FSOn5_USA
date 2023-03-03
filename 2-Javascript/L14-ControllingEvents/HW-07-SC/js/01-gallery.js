import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerEl = document.querySelector('.gallery');
console.log(galleryItems);

galleryItems.forEach(item => {
  const img = document.createElement('img');
  img.setAttribute('src', item.preview);
  img.setAttribute('alt', item.description);
  containerEl.append(img);
});
