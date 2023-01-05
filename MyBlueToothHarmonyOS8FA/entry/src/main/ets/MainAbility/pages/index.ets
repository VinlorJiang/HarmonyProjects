import bluetooth from '@ohos.bluetooth';
import Logger from '../../Model/Logger'
import { TitleBar } from '../../Common/TitleBar'
import { PinDialog } from '../../Common/PinDialog'

const TAG: string = '[vinlorTest] >> '
const TIME: number = 0 // 设备可被发现的持续时间

@Entry
@Component
struct Index {
  @State isOn: boolean = false
  @State deviceList: Array<string> = []
  @State discoveryList: Array<string> = []
  private bluetoothState: boolean = false
  private pinDialogController: CustomDialogController | null = null
  private intervalId: number = -1
  private logTag: string = '[vinlorTest] >> '



  build() {
    Column() {
      TitleBar({ handlerClickButton: this.handlerClickButton})
      Scroll() {
        Column() {
          Row() {
            Column() {
              Text($r('app.string.bluetooth'))
                .fontSize(30)
                .margin({top: 20})
                .alignSelf(ItemAlign.Start)
              if (true === this.isOn) {
                Text($r('app.string.discovery'))
                  .fontSize(20)
                  .alignSelf(ItemAlign.Start)
              }
            }

            Blank()

            Column() {
              Toggle({ type: ToggleType.Switch, isOn: this.isOn})
                .selectedColor('#ff2982ea')
                .onChange((isOn: boolean) => {
                  if (isOn) {
                    this.isOn = true
                    this.initBluetooth()
                  } else {
                    this.isOn = false
                    bluetooth.disableBluetooth()
                    this.deviceList = []
                    this.discoveryList = []
                  }
                })
            }
          }
          .width('90%')

          if (this.isOn) {
            Divider()
              .vertical(false)
              .strokeWidth(10)
              .color('#ffece7e7')
              .lineCap(LineCapStyle.Butt)
              .margin('1%')

            Text($r('app.string.paired_device'))
              .fontSize(25)
              .fontColor('#ff565555')
              .margin({ left: '5%'})
              .alignSelf(ItemAlign.Start)

            ForEach((this.deviceList), (item) =>{
                Row() {
                  Text(item)
                    .fontSize(20)
                }
                .alignSelf(ItemAlign.Start)
                .width('100%')
                .height(50)
                .margin({ left: '5%', top: '1%'})
                .onClick(() =>{
                  AlertDialog.show({
                    title: $r('app.string.disconnect'),
                    message: '此操作将会断开您与以下设备的连接：' + item,
                    primaryButton: {
                      value: $r('app.string.cancel'),
                      action: () =>{
                        console.log(this.logTag + 'AlertDialog >> cancel')
                      }
                    },
                    secondaryButton: {
                      value: $r('app.string.confirm'),
                      action: () => {
                        //TODO 需要更换方法cancelPairedDevice
                        let deleteStatus = bluetooth.stopBluetoothDiscovery()
                        Logger.info(TAG, 'deleteStatus = ${deleteStatus}')
                        if (deleteStatus === true) {
                          this.deviceList = bluetooth.getPairedDevices()
                          this.discoveryList = []
                          bluetooth.startBluetoothDiscovery()
                        }
                      }
                    }
                  })
                })
            })

            Divider()
              .vertical(false)
              .strokeWidth(10)
              .color('#ffece7e7')
              .lineCap(LineCapStyle.Butt)
              .margin('1%')

            Text($r('app.string.available_device'))
              .fontSize(25)
              .fontColor('#ff565555')
              .margin({ left: '5%', bottom: '2%'})
              .alignSelf(ItemAlign.Start)

            ForEach((this.discoveryList), (item)=>{
              Row() {
                Text(item)
                  .fontSize(20)
              }
              .alignSelf(ItemAlign.Start)
              .width('100%')
              .height(50)
              .margin({ left: '5%', top: '1%'})
              .onClick(()=>{
                Logger.info(TAG, 'start bluetooth.pairDevice,item = ${item}')
                let pairStatus = bluetooth.pairDevice(item)
                Logger.info(TAG, `pairStatus = ${pairStatus}`)
              })
            })

            Divider()
              .vertical(false)
              .strokeWidth(10)
              .color('#ffece7e7')
              .lineCap(LineCapStyle.Butt)
              .margin('1%')
          }


        }
      }
      .constraintSize({maxHeight: '85%'})
    }
  }

  testBlueTooth() {
    console.log(this.logTag + 'testBlueTooth')
    Logger.info(TAG, `enter on stateChange`)
    let state = bluetooth.enableBluetooth()
    console.log(this.logTag + 'state: '+state)
  }

  handlerClickButton = () => {
    console.log(this.logTag + 'handlerClickButton')
    globalThis.abilityContext.terminateSelf()
  }

