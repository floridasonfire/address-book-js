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
