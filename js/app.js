Customer.allCustomers = [];


Customer.addCustomer = document.getElementById('customerRegistration');

//Customer Constructor function
function Customer(firstName, lastName, streetAddress, city, state, zipcode, country, homeNumber, workNumber, eMailAddress, ccNum, expiry, cvc, billingZip, item, quantity)
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
  this.item = item;
  this.quantity = quantity;
  Customer.allCustomers.push(this);
};

function handleNewCustomerBilling(e) {

  e.preventDefault();

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
  // var item = e.target.item.value;
  // var quantity = parseInt(e.target.quantity.value);

  new Customer(firstName, lastName, streetAddress, city, state, zipcode, country, homeNumber, workNumber, eMailAddress, ccNum, expiry, cvc, billingZip);

  if (firstName !== null || lastName !== null || streetAddress !== null || city !== null || state !== null || zipcode !== null || eMailAddress !== null || ccNum !== null || expiry !== null || cvc !== null || billingZip !== null) {

    Customer.addCustomer.removeEventListener('submit', handleNewCustomerBilling);

    localStorage.allCustomers = JSON.stringify(Customer.allCustomers);
    console.log(Customer.allCustomers);
  
  } else {
    alert('Please complete the customer information form!');
  };

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


Customer.addCustomer.addEventListener('submit', handleNewCustomerBilling);
