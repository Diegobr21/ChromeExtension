let menuEnabled = false;

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Generate Button",
    id: "parent",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    title: "Submenu Item 1",
    parentId: "parent",
    id: "submenu1",
    contexts: ["selection"]
  });

  // 2nd submenu
  chrome.contextMenus.create({
    title: "Submenu Item 2",
    parentId: "parent",
    id: "submenu2",
    contexts: ["selection"]
  });

  // Set initial state of the menu
  chrome.contextMenus.update("parent", { enabled: true });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "enableMenu") {
    if (!menuEnabled) {
      chrome.contextMenus.update("parent", { enabled: true });
      menuEnabled = true;
    }
  } else if (request.type === "disableMenu") {
    if (menuEnabled) {
      chrome.contextMenus.update("parent", { enabled: false });
      menuEnabled = false;
    }
  }
});
