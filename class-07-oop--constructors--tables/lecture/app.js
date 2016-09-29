'use strict';

function round(num, prec) {
  return parseFloat(num.toFixed(prec));
}

var allItems = [];

function Item(name, price) {
  this.name = name;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTax = function (price) {
  this.tax = round((price * 0.095), 2);
};

Item.prototype.calcTotal = function() {
  this.total = round((this.price + this.tax), 2);
};

Item.prototype.doAllTheMethods = function () {
  this.calcTax(this.price);
  this.calcTotal();
};

new Item('socks', 8.99);
new Item('shoes', 49.99);
new Item('pantaloons', 89.99);

function makeAllTheThings() {
  for (var i = 0; i < allItems.length; i++) {
    allItems[i].doAllTheMethods();
  }
}

makeAllTheThings();

//get reference to table element
var tableEl = document.getElementById('generated-table');

function makeRow(obj) {
  //make a row
  var rowEl = document.createElement('tr');

  //REPEAT THIS PART
    //make a cell
  var nameCell = document.createElement('td');
    //give content to cell
  nameCell.textContent = obj.name;
    //append cell to the row
  rowEl.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  rowEl.appendChild(priceCell);

  var taxEl = document.createElement('td');
  taxEl.textContent = obj.tax;
  rowEl.appendChild(taxEl);

  var totalEl = document.createElement('td');
  totalEl.textContent = obj.total;
  rowEl.appendChild(totalEl);

  //append row to the table
  tableEl.appendChild(rowEl);
}

function makeTable() {
  for (var item of allItems) {

    makeRow(item);
  }
}

makeTable();
