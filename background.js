browser.browserAction.onClicked.addListener(tab => {
	browser.tabs.remove(tab.id);
});
