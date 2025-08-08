let packageName = require("./dingdingApp");
// 打开钉钉应用
App.launch(packageName.getName())

System.sleep(1000);

const tag = UiSelector().text('消息').findOne()
tag.parent().parent().click()

const clockTag = UiSelector().text('打卡').findOne()
clockTag.parent().parent().click()


System.sleep(3000);


try {
    let imageFile = Images.capture();//获取图片地址  后续可以通过此地址进行图片处理
    console.log(1111, imageFile)
    let arr = Images.findTextPosition(imageFile, "下班打卡");
    for (let i in arr) {
        console.log(arr[i].left, arr[i].top, arr[i].width(), arr[i].height());//输出keyword所在区域的坐标以及区域宽高度
        Gesture.click(arr[i].left, arr[i].top)
        System.sleep(5000);
    }
    // 返回
    Gesture.back();
} catch (e) {
    console.log("截图异常：" + e.message);
}

