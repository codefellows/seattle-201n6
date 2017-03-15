'use strict';

var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  total: 0
};

var form = document.getElementById('form');
var button = document.getElementById('fun-button');

var table = document.getElementById('table');
var tbody = document.getElementById('table-body');
var tfoot = document.getElementsByTagName('tfoot')[0];

new Item('socks', 8.99);
new Item('shoes', 49.99);
new Item('pantaloons', 89.99);

function Item(name, price) {
  this.name = name;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTax = function() {
  this.tax = parseFloat((this.price * 0.095).toFixed(2));
};

Item.prototype.calcTotal = function () {
  return this.total = parseFloat((this.price + this.tax).toFixed(2));
};

Item.prototype.updateGrandTotals = function () {
  grandTotals.price += this.price;
  grandTotals.tax += this.tax;
  grandTotals.total += this.total;
};

Item.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
  this.updateGrandTotals();
};

//compute tax & total for all objects
function updateObjects() {
  for (var elem of allItems) {
    elem.doAllTheMethods();
  }
}

function makeItemRow(obj) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = obj.name;
  row.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('td');
  taxCell.textContent = obj.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = obj.total;
  row.appendChild(totalCell);

  tbody.appendChild(row);
}

function makeAllItemRows() {
  for (var item of allItems) {
    makeItemRow(item);
  }
}

function makeTotalRow() {
  var row = document.createElement('tr');

  var totalCell = document.createElement('th');
  totalCell.textContent = 'Total';
  row.appendChild(totalCell);

  var priceCell = document.createElement('th');
  priceCell.textContent = grandTotals.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('th');
  taxCell.textContent = grandTotals.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('th');
  totalCell.textContent = grandTotals.total;
  row.appendChild(totalCell);

  tfoot.appendChild(row);
}

function handleButtonClick(event) {
  alert('the button has been clicked. now we are having fun');
  console.log(event.target);
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var price = parseFloat(event.target.price.value);

  var newItem = new Item(name, price);
  newItem.doAllTheMethods();

  makeItemRow(newItem);
  tfoot.innerHTML = ''
  makeTotalRow();

  event.target.name.value = null;
  event.target.price.value = null;
}


button.addEventListener('click', handleButtonClick);
form.addEventListener('submit', handleFormSubmit);

updateObjects();
makeAllItemRows();
makeTotalRow();
