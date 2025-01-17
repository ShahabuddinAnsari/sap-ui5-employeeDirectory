sap.ui.define(
  ["sap/ui/demo/empdirectory/controller/BaseController"],
  (BaseController) => {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.empdirectory.controller.NotFound",
      {
        onInit() {
          console.log("+++ NotFound controller initialized ----");
        },
      }
    );
  }
);
