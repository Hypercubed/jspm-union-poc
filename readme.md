# SystemJS Builder Base Url Union - Proof of Concept

## Problem

During development using a developer server (for example BrowserSync) it is ver convenient to use serve files from multiple paths (see [server.js](server.js)).  With this configuration files in `./appOverrideB` override `./appOverride` which override `./app`.

SystemJS has no trouble loading modules this way (in fact it is not even aware).

However, when building, using JSPM/SystemJS builder this does not work.  SystemJS is building from teh file system not teh server and SystemJS builder can only have one baseUrl.

## Proof of Concept

By adding a fetch override to the SystemJS builder I am able to return the first resource that matches the resource address (see [build.js](build.js)).  It is a dirty hack at this point.  This is a feature I'd really like to see in a future version of SystemJS builder.
