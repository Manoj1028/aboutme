QUnit.test("Testing",function(assert){
    assert.equal(lengthConverter1(10),4535.970244035198, 'Tested the conversion with 10 feet');
    assert.equal(lengthConverter1(20),9071.940488070397, 'Tested the conversion with 20 feet');
    assert.equal(lengthConverter1(5),2267.985122017599, 'Tested the conversion with 5 feet');
    assert.equal(lengthConverter1(25),11339.925610087997, 'Tested the conversion with 25 feet');
    assert.equal(lengthConverter1(3),1360.7910732105597, 'Tested the conversion with 3 feet');
    
});