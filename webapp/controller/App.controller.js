sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend("sap.ui.demo.empdirectory.controller.App", {
      onInit() {
        console.log("+++ App controller initialized ----");
      },
    });
  }
);
