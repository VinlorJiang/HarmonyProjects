var _77984ee49c32b821f7625000344478cc;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility2/app.ets?entry":
/*!******************************************************************************************************************************************************************!*\
  !*** ../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility2/app.ets?entry ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _ohos_ability_featureAbility_1  = globalThis.requireNapi('ability.featureAbility') || (isSystemplugin('ability.featureAbility', 'ohos') ? globalThis.ohosplugin.ability.featureAbility : isSystemplugin('ability.featureAbility', 'system') ? globalThis.systemplugin.ability.featureAbility : undefined);
var _ohos_commonEvent_1  = globalThis.requireNapi('commonEvent') || (isSystemplugin('commonEvent', 'ohos') ? globalThis.ohosplugin.commonEvent : isSystemplugin('commonEvent', 'system') ? globalThis.systemplugin.commonEvent : undefined);
var printLog1 = "Fa:MainAbility2:";
var listPush1 = "Fa_MainAbility2_";
globalThis.exports.default = {
    onCreate() {
        console.info(printLog1 + 'onCreate');
        let list = ["ohos.permission.CAMERA"];
        _ohos_ability_featureAbility_1.getContext().requestPermissionsFromUser(list, 1).then((permissionRequestResult) => {
            console.info(printLog1 + "requestPermissionsFromUser data = " + JSON.stringify(permissionRequestResult));
            var CommonEventPublishData = {
                parameters: {
                    permissionRequestResult: permissionRequestResult
                }
            };
            _ohos_commonEvent_1.publish(listPush1 + "onCreate", CommonEventPublishData, (err) => {
                console.info(printLog1 + listPush1 + "onCreate");
            });
        }).catch((err) => {
            console.info(printLog1 + "requestPermissionsFromUser err = " + JSON.stringify(err));
        });
        setTimeout(() => {
            _ohos_ability_featureAbility_1.terminateSelf().then((data) => {
                console.info(printLog1 + "terminateSelf data = " + JSON.stringify(data));
            }).catch((err) => {
                console.info(printLog1 + "terminateSelf err = " + JSON.stringify(err));
            });
        }, 3000);
    },
    onDestroy() {
        console.info(printLog1 + 'onDestroy');
        _ohos_commonEvent_1.publish(listPush1 + "onDestroy", (err) => {
            console.info(printLog1 + listPush1 + "onDestroy");
        });
    },
    onActive() {
        console.info(printLog1 + 'onActive');
    },
    onInactive() {
        console.info(printLog1 + 'onInactive');
    },
    onShow() {
        console.info(printLog1 + 'onShow');
    },
    onHide() {
        console.info(printLog1 + 'onHide');
    }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../../../../../../Documents/learning/Harmony/communication_bluetooth-master/test/example/bluetoothtest/entry/src/main/ets/MainAbility2/app.ets?entry"](0, __webpack_exports__);
/******/ 	_77984ee49c32b821f7625000344478cc = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map