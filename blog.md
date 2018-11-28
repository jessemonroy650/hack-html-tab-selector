# HTML Tab Selector

This rather fancy-looking interface requires HTML5, a CSS3 layout trick, and a few lines of javascript.

[README.md](https://github.com/jessemonroy650/html-tab-selector/blob/master/README.md)  &diam;
[Wordpress blog]()

## The HTML and CSS ##
A looking at the HTML code in `index.html` one will see

* a master `<div>`,
* a `<div>` with two (2) `<button>`s inside
* and two (2) `<div>` that make up the content of each tab

The master `<div>` is just a wrapper. It has two (2) functions which are defined in the class `heightTheBalance`. Here is how it works.

  * `position: absolute;` - informs the layout engine that this `div` is going positioned `absolute`ly relative to the *viewport*
  * `top: 20%;` - informs that the top of our `div` starts at 20% of way down from the top of the *viewport*
  * `bottom: 0;` - informs that the bottom of our `div` starts at the bottom of the *viewport*
  * `width: 100%` - informs that our `div` will span 100% across the *viewport*

The `<div>` with two (2) `<button>`s inside wraps the two buttons.

**TRICK:** The comment between the two (2) buttons can be removed if the two (2) buttons are next two each other. A quirk with some HTML layout engines requires either no space between the buttons or a comment between the buttons. 

The two (2) `<button>`s simulate the tabs by having radii on the top corners and then using borders on the top and right side only.

The remaining two (2) `<div>`s make up the space that holds any app content, in this case some text and images so the change is easily spotted.

## The Javascript ##

The javascript code is simple enough. When a tab (or button) is triggered, the code hides the content associated with the other tab. In practice this means, when `tab2` is triggered (touched or clicked), the associated content becomes visible (by removing the `hidden` class) and the other content becomes hidden (by adding the `hidden` class). 

**TRICK** Adding the `hidden` class before removing the `hidden` class on the other tab allows the layout engine to reduce the "reflow". However, this may be just for the browers I am working with.

