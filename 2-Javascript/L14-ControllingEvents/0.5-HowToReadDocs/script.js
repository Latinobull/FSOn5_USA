console.log(_.camelCase('Hey Everybody how is it going'));

const pTags = document.querySelectorAll('p');
const JqueryTags = $('p');

const h4El = document.querySelector('#text');
const Jqueryh4 = $('#text');

console.log(h4El);
console.log(Jqueryh4);

// h4El.addEventListener('click', e => {
//   alert(' You clicked me');
// });

Jqueryh4.click(e => {
  alert('Jquery you clicked me');
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 1000,
});
