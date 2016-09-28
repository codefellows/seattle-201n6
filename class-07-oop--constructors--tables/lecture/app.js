var allItems = [];

function Item(n, price) {
  this.name = n;
  this.price = price;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

var socks = {
  name: 'socks',
  price: 8.99,
  tax: 0,
  total: 0,

  calcTax: function(price) {
    return parseFloat((price * 0.095).toFixed(2));
  },
  calcTotal: function() {
    this.total = parseFloat((this.price + this.tax).toFixed(2));
  }
};

socks.tax = socks.calcTax(socks.price);
socks.calcTotal();

var shoes = {
  name: 'shoes',
  price: 49.99,
  tax: 0,
  total: 0,

  calcTax: function(price) {
    return parseFloat((price * 0.095).toFixed(2));
  },
  calcTotal: function() {
    this.total = parseFloat((this.price + this.tax).toFixed(2));
  }
};

shoes.tax = shoes.calcTax(shoes.price);
shoes.calcTotal();


var pantaloons = {
  name: 'pantaloons',
  price: 89.99,
  tax: 0,
  total: 0,

  calcTax: function(price) {
    return parseFloat((price * 0.095).toFixed(2));
  },
  calcTotal: function() {
    this.total = parseFloat((this.price + this.tax).toFixed(2));
  }
};

pantaloons.tax = pantaloons.calcTax(pantaloons.price);
pantaloons.calcTotal();


//get reference to table element

function makeRow(obj) {
  //make a row

  //REPEAT THIS PART
    //make a cell

    //give content to cell

    //append cell to the row


  //append row to the table

}
