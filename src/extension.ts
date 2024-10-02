// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Hello World from SiFive JSON!');

  const jsonValidatorDisposable = vscode.commands.registerCommand(
    'sifive-json-vscode-extension.validateJson',
    () => {
      // Get the active text editor
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const document = editor.document;
        const text = document.getText();
        const filePath = document.fileName;

        try {
          // Try to parse the JSON content
          const jsonContent = JSON.parse(text);

          // If parsing is successful, print key-value pairs to debug console
          console.log(`Key-Value Pairs in ${filePath}:`);
          for (const [key, value] of Object.entries(jsonContent)) {
            console.log(`${key}: ${stringifyValue(value)}`);
          }

          vscode.window.showInformationMessage(
            `✅ JSON is valid. Key-value pairs logged to debug console.`,
          );
        } catch (error) {
          // If parsing fails, show an error message
          vscode.window.showErrorMessage(`❌ Invalid JSON: ${error}`);
        }
      }
    },
  );

  context.subscriptions.push(jsonValidatorDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function stringifyValue(value: any): string {
  if (typeof value === 'object' && value !== null) {
    // Convert object or array to a string with custom formatting
    return JSON.stringify(value, null, 0)
      .replace(/,/g, ', ')
      .replace(/:/g, ': ');
  }

  return String(value);
}
