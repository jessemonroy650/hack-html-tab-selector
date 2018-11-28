# html-tab-selector
This tab-selector interface using just HTML, CSS & Javascript &mdash; no library

The app has a header (with height:20%) then two columns that need to be filled. SOLVED

Filling the balance of the `viewport` was accomplished with this *CSS class*

    /* USED Solution #2 https://www.whitebyte.info/programming/css/how-to-make-a-div-take-the-remaining-height */
    .heightTheBalance {position: absolute;top: 20%;bottom: 0;width:100%}

## Files

* index.html - main viewport
* css/app.css - standard & common CSS + solution
* css/test-strap.css - misc CSS just for this app
* css/tab-selector.css - CSS style for the tabs
* js/app.js - 8 lines of code did the whole tab switch. More tabs will require more lines. See `app.hook()`

If you are not familiar with `height:100%` and how it MUST BE setup so that it works correctly, then read this blog post

**Tutorial: Why html,body height:100% is required for div height:100% to work**
* https://jssnippets.wordpress.com/2016/04/05/tutorial-why-htmlbody-height100-is-required-for-div-height100-to-work/

### References

**How to make a div take the remaining height &mdash; WhiteByte**
* https://www.whitebyte.info/programming/css/how-to-make-a-div-take-the-remaining-height

**How to Fill Remaining Height with a Div | rajeesh**
* http://rajeeshcv.com/2015/05/08/How-to-Fill-Remaining-Height-with-a-Div/
