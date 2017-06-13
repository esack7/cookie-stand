var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
