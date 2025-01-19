/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 787:
/***/ (() => {


let my = {
    name: 1,
    getName() {
        return this.name;
    },
    setName(name) {
        let x = 42;
        x.foo(); // 虽然 `x` 没有 `foo` 方法，但 TypeScript 不会报错
        return this.name;
    }
};
console.log("name = " + my.getName());
console.log(my.setName(0));
console.log(my.setName(1));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

// let uiSelector: UiSelector = UiSelector();
// let uiSelector2: UiSelector = new UiSelector().checkable(true);
// let uiObject: UiObject = UiSelector().findOne();
__webpack_unused_export__ = ({ value: true });
// let versionCode: number = App.getAppVersionCode("dfs");
// let deekeScript: number = DeekeScript.version();
// let device: number = Device.height();
// let dialogs: void = Dialogs.show("标题", "内容");
// let encrypt: string = Encrypt.md5("123456");
// let engines: void = Engines.execScript("console.log(322);");
// let floatDialog: void = FloatDialogs.show("title", "content");
// let gesture: boolean = Gesture.click(1, 1);
// let post: string = Http.post("url", { "name": "name" });
// let intent: void = Intent.open();
// let react: number = new Rect(1, 2, 3, 4).height();
// let storage: string = Storage.create("my_db").getString("name");
// let system: void = System.cleanUp();
__webpack_require__(787);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map