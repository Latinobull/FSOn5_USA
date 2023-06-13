import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function SingleMovie() {
  const { movieID } = useParams();
  const [data, setData] = useState(null);
  console.log(movieID);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=5aa42c8f&i=${movieID}`
      );
      setData(res.data);
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data && (
        <div>
          <h1>{data.Title}</h1>
          <img src={data.Poster} alt="movie image" />
          <h4>{data.Plot}</h4>
          <h5>Released: {data.Released}</h5>
          <h5>Length: {data.Runtime}</h5>
          <h6>Rating: {data.imdbRating}</h6>
        </div>
      )}
    </div>
  );
}
