# SystemJS Builder Base Url Union - Proof of Concept

## Problem

During development using a development server (for example BrowserSync) it is convenient to serve files from multiple paths (see [server.js](server.js)).  With this configuration files in `./appOverrideB` override `./appOverride` which override `./app`, etc.

SystemJS in the browser has no trouble loading modules this way (in fact it is not even aware).  However, when building, using JSPM/SystemJS builder, this obviously does not work.  SystemJS is building from the filesystem not the server and SystemJS builder can only have one baseUrl.

## Proof of Concept

By adding a fetch override to the SystemJS builder I am able to return the first resource that matches the resource address along a series of paths (see [build.js](build.js)).  It is a dirty hack at this point.  This is a feature I'd really like to see in a future version of SystemJS builder.

## Related

* [rollup-plugin-includepaths](https://github.com/dot-build/rollup-plugin-includepaths)
* [webpack - resolve fallback](https://github.com/webpack/docs/wiki/configuration#resolvefallback)
* [BrowserSync multiple base directories](https://www.browsersync.io/docs/options/#option-server)
