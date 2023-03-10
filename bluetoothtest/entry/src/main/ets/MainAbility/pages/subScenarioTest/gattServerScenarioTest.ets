/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
// @ts-nocheck

/**
 * GattServer Scenario Test Page Of Bluetooth test
 */

import router from '@system.router';
import { PageTitle } from '../../../Component/pageTitle';
import { TestImageDisplay } from '../../../Component/testImageDisplay';
import { TestData } from '../../model/testData'
import { ScenarioContentTable } from '../../../Component/scenarioContentTable'
import { initGattServerScenarioData } from '../../model/scenarioTestDataModel'
import * as GattServerInterface from '../../model/gattServerInterface'
import * as BLEInterface from '../../model/bleInterface'
import * as BrInterface from '../../model/brInterface'

@Entry
@Component
struct GattServerScenarioTest {
  @State message: string = 'GattServerScenarioTest';
  private testItem: TestData = router.getParams().testId;
  @State changeIndex: number = -1
  @StorageLink("gattServerScenarioMessage") gattServerScenarioMessage: string = ""
  @StorageLink("characteristicReadMsg") characteristicReadMsg: string = "00002BE0-0000-1000-8000-00805F9B34FB";
  @StorageLink("characteristicWriteMsg") characteristicWriteMsg: string = "initial";
  @StorageLink("descriptorReadMsg") descriptorReadMsg: string = "00002902-0000-1000-8000-00805F9B34FB";
  @StorageLink("descriptorWriteMsg") descriptorWriteMsg: string = "initial";

