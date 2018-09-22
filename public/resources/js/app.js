require.config({
  paths: {
    jquery: "vendor/jquery.min",
    bootstrap: "vendor/bootstrap.min",
    popper: "vendor/popper.min"
  },
  shim: {
    bootstrap: ["jquery", "popper"]
  }
});

require(["bootstrap"], function() {
  //
});
