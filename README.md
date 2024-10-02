# SiFive JSON

This is a VS Code extension that adds a "SiFive test" button to the right-click context menu when editing JSON and JSON5 files. This extension allows users to validate the content of their JSON and JSON5 files directly from the editor. If the content is valid, it prints the key-value pairs to the debug console; otherwise, it displays an error message indicating the issue.

## Features

- **Context Menu Integration**: Adds a `SiFive test` option to the right-click context menu for .json and .json5 files.
- **JSON and JSON5 Support**: Validates both JSON and JSON5 file formats.
- **Error Handling**: Displays error messages in a modal dialog if the content is invalid.
- **Debug Logging**: Prints key-value pairs of valid JSON/JSON5 content to the debug console.

## Prerequisites

- [Node.js and npm](https://nodejs.org/en): v20+ recommended
- [Visual Studio Code](https://code.visualstudio.com/)
- [esbuild Problem Matchers (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers): Allows you to see compilation errors directly in VS Code, facilitating easier debugging during development.
- [JSON5 syntax (VS Code extension)](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-json5): (Optional) Adds syntax highlighting of JSON5 files in VS Code.

## Setup

1. Clone the Repository

   ```bash
   git clone https://github.com/andyhsu10/sifive-json-vscode-extension.git
   cd sifive-json-vscode-extension
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Compile the extension

   ```bash
   npm run compile
   ```

## How to Run the Extension

To test and run the extension in Visual Studio Code:

1. Open the Extension Project in VS Code

   ```bash
   code .
   ```

2. Start Debugging

   - Press `F5` to launch the extension in a new Extension Development Host window.

3. Test the Extension

   - In the new window, open or create a `.json` or `.json5` file. You can find some sample files under the folder `samples`.
   - Right-click anywhere in the editor to bring up the context menu.
   - Click on **SiFive test**.
   - If the JSON is valid:
     - An information message will appear: `JSON is valid. Key-value pairs logged to debug console.`
     - Key-value pairs will be printed in the Debug Console.
   - If the JSON is invalid:
     - An error message will appear detailing the parsing error.

## Demo

https://github.com/user-attachments/assets/e766df17-2e41-46bf-9d69-e0c52ddfeb1d

## Future Improvements

1. **Support for JSONC**: Extend validation support to include JSON with Comments (`.jsonc`) files.
2. **Error Highlighting**: Integrate with the editor to highlight the exact location of syntax errors within the JSON file.
3. **Formatting Features**: Add options to format and beautify JSON content directly from the context menu.
4. **Configuration Settings**: Allow users to customize extension behavior through VS Code settings, such as enabling/disabling certain features.
5. **Performance Optimization**: Improve the parsing and validation performance for large JSON files.

## References

1. [Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
2. [Contribution Points | Visual Studio Code Extension API](https://code.visualstudio.com/api/references/contribution-points#contributes.menus)
3. [microsoft/vscode-extension-samples: Sample code illustrating the VS Code extension API.](https://github.com/microsoft/vscode-extension-samples/tree/main)
4. [Modern VS Code extension development: The basics](https://snyk.io/blog/modern-vs-code-extension-development-basics/)
5. [How to Make Your Own VS Code Extension](https://www.freecodecamp.org/news/making-vscode-extension/)
