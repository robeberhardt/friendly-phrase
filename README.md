## Friendly Phrase
---

This module generates three-word English phrases intended for use in voice-based authentication and similar use cases. The phrases are built from hand-crafted word lists containing adjectives, colors and animal names, and are designed to be inoffensive and easy to pronounce.

### Installation
`npm install friendly-phrase`

### Example
#### Typescript
```
import { phrase } from 'friendly-phrase';
console.log(phrase());

$ Angry Olive Cobra
```

#### Javascript
```
const phrase = require('friendly-phrase').phrase;
console.log(phrase('-'));

$ Enchanting-Cinnamon-Caribou
```

### API
_phrase()_
- returns a string made from an adjective, color and animal name separated by spaces

_phrase(sep: string)_
- returns a phrase with custom separator

_phrase(sep: string, prevent: string)_
- the _prevent_ parameter can be used to assure that the returned phrase does not match a specific string. The generated response will be validated against the prevent string and only a non-matching result will be returned. This avoids the need to check a database or do other server-side work to make sure a passphrase is 'new' for a given user or session