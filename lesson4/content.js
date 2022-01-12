chrome.runtime.onMessage.addListener((event, sender, callable) => {
  console.log('收到popup的消息')
	callable('给popup发一次消息')
})

chrome.runtime.sendMessage('content调用一次', function() {
  console.log('调用成功')
})

var connect = chrome.runtime.connect()

connect.onMessage.addListener(function(msg) {
  console.log('长链接调用')
  console.log(msg)
})