'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var theTable = document.getElementById('stores');
var storesObj = [];

function StoreFronts(locationName, minCustomersPerHour, maxCustomersPerHOur, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHOur = maxCustomersPerHOur;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.calcCookiesThisHour();
  storesObj.push(this);
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
  return this.cookiesEachHour;
};

var pikeAndFirst = new StoreFronts('Pike and First', 23, 65, 6.5);
var seaTacAir = new StoreFronts('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new StoreFronts('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreFronts('Capitol Hill', 20, 38, 2.3);
var alki = new StoreFronts('Alki', 2, 16, 4.6);

StoreFronts.prototype.render = function() {
  var hrEl = document.createElement('tr');
  var emptyH = document.createElement('th');
  emptyH.textContent = '';
  hrEl.appendChild(emptyH);
  for (var i = 0; i < hours.length; i++) {
    var hdEl = document.createElement('th');
    hdEl.textContent = hours[i];
    hrEl.appendChild(hdEl);
  }
  theTable.appendChild(hrEl);

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
    theTable.appendChild(trEl);
  }
};

StoreFronts.prototype.render();
