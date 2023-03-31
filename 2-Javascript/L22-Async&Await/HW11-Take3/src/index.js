import axios from 'axios';
const formEl = document.querySelector('#search-form');
const input = document.querySelector('[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
let pageNumber = 1;
async function getData(e) {
  e.preventDefault();
  const userSearch = input.value;
  const response = await axios.get(
    `https://pixabay.com/api?key=25716133-5af1cc1f28b9664f0c877d305&q=${userSearch}&image_type=photos&orientation=horizontal&safesearch=true&per_page=40&page=${pageNumber}`
  );
  console.log(response);
  response.data.hits.forEach(item => {
    const div = document.createElement('div');
    div.setAttribute('class', 'photo-card');
    div.innerHTML = `
    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes: ${item.likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${item.views}</b>
      </p>
      <p class="info-item">
        <b>Comments: ${item.comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${item.downloads}</b>
      </p>
    </div>
    `;
    gallery.append(div);
  });
}

formEl.addEventListener('submit', getData);
loadMore.addEventListener('click', e => {
  pageNumber++;
  getData(e);
});
