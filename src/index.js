
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
console.log("Importing an object value contained in a default export by destructuring the property name:");
console.log("import {sausage} from \"./breakfast.js\";");
console.log("sausage:", sausage, "\n");

import lunch from "./lunch.js";
console.log("Importing a default export from a module that does not define a default export:");
console.log("import lunch from \"./lunch.js\";");
console.log("lunch:", lunch, "\n");

import {fries} from "./lunch.js";
console.log("Importing an value contained in an exported unassigned object by destructuring the property name:");
console.log("import {fries} from \"./lunch.js\";");
console.log("fries:", fries, "\n");

import * as wildcardBreakfast from "./breakfast.js";
console.log("Importing all exported bindings from a module with a default export:");
console.log("import * as wildcardBreakfast from \"./breakfast.js\";")
console.log("wildcardBreakfast:", wildcardBreakfast, "\n");

import * as wildcardLunch from "./lunch.js";
console.log("Importing all exported bindings from a module that exports an unassigned object:");
console.log("import * as wildcardLunch from \"./lunch.js\";")
console.log("wildcardLunch:", wildcardLunch, "\n");
