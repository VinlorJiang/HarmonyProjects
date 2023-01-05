import CommonStants from '../common/constants/CommonConstants';
import MainViewModel from '../viewmodel/MainViewModel';
import ItemData from '../common/bean/Itemdata';

@Component
export default struct Home {
  private swiperController: SwiperController = new SwiperController();

  build() {
    Scroll() {
      Column({ space: CommonStants.COMMON_SPACE}) {
        Swiper(this.swiperController) {
          ForEach(MainViewModel.getSwiperImage(), (img: Resource)=> {
            Image(img).borderRadius($r('app.float.home_swiper_borderRadius'))
          }, img => img.id)
        }
        .margin({ top: $r('app.float.home_swiper_margin')})
        .autoPlay(true)

        Grid() {
          ForEach((MainViewModel.getFirstGridData()), (item: ItemData)=>{
            GridItem() {
              Column() {
                Image(item.img)
                  .width($r('app.float.home_homeCell_size'))
                  .height($r('app.float.home_homeCell_size'))
                Text(item.title)
                  .fontSize($r('app.float.little_text_size'))
                  .margin({ top: $r('app.float.home_homeCell_margin')})
              }
            }
          }, item => item.toString())
        }
        .columnsTemplate('1fr 1fr 1fr 1fr')
        .rowsTemplate('1fr 1fr')
        .columnsGap($r('app.float.home_grid_columnsGap'))
        .rowsGap($r('app.float.home_grid_rowGap'))
        .padding({
          top: $r('app.float.home_grid_padding'),
          bottom: $r('app.float.home_grid_padding')
        })
        .height($r('app.float.home_grid_height'))
        .backgroundColor(Color.White)
        .borderRadius($r('app.float.home_grid_borderRadius'))

        Text($r('app.string.home_list'))
          .fontSize($r('app.float.normal_text_size'))
          .fontWeight(FontWeight.Medium)
          .width(CommonStants.FULL_PARENT)
          .margin({top: $r('app.float.home_text_margin')})

        Grid() {
          ForEach((MainViewModel.getSecondGridData()), (secondItem: ItemData)=>{
            GridItem() {
              Column() {
                Text(secondItem.title)
                  .fontSize($r('app.float.normal_text_size'))
                  .fontWeight(FontWeight.Medium)
                Text(secondItem.others)
                  .margin({ top: $r('app.float.home_list_margin')})
                  .fontSize($r('app.float.little_text_size'))
                  .fontColor($r('app.color.home_grid_fontColor'))
              }
              .alignItems(HorizontalAlign.Start)
            }
            .padding({
              top: $r('app.float.home_list_padding'),
              left: $r('app.float.home_list_padding')
            })
            .borderRadius($r('app.float.home_backgroundImage_borderRadius'))
            .align(Alignment.TopStart)
            .backgroundImage(secondItem.img)
            .backgroundImageSize(ImageSize.Cover)
            .width(CommonStants.FULL_PARENT)
            .height(CommonStants.FULL_PARENT)
          }, secondItem => secondItem.toString())
        }
        .width(CommonStants.FULL_PARENT)
        .height($r('app.float.home_secondGrid_height'))
        .columnsTemplate('1fr 1fr')
        .rowsTemplate('1fr 1fr')
        .columnsGap($r('app.float.home_grid_columnsGap'))
        .rowsGap($r('app.float.home_grid_rowGap'))
        .margin({ bottom: $r('app.float.setting_button_bottom')})
      }
    }
  }
}