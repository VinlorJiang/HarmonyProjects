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
 * SppServer Scenario Test Page Of Bluetooth test
 */

import router from '@system.router';
import { PageTitle } from '../../../Component/pageTitle';
import { TestImageDisplay } from '../../../Component/testImageDisplay';
import { TestData } from '../../model/testData'
import { ScenarioContentTable } from '../../../Component/scenarioContentTable'
import { initSppServerScenarioData } from '../../model/scenarioTestDataModel'
import * as SPPServerInterface from '../../model/sppServerInterface'
import * as BLEInterface from '../../model/bleInterface'
import * as BrInterface from '../../model/brInterface'

@Entry
@Component
struct SppServerScenarioTest {
  @State message: string = 'SppServerScenarioTest';
  private testItem: TestData = router.getParams().testId;
  @State changeIndex: number = -1;
  @State writeData: string = '11111';
  private uuid: string = "00001101-0000-1000-8000-00805f9b34fb";
  @StorageLink("sppServerScenarioMessage") sppServerScenarioMessage: string = ""
  @StorageLink('dataReadMessage') dataReadMessage: string = "";

  aboutToAppear() {

    AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
    AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
    AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('txtScanOptions_interval', "0");
    AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
    AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
    AppStorage.SetOrCreate('cbxBleScanFilter', true);
    AppStorage.SetOrCreate('cbxBleScanOptions', true);

    AppStorage.SetOrCreate('inputUuid', this.uuid);
    AppStorage.SetOrCreate('writeData', this.writeData);
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
              scenarioItems: initSppServerScenarioData(),
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
                Text(this.sppServerScenarioMessage)
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
            Text('??????????????????').fontSize("24vp").fontColor(0xffffff).margin({ left: 5, right: 5 })
          }
          .borderRadius(8)
          .backgroundColor($r("app.color.blue"))
          .width(100)
          .height(66)
          .margin({ top: "15vp", left: "20vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            //AlertDialog.show({ message: '??????SppServer????????????' })
            let sppServerScenarioMessage = ""
            let self = this
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            // ??????????????????
            sppServerScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOnStateChange success")
            self.changeIndex = arr[0]
            // ?????????
            sppServerScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success")
            self.changeIndex = arr[1]
            AppStorage.SetOrCreate("sppServerScenarioMessage", sppServerScenarioMessage)

            AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
            AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
            AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('txtScanOptions_interval', "0");
            AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
            AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
            AppStorage.SetOrCreate('cbxBleScanFilter', true);
            AppStorage.SetOrCreate('cbxBleScanOptions', true);

            AppStorage.SetOrCreate('inputUuid', "00001101-0000-1000-8000-00805f9b34fb");
            AppStorage.SetOrCreate('writeData', this.writeData);

            sleep(3000).then(() => {
              // ????????????
              sppServerScenarioMessage += BrInterface.testGetState() + "\n";
              console.log("testGetState success")
              self.changeIndex = arr[2]

              // ??????????????????
              sppServerScenarioMessage += BrInterface.testSetBluetoothScanMode(4, 0) + "\n"
              console.log("testSetBluetoothScanMode success")
              self.changeIndex = arr[3]
              // ??????????????????
              sppServerScenarioMessage += BrInterface.testGetBluetoothScanMode() + "\n"
              console.log("testGetBluetoothScanMode success")
              self.changeIndex = arr[4]
              // ????????????pin?????????
              sppServerScenarioMessage += BrInterface.testOnPinRequired() + "\n"
              console.log("testOnPinRequired success")
              self.changeIndex = arr[5]
              // Spp???????????????
              sppServerScenarioMessage += SPPServerInterface.testSppServerCreateSafe() + "\n"
              console.log("testAddService success")
              self.changeIndex = arr[6]
              AppStorage.SetOrCreate("sppServerScenarioMessage", sppServerScenarioMessage)
              sleep(5).then(() => {
                //????????????????????????
                sppServerScenarioMessage += BrInterface.testGetBtConnectionState() + "\n"
                console.log("testGetBtConnectionState success")
                self.changeIndex = arr[7]
                sleep(1).then(() => {
                  // Spp???????????????
                  sppServerScenarioMessage += SPPServerInterface.testSppServerAccept() + "\n"
                  console.log("testSppServerAccept success")
                  self.changeIndex = arr[8]
                  sleep(1).then(() => {
                    // Spp???????????????
                    let clientNumber = -1
                    sppServerScenarioMessage += SPPServerInterface.testSppServerWrite() + "\n"
                    console.log("testOnCharacteristicWrite success")
                    self.changeIndex = arr[9]
                    sleep(1).then(() => {
                      // Spp?????????????????????
                      sppServerScenarioMessage += SPPServerInterface.testSppServerReadOn() + "\n"
                      console.log("testOnCharacteristicRead success")
                      self.changeIndex = arr[10]
                      sppServerScenarioMessage += this.dataReadMessage + "\n"
                      AppStorage.SetOrCreate("sppServerScenarioMessage", sppServerScenarioMessage)
                    })
                  })
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
            let sppServerScenarioMessage = ""
            let self = this
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
            // Spp?????????????????????
            sppServerScenarioMessage += SPPServerInterface.testSppServerReadOff() + "\n"
            console.log("testOnCharacteristicRead success")
            self.changeIndex = arr[11]
            // Spp???????????????
            sppServerScenarioMessage += SPPServerInterface.testSppServerClose() + "\n"
            console.log("testSppServerClose success")
            self.changeIndex = arr[12]
            // Spp???????????????
            sppServerScenarioMessage += SPPServerInterface.testSppCloseClientSocket() + "\n"
            console.log("testSppServerClose success")
            self.changeIndex = arr[13]
            // ????????????pin?????????
            sppServerScenarioMessage += BrInterface.testOnPinRequired() + "\n"
            console.log("testOffPinRequired success")

            // ????????????????????????
            sppServerScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOffStateChange success")
            // ?????????
            sppServerScenarioMessage += BrInterface.testDisableBluetooth() + "\n"
            console.log("testDisableBluetooth success")
            self.changeIndex = arr[14]
            AppStorage.SetOrCreate("sppServerScenarioMessage", sppServerScenarioMessage)
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
            let sppServerScenarioMessage = ""
            AppStorage.SetOrCreate("sppServerScenarioMessage", sppServerScenarioMessage)
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

export function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

//async function sleep(ms: number) {
//  return new Promise((r) => {
//    let timer = setInterval(() => {
//      console.log("timeout");
//      this.count += 1;
//      this.message = this.count.toString();
//      if (this.count == 50) {
//        clearInterval(timer);
//      }
//    }, 1000)
//  })
//}

export function strToArrayBuffer(str) {
  let array = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    array[i] = str.charCodeAt(i);
  }
  return array.buffer
}