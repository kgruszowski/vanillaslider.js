var assert = require('assert');
var expect = require('chai').expect;


// TODO implement Common js modules, temp VanillaSlider
var VanillaSlider = function(elements) {

    if (!(this instanceof VanillaSlider)) {
        return new VanillaSlider(elements);
    }

    this.handlerName = "ul.vanilla-slider-container";
    this.elements = elements;
    this.ul = null;
    this.li = null;
    this.currentIndex = 0;
    this.autoplay = null;
    this.config = {
        autoplay: false,
        autoplayTime: 3000,
        control: true,
        pagination: false
    }

};

describe('vanillaslider creation', function() {
  it('instance should not be null', function() {
    var slider = new VanillaSlider();

    expect(slider).not.to.be.null;
  });
});
