import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  // Register a command that shows a random image URL at the current cursor position
  let disposable = vscode.commands.registerCommand('extension.ntaFakeImage', async () => {
    try {
      const imageUrl = await getRandomImageUrl();
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const currentPosition = editor.selection.active;
        const currentPositionText = editor.document.lineAt(currentPosition).text;

        if (currentPositionText.trim().length === 0) {
          // If the current line is empty, insert the URL at the current cursor position
          editor.edit((editBuilder) => {
            editBuilder.insert(currentPosition, imageUrl);
          });
        } else {
          // Otherwise, replace the current line with the URL
          const currentLineRange = editor.document.lineAt(currentPosition).range;
          editor.edit((editBuilder) => {
            editBuilder.replace(currentLineRange, imageUrl);
          });
        }

        vscode.env.clipboard.writeText(imageUrl); // Copy the URL to clipboard
        vscode.window.showInformationMessage('Random Image URL copied to clipboard and inserted at the cursor position!');
      } else {
        vscode.env.clipboard.writeText(imageUrl); // Copy the URL to clipboard if there's no active editor
        vscode.window.showInformationMessage('Random Image URL copied to clipboard!');
      }
    } catch (error) {
      vscode.window.showErrorMessage('Failed to get a random image.');
    }
  });

  context.subscriptions.push(disposable);
}

async function getRandomImageUrl(): Promise<string> {
  const response = await axios.get('https://source.unsplash.com/random');
  return response.request.res.responseUrl;
}

export function deactivate() {}
