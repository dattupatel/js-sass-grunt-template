require.config({
  paths: {
    jquery: "vendor/jquery",
    bootstrap: "vendor/bootstrap",
    popper: "vendor/popper"
  },
  shim: {
    bootstrap: ["jquery", "popper"]
  }
});

require(["bootstrap"], function() {
  //
});
