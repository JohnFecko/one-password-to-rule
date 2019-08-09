chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.hash) {
    let passwordField = getPwdInputs();

    if (passwordField) {
      passwordField.value = msg.hash;
    }
  }
});

function getPwdInputs() {
  var ary = [];
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
      ary.push(inputs[i]);
    }
  }
  // Return only the first password field if many
  return ary[0];
}
