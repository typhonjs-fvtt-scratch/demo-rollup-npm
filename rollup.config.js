import commonjs      from '@rollup/plugin-commonjs';     // Use this plugin to resolve CommonJS modules.
import resolve       from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import sourcemaps    from 'rollup-plugin-sourcemaps';    // This will resolve sourcemaps from node_modules.
import { terser }    from 'rollup-plugin-terser';        // Terser is used for minification / mangling

// Import config files for Terser; refer to respective documentation for more information.
import terserConfig  from './terser.config';
import virtual from "@rollup/plugin-virtual";

// Produce sourcemaps or not.
const s_SOURCEMAP = true;

// Adds Terser to the output plugins for server bundle if true.
const s_MINIFY = false;

export default () =>
{
   // Defines potential output plugins to use conditionally if the .env file indicates the bundles should be
   // minified / mangled.
   const outputPlugins = [];
   if (s_MINIFY)
   {
      outputPlugins.push(terser(terserConfig));
   }

   return [{   // `tippy.js` is already ESM, so just need Node resolve.
         input: 'pack',
         output: [{
            file: `dist/tippy.js`,
            format: 'es',
            plugins: outputPlugins,
            preferConst: true,
            sourcemap: s_SOURCEMAP,
         }],
         plugins: [
            virtual({
               pack: `export { default } from 'tippy.js';`
            }),
            resolve(),
            sourcemaps()
         ]
      },
      {   // This bundle shows a config for a CommonJS module; basically add `commonjs` plugin after Node resolve.
         input: 'pack',
         output: [{
            file: `dist/lz4js.js`,
            format: 'es',
            plugins: outputPlugins,
            preferConst: true,
            sourcemap: s_SOURCEMAP,
         }],
         plugins: [
            virtual({
               pack: `export { default } from 'lz4js';`
            }),
            resolve(),
            commonjs(),
            sourcemaps()
         ]
      }
   ];
};
