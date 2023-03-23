import fetch from 'node-fetch';
fetch(`http://www.omdbapi.com/?apikey=5aa42c8f&i=tt0241527`)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data.Title);
  });
