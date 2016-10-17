//---CONSTRUCTOR---//

function Avocado(name, path) {
  this.name = name;
  this.path = path;
  this.timesShown = 0;
  this.votes = 0;
  tracker.allAvocados.push(this);
}


var tracker = {
  //---DATA & DOM REFERENCES---//

  allAvocados: [],
  chartLabels: [],
  chartVotes: [],
  img1: document.querySelector('.img1'),
  img2: document.querySelector('.img2'),
  displaySection: document.getElementById('display'),
  resultsButton: document.getElementById('button'),

  instantiateAvocados: function() {
    new Avocado('hand', 'img/avocado-hand.png');
    new Avocado('cartoon', 'img/avoCartoon.jpg');
    new Avocado('hass', 'img/hass.jpg');
    new Avocado('ripe', 'img/ripe-avocado.png');
    new Avocado('bird', 'img/avocado-bird.jpg');
  },

  //---IMAGE & VOTING FUNCTIONS---//

  randomIndex: function (arr) {
    return Math.floor(Math.random() * arr.length);
  },

  getIndices: function (arr) {
    var ind1 = this.randomIndex(arr);
    var ind2 = this.randomIndex(arr);

    while (ind2 === ind1) {
      ind2 = this.randomIndex(arr);
    }

    return [ind1, ind2];
  },

  displayPics: function () {
    var indices = this.getIndices(this.allAvocados);
    var leftImg = this.allAvocados[indices[0]];
    var rightImg = this.allAvocados[indices[1]];

    this.img1.src = leftImg.path;
    this.img2.src = rightImg.path;

    this.img1.id = leftImg.name;
    this.img2.id = rightImg.name;

    leftImg.timesShown += 1;
    rightImg.timesShown += 1;
  },

  tallyVote: function (id) {
    for (var avo of this.allAvocados) {
      if (avo.name === id) {
        avo.votes += 1;
      }
    }
  },

  //---CHART FUNCTIONS---//

  // TODO: whenever we need to (re-)render the chart, update the name & vote data
  updateChartData: function() {

  },

  // TODO: make a chart
  makeChart: function() {

  }
}

//---EVENT LISTENERS---//

tracker.displaySection.addEventListener('click', function(event) {
  if (event.target.id !== 'display') {
    tracker.tallyVote(event.target.id);
    tracker.displayPics();
  }
})

// TODO: add event listener to the results button

//---SHOW FIRST PICS---//
tracker.instantiateAvocados();
tracker.displayPics();
