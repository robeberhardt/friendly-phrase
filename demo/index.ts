/* tslint:disable:no-console */
import { phrase } from '../lib';

for (let i = 0; i < 5; i++) {
  console.log(`phrase: ${phrase()}`);
  console.log(`phrase: ${phrase('/')}`);
  console.log(`phrase: ${phrase('-')}\n\n`);
}
