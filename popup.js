import { ENGLIST_TO_THAI_MAP } from "./keyboardMap.js";

function convertText(text) {
  const words = text.split(" ");
  const translatedWords = words.map((word) =>
    word
      .split("")
      .map((char) => ENGLIST_TO_THAI_MAP[char] || char)
      .join("")
  );
  return translatedWords.join(" ");
}

function updateOutput() {
  //   const originalText = document.getElementById("originalText").value;
  //   const convertedText = convertText(originalText);

  const originalText = document.getElementById("originalText").value;
  console.log("Original Text:", originalText); // Log original text
  const convertedText = convertText(originalText);
  console.log("Converted Text:", convertedText); // Log converted text

  document.getElementById("copyBtn").disabled = false;

  // Display converted text
  document.getElementById("output").textContent =
    convertedText || "Converted text will appear here";
}

function copyToClipboard() {
  const convertedText = document.getElementById("output").textContent ;
  navigator.clipboard
    .writeText(convertedText)
    .then(() => {
      // Optionally provide feedback to the user (e.g., change button text)
      const copyBtn = document.getElementById("copyBtn");
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 2000); // Reset button text after 2 seconds
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      // Optionally display an error message to the user
    });
}

function initializeText() {
  //   chrome.runtime.sendMessage({ message: "getSelection" }, (response) => {
  //     if (response && response.selectedText) {
  //       document.getElementById("originalText").value = response.selectedText;
  //       updateOutput();
  //     } else {
  //       console.error("Error: No selected text received from background script.");
  //     }
  //   });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs[0] && tabs[0].id) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => window.getSelection().toString(),
        },
        (results) => {
          const selectedText =
            results && results[0] ? results[0].result || "" : "";

          const originalTextInput = document.getElementById("originalText");
          originalTextInput.value = selectedText;
          updateOutput();
        }
      );
    } else {
      console.error("Error: No active tab found.");
      // Optionally display an error message in the popup
      document.getElementById("output").textContent = "No active tab.";
    }
  });
}

// Replace the selected text with the converted text on the page

function replaceText() {
  const convertedText = document.getElementById("output").textContent;

  // Inject the converted text into the page where the original selection was
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: (text) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents(); // Remove the original text
          range.insertNode(document.createTextNode(text)); // Insert the converted text
        }
      },
      args: [convertedText], // Pass the converted text as an argument
    });
  });
}
// Listen for input changes to automatically update output
document.getElementById("originalText").addEventListener("input", updateOutput);

// Call initializeText when the popup is opened
// document.addEventListener("DOMContentLoaded", initializeText);

document.addEventListener("DOMContentLoaded", () => {
  initializeText();
});

// Listen for button click to trigger conversion
document.getElementById("convertBtn").addEventListener("click", updateOutput);

document.getElementById("replaceBtn").addEventListener("click", replaceText);

document.getElementById("copyBtn").addEventListener("click", copyToClipboard);
