document.querySelector('form').onsubmit = function () {
  var urls = document.querySelector('[name=urls]').value

  if(!urls) {
    return alert('请填写链接')
  }

  urls = urls.split('\n')

  urls.map((url) => {
    if(url.indexOf('http') !== 0) {
      url = 'http://' + url
    }
    // 批量打开url.
    chrome.tabs.create({
      url: url
    });
  })

  return false;
}