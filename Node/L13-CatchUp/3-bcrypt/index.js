const bcrypt = require('bcrypt');

const password = 'abc123';
const hash1 = '$2b$10$qBMNvj.Y4vCzW7nEUjSomOqFGBA3mEYgCYdguCCUzlFIhurCG0j8O';
const hash2 = '$2b$10$c4Jnd/n4jktWq8hVyAN6YeyV9ZZyDSnhOmSkmrBcNHeBBub8pfzM.';
const hash3 = '$2b$10$OZkiuoNJ1bGPjTFszwtV..CbQuLA/2VTfPdyCgukOD4yL/mziQmc1';

bcrypt.compare(password, hash3).then(data => {
  console.log(data);
});
