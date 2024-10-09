# KeySwap

## Overview
The **Smart Text Converter** is a Chrome extension designed to fix text that has been mistakenly typed in the wrong keyboard layout. Whether you meant to type in Thai but used an English keyboard layout (or vice versa), this tool intelligently converts the text to its intended language, saving you time and effort.

## Features
- **Text Conversion**: Automatically converts text typed in the wrong keyboard layout (e.g., 'l;ylfu' typed with an English keyboard, meant to be 'สวัสดี' in Thai).
- **User-Friendly Interface**: Simple input and output fields to ensure a smooth experience.
- **Contextual Placeholders**: Guiding users with relevant placeholder text for both input and output fields.
- **Help & Tooltips**: Short explanations to assist users in understanding how the tool works.
- **Language Detection**: (Optional) Automatically detects the intended language based on input text patterns.
- **Manual Language Selection**: Allows users to select the target language in case auto-detection is not possible.

### Title
- **Short**: "KeySwap"
- **Descriptive**: "English-Thai Text Converter"

### Convert Button
- **Label**: "Convert"

- **Example Explanation**:  
  "Did you type 'l;ylfu' but meant 'สวัสดี'? This tool converts text typed in the wrong keyboard language to the intended language."

## Installation
1. Download or clone this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer Mode."
4. Click "Load unpacked" and select the extension folder.
5. The extension will be added to Chrome.

## Usage
1. **Type or Paste**: Enter the text you want to correct into the "Input Text" field.
   - For websites without restrictive security policies, you can select text directly on the webpage, and the corrected text will automatically appear in the "Corrected Text" field.
   - **Note**: On some websites with strict Content Security Policies (CSP), text selection and correction may not work automatically. In these cases, you can manually copy the text, paste it into the "Input Text" field, and proceed with the correction.
   
2. **Instant Correction**: Once the text is entered or selected (if allowed), the extension will display the corrected text in the "Corrected Text" field.

3. **Copy the Result**: You can copy the corrected text from the "Corrected Text" field and use it as needed.
