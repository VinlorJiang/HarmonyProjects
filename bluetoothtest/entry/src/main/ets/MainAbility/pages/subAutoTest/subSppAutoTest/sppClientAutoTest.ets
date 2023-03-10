/**
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
import ConfigData from '../../../../Utils/ConfigData';
import router from '@system.router';
import { TestData } from '../../../model/testData'
import { PageTitle } from '../../../../Component/pageTitle';
import { TestImageDisplay } from '../../../../Component/testImageDisplay';
import { AutoContentTable } from '../../../../Component/autoContentTable';
import { SppClientAutoTestCase , initSppClientAutoData } from '../../../model/autoTestDataModels';
import * as BrInterface from '../../../model/brInterface';
import * as SppClientInterface from '../../../model/sppClientInterface';
import prompt from '@system.prompt';

/**
 *  SppClientAutoTest Page Of Bluetooth test
 */
@Entry
@Component
struct SppClientAutoTest {
  @State message: string = 'SppClientAutoTest';
  @State testMessage: string = "";
//  @State textMessage: string = 'null';
  private testItem: TestData = router.getParams().testId;
  @State changeIndex:number = -1
  @StorageLink ("sppClientAutoTestMessage") sppClientAutoTestMessage:string =""

  aboutToAppear(){

    AppStorage.SetOrCreate('txtScanFilterDeviceId', "08:FB:EA:19:48:0F");
    AppStorage.SetOrCreate('txtScanFilterName', "dudu-tiger");
    AppStorage.SetOrCreate('txtScanFilterServiceUuid', "0000180A-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('txtScanOptions_interval', "0");
    AppStorage.SetOrCreate('txtScanOptionsDutyMode', '0');
    AppStorage.SetOrCreate('txtScanOptionsMatchMode', '0');
    AppStorage.SetOrCreate('cbxBleScanFilter', true);
    AppStorage.SetOrCreate('cbxBleScanOptions', true);

    AppStorage.SetOrCreate('inputDeviceId', "08:FB:EA:19:48:0F");
    AppStorage.SetOrCreate('inputUuid', "00001101-0000-1000-8000-00805f9b34fb");
    AppStorage.SetOrCreate('writeData', '11');
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
            Text("API??????:")
              .fontSize("17vp")
              .margin({ top: "10vp", bottom:"10vp",left: "15vp" })
              .textAlign(TextAlign.Start)
              .width("100%")
            AutoContentTable({
              testItem: this.testItem,
              autoItems: initSppClientAutoData(),
              testMessage: this.testMessage,
              changeIndex:this.changeIndex,
            })
          }
          .width("100%")
          .height(260)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.Auto)

        Stack().height("1vp").backgroundColor("#000000");

        Scroll() {
          Column() {
            Text("Debug??????:")
              .fontSize("17vp")
              .margin({ top: "8vp", bottom: "8vp", left: "15vp"})
              .textAlign(TextAlign.Start)
              .width("100%")
            List(){
              ListItem(){
                Text("log:" + "\n"  + this.sppClientAutoTestMessage)
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
          .height(280)
        }
        .scrollBarWidth(10)
        .scrollBar(BarState.Auto)

      }
      .height(500)
      .width("100%")
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))


      Stack().height("1vp").backgroundColor("#000000");
      Column() {
        Button({ type: ButtonType.Normal, stateEffect: true }) {
          Row() {
            Text('????????????').fontSize("24vp").fontColor(0xffffff).margin({ left: 5, right: 5 })
          }.alignItems(VerticalAlign.Center)
        }
        .borderRadius(8)
        .backgroundColor($r("app.color.blue"))
        .width(180)
        .height(50)
        .margin({ top: "15vp"})
        .onClick((event: ClickEvent) => {
//          AlertDialog.show({ message: 'AutoTest is successful' })
          let self = this
          let sppClientAutoTestMessage =""

//          const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
//          async function main() {
//            for (let i = 0; i < arr.length; i++) {
//              await sleep(0.5)
//              self.changeIndex=arr[i]
//            }
//          }
//          main()

          //????????????
          var a=[{name:"testSetLocalName",para:["dayu"]},
                 {name:"testSetBluetoothScanMode",para:[4,0]}]
          let Interface = SppClientAutoTestCase.map(i=>{
            let para = a.some(itm=>itm.name===i.api.name)?a.find(itm=>itm.name===i.api.name).para:[]
            return {name:i.api.name,para}
          })
          //????????????
//          Interface.forEach((i,index)=>{
//            sppClientAutoTestMessage += SppClientAutoTestCase[index]["api"](...i.para) + "\n"
//            sleep(0.5)//???500ms
//            AppStorage.SetOrCreate("sppClientAutoTestMessage",sppClientAutoTestMessage)
//            //?????????????????????@state @prop
//          })

          async function forLoop() {
            for (let m=0 ; m<Interface.length ; m++){
              sppClientAutoTestMessage += SppClientAutoTestCase[m]["api"](...Interface[m].para) + "\n"
              self.changeIndex=m
              await sleep(0.5)
              AppStorage.SetOrCreate("sppClientAutoTestMessage", sppClientAutoTestMessage)
            }
          }
          forLoop()

          let msg = ""
          msg = "????????????"
          console.log(msg)
          prompt.showToast({ message: msg })
        })
      }
      .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
      .width(ConfigData.WH_100_100)
      .height(ConfigData.WH_100_100);
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