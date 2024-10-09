import { ENGLIST_TO_THAI_MAP } from "./keyboardMap.js";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertText",
    title: "Convert Selected Thai Text to English / English to Thai",
    contexts: ["selection"],
  });
  console.log("Context menu created");
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertText") {
    console.log("Context menu item clicked:", info.selectionText);

    const selectedText = info.selectionText;

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: convertText,
      args: [selectedText, ENGLIST_TO_THAI_MAP],
    });
  }
});

function convertText(selectedText, mapping) {
  const words = selectedText.split(" ");

  // Convert each word using the mapping
  const translatedWords = words.map((word) => {
    return word
      .split("")
      .map((char) => mapping[char] || char)
      .join("");
  });

  // Join the translated words back into a sentence
  const convertedText = translatedWords.join(" ");

  alert(`Converted text: ${convertedText}`);
}
