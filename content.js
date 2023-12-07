document.addEventListener("contextmenu", function (event) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText !== "") {
      chrome.scripting.sendMessage({ type: "enableMenu" });
    } else {
      chrome.scripting.sendMessage({ type: "disableMenu" });
    }
  });
  