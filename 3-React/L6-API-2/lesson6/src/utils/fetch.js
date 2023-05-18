import axios from 'axios';

export default function Fetch(search, genre) {
  return axios.get(
    `http://www.omdbapi.com/?apikey=5aa42c8f&s=${search}&type=${genre}`
  );
}
