var _78b3af9a3d4590e7047044e12e71f107;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility/pages/profile.ets?entry ***!
  \***************************************************************************************************************************************************************************/

class Profile extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__message = new ObservedPropertySimple('Profile', this, "message");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    render() {
        Column.create();
        Text.create(this.message);
        Text.fontSize({ "id": 16777400, "type": 10002, params: [] });
        Text.lineHeight({ "id": 16777496, "type": 10002, params: [] });
        Text.fontColor({ "id": 16777308, "type": 10001, params: [] });
        Text.fontWeight(FontWeight.Medium);
        Text.margin({ left: { "id": 16777390, "type": 10002, params: [] } });
        Text.textAlign(TextAlign.Start);
        Text.pop();
        Column.pop();
    }
}
loadDocument(new Profile("1", undefined, {}));

_78b3af9a3d4590e7047044e12e71f107 = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=profile.js.map