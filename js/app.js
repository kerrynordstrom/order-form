Customer.allCustomers = [];


Customer.addCustomer = document.getElementById('addCustomer');

//Customer Constructor function
function Customer(firstName, lastName, streetAddress, city, state, zipcode, country, homeNumber, workNumber, eMailAddress, ccNum, expiry, cvc, billingZip)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.streetAddress = streetAddress;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.country = country;
  this.homeNumber = homeNumber;
  this.workNumber = workNumber;
  this.eMailAddress = eMailAddress;
  this.ccNum = ccNum;
  this.expiry = expiry;
  this.cvc = cvc;
  this.billingZip = billingZip;
  Customer.allCustomers.push(this);
};

function handleNewCustomerBilling(e) {
  e.preDefault();
  console.log('test');
  var firstName = e.target.firstName.value;
  var lastName = e.target.lastName.value;
  var streetAddress = e.target.streetAddress.value;
  var city = e.target.city.value;
  var state = e.target.state.value;
  var zipcode = parseInt(e.target.zipcode.value);
  var country = e.target.country.value;
  var homeNumber = parseInt(e.target.homeNumber.value);
  var workNumber = parseInt(e.target.workNumber.value);
  var eMailAddress = e.target.eMailAddress.value;
  var ccNum = parseInt(e.target.ccNum.value);
  var expiry = parseInt(e.target.expiry.value);
  var cvc = parseInt(e.target.cvc.value);
  var billingZip = parseInt(e.target.billingZip.value);

  new Customer(firstName, lastName, streetAddress, city, state, zipcode, country, homeNumber, workNumber, eMailAddress, ccNum, expiry, cvc, billingZip);

  e.target.firstName.value = null;
  e.target.lastName.value = null;
  e.target.streetAddress.value = null;
  e.target.city.value = null;
  e.target.state.value = null;
  e.target.billingZip.value = null;
  e.target.country.value = null;
  e.target.homeNumber.value = null;
  e.target.workNumber.value = null;
  e.target.eMailAddress.value = null;
  e.target.ccNum.value = null;
  e.target.expiry.value = null;
  e.target.cvc.value = null;

}

addCustomer.addEventListener('submit', handleNewCustomerBilling);
