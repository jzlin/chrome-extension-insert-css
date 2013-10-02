console.log('background.js running...');

/**************************************************
* Chrome browserAction.onClicked Listener
**************************************************/
chrome.browserAction.onClicked.addListener(function(tab)
{
	console.log('InsertCSS browserAction click');
	chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
		console.log('css file has inserted.');
	});
});