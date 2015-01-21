function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function closeIosMenu() {
        $.menuView.visible = false;
        $.menuView.zindex = 0;
        var a = Ti.UI.createAnimation({
            duration: 1,
            top: 500
        });
        $.menuView.animate(a);
    }
    function expandIosMenu() {
        $.menuView.visible = true;
        $.menuView.zindex = 10;
        var a = Ti.UI.createAnimation({
            duration: 1e3,
            top: 350
        });
        $.menuView.animate(a);
    }
    function onRightButtonClicked() {
        "false" !== $.menuView.visible && $.menuView.visible ? closeIosMenu() : expandIosMenu();
    }
    function win2Swipe() {
        closeIosMenu();
    }
    function win2Closed(event) {
        closeIosMenu();
        if ("openNextWindow" === event.source.id) {
            var win3 = Alloy.createController("nextPage").getView();
            $.win1.openWindow(win3);
        } else alert("you have clicked" + event.source.title);
    }
    function onLeftbuttonClicked() {
        alert("已经是第一页了");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "actionBar",
        layout: "composite",
        backgroundColor: "pink"
    });
    win2Swipe ? $.__views.win2.addEventListener("swipe", win2Swipe) : __defers["$.__views.win2!swipe!win2Swipe"] = true;
    win2Closed ? $.__views.win2.addEventListener("click", win2Closed) : __defers["$.__views.win2!click!win2Closed"] = true;
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Back",
        id: "__alloyId1"
    });
    onLeftbuttonClicked ? $.__views.__alloyId1.addEventListener("click", onLeftbuttonClicked) : __defers["$.__views.__alloyId1!click!onLeftbuttonClicked"] = true;
    $.__views.win2.leftNavButton = $.__views.__alloyId1;
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "快捷菜单",
        id: "__alloyId3"
    });
    onRightButtonClicked ? $.__views.__alloyId3.addEventListener("click", onRightButtonClicked) : __defers["$.__views.__alloyId3!click!onRightButtonClicked"] = true;
    $.__views.win2.rightNavButton = $.__views.__alloyId3;
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        zIndex: "1",
        id: "__alloyId4"
    });
    $.__views.win2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId9"
    });
    $.__views.__alloyId4.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId10"
    });
    $.__views.__alloyId4.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId11"
    });
    $.__views.__alloyId4.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId12"
    });
    $.__views.__alloyId4.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId13"
    });
    $.__views.__alloyId4.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId14"
    });
    $.__views.__alloyId4.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId15"
    });
    $.__views.__alloyId4.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId16"
    });
    $.__views.__alloyId4.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "WellCome",
        textAlign: "center",
        id: "__alloyId17"
    });
    $.__views.__alloyId4.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello",
        textAlign: "center",
        id: "__alloyId18"
    });
    $.__views.__alloyId4.add($.__views.__alloyId18);
    $.__views.menuView = Ti.UI.createView({
        id: "menuView",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: "250",
        bottom: "0",
        backgroundColor: "#0f0",
        zIndex: "10",
        visible: "false"
    });
    $.__views.win2.add($.__views.menuView);
    $.__views.openNextWindow = Ti.UI.createButton({
        id: "openNextWindow",
        title: "打开下一个窗口",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.openNextWindow);
    $.__views.def = Ti.UI.createButton({
        id: "def",
        title: "DEF",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.def);
    $.__views.ght = Ti.UI.createButton({
        id: "ght",
        title: "GHT",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.ght);
    $.__views.abc1 = Ti.UI.createButton({
        id: "abc1",
        title: "ABC",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.abc1);
    $.__views.def1 = Ti.UI.createButton({
        id: "def1",
        title: "DEF",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.def1);
    $.__views.ght1 = Ti.UI.createButton({
        id: "ght1",
        title: "GHT",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    });
    $.__views.menuView.add($.__views.ght1);
    $.__views.win1 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win2,
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.android && $.window.open();
    $.win1.open();
    __defers["$.__views.win2!swipe!win2Swipe"] && $.__views.win2.addEventListener("swipe", win2Swipe);
    __defers["$.__views.win2!click!win2Closed"] && $.__views.win2.addEventListener("click", win2Closed);
    __defers["$.__views.__alloyId1!click!onLeftbuttonClicked"] && $.__views.__alloyId1.addEventListener("click", onLeftbuttonClicked);
    __defers["$.__views.__alloyId3!click!onRightButtonClicked"] && $.__views.__alloyId3.addEventListener("click", onRightButtonClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;