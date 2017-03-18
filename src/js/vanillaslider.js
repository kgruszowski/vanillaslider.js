var VanillaSlider = function(elements) {
    if (!(this instanceof VanillaSlider)) {
        return new VanillaSlider(elements);
    }

    this.elements = elements;
};

VanillaSlider.prototype.init = function () {
    console.log(this.elements);
}