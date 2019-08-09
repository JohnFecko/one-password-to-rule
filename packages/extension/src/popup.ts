document.addEventListener("DOMContentLoaded", function() {
  const optrApp = document.querySelector("optr-app");

  checkTabActive();

  optrApp.addEventListener("onCopy", (event: CustomEvent) => {
    let { detail } = event;
    chrome.tabs.query({ active: true, currentWindow: true }, async function(
      tabs
    ) {
      chrome.tabs.sendMessage(tabs[0].id, { hash: detail });
    });
  });
});

function checkTabActive() {
  var views = chrome.extension.getViews({ type: "popup" });
  const optrApp = document.querySelector("optr-app");
  console.log(views);

  if (!views || views === []) {
    setTimeout(checkTabActive, 300 * 30);
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let activeTab = tabs[0];
      optrApp.setAttribute("modifier", activeTab.title);
      console.log(activeTab.title);
    });
  }
}
