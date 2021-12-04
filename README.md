# demo-rollup-npm
Provides a basic Rollup example of bundling a module from Node / NPM for browser usage.

This is in response to a question on the League of Extraordinary Foundry Developers Discord. 

This repo shows how to bundle an ESM Node module / [tippy.js](https://www.npmjs.com/package/tippy.js) for use in the
browser. `tippy.js` depends on another Node module `popper.js` which is bundled together by the basic Rollup 
configuration provided. `@rollup/plugin-virtual` is used to virtually export the entry points to the NPM modules being 
bundled. Take note that `tippy.js` also has a CSS file which you will need to add to your FVTT manifest in `styles`.  

Another example is bundling a CommonJS module for usage as ESM. I randomly picked out `lz4js` which is a CommonJS
NPM package. The only difference in the Rollup config is using `@rollup/plugin-commonjs` which comes after the
Node resolve plugin. 

To run the bundling process:
- npm install
- npm run bundle
