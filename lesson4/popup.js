chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {}, (ret) => {
    console.log('调用了.')
    console.log(ret)
  })
})


chrome.runtime.sendMessage('调用后台一次', (ret) => {
  console.log(ret)
})