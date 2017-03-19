# vanillaslider.js
Light slider library written in plain javascript. You don't any dependencies just append stylesheet and script file and play with it.

# Installation
```html
<link rel="stylesheet" href="src/css/vanillaslider.css">
<script type="text/javascript" src="src/js/vanillaslider.js"></script>
```

# HTML Structure
```html
<div class="vanilla-slider">
    <ul class="vanilla-slider-container col-md">
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
    var vanillaSlider = VanillaSlider(slider);
    vanillaSlider.init();
};
```

