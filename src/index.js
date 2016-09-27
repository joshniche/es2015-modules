
import {bacon} from "./breakfast.js";
console.log("Importing a value not explicitly exported:");
console.log("import {bacon} from \"./breakfast.js\";");
console.log("bacon:", bacon, "\n");

import {toast} from "./breakfast.js";
console.log("Importing a named export:");
console.log("import {toast} from \"./breakfast.js\";");
console.log("toast:", toast, "\n");

import {eggs, cereal} from "./breakfast.js";
console.log("Importing multiple named exports:");
console.log("import {eggs, cereal} from \"./breakfast.js\";");
console.log("eggs:", eggs);
console.log("cereal:", cereal, "\n");

import {eggs as omelette} from "./breakfast.js";
console.log("Importing a named export and assigning it to an alias:");
console.log("import {eggs as omelette} from \"./breakfast.js\";");
console.log("omelette:", omelette, "\n");

import breakfast from "./breakfast.js";
console.log("Importing a default export:");
console.log("import breakfast from \"./breakfast.js\";");
console.log("breakfast:", breakfast, "\n");

import {sausage} from "./breakfast.js";
console.log("Importing a value contained in a default export via destructuring:");
console.log("import {sausage} from \"./breakfast.js\";");
console.log("sausage:", sausage, "\n");

import lunch from "./lunch.js";
console.log("Importing a default export from a module that does not define a default export:");
console.log("import lunch from \"./lunch.js\";");
console.log("lunch:", lunch, "\n");

import * as wildcardBreakfast from "./breakfast.js";
console.log("Importing all exported bindings from a module:");
console.log("import * as wildcardBreakfast from \"./breakfast.js\";")
console.log("wildcardBreakfast:", wildcardBreakfast, "\n");
