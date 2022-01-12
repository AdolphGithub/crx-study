var last_port = null;

chrome.runtime.onConnect.addListener(function(port) {
  last_port = port;
})

chrome.runtime.onMessage.addListener((event, sender, callable) => {
  var cmd = event.cmd || ''

  if(cmd == 'to_content') {
    last_port.postMessage('来自devtools的调用')
  }else{
    callable(event)
  }
})
