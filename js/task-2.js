/*
задачa 2: склад
У task-2.js оголоси клас Storage, який зберігає масив товарів у приватній властивості #items і надає методи для роботи з нею.
Оголоси в класі приватну властивість #items.
У constructor(items) запиши отриманий масив у this.#items.
У getItems() поверни поточне значення this.#items.
У addItem(newItem) додай newItem до приватного масиву.
У removeItem(itemToRemove) знайди індекс товару та видали один елемент за цим індексом.
Додай перевірочний код з ТЗ без змін.
*/
'use strict';
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.#items.indexOf(itemToRemove);
    if (index !== -1) {
      this.#items.splice(index, 1);
  }
 }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]