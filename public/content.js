chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // console.log('before done', localStorage.getItem("store"))
  sendResponse({state: localStorage.getItem("vueState")})
})