const getState = (iframeId) => {
  return new Promise( (resolve, reject) => {
    chrome.tabs.query({active: true}, (tabs) => {

      chrome.devtools.inspectedWindow.eval('window.vueState = document.querySelector("#vue_iframe_pane").contentDocument.querySelector(".v-application").__vue__.$store.state')
      chrome.devtools.inspectedWindow.eval('localStorage.setItem("vueState", JSON.stringify(document.querySelector("#vue_iframe_pane").contentDocument.querySelector(".v-application").__vue__.$store.state))')
  
      chrome.tabs.sendMessage(tabs[0].id, {id: iframeId}, (response) => {
        var state = JSON.parse(response.state)
        resolve(state)
      });
    });
  })
}

export default {
  getState
}