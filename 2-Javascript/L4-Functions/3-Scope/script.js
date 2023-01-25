const userName = 'John';
let i = 0;

hotTake();

function test() {
  while (i < 100) {
    hotTake();
  }
}
function hotTake() {
  const message = ' thinks that Star Wars is a mid franchise';
  console.log(userName + message + `: ${i}`);
  i++;
  test();

}


// hotTake2();


// const hotTake2 = function () {
//   const message = ' thinks Dune is better than Star Wars';
//   console.log(userName + message);
// };z