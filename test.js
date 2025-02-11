const Common = {
    id(name) {
        return UiSelector().id(this.fullId(name));
    },

    fullId(name) {
        return this.package() + ':id/' + name;
    },

    package() {
        return 'com.tencent.mm';
    },

    click(tag) {
        return Gesture.click(tag.bounds().left + tag.bounds().width() * Math.random(), tag.bounds().top + tag.bounds().height() * Math.random());
    },

    sleep(mill, randMill) {
        if (!randMill) {
            randMill = mill / 2 * Math.random();
            mill /= 2;
        }

        System.sleep(mill + randMill);
    },

    back(times) {
        while (times-- > 0) {
            Gesture.back();
            System.sleep(500);
        }
    },

    find(func) {
        let i = 5;
        while (i-- > 0) {
            let res = func();
            if (res) {
                return res;
            }
            System.sleep(1000);//查找3次，每次都没有就休眠1秒钟
        }
        return undefined;
    }
}

const task = {
    run(name) {
        const concat = Common.find(() => UiSelector().textContains('通讯录').filter(v => {
            return v && v.id() == Common.fullId('icon_tv');
        }).findOne());

        console.log(concat);
        if (!concat) {
            throw new Error('找不到通讯录');
        }

        Common.click(concat);
        System.sleep(1200);

        const tag = Common.find(() => UiSelector().textContains('标签').filter(v => {
            return v.id() == Common.fullId('n9');
        }).findOne());
        console.log(tag);
        if (!tag) {
            throw new Error('找不到标签');
        }
        Common.click(tag);
        System.sleep(1200);

        const myTag = Common.find(() => UiSelector().textContains(name).filter(v => {
            return v.id() === Common.fullId('hs8');
        }).findOne());
        console.log(myTag);
        if (!myTag) {
            throw new Error('找不到标签：' + name);
        }
        Common.click(myTag);
        System.sleep(1200);

        let tags = UiSelector().textMatches('[\\s\\S]+').className('android.widget.TextView').filter(v => {
            return v.id() === Common.fullId('kbq');
        }).find();
        if (tags.length == 0) {
            console.log('没有记录')
            return true;
        }

        for (let i in tags) {
            Common.click(tags[i]);
            Common.sleep(2000);

            this.clickSendMsg();
            this.sendMsg(msg);
        }

        return true;
    },

    clickSendMsg() {
        let tags = Common.find(() => UiSelector().clickable(false).filter(v => {
            return v.bounds().width() === v.bounds().height() && v.id() === Common.fullId('h5n');
        }).find());

        if (tags.length === 0) {
            throw new Error('出错了，找不到发送消息按钮');
        }
        Common.click(tags[0]);
        Common.sleep(2000);
    },

    sendMsg(msg) {
        let ipt = Common.find(UiSelector().className('android.widget.EditText').filter(v => {
            return v.id() === Common.fullId('bkk');
        }).findOne());

        if (!ipt) {
            throw new Error('找不到输入框');
        }

        Common.click(ipt);
        Common.sleep(2000);

        ipt = Common.find(UiSelector().className('android.widget.EditText').filter(v => {
            return v.id() === Common.fullId('bkk');
        }).findOne());

        if (!ipt) {
            throw new Error('找不到输入框');
        }

        Gesture.back();
        ipt.setText(msg);
        Common.sleep(2000);

        const send = Common.find(UiSelector().className('android.widget.Button').filter(v => {
            return v.bounds().left > Device.width() * 0.8 && v.bounds().top > Device.height() * 0.8;
        }).findOne());
        if (!send) {
            throw new Error('找不到发送按钮');
        }

        Common.click(send);
        Common.sleep(2000);
        Common.back(2);
    }
}

let k = 3;
// while (k-- > 0) {
//     try {
//         App.launch(Common.package());//打开抖音
//         Common.sleep(8000);
//         if (task.run('嘀客', '😄 你好呀~')) {
//             FloatDialogs.show('温馨提示', '执行完成');
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }


// const concat = Common.find(() => UiSelector().textContains('通讯录').filter(v => {
//     return true;
// }).findOne());

// console.log(concat);

console.log(UiSelector().textContains('标签').find());