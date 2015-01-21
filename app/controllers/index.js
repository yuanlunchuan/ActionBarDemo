function onItem1Clicked() {
	alert('打开设置成功');
};
function onItem2Clicked() {
	alert('退出登录成功');
};
function onOpenNextPageMenuClicked(event) {
	Alloy.createController('nextPage', {
	});
};
function openBlueWindow(event) {
	Alloy.createController('nextPage', {
	});
}

if (Alloy.CFG.android) {
	$.window.open();
}

//IOS expand menu and close menu
function onOpenNextPageClicked(e) {
}

function closeIosMenu() {
	$.menuView.visible = false;
	$.menuView.zindex = 0;
	var a = Ti.UI.createAnimation({
		duration : 1,
		top : 500
	});
	$.menuView.animate(a);
};

function expandIosMenu() {
	$.menuView.visible = true;
	$.menuView.zindex = 10;
	var a = Ti.UI.createAnimation({
		duration : 1000,
		top : 350
	});
	$.menuView.animate(a);
};

function onRightButtonClicked(event) {
	if ('false' === $.menuView.visible || !$.menuView.visible) {
		expandIosMenu();
	} else {
		closeIosMenu();
	}
}

function win2Swipe(event) {
	closeIosMenu();
}

function win2Closed(event) {
	closeIosMenu();
	if ("openNextWindow" === event.source.id) {
		var win3 = Alloy.createController('nextPage').getView();
		$.win1.openWindow(win3);
	} else {
		alert('you have clicked' + event.source.title);
	}
}

function onLeftbuttonClicked(event) {
	alert('已经是第一页了');
}

$.win1.open();
