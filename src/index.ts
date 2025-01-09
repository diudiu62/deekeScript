
let uiSelector: UiSelector = UiSelector();
let uiSelector2: UiSelector = new UiSelector().checkable(true);
let uiObject: UiObject = UiSelector().findOne();

let versionCode: number = App.getAppVersionCode("dfs");
let deekeScript: number = DeekeScript.version();
let device: number = Device.height();
let dialogs: void = Dialogs.show("标题", "内容");
let encrypt: string = Encrypt.md5("123456");
let engines: void = Engines.execScript("console.log(322);");
let floatDialog: void = FloatDialogs.show("title", "content");
let gesture: boolean = Gesture.click(1, 1);
let post: string = Http.post("url", { "name": "name" });
let intent: void = Intent.open();
let react: number = new Rect(1, 2, 3, 4).height();

let storage: string = Storage.create("my_db").getString("name");
let system: void = System.cleanUp();
