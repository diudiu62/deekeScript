/**
 * 这里主要放一些全局的函数、常量等
 */

import { App } from "./Class/App";
import { DeekeScript } from "./Class/DeekeScript";
import { Device } from "./Class/Device";
import { Dialogs } from "./Class/Dialogs";
import { Encrypt } from "./Class/Encrypt";
import { Engines } from "./Class/Engines";
import { FloatDialogs } from "./Class/FloatDialogs";
import { Gestrue } from "./Class/Gestrue";
import { Http } from "./Class/Http";
import { Intent } from "./Class/Intent";
import { Rect } from "./Class/Rect";
import { Storage } from "./Class/Storage";
import { System } from "./Class/System";
import { UiObject } from "./Class/UiObject";
import { UiSelector } from "./Class/UiSelector";

declare global {
    function UiSelector(): UiSelector;
    var App: App;
    var DeekeScript: DeekeScript;
    var Device: DeekeScript;
    var Dialogs: Dialogs;
    var Encrypt: Encrypt;
    var FloatDialogs: FloatDialogs;
    var Gestrue: Gestrue;
    var Http: Http;
    var Intent: Intent;
    var Rect: Rect;
    var Storage: Storage;
    var System: System;
    var UiObject: UiObject;
    var UiSelector: UiSelector;
}
