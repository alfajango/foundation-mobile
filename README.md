# Welcome to Foundation Mobile

Foundation Mobile is a plugin or addon , which adds some
much-needed mobile-specific user interface elements to the
excellent [Zurb Foundation CSS
framework](https://github.com/zurb/foundation).

## Why?

We've tried several other mobile-web focused frameworks, but none of
them accomplished what we needed in the way that we wanted. To us, a
mobile web app should follow a few ideals:

1. HTML5 should be used for layout, that's what it's good for.
2. CSS3 should be used for styling (as it allows greater flexibility with less reliance on background-images and hacks).
3. Minimal reliance on JS, should really only be used for in-page effects, polyfills, and optional enhancements.
4. Should work on the major mobile browsers.
5. Minimal rendering effort for mobile browsers for best performance.
6. Open source, free to use.

See the bottom of this README to see how other frameworks and solutions
stack up.

## Getting Started

First step is to [get your app going with
Foundation](http://foundation.zurb.com/docs/).

Good. Now you can simply add the CSS files from Foundation Mobile to
your project and start using the new CSS classes for mobile-only
components.

## Foundation Mobile Components

### Mobile Lists

![mobile lists
screenshot](http://s3.alfajango.com/github-readmes/foundation-mobile-lists.png)

```html
<ul class="mobile-list">
  <li>
    <a href="/weezer">Weezer</a>
    <span class="chevron"></span>
  </li>
  <li>
    <a href="/the-pixies">The Pixies</a>
    <span class="chevron"></span>
  </li>
  <li>
    <a href="/chevelle">Chevelle</a>
    <span class="chevron"></span>
  </li>
  <li>
    <a href="/five-finger-death-punch">Five Finger Death Punch</a>
    <span class="chevron"></span>
  </li>
  <li>
    <a href="/in-this-moment">In This Moment</a>
    <span class="chevron"></span>
  </li>
</ul>
```

### Coming Soon

See the [issue
tracker](https://github.com/alfajango/foundation-mobile/issues) for
components planned for implementation. These include:

* full-window dropdowns
* fixed footer
* popovers
* modals

## "But framework X already does this"

We tried a lot of frameworks before finally deciding to build
foundation-mobile. Here's a highly abridged recap of our experiences.

#### jQuery Mobile

It's a large library by itself, even larger when you factor it's hard
dependence on jQuery, which itself is a large library. The final straw
though was that it bakes in a lot of "magic" that's enabled by default,
e.g. animations, hijacking all link clicks to fetch the page via ajax,
parse the result, and append it to the body. These always caused weird
bugs that necessitated ugly workarounds. Just give us some normal links
please. I should note v1.4 aims to fix a lot of these issues when it's
released, but it's still a large library that is sluggish on many
devices. [jQuery Mobile
1.4](https://github.com/jquery/jquery-mobile/wiki/1.4-planning)

#### Ratchet

We looked at building something just using Ratchet. The problem is, it's
meant primarily for prototyping on Webkit-based, which means it doesn't
work on Firefox, Opera, or other browsers. Their answer to such issues
is usually "don't open your prototype on that browser". Thus, it's not
really appropriate for actual mobile apps. [Ratchet](http://maker.github.io/ratchet/)

#### Bootstrap

It's a large library when you consider that it's desktop-first
responsive, which means mobile devices have to parse a lot of CSS to
render a page. It's also harder to implement custom designs on top of,
since it takes a "kitchen sink" approach to UI. Bootstrap 3 will be
mobile-first, which will make it a better option when it's released, but
we still like Foundation better for its non-kitchen-sink approach.
[Bootstrap 3](https://github.com/twitter/bootstrap/pull/6342)

#### jqMobi (aka Intel App Framework)

It's a large MVC front-end framework. If we're doing this, we'd rather
use Backbone for the MVC part.
[jqmobi](http://app-framework-software.intel.com/)

#### Junior

Framework combining Ratchet and Backbone. This is nice, but of course
has the same downfall as Ratchet since that's what is used for the UI.
Also, we'd like to option to start off the app without MVC and move to
MVC when complexity necessitates.
[Junior](http://justspamjustin.github.io/junior/#home)

#### KendoUI and Sencha Touch

Kendo is a bit of a black box and requires per-developer licensing.
Sencha violates our "HTML5 should be used for layout" ideal, as you
build the whole app in JS and then their framework compiles the needed
HTML5. [KendoUI](http://www.kendoui.com/), [Sencha
Touch](http://www.sencha.com/products/touch/)
