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

/**
 *  Auto Test ContentTable Component Page Of Bluetooth test
 */
import { TestData, TestApi, TestAuto } from '../MainAbility/model/testData'
import emitter from '@ohos.events.emitter'
import prompt from '@system.prompt';

@Component
export struct AutoContentTable {
  private autoItemsx:TestAuto[];
  private testItem: TestData
  @State currentAutoItem: TestAuto = {}
  @State autoItems: TestAuto[] = [];

  @Prop changeIndex: number;
//  @StorageProp("changeIndex") @Watch("onIndexChange")  changeIndex: number = -1;
//  @Prop testMessage:string;
//  @Prop testState:boolean;
  @State localName: string = 'dayu'
//  @State currentIndex: number = 1
//  @State textResult:string ="None"
//  @StorageLink('pairedMac') pairedMac: string = "";


  @Builder IngredientItem(autoItem: TestAuto, index: number) {
    Stack() {
      Flex() {
        Flex({ alignItems: ItemAlign.Center }) {
          Image($r('app.media.bluetooth'))
            .objectFit(ImageFit.Contain)
            .autoResize(false)
            .height(26)
            .width(25)
        }
        .height(30)
        .width("10%")
        .padding({left: 10})
        Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {
          Row(){
            Text(autoItem.method)
              .fontSize("17vp")
              .margin({ top: "3vp", bottom: "3vp", left: "10vp" })
              .textAlign(TextAlign.Start)
              .height(40)
              .width(200)
          }
          .height(30)
          .width("70%")
        }
        .height(30)
        .layoutWeight(6)
        Flex({ alignItems: ItemAlign.Center }) {
          Text(this.changeIndex >= 0 ? this.getCurrentState(index) : autoItem.result)
//          Text(autoItem.result=AppStorage.Get("result"))
//         Text(autoItem.result)
            .margin({left:"10vp"})
            .fontSize("17vp")
            .flexGrow(1)
        }
        .layoutWeight(3)
        .padding({left: 10})
      }
    }
    .height(40)
    .borderRadius(10)
    .margin({top: 3, bottom: 3})
    .backgroundColor($r("app.color.white"))
  }

  getCurrentState(index: number) {
    //    return this.autoItems[index].result
    if(index<=this.changeIndex) this.autoItemsx[index].result = 'pass';
    return this.autoItemsx[index].result
  }

  aboutToAppear(): void  {
    console.log("auto??????????????????")
//    emitter.on({ eventId: 1 }, (eventData) => {
//      console.log(JSON.stringify(eventData.data) );
//    });
    //?????????????????????
    this.autoItemsx = this.autoItems
  }

//  onIndexChange(){
//    this.autoItemsx[this.changeIndex].result = this.testState?"Pass":"Fail"
//    console.log("????????????")
//  }


  build() {
    Column() {
      Scroll() {
        Flex({
          direction: FlexDirection.Column,
          justifyContent: FlexAlign.SpaceBetween,
          alignItems: ItemAlign.Start
        }) {
          ForEach(this.autoItems, (item: TestAuto, index: number) => {
            this.IngredientItem(item, index)
          })
        }
      }
      .scrollBarWidth(20)
    }
    .height("80%")
    .padding({ top: 5, right: 10, left: 10 })
  }
}