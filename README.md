# Smart Text Converter

## Overview
The **Smart Text Converter** is a Chrome extension designed to fix text that has been mistakenly typed in the wrong keyboard layout. Whether you meant to type in Thai but used an English keyboard layout (or vice versa), this tool intelligently converts the text to its intended language, saving you time and effort.

## Features
- **Text Conversion**: Automatically converts text typed in the wrong keyboard layout (e.g., 'l;ylfu' typed with an English keyboard, meant to be 'สวัสดี' in Thai).
- **User-Friendly Interface**: Simple input and output fields to ensure a smooth experience.
- **Contextual Placeholders**: Guiding users with relevant placeholder text for both input and output fields.
- **Help & Tooltips**: Short explanations to assist users in understanding how the tool works.
- **Language Detection**: (Optional) Automatically detects the intended language based on input text patterns.
- **Manual Language Selection**: Allows users to select the target language in case auto-detection is not possible.

## UI Elements

### Title
- **Short**: "Smart Text Converter"
- **Descriptive**: "English-Thai Text Converter"

### Input Field
- **Label**: "Input Text"
- **Placeholder Suggestions**:
  - "Enter text, even if it's in the wrong language (e.g., 'l;ylfu' if you meant 'สวัสดี')"
  - "Type text here (e.g., 'l;ylfu' if you meant 'สวัสดี')"
  - "Paste or type your text"

### Output Field
- **Label**: "Corrected Text"
- **Placeholder Suggestions**:
  - "Corrected text will appear here"
  - "Result"

### Convert Button
- **Label**: "Convert"

### Tooltip/Help Text
- (Hover over a question mark icon or a "Help" button)  
  "This tool helps fix text typed in the wrong keyboard layout. Enter your text, and we'll convert it to the intended language."

- **Example Explanation**:  
  "Did you type 'l;ylfu' but meant 'สวัสดี'? This tool converts text typed in the wrong keyboard language to the intended language."

### Optional Features (Future Enhancements)
- **Auto Language Detection**: Automatically detect if the text was typed in the wrong layout and attempt to correct it based on patterns.
- **Manual Language Selection**: Allow users to choose between Thai or English as the target language via a dropdown or button.

## Installation
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer Mode."
4. Click "Load unpacked" and select the extension folder.
5. The extension will be added to Chrome.

## Usage
1. Type or paste text into the "Input Text" field.
2. Click "Convert."
3. The corrected text will appear in the "Corrected Text" field, which you can copy or use as needed.

## License
This project is licensed under the MIT License.
