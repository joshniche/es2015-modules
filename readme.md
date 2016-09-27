This is a quick demo to show how ES6 modules behave. Requires [node and npm](https://docs.npmjs.com/getting-started/installing-node).

You can view the modules at [`/src/breakfast.js`](src/breakfast.js) and [`/src/lunch.js`](src/lunch.js), and the executable file at [`/src/index.js`](src/index.js).

Getting started is easy, just run:

```
npm install

npm start
```

If you don't want to go through the trouble of cloning and running it, the expected output of this is below:

```
Importing a value not explicitly exported:
import {bacon} from "./breakfast.js";
bacon: undefined

Importing a named export:
import {toast} from "./breakfast.js";
toast: toast

Importing multiple named exports:
import {eggs, cereal} from "./breakfast.js";
eggs: eggs
cereal: cereal

Importing a named export and assigning it to an alias:
import {eggs as omelette} from "./breakfast.js";
omelette: eggs

Importing a default export:
import breakfast from "./breakfast.js";
breakfast: { sausage: 'sausage', eggs: 'eggs' }

Importing a value contained in a default export via destructuring:
import {sausage} from "./breakfast.js";
sausage: undefined

Importing a default export from a module that does not define a default export:
import lunch from "./lunch.js";
lunch: undefined

Importing all exported bindings from a module:
import * as wildcardBreakfast from "./breakfast.js";
wildcardBreakfast: { toast: 'toast',
  eggs: 'eggs',
  cereal: 'cereal',
  default: { sausage: 'sausage', eggs: 'eggs' } }
```
