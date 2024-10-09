// Mapping from English keyboard input to Thai characters
const englishToThaiMap = {
  q: "ๆ", //
  w: "ไ", //
  e: "ำ", //
  E: "ฎ",
  r: "พ", //
  R: "ฑ",
  t: "ะ", //
  T: "ธ",
  y: "ั", //
  u: "ี", //
  U: "๊",
  i: "ร", //
  I: "ณ",
  o: "น", //
  O: "ฯ",
  p: "ย", //
  P: "ญ",
  "[": "บ", //
  "{": "ฐ",
  "]": "ล", //
  "}": ",",
  a: "ฟ", //
  A: "ฤ",
  s: "ห", //
  S: "ฆ",
  d: "ก", //
  D: "ฏ",
  f: "ด", //
  F: "โ",
  g: "เ", //
  G: "ฌ",
  h: "้", //
  H: "็",
  j: "่", //
  J: "๋",
  k: "า", //
  K: "ษ",
  l: "ส", //
  L: "ศ",
  ";": "ว", //
  ":": "ซ",
  z: "ผ", //
  Z: "(",
  x: "ป", //
  X: "",
  c: "แ", //
  C: "",
  v: "อ", //
  V: "",
  b: "ิ", //
  B: "",
  n: "ื", //
  N: "",
  m: "ท", //
  M: "",
  ",": "ม", //
  "<": "",
  ".": "ใ", //
  ">": "",
  "?": "",
  "/": "ฝ", //
  "'": "ง", //
  1: "ๅ", //
  2: "/", //
  3: "_", //
  4: "ภ", //
  5: "ถ", //
  6: "ุ", //
  7: "ึ", //
  8: "ค", //
  9: "ต", //
  0: "จ", //
  "-": "ข", //
  "=": "ช", //
  "!": "+", // '1'
  "@": "๑", // '2'
  "#": "๒", // '3'
  $: "๓", // '4'
  "%": "๔", // '5'
  "^": "ู", // '6'
  "&": "฿", // '7'
  "*": "๕", // '8'
  "(": "๖", // '9'
  ")": "๗", // '0'
  _: "๘", // '-' (underscore)
  "+": "๙", // '=' (plus)

  // You can add more mappings here as needed
};

// Context menu creation
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertText",
    title: "Convert Selected Thai Text to English / English to Thai",
    contexts: ["selection"], // Show this menu only when text is selected
  });
  console.log("Context menu created");
});

// Handle context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertText") {
    console.log("Context menu item clicked:", info.selectionText); // Log the selected text

    const selectedText = info.selectionText;

    // Send the selected text and mapping to the content script for conversion
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: convertText,
      args: [selectedText, englishToThaiMap], // Pass the mapping as an argument
    });
  }
});

// Function to convert the selected text
function convertText(selectedText, mapping) {
  const words = selectedText.split(" ");

  // Convert each word using the mapping
  const translatedWords = words.map((word) => {
    return word
      .split("")
      .map((char) => mapping[char] || char) // Use the passed mapping instead of a global one
      .join(""); // Use the mapped value or return the char itself if not found
  });

  // Join the translated words back into a sentence
  const convertedText = translatedWords.join(" ");

  // Show the converted text (for demonstration, you might want to do something else with it)
  alert(`Converted text: ${convertedText}`);
}
