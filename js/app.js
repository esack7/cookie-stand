var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Global var hours array to hold the business hours

//Object pikeAndFirst showing store's data
var pikeAndFirst = {
  locationName: 'Pike and First',
  minCustomersPerHour: 23,
  maxCustomersPerHOur: 65,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  cookiesEachHour: [],
  calcCookiesThisHour: function() {
    this.calcCustomersThisHour();
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  },
  render: function() {
    var headRender = document.getElementById('store');
    var headEl = document.createElement('h3');
    headEl.textContent = this.locationName;
    headRender.appendChild(headEl);
    this.calcCookiesThisHour();
    var listRender = document.getElementById('storeCookies');
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      listRender.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.cookiesEachHour.reduce(function(a,b) {
      return a + b;
    }) + ' cookies';
    listRender.appendChild(totalLi);
  }
};
pikeAndFirst.render();
//Render pikeAndFirst to webpage

//Object seaTacAir showing store's data
var seaTacAir = {
  locationName: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHOur: 24,
  avgCookiesPerCustomer: 6.3,
  customersEachHour: [],
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  cookiesEachHour: [],
  calcCookiesThisHour: function() {
    this.calcCustomersThisHour();
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  },
  render: function() {
    var headRender = document.getElementById('store2');
    var headEl = document.createElement('h3');
    headEl.textContent = this.locationName;
    headRender.appendChild(headEl);
    this.calcCookiesThisHour();
    var listRender = document.getElementById('storeCookies2');
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      listRender.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.cookiesEachHour.reduce(function(a,b) {
      return a + b;
    }) + ' cookies';
    listRender.appendChild(totalLi);
  }
};
seaTacAir.render();

//Object seattleCenter showing store's data
var seattleCenter = {
  locationName: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHOur: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour: [],
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  cookiesEachHour: [],
  calcCookiesThisHour: function() {
    this.calcCustomersThisHour();
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  },
  render: function() {
    var headRender = document.getElementById('store3');
    var headEl = document.createElement('h3');
    headEl.textContent = this.locationName;
    headRender.appendChild(headEl);
    this.calcCookiesThisHour();
    var listRender = document.getElementById('storeCookies3');
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      listRender.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.cookiesEachHour.reduce(function(a,b) {
      return a + b;
    }) + ' cookies';
    listRender.appendChild(totalLi);
  }
};
seattleCenter.render();

//Object capitolHill showing store's data
var capitolHill = {
  locationName: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHOur: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  cookiesEachHour: [],
  calcCookiesThisHour: function() {
    this.calcCustomersThisHour();
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  },
  render: function() {
    var headRender = document.getElementById('store4');
    var headEl = document.createElement('h3');
    headEl.textContent = this.locationName;
    headRender.appendChild(headEl);
    this.calcCookiesThisHour();
    var listRender = document.getElementById('storeCookies4');
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      listRender.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.cookiesEachHour.reduce(function(a,b) {
      return a + b;
    }) + ' cookies';
    listRender.appendChild(totalLi);
  }
};
capitolHill.render();

//Object alki showing store's data
var alki = {
  locationName: 'Alki',
  minCustomersPerHour: 2,
  maxCustomersPerHOur: 16,
  avgCookiesPerCustomer: 4.6,
  customersEachHour: [],
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomersPerHOur - this.minCustomersPerHour + 1) + this.minCustomersPerHour));
    }
  },
  cookiesEachHour: [],
  calcCookiesThisHour: function() {
    this.calcCustomersThisHour();
    for (var i = 0; i < this.customersEachHour.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  },
  render: function() {
    var headRender = document.getElementById('store5');
    var headEl = document.createElement('h3');
    headEl.textContent = this.locationName;
    headRender.appendChild(headEl);
    this.calcCookiesThisHour();
    var listRender = document.getElementById('storeCookies5');
    for (var i = 0; i < this.cookiesEachHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      listRender.appendChild(liEl);
    }
    var totalLi = document.createElement('li');
    totalLi.textContent = 'Total: ' + this.cookiesEachHour.reduce(function(a,b) {
      return a + b;
    }) + ' cookies';
    listRender.appendChild(totalLi);
  }
};
alki.render();
