const body = document.body;
const regularTextEl = document.querySelector('#regularText');
const debouncedText = document.querySelector('#debounceText');
const allCounters = {
  raw: 0,
  trailing: 0,
  leading: 0,
};

document.addEventListener('scroll', () => {
  allCounters.raw++;
  console.log(allCounters.raw);
  regularTextEl.textContent = allCounters.raw;
});

document.addEventListener(
  'scroll',
  _.debounce(() => {
    allCounters.trailing++;
    debouncedText.textContent = allCounters.trailing;
  }, 400)
);
