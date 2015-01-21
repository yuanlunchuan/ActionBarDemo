function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "nextPage";
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
    $.__views.nextPage = Ti.UI.createWindow({
        title: "Red Window",
        backgroundColor: "blue",
        id: "nextPage"
    });
    $.__views.nextPage && $.addTopLevelView($.__views.nextPage);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Hello Word!!",
        id: "__alloyId19"
    });
    $.__views.nextPage.add($.__views.__alloyId19);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;