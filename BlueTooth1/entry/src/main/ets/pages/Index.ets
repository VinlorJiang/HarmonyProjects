import bluetooth from '@ohos.bluetooth'

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'


  initBlueTooth() {
    let state = bluetooth.enableBluetooth()
    console.log('[vinlortest] >> Bluetooth >> state: '+state)
  }

  build() {

    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() =>{
            this.initBlueTooth()
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}