  initBluetooth() {
    console.log(this.logTag + 'initBluetooth')
    Logger.info(TAG, `enter on initBluetooth`)
    bluetooth.on('stateChange', (data: bluetooth.BluetoothState) => {
      Logger.info(TAG, `enter on stateChange`)
      Logger.info(TAG, `BluetoothState = ${JSON.stringify(data)}`)
//      if (data === bluetooth.BluetoothState.STATE_ON) {
//        Logger.info(TAG, `enter BluetoothState.STATE_ON`)
//        this.foundDevices()
//      }
//      if (data === bluetooth.BluetoothState.STATE_OFF) {
//        Logger.info(TAG, `enter BluetoothState.STATE_OFF`)
//        bluetooth.off('bluetoothDeviceFind', (data) => {
//          Logger.info(TAG, `offBluetoothDeviceFindData = ${JSON.stringify(data)}`)
//        })
//        bluetooth.stopBluetoothDiscovery()
//        this.discoveryList = []
//      }

      switch (data) {
        case 2:
          Logger.info(TAG, `enter BluetoothState.STATE_ON`)
          this.foundDevices()
          break;
        case 0:
          bluetooth.off('bluetoothDeviceFind', (data) => {
            Logger.info(TAG, `offBluetoothDeviceFindData = ${JSON.stringify(data)}`)
          })
          bluetooth.stopBluetoothDiscovery()
          this.discoveryList = []
          break;
        default:
          break;
      }
    })
//    bluetooth.on('stateChange', (data: bluetooth.BluetoothState) =>{
//      Logger.info(TAG+ JSON.stringify(data));
//    });
    bluetooth.enableBluetooth()
  }

  foundDevices() {
    Logger.info(TAG, `foundDevices`)
    bluetooth.on('bluetoothDeviceFind', (data) => {
      Logger.info(TAG, `enter on bluetoothDeviceFind`)
      if (data !== null && data.length > 0) {
        if (this.discoveryList.indexOf(data[0]) === -1 && this.deviceList.indexOf(data[0]) === -1) {
          this.discoveryList.push(data[0])
        }
        Logger.info(TAG, `discoveryList = ${JSON.stringify(this.discoveryList)}`)
      }
      let list = bluetooth.getPairedDevices()
      if (list !== null && list.length > 0) {
        this.deviceList = list
        Logger.info(TAG, `deviceList =  ${JSON.stringify(this.deviceList)}`)
      }
    })
    bluetooth.startBluetoothDiscovery()
    bluetooth.setBluetoothScanMode(bluetooth.ScanMode.SCAN_MODE_CONNECTABLE_GENERAL_DISCOVERABLE, TIME)
  }

  aboutToAppear() {
    Logger.info(TAG, `aboutToAppear`)
//    globalThis.abilityContext.requestPermissionsFromUser(['ohos.permission.USE_BLUETOOTH', 'ohos.permission.DISCOVER_BLUETOOTH', 'ohos.permission.LOCATION', 'ohos.permission.MANAGE_BLUETOOTH'])
    Logger.info(TAG, `grantPermission,requestPermissionsFromUser,PermissionRequestResult`)

    let state = bluetooth.getState()
    if (state === bluetooth.BluetoothState.STATE_ON) {
      this.isOn = true
      this.foundDevices()
    }
    if (state === bluetooth.BluetoothState.STATE_OFF) {
      this.isOn = false
    }

    bluetooth.on('pinRequired', (data) => {
      Logger.info(TAG, `enter pinRequired`)
      this.pinDialogController = new CustomDialogController({
        builder: PinDialog({ data: data }),
        autoCancel: true,
        alignment: DialogAlignment.Bottom
      })
      this.pinDialogController.open()
      Logger.info(TAG, `onPinRequiredData = ${JSON.stringify(data)}`)
    })

    bluetooth.on('bondStateChange', (data) => {
      Logger.info(TAG, `enter bondStateChange`)
      Logger.info(TAG, `data = ${JSON.stringify(data)}`)
      if (data.state === bluetooth.BondState.BOND_STATE_BONDED) {
        Logger.info(TAG, `BOND_STATE_BONDED`)
        let index = this.discoveryList.indexOf(data.deviceId)
        this.discoveryList.splice(index, 1)
        this.deviceList = bluetooth.getPairedDevices()
      }
      if (data.state === bluetooth.BondState.BOND_STATE_INVALID) {
        Logger.info(TAG, `BOND_STATE_INVALID`)
        this.deviceList = bluetooth.getPairedDevices()
      }
      Logger.info(TAG, `bondStateChange,data = ${JSON.stringify(data)}`)
    })

    this.intervalId = setInterval(() => {
      this.discoveryList = []
      this.foundDevices()
    }, 30000)

  }
}