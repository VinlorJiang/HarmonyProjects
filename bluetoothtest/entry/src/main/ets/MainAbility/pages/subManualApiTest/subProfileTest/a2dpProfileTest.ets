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
import prompt from '@system.prompt';
import router from '@system.router';
import { TitleComponent } from '../../../../Component/titleComponent';
import HeadComponent from '../../../../component/headcomponent';
import btProfileModel from '../../../model/BTProfileModel';
import ConfigData from '../../../../Utils/ConfigData';
import LogUtil from '../../../../Utils/LogUtil';

@Entry
@Component
struct Index {
  @State hasProfile: boolean = false;
  @State message: string = "";
  @State isConnection: boolean = false;
  @State connectionStateInfo: string = "";
//  @State deviceId: string = "F0:5C:D5:8B:A5:8A";
//  @State deviceId: string = "88:36:CF:09:C2:B2";
//  @State deviceId: string = "64:dd:e9:16:62:0c";
//  @State deviceId: string = "88:36:CF:09:C1:90";
  @State title: string | Resource = "";
  @State profileExist: string = ""
  @State profileNotExist: string = ""
  @State profileType: number = 0;
  @State bluetoothState: number = 0;
  @State btConnectionState: number = 0;
  private pageType = router.getParams().date;
  private deviceId = router.getParams().deviceId;

  aboutToAppear() {
    LogUtil.log(ConfigData.TAG + "xzyj: aboutToAppear a2dp: deviceId " + JSON.stringify(this.deviceId));
  }

  build() {
    Row() {
      Column() {
        HeadComponent({headName: this.title, isActive: true});
        Stack().height("0.5vp").backgroundColor("#000000");
        Text( this.hasProfile ? this.profileExist : this.profileNotExist)
        .margin({top: "20vp"})
        .fontSize("20vp")
        .fontColor( this.hasProfile ? "#66ccff" : "#ff0000" )
        .border( {width: 0.5} )
        .padding(5)
        .fontStyle(FontStyle.Italic);
        Column() {
          Row() {
            Text("?????????????????????????????????")
            .fontSize("20vp")
            TextInput( { text: JSON.stringify(this.deviceId), placeholder: "????????????????????????deviceId" } )
            .fontSize("20vp")
            .onChange((str) => {
              this.deviceId = str;
            })
          }
          .margin( { top: "20vp", left: "20vp", right: "20vp" } )
          .alignItems(VerticalAlign.Center)
          Text("??????????????????????????????")
          .margin({top: "20vp"})
          .padding("5vp")
          .fontSize("15vp")
          .fontColor("#4444444");
          List() {
            ListItem() {
              TitleComponent({ title: "connect" });
            }.padding({ top: $r('app.float.distance_2'), bottom: $r('app.float.distance_2') })
            .onClick((event) => {
              if (this.btConnectionState == 1 || this.btConnectionState == 2) {
                prompt.showToast({ message: this.btConnectionState == 1 ? "????????????????????????" : "??????????????????" });
                this.message = "";
                return;
              }
              let ret = btProfileModel.getProfile(this.profileType).connect(this.deviceId);
              if (ret) {
                this.btConnectionState = 1;
              }
              this.message = "connect ret???" + ret;
            })
            ListItem() {
              TitleComponent({ title: "disconnect" });
            }.padding({ top: $r('app.float.distance_2'), bottom: $r('app.float.distance_2') })
            .onClick((event) => {
              if (this.btConnectionState == 0 || this.btConnectionState == 3) {
                prompt.showToast({ message: this.btConnectionState == 0 ? "??????????????????" : "???????????????????????????" });
                this.message = "";
                return;
              }
              let ret = btProfileModel.getProfile(this.profileType).disconnect(this.deviceId);
              if (ret) {
                this.btConnectionState = 3;
              }
              this.message = "disconnect ret???" + ret;
            })
            ListItem() {
              TitleComponent({ title: "getPlayingState" });
            }.padding({ top: $r('app.float.distance_2'), bottom: $r('app.float.distance_2') })
            .onClick((event) => {
              let ret = btProfileModel.getProfile(this.profileType).getPlayingState(this.deviceId);
              this.message = "getPlayingState ret: " + ret;
            }).visibility(this.pageType == 0 ? Visibility.Visible : Visibility.None)
            ListItem() {
              TitleComponent({ title: "getConnectionDevices" });
            }.padding({ top: $r('app.float.distance_2'), bottom: $r('app.float.distance_2') })
            .onClick((event) => {
              let ret = btProfileModel.getProfile(this.profileType).getConnectionDevices();
              this.message = "getConnectionDevices ret: " + ret;
            })
            ListItem() {
              TitleComponent({ title: "getDeviceState" });
            }.padding({ top: $r('app.float.distance_2'), bottom: $r('app.float.distance_2') })
            .onClick((event) => {
              let ret = btProfileModel.getProfile(this.profileType).getDeviceState(this.deviceId);
              this.message = "getDeviceState ret: " + ret;
            })
          }.margin(20);
          Text("????????????????????? " + this.message)
          .textAlign(TextAlign.Start)
          .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
          Text("connectionStateChange??? " + this.connectionStateInfo)
            .margin( {top: "20vp"} )
            .textAlign(TextAlign.Start)
            .backgroundColor($r("sys.color.ohos_id_color_foreground_contrary"))
        }
        .visibility( this.hasProfile ? Visibility.Visible : Visibility.Hidden );
      }
      .width('100%')
    }
    .backgroundColor($r("sys.color.ohos_id_color_sub_background"))
    .height('100%')
    .alignItems(VerticalAlign.Top)
  }

  onPageShow() {
    this.bluetoothState = btProfileModel.getBluetoothState();
    if (this.bluetoothState != btProfileModel.BLUETOOTH_STATE_OFF) {
      this.profileNotExist = "???????????????????????????????????????????????????"
      return;
    }
    this.hasProfile = btProfileModel.hasProfile(btProfileModel.PROFILE_A2DP_SOURCE);
    console.log("bt_test pageType: " + this.pageType);
    switch (this.pageType) {
      case 0:
        this.title = $r('app.string.a2dp_profile_test_title');
        this.profileExist = "A2DP exist";
        this.profileNotExist = "A2DP does not exist";
        this.profileType = btProfileModel.PROFILE_A2DP_SOURCE;
        break;
      case 1:
        this.title = $r('app.string.hands_profile_test_title');
        this.profileExist = "HANDS exist";
        this.profileNotExist = "HANDS does not exist";
        this.profileType = btProfileModel.PROFILE_HANDS_FREE_AUDIO_GATEWAY;
        break;
      case 2:
        this.title = $r('app.string.hid_host_profile_test_title');
        this.profileExist = "HID HOST exist";
        this.profileNotExist = "HID HOST does not exist";
        this.profileType = btProfileModel.PROFILE_HID_HOST;
        break;
      default:
        router.back();
    }
    this.hasProfile = btProfileModel.hasProfile(this.profileType);
    if (this.hasProfile) {
      console.log("bt_test registered connectionStateChange type: " + this.profileType);
      btProfileModel.getProfile(this.profileType).on("connectionStateChange", (date) => {
        this.connectionStateInfo = JSON.stringify(date);
        this.btConnectionState = date.state;
      });
    }
  }

  onPageHide() {
    if (this.hasProfile) {
      btProfileModel.getProfile(this.profileType).off("connectionStateChange");
    }
    console.log("bt_test Ability end");
  }
}