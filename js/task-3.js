/*
Задача 3. конструктор рядків
У task-3.js оголоси клас StringBuilder, який зберігає поточний рядок у приватній властивості #value та змінює його через методи.
Оголоси в класі приватну властивість #value.
У constructor(initialValue) запиши initialValue у this.#value.
У getValue() поверни поточне значення this.#value.
У padEnd(str) додай str в кінець поточного рядка, а в padStart(str) — на його початок.
У padBoth(str) додай str з обох боків поточного значення.
Додай перевірочний код з ТЗ без змін.
*/
'use strict';

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="