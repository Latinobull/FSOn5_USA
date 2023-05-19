export default function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '?key=25716133-5af1cc1f28b9664f0c877d305';
  const searchParams = 'image_type=photo&orientation=horizontal&per_page=12';

  return fetch(
    `${BASE_URL}${API_KEY}&q=${query}&page=${page}&${searchParams}`
  ).then(response => response.json());
}
