var VanillaSlider = function(elements) {

    if (!(this instanceof VanillaSlider)) {
        return new VanillaSlider(elements);
    }

    this.elements = elements;
    this.ul = null;
    this.li = null;
    this.currentIndex = 0;
    this.config = {
        autoplay: true,
        autoplayTime: 3000,
        containerName: "vanilla-slider-container"
    }

};

VanillaSlider.prototype.init =  function (config) {
    var HTMLElements = this.elements[0].children;

    for (var i = 0, len = HTMLElements.length; i < len; i++) {
        var tagName = HTMLElements[i].localName;
        var classes = HTMLElements[i].classList;

        if (tagName === "ul" && String.prototype.indexOf.call(classes.value, this.config.containerName) !== -1) {
            this.ul = HTMLElements[i];
        }
    }

    if (typeof this.ul === "undefined") {
        throw Error("There is no 'ul' element with class '"+this.config.containerName+"'");
    }

    this.li = this.ul.children;
    this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

    this.setAutoplay();
};

VanillaSlider.prototype.setAutoplay = function () {
    setInterval(this.next.bind(this), this.config.autoplayTime);
};

VanillaSlider.prototype.goTo = function (index) {
    if (index < 0 ) {
        this.currentIndex = this.li.length-1;
    } else if (index > this.li.length-1) {
        this.currentIndex = 0;
    } else {
        this.currentIndex = index;
    }

    this.ul.style.left = '-' + (100 * this.currentIndex) + '%'
};

VanillaSlider.prototype.next = function () {
    this.goTo(this.currentIndex+1);
};

VanillaSlider.prototype.prev = function () {
    this.goTo(this.currentIndex-1);
};