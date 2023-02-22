@Entry
@Component
struct Index {
  @State message: string = 'Hello World'
  @StorageLink('varA') varA: number = 2
  @StorageProp('languageCode') languageCode: string = 'en'
  @State private label: string = 'count'

  aboutToAppear() {
      this.label = (this.languageCode === 'zh') ? '数量' : 'Count'
  }


  build() {
    Column() {
      Row({space: 20}) {
          Button(`${this.label}: ${this.varA}`)
            .onClick(()=>{
              AppStorage.Set<number>('varA', AppStorage.Get<number>('varA')+1)
            })
      }
    }
  }
}