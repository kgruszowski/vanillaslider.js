# vanillaslider.js
Light slider library written in plain javascript.<br/>

### Demo
https://kgruszowski.github.io/vanillaslider.js/

# Installation
You don't need any external libraries like jQuery, just append stylesheet and script files
```html
<link rel="stylesheet" href="src/css/vanillaslider.css">
<script type="text/javascript" src="src/js/vanillaslider.js"></script>
```

# HTML Structure
```html
<div class="vanilla-slider">
    <ul class="vanilla-slider-container" data-height="300" data-width="700">
        <li><img src="img/1.png"></li>
        <li><img src="img/2.png"></li>
        <li><img src="img/3.png"></li>
        <li><img src="img/4.png"></li>
        <li><img src="img/5.png"></li>
    </ul>
</div>
```
# Run VanillaSlider
```javascript
window.onload = function () {
    var slider = document.querySelector('.vanilla-slider');
    var vanillaSlider = new VanillaSlider(slider);
    vanillaSlider.init();
};
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
autoplay | boolean | false | Enables slider autoplaying
autoplayTime | int | 3000 | Determines time (in milliseconds) of viewing one slide
control | boolean | true | Show/Hide control buttons 
pagination | boolean | false | Show/Hide pagination buttons 

### Methods

Method | Arguments | Description
------ | ---- | -------
goTo | slide : int | Move slider to the given slide
next |  | Move slider to the next slide
prev |  | Move slider to the previous slide

