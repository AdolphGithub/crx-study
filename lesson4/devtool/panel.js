// chrome.runtime.sendMessage('devtools panel调用一次', function() {
//   console.log('调用成功')
// })

chrome.runtime.sendMessage({'cmd': 'to_content'}, function() {
  console.log('调用成功')
})