const phrase = require('../lib').phrase;

for (let i = 0; i < 5; i++) {
  console.log(`phrase: ${phrase()}`);
  console.log(`phrase: ${phrase('/')}`);
  console.log(`phrase: ${phrase('-')}\n\n`);
}
