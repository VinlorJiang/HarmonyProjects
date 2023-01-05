import CommonStants from '../common/constants/CommonConstants'
import Home from '../view/Home'
import Setting from '../view/Setting'


@Entry
@Component
struct MainPage {
  @State index: number = CommonStants.HOME_TAB_INDEX
  private tabsController: TabsController = new TabsController()

  @Builder baseTab(title: string, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.index === targetIndex ? selectedImg : normalImg)
        .width($r('app.float.mainPage_baseTab_size'))
        .height($r('app.float.mainPage_baseTab_size'))
      Text(title)
        .margin({ top: $r('app.float.mainPage_baseTab_top')})
        .fontSize($r('app.float.main_tab_fontSize'))
        .fontColor(this.index === targetIndex ? $r('app.color.mainPage_selected') : $r('app.color.mainPage_normal'))
    }
    .margin({ top: $r('app.float.mainPage_baseTab_margin')})
    .height($r('app.float.mainPage_barHeight'))
    .width(CommonStants.FULL_PARENT)
    .onClick(() => {
      this.index = targetIndex
      this.tabsController.changeIndex(this.index)
    })
  }

  @Builder tabTitles(title: Resource) {
    Text(title)
      .fontWeight(FontWeight.Medium)
      .fontSize($r('app.float.page_title_text_size'))
      .margin({ top: $r('app.float.mainPage_tabTitles_margin')})
      .padding({ left: $r('app.float.mainPage_tabTitles_padding')})
  }

  build() {
    Tabs({
      barPosition: BarPosition.End,
      controller: this.tabsController
    }) {
      TabContent() {
        this.tabTitles($r('app.string.mainPage_tabTitles_home'))
        Home()
      }
      .padding({
        left: $r('app.float.mainPage_padding'),
        right: $r('app.float.mainPage_padding')
      })
      .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .tabBar(this.baseTab(CommonStants.HOME_TITLE, CommonStants.HOME_TAB_INDEX, $r('app.media.home_selected'), $r('app.media.home_normal')))

      TabContent() {
        this.tabTitles($r('app.string.mainPage_tabTitles_mine'))
        Setting()
      }
      .padding({
        left: $r('app.float.mainPage_padding'),
        right: $r('app.float.mainPage_padding')
      })
      .backgroundColor($r('app.color.mainPage_backgroundColor'))
      .tabBar(this.baseTab(CommonStants.MINE_TITLE, CommonStants.MINE_TAB_INDEX, $r('app.media.mine_selected'), $r('app.media.mine_normal')))

    }
    .width(CommonStants.FULL_PARENT)
    .backgroundColor(Color.White)
    .barHeight($r('app.float.mainPage_barHeight'))
    .barMode(BarMode.Fixed)
    .onChange((index: number) => {
      this.index = index;
    })
  }
}