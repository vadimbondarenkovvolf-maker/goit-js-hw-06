/*
задачa 1: акаунт користувача
У task-1.js виконай рефакторинг методів об’єкта customer. Кожен метод має читати або змінювати властивості цього ж об’єкта через this.
У getBalance() поверни поточне значення this.balance.
У getDiscount() поверни this.discount, а в setDiscount(value) запиши value у цю властивість.
У getOrders() поверни масив this.orders.
У addOrder(cost, order) обчисли вартість зі знижкою за допомогою this.discount, зменш this.balance і додай order до this.orders.
Залиш перевірочні виклики з ТЗ без змін.
Не замінюй this на пряме звертання до customer: методи мають працювати з об’єктом, який їх викликає.
*/
'use strict';

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15

customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750

console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]