  aboutToAppear() {
    AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
    AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
    AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('txtScanOptions_interval', "0");
    AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
    AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
    AppStorage.SetOrCreate('cbxBleScanFilter', true);
    AppStorage.SetOrCreate('cbxBleScanOptions', true);

    AppStorage.SetOrCreate('curServiceUUID', '00001877-0000-1000-8000-00805F9B34FB');
    AppStorage.SetOrCreate('curCharacteristicUUID', '00002BE0-0000-1000-8000-00805F9B34FB');
    AppStorage.SetOrCreate('curDescriptorUUID', '00002902-0000-1000-8000-00805F9B34FB');
    AppStorage.SetOrCreate('curDescriptorValue', 'Descriptor');
    AppStorage.SetOrCreate('curCharacteristicValue', 'DAYU2');
    AppStorage.SetOrCreate('isPrimary', true);
    AppStorage.SetOrCreate('advSettings_interval', "1600");
    AppStorage.SetOrCreate('advSettings_txPower', "-7");
    AppStorage.SetOrCreate('advSettings_connectable', true);
    AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('advDataManufactureData_manufactureId', "7456");
    AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', "CHN");
    AppStorage.SetOrCreate('advDataServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('advDataServiceData_serviceValue', "AdvValue");
    AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', "6547");
    AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', "CHN");
    AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('advResponseServiceData_serviceValue', "AdvValue");
    AppStorage.SetOrCreate('cbxAdvSettings', true);
    AppStorage.SetOrCreate('cbxInterval', true);
    AppStorage.SetOrCreate('cbxTxPower', true);
    AppStorage.SetOrCreate('cbxAdvResponse', true);
  }

  build() {
    Column() {
      Stack({ alignContent: Alignment.TopStart }) {
        TestImageDisplay({ testItem: this.testItem })
        PageTitle({ testItem: this.testItem })
      }

      Stack().height("1vp").backgroundColor("#000000");
      Column() {
        Scroll() {
          Column() {
            Text("??????????????????:")
              .fontSize("17vp")
              .margin({ top: "10vp", bottom: "10vp", left: "20vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            ScenarioContentTable({
              testItem: this.testItem,
              scenarioItems: initGattServerScenarioData(),
              //            testMessage: this.testMessage,  ???????????????
              changeIndex: this.changeIndex
            })
          }
          .width("100%")
          .height(280)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.Auto)

        Stack().height("1vp").backgroundColor("#000000");

        Scroll() {
          Column() {
            Text("????????????:")
              .fontSize("17vp")
              .margin({ top: "8vp", bottom: "8vp", left: "20vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            List() {
              ListItem() {
                Text(this.gattServerScenarioMessage)
                  .fontSize("17vp")
                  .margin({ top: "5vp", left: "30vp", right: "10vp" })
                  .textAlign(TextAlign.Start)
                  .width("90%")
              }
            }
            .height("80%")
            .width("90%")
            .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
          }
          .width("100%")
          .height(260)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.On)
      }
      .height(500)
      .width("100%")
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))


      Stack().height("1vp").backgroundColor("#000000");
      Column() {
        Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.SpaceBetween }) {
          Button({ type: ButtonType.Normal, stateEffect: true }) {
            Row() {
              Text('??????????????????').fontSize("24vp").fontColor(0xffffff).margin({ left: 5, right: 5 })
            }.alignItems(VerticalAlign.Center)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top: "15vp", left: "10vp", right: "10vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            //            AlertDialog.show({ message: '??????GattServer????????????' })
            let self = this
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

            let gattServerScenarioMessage = ""
            // ??????????????????
            gattServerScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOnStateChange success")
            self.changeIndex = arr[0]
            // ?????????
            gattServerScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success")
            self.changeIndex = arr[1]
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage)

            AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
            AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
            AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('txtScanOptions_interval', "0");
            AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
            AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
            AppStorage.SetOrCreate('cbxBleScanFilter', true);
            AppStorage.SetOrCreate('cbxBleScanOptions', true);

            AppStorage.SetOrCreate('curServiceUUID', '00001877-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curCharacteristicUUID', '00002BE0-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curDescriptorUUID', '00002902-0000-1000-8000-00805F9B34FB');
            AppStorage.SetOrCreate('curDescriptorValue', 'Descriptor');
            AppStorage.SetOrCreate('curCharacteristicValue', 'DAYU2');
            AppStorage.SetOrCreate('isPrimary', true);
            AppStorage.SetOrCreate('advSettings_interval', "1600");
            AppStorage.SetOrCreate('advSettings_txPower', "-7");
            AppStorage.SetOrCreate('advSettings_connectable', true);
            AppStorage.SetOrCreate('advDataServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advDataManufactureData_manufactureId', "7456");
            AppStorage.SetOrCreate('advDataManufactureData_manufactureValue', "CHN");
            AppStorage.SetOrCreate('advDataServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advDataServiceData_serviceValue', "AdvValue");
            AppStorage.SetOrCreate('advResponseServiceUuids_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureId', "6547");
            AppStorage.SetOrCreate('advResponseManufactureData_manufactureValue', "CHN");
            AppStorage.SetOrCreate('advResponseServiceData_serviceUuid', "000054F6-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('advResponseServiceData_serviceValue', "AdvValue");
            AppStorage.SetOrCreate('cbxAdvSettings', true);
            AppStorage.SetOrCreate('cbxInterval', true);
            AppStorage.SetOrCreate('cbxTxPower', true);
            AppStorage.SetOrCreate('cbxAdvResponse', true);

            sleep(2).then(() => {
              // ????????????
              gattServerScenarioMessage += BrInterface.testGetState() + "\n";
              console.log("testGetState success")

              self.changeIndex = arr[2]
              //??????Gatt?????????
              gattServerScenarioMessage += GattServerInterface.testCreateGattServer() + "\n"
              console.log("testCreateGattServer success")
              self.changeIndex = arr[3]
              // ????????????
              gattServerScenarioMessage += GattServerInterface.testAddService() + "\n"
              console.log("testAddService success")
              self.changeIndex = arr[4]
              // ????????????????????????
              gattServerScenarioMessage += GattServerInterface.testOnConnectStateChange() + "\n"
              console.log("testOnConnectStateChange success")
              self.changeIndex = arr[5]
              // ????????????
              gattServerScenarioMessage += GattServerInterface.testStartAdvertising() + "\n"
              console.log("testStartAdvertising success")
              self.changeIndex = arr[6]
              AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage)
              sleep(10).then(() => {
                // ???????????????
                gattServerScenarioMessage += GattServerInterface.testOnCharacteristicRead() + "\n"
                console.log("testOnCharacteristicRead success")
                self.changeIndex = arr[7]
                gattServerScenarioMessage += this.characteristicReadMsg + "\n"
                gattServerScenarioMessage += this.characteristicWriteMsg + "\n"
                sleep(3).then(() => {
                  // ??????????????????
                  gattServerScenarioMessage += GattServerInterface.testOnDescriptorRead() + "\n"
                  console.log("testOnDescriptorRead success")
                  self.changeIndex = arr[8]
                  gattServerScenarioMessage += this.descriptorReadMsg + "\n"
                  gattServerScenarioMessage += this.descriptorWriteMsg + "\n"
                  AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage)
                })
              })
            })
          })

          Button({ type: ButtonType.Normal, stateEffect: true }) {
            Row() {
              Text('??????????????????').fontSize("24vp").fontColor(0xffffff).margin({ left: 5, right: 5 })
            }.alignItems(VerticalAlign.Start)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top: "15vp", left: "10vp", right: "10vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            let self = this
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            let gattServerScenarioMessage = ""
            // ????????????
            gattServerScenarioMessage += GattServerInterface.testStopAdvertising() + "\n"
            console.log("testStopAdvertising success")
            self.changeIndex = arr[9]
            // ????????????????????????
            gattServerScenarioMessage += GattServerInterface.testOnConnectStateChange() + "\n"
            console.log("testOffConnectStateChange success")
            // ????????????
            gattServerScenarioMessage += GattServerInterface.testRemoveService() + "\n"
            console.log("testRemoveService success")
            self.changeIndex = arr[10]
            // ???????????????
            gattServerScenarioMessage += GattServerInterface.testGattServerClose() + "\n"
            console.log("testGattServerClose success")
            self.changeIndex = arr[11]
            // ????????????????????????
            gattServerScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOffStateChange success")
            // ?????????
            gattServerScenarioMessage += BrInterface.testDisableBluetooth() + "\n"
            console.log("testDisableBluetooth success")
            self.changeIndex = arr[12]
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage)
          })

          Button({ type: ButtonType.Normal, stateEffect: true }) {
            Row() {
              Text('????????????').fontSize("24vp").fontColor(0xffffff).margin({ left: 5, right: 5 })
            }.alignItems(VerticalAlign.Start)
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.moon"))
          .width(80)
          .height(66)
          .margin({ top: "15vp", right: "20vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            let gattServerScenarioMessage = ""
            AppStorage.SetOrCreate("gattServerScenarioMessage", gattServerScenarioMessage)
          })
        }
        .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
        .width("100%")
      }
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
      .width("100%")
      .height("100%");
    }
  }
}

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time * 1000)
  })
}
//export function sleep (time) {
//  return new Promise((resolve) => setTimeout(resolve, time));
//}

export function string2ArrayBuffer(str) {
  let array = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    array[i] = str.charCodeAt(i);
  }
  return array.buffer
}