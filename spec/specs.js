describe('Contact', function(){
  it("creates a new contact with given specs", function(){
    var testContact = new Contact("Bob", "Ellis");
    expect(testContact.firstName).to.equal("Bob");
    expect(testContact.lastName).to.equal("Ellis");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Dave", "Matthews");
    expect(testContact.fullName()).to.equal("Dave Matthews");
  });

});

describe('Address', function(){
  it("creates a new address with the given specs", function(){
    var testAddress = new Address("4015 SE Hawthorne", "Portland", "OR", "97214");
    expect(testAddress.street).to.equal("4015 SE Hawthorne");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("OR");
    expect(testAddress.zip).to.equal("97214")
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Dad St.", "Dad City", "Dad State");
    expect(testAddress.fullAddress()).to.equal("123 Dad St., Dad City, Dad State");
  });
});
