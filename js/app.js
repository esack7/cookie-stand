'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var theTable = document.getElementById('stores');
var storesObj = [];
var addStore = document.getElementById('input');

function StoreFronts(locationName, minCustomersPerHour, maxCustomersPerHOur, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHOur = maxCustomersPerHOur;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalCookies = [];
  this.calcCookiesThisHour();
  this.calcTotalCookies();
  storesObj.push(this);
  this.render();
}

StoreFronts.prototype.calcCustomersThisHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push((Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour)));
  }
};

StoreFronts.prototype.calcCookiesThisHour = function() {
  this.calcCustomersThisHour();
  for (var i = 0; i < this.customersEachHour.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
  }
};

StoreFronts.prototype.calcTotalCookies = function() {
  var reference = this.cookiesEachHour.reduce(function(a,b) {
    return a + b;
  });
  this.totalCookies.push(reference);
};

StoreFronts.prototype.render = function() {

  for(var j = 0; j < storesObj.length; j++) {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = storesObj[j].locationName;
    trEl.appendChild(tdEl);

    for(var i = 0; i < storesObj[j].cookiesEachHour.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = storesObj[j].cookiesEachHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookies;
    trEl.appendChild(tdEl);
    theTable.appendChild(trEl);
  }
  storesObj = [];
};

var renderHead = function() {
  var hrEl = document.createElement('tr');
  var hdEl = document.createElement('th');
  hdEl.textContent = 'Stores';
  hrEl.appendChild(hdEl);
  for (var i = 0; i < hours.length; i++) {
    var hdEl = document.createElement('th');
    hdEl.textContent = hours[i];
    hrEl.appendChild(hdEl);
  }
  hdEl = document.createElement('th');
  hdEl.textContent = 'Daily Sales';
  hrEl.appendChild(hdEl);
  theTable.appendChild(hrEl);
};

function handleSubmit(event) {
  event.preventDefault();
  var newAddStore = new StoreFronts(event.target.location.value, parseInt(event.target.minCustomers.value), parseInt(event.target.maxCustomers.value), parseInt(event.target.avgCookies.value));
  event.target.location.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookies.value = null;
}

renderHead();

var pikeAndFirst = new StoreFronts('Pike and First', 23, 65, 6.5);
var seaTacAir = new StoreFronts('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreFronts('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreFronts('Capitol Hill', 20, 38, 2.3);
var alki = new StoreFronts('Alki', 2, 16, 4.6);

addStore.addEventListener('submit', handleSubmit);
