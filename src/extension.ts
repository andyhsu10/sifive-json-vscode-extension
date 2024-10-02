import JSON5 from 'json5';
import path from 'path';
import * as vscode from 'vscode';

// This method is called when your extension is activated
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

        // Initialize a JsonValidator instance
        const validator = new JsonValidator();
        validator.validate(text, document.languageId, filePath);
      }
    },
  );

  context.subscriptions.push(jsonValidatorDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

// Declare a class for validating the JSON content
class JsonValidator {
  public readonly supportedFormat = ['json', 'json5'];

  public validate(text: string, docLangId: string, filePath: string): void {
    const fileExtension = path.extname(filePath).toLowerCase().replace('.', '');
    const languageId = this.supportedFormat.includes(fileExtension)
      ? fileExtension
      : docLangId;

    if (!this.supportedFormat.includes(languageId)) {
      vscode.window.showErrorMessage(
        'This command is only available for JSON or JSON5 files.',
      );
      return;
    }

    try {
      let jsonContent: any;

      // Validate based on the languageId
      switch (languageId) {
        case 'json':
          // Use standard JSON parser
          jsonContent = JSON.parse(text);
          break;
        case 'json5':
          // Use JSON5 parser
          jsonContent = JSON5.parse(text);
          break;
      }

      // print key-value pairs to debug console
      console.log(`\nKey-Value Pairs in ${filePath}:`);
      for (const [key, value] of Object.entries(jsonContent)) {
        console.log(`．${key}: ${this.stringifyValue(value)}`);
      }

      vscode.window.showInformationMessage(
        `${languageId.toUpperCase()} is valid. Key-value pairs logged to debug console.`,
      );
    } catch (error: any) {
      console.error(error);
      vscode.window.showErrorMessage(
        `Invalid ${languageId.toUpperCase()}: ${error.message}`,
      );
    }
  }

  // stringify the value with whitespace in a line
  private stringifyValue(value: any): string {
    if (typeof value === 'object' && value !== null) {
      // Convert object or array to a string with custom formatting
      return JSON.stringify(value, null, 0)
        .replace(/,/g, ', ')
        .replace(/:/g, ': ');
    }

    return String(value);
  }
}
