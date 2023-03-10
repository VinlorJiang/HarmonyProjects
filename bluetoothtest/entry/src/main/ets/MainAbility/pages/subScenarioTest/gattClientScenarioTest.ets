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
 * GattClient Scenario Test Page Of Bluetooth test
 */

import router from '@system.router';
import { PageTitle } from '../../../Component/pageTitle';
import { TestImageDisplay } from '../../../Component/testImageDisplay';
import { TestData } from '../../model/testData'
import { ScenarioContentTable } from '../../../Component/scenarioContentTable'
import { initGattClientScenarioData } from '../../model/scenarioTestDataModel'
import * as GattClientInterface from '../../model/gattClientInterface'
import * as BLEInterface from '../../model/bleInterface'
import * as BrInterface from '../../model/brInterface'

@Entry
@Component
struct GattClientScenarioTest {
  @State message: string = 'GattClientScenarioTest';
  private testItem: TestData = router.getParams().testId;
  @State changeIndex:number = -1
  @StorageLink("gattClientScenarioMessage") gattClientScenarioMessage:string =""
  @StorageLink("getServices") getServices: string = "";
  @StorageLink("deviceName") deviceName: string = "";
  @StorageLink("Rssi") Rssi: string = "";
  @StorageLink("read_CharacteristicValue") read_CharacteristicValue: string = "";
  private peripheralDeviceId ='08:FB:EA:19:48:0F'
  @State serviceUUID: string = '00001801-0000-1000-8000-00805f9b34fb';
  @State characteristicUUID:  string = '00002b29-0000-1000-8000-00805f9b34fb';
  @State characteristicValue: string = 'CccValue';
  @State descriptorUUID:      string = '00002902-0000-1000-8000-00805f9b34fb';
  @State descriptorValue:     string = 'DesValue';
  aboutToAppear(){
    AppStorage.SetOrCreate('peripheralDeviceId', this.peripheralDeviceId);
    AppStorage.SetOrCreate('serviceUUID', this.serviceUUID);
    AppStorage.SetOrCreate('characteristicUUID', this.characteristicUUID);
    AppStorage.SetOrCreate('characteristicValue', this.characteristicValue);
    AppStorage.SetOrCreate('descriptorUUID', this.descriptorUUID);
    AppStorage.SetOrCreate('descriptorValue', this.descriptorValue);
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
              .margin({ top: "10vp", bottom:"10vp",left: "20vp"})
              .textAlign(TextAlign.Start)
              .width("100%")
            ScenarioContentTable({
              testItem: this.testItem,
              scenarioItems: initGattClientScenarioData(),
//            testMessage: this.testMessage,  ???????????????
              changeIndex:this.changeIndex
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
            List(){
              ListItem(){
                Text(  this.gattClientScenarioMessage)
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
          .margin({ top: "15vp",left:"20vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            let self = this
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//            AlertDialog.show({ message: '??????GattClient????????????' })
            let gattClientScenarioMessage = ""
            // ????????????????????????
            gattClientScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOnStateChange success")
            self.changeIndex=arr[0]
            // ?????????
            gattClientScenarioMessage += BrInterface.testEnableBluetooth() + "\n";
            console.log("testEnableBluetooth success")
            self.changeIndex=arr[1]
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage)

            AppStorage.SetOrCreate('peripheralDeviceId', this.peripheralDeviceId);
            AppStorage.SetOrCreate('serviceUUID', this.serviceUUID);
            AppStorage.SetOrCreate('characteristicUUID', this.characteristicUUID);
            AppStorage.SetOrCreate('characteristicValue', this.characteristicValue);
            AppStorage.SetOrCreate('descriptorUUID', this.descriptorUUID);
            AppStorage.SetOrCreate('descriptorValue', this.descriptorValue);

            sleep(2).then(() => {
              // ????????????
              gattClientScenarioMessage += BrInterface.testGetState() + "\n";
              console.log("testGetState success")
              self.changeIndex=arr[2]
//              // ????????????BLE??????????????????
//              gattClientScenarioMessage += BLEInterface.testOnBLEDeviceFind() + "\n"
//              console.log("testOnBLEDeviceFind success")
//              // ??????BLE??????
//              gattClientScenarioMessage += BLEInterface.testStartBLEScan() + "\n"
//              console.log("testStartBLEScan success")
              // ??????Gatt?????????
              gattClientScenarioMessage += GattClientInterface.testCreateGattClient() + "\n"
              console.log("testCreateGattClient success")
              self.changeIndex=arr[3]
              //??????Ble??????????????????
              gattClientScenarioMessage += GattClientInterface.testOnBLEConnectionStateChange() + "\n"
              console.log("testOnBLEConnectionStateChange success")
              self.changeIndex=arr[4]
              // ??????
              gattClientScenarioMessage += GattClientInterface.testConnect() + "\n"
              console.log("testConnect success")
              self.changeIndex=arr[5]
              AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage)
              sleep(5).then(() => {
                // ????????????????????????
                gattClientScenarioMessage += GattClientInterface.testSetNotifyCharacteristicChanged() + "\n"
                console.log("testSetNotifyCharacteristicChanged success")
                self.changeIndex = arr[6]
                sleep(1).then(() => {
                  // ??????BLE???????????????
                  gattClientScenarioMessage += GattClientInterface.testOnBLECharacteristicChange() + "\n"
                  console.log("testOnBLECharacteristicChange success")
                  self.changeIndex = arr[7]
                  sleep(1).then(() => {
                    // ????????????callback
                    gattClientScenarioMessage += GattClientInterface.testGetServicesCallback() + "\n"
                    console.log("testGetServicesCallback success")
                    self.changeIndex = arr[8]
                    gattClientScenarioMessage += this.getServices + "\n"
                    sleep(1).then(() => {
                      // ???????????????callback
                      gattClientScenarioMessage += GattClientInterface.testReadCharacteristicValueCallback() + "\n"
                      console.log("testReadCharacteristicValueCallback success")
                      self.changeIndex = arr[9]
                      gattClientScenarioMessage += this.read_CharacteristicValue + "\n"
                      sleep(1).then(() => {
                        // ??????????????????callback
                        gattClientScenarioMessage += GattClientInterface.testReadDescriptorValueCallback() + "\n"
                        console.log("testReadDescriptorValueCallback success")
                        self.changeIndex = arr[10]
                        sleep(1).then(() => {
                          // ??????????????????callback
                          gattClientScenarioMessage += GattClientInterface.testGetDeviceNameCallback() + "\n"
                          console.log("testGetDeviceNameCallback success")
                          self.changeIndex = arr[11]
                          gattClientScenarioMessage += this.deviceName + "\n"
                          sleep(1).then(() => {
                            // ??????Rssi???callback
                            gattClientScenarioMessage += GattClientInterface.testGetRssiValueCallback() + "\n"
                            console.log("testGetRssiValueCallback success")
                            self.changeIndex = arr[12]
                            gattClientScenarioMessage += this.Rssi + "\n"
                            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage)
                          })
                        })
                      })
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
          .margin({ top: "15vp",left:"10vp",right:"10vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            let self = this
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
            let gattClientScenarioMessage =""
            // ??????BLE???????????????
            gattClientScenarioMessage += GattClientInterface.testOnBLECharacteristicChange() + "\n"
            console.log("testOffBLECharacteristicChange success")
            // ????????????
            gattClientScenarioMessage += GattClientInterface.testDisconnect() + "\n"
            console.log("testDisconnect success")
            self.changeIndex=arr[13]
            //??????Ble??????????????????
            gattClientScenarioMessage += GattClientInterface.testOnBLEConnectionStateChange() + "\n"
            console.log("testOffBLEConnectionStateChange success")
            //???????????????
            gattClientScenarioMessage += GattClientInterface.testGattClientClose() + "\n"
            console.log("testGattClientClose success")
            self.changeIndex=arr[14]
//            // ??????BLE??????
//            gattClientScenarioMessage += BLEInterface.testStopBLEScan() + "\n"
//            console.log("testStopBLEScan success")
//            // ????????????BLE??????????????????
//            gattClientScenarioMessage += BLEInterface.testOnBLEDeviceFind() + "\n"
//            console.log("testOffBLEDeviceFind success")
            // ????????????????????????
            gattClientScenarioMessage += BrInterface.testOnStateChange() + "\n"
            console.log("testOffStateChange success")
            //?????????
            gattClientScenarioMessage += BrInterface.testDisableBluetooth() + "\n"
            console.log("testDisableBluetooth success")
            self.changeIndex=arr[15]
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage)
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
          .margin({ top: "15vp",right:"20vp" })
          .align(Alignment.Start)
          .onClick((event: ClickEvent) => {
            let gattClientScenarioMessage =""
            AppStorage.SetOrCreate("gattClientScenarioMessage", gattClientScenarioMessage)
          })
        }
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

export function string2ArrayBuffer (str) {
  let array = new Uint8Array(str.length);
  for(var i = 0; i < str.length; i++) {
    array[i] = str.charCodeAt(i);
  }
  return array.buffer
}