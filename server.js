// require the module as normal
var bs = require("browser-sync").create();

// .init starts the server
bs.init({
  open: false,
  server: ["./appOverrideB", "./appOverride","./app"]
});
