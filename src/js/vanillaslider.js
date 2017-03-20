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

VanillaSlider.prototype.setConfig = function(config) {
    for (var key in config) {
        if (this.config.hasOwnProperty(key)) {
            this.config[key] = config[key];
        }
    }
};

VanillaSlider.prototype.getHandler = function () {
    this.ul = this.elements.querySelector(this.handlerName);

    if (this.ul === null) {
        throw Error("There is no 'ul' element with class '" + this.handlerName + "'");
    }

    this.ul.parentNode.style.width = this.ul.getAttribute('data-width') + "px";
    this.ul.parentNode.style.height = this.ul.getAttribute('data-height') + "px";
    this.li = this.ul.children;
    this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';
};

VanillaSlider.prototype.configure = function () {
    if (this.config.autoplay) {
        this.setAutoplay();
    }
    if (this.config.control) {
        this.createControl();
    }
    if (this.config.pagination) {
        this.createPagination();
    }
};

VanillaSlider.prototype.init =  function (config) {
    this.setConfig(config);
    this.getHandler();
    this.configure();
};

VanillaSlider.prototype.controlBindEvent = function (btnPrev, btnNext) {
    var self = this;

    var move = function (e) {
        var btnClasses = e.target.classList;
        clearInterval(self.autoplay);

        if (btnClasses.value.indexOf('vanilla-slider-next') !== -1) {
            self.next();
        } else if (btnClasses.value.indexOf('vanilla-slider-prev') !== -1) {
            self.prev();
        }

        self.setAutoplay();
    };

    btnNext.onclick = move;
    btnPrev.onclick = move;
};

VanillaSlider.prototype.paginationBindEvent = function (paginationDiv) {
    var self = this;

    var moveTo = function (e) {
        e.preventDefault();
        var link = e.target;
        clearInterval(self.autoplay);
        self.goTo(link.getAttribute('data-slide'));
        self.setAutoplay();
    };

    Array.prototype.forEach.call(paginationDiv.children, function (elem) {
        elem.onclick = moveTo;
    });
};

VanillaSlider.prototype.createControl = function () {
    var handlerParentNode = this.ul.parentNode;
    var controlDiv = document.createElement('div');
    controlDiv.className = 'vanilla-slider-nav';
    controlDiv.innerHTML = "<button class='vanilla-slider-prev'></button><button class='vanilla-slider-next'></button>";
    handlerParentNode.appendChild(controlDiv);

    var btnNext = controlDiv.querySelector('button.vanilla-slider-next');
    var btnPrev = controlDiv.querySelector('button.vanilla-slider-prev');
    this.controlBindEvent(btnPrev, btnNext);
};

VanillaSlider.prototype.createPagination = function () {
    var handlerParentNode = this.ul.parentNode;
    var paginationDiv = document.createElement('div');
    paginationDiv.className = 'vanilla-slider-pagination';

    var content = '';
    for (var i = 0, len = this.li.length; i < len; i++) {
        content += '<a href="#" data-slide="' + i + '">' + (i+1) + "</a>";
    }
    paginationDiv.innerHTML = content;

    handlerParentNode.appendChild(paginationDiv);
    this.paginationBindEvent(paginationDiv);
}

VanillaSlider.prototype.setAutoplay = function () {
    this.autoplay = setInterval(this.next.bind(this), this.config.autoplayTime);
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