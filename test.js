const assert = require('assert');
const bS = require('./binarySearch');
describe ("binarySearch",function(){
    let arr = [-1797,-0.8,0,2,4,4,67.689,87,140,142,230,245,365,675.56,744,876,1955];
    describe("поиск присутствующего элемента в массиве ["+arr+"]", function(){
        it ("элемент 142 присутствует, его индекс равен 9", function(){
            assert.equal(bS.binarySearch(arr, 142), 9);
        });
        it ("первый элемент -1797 присутствует, его индекс равен 0", function(){
            assert.equal(bS.binarySearch(arr, -1797), 0);
        });
        it ("последний элемент 1955 присутствует, его индекс равен 16", function(){
            assert.equal(bS.binarySearch(arr, 1955), 16);
        });
    });
    describe("поиск отсутствующего элемента в массиве ["+arr+"]", function(){
        it ("элемента 14 нет в массиве", function(){
            assert.equal(bS.binarySearch(arr, 14), -1);
        });
        it ("элемента -(2**52) нет в массиве", function(){
            assert.equal(bS.binarySearch(arr, -(2**52)), -1);
        });
        it ("элемента 2**52 нет в массиве", function(){
            assert.equal(bS.binarySearch(arr, 2**52), -1);
        });
    });
    it ("в пустом массиве нет элемента", function(){
        assert.equal(bS.binarySearch([], 123), -1);
    });

})