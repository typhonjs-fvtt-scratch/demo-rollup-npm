# demo-rollup-npm
Provides a basic Rollup example of bundling a module from Node / NPM for browser usage.

This is in response to a question on the League of Extraordinary Foundry Developers Discord. 

This repo shows how to bundle an ESM Node module / [tippy.js](https://www.npmjs.com/package/tippy.js) for use in the
browser. `tippy.js` depends on another Node module `popper.js` which is bundled together by the basic Rollup 
configuration provided. `./src/tippy.js` simply exports the default export of the `tippy.js` module and Rollup goes to 
work including all of the resources in `./dist/tippy.js`. You can now copy this file into your own build process and
include this file in your project. Take note that `tippy.js` also has a CSS file which you will need to add to your 
FVTT manifest in `styles`. I suppose a better solution though more involved is to use PostCSS and namespace the CSS for 
tippy to your module / system. This is not covered in this basic solution. 

I have checked in the `./dist/tippy.js` file and you can of course just grab it and use it, but to build it:

- npm install
- npm run bundle
