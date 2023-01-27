const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
const { rating } = book;
const message = `
The book ${title} by ${author} is an amazing book.
It is the first in it's ${genres[0]} genre in it's series.
It got a rating of ${rating} which is amazing.
`;

console.log(message);
