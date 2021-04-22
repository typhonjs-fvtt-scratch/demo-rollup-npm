import resolve       from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import sourcemaps    from 'rollup-plugin-sourcemaps';    // This will resolve sourcemaps from node_modules.
import { terser }    from 'rollup-plugin-terser';        // Terser is used for minification / mangling

// Import config files for Terser; refer to respective documentation for more information.
import terserConfig  from './terser.config';

// Produce sourcemaps or not.
const s_SOURCEMAP = true;

// Adds Terser to the output plugins for server bundle if true.
const s_MINIFY = true;

export default () =>
{
   // Defines potential output plugins to use conditionally if the .env file indicates the bundles should be
   // minified / mangled.
   const outputPlugins = [];
   if (s_MINIFY)
   {
      outputPlugins.push(terser(terserConfig));
   }

   return [{   // This bundle is for the Node distribution.
         input: ['src/tippy.js'],
         output: [{
            file: `dist/tippy.js`,
            format: 'es',
            plugins: outputPlugins,
            preferConst: true,
            sourcemap: s_SOURCEMAP,
         }],
         plugins: [
            resolve(),
            sourcemaps()
         ]
      }
   ];
};
