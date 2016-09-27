'use strict';

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
var monthsEl = document.getElementById('months');

var ulEl = document.createElement('ul');

for (var i = 0; i < months.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = months[i];
  ulEl.appendChild(liEl);
}

monthsEl.appendChild(ulEl);


// Additional helper method for this assignment
var store = {
  getRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
