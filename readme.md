# ES2015 Modules

This is a quick demo to show how ES2015 (a.k.a. ES6) modules behave.

You can view the modules at [`/src/breakfast.js`](src/breakfast.js) and [`/src/lunch.js`](src/lunch.js), and the executable file at [`/src/index.js`](src/index.js).

### Requirements
This project requires `node` and `npm`, which can be installed by following the instructions [here](https://docs.npmjs.com/getting-started/installing-node).

### Install

Getting started is easy. To install, run:

```
git clone https://github.com/joshniche/es2015-modules.git
cd es2015-modules
npm install
```

### Run

To see the output of [`/src/index.js`](src/index.js) in your CLI, run:

```
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

Importing an object value contained in a default export by destructuring the property name:
import {sausage} from "./breakfast.js";
sausage: undefined

Importing a default export from a module that does not define a default export:
import lunch from "./lunch.js";
lunch: undefined

Importing an value contained in an exported unassigned object by destructuring the property name:
import {fries} from "./lunch.js";
fries: fries

Importing all exported bindings from a module with a default export:
import * as wildcardBreakfast from "./breakfast.js";
wildcardBreakfast: { toast: 'toast',
  eggs: 'eggs',
  cereal: 'cereal',
  default: { sausage: 'sausage', eggs: 'eggs' } }

Importing all exported bindings from a module that exports an unassigned object:
import * as wildcardLunch from "./lunch.js";
wildcardLunch: { pizza: 'pizza', burger: 'burger', fries: 'fries' } 
```


##Additional resources

- [*Misunderstanding ES6 Modules, Upgrading Babel, Tears, and a Solution*](https://medium.com/@kentcdodds/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0#.t4vmu2utb) by Kent C. Dodds
- [*Babel and CommonJS modules*](http://www.2ality.com/2015/12/babel-commonjs.html) by Dr. Axel Rauschmayer
