# NTA Fake Image Extension for Visual Studio Code

![NTA Fake Image Extension](images/screenshot.png)

The NTA Fake Image Extension for Visual Studio Code allows you to insert a random image URL at the current cursor position in your code editor. It uses the [Unsplash API](https://source.unsplash.com/) to fetch random images and copy the URL to your clipboard.

## Features

- Easily insert a random image URL at the current cursor position.
- If the current line is empty, the image URL will be inserted at the cursor position.
- If there is text on the current line, it will be replaced with the image URL.

## How to Use

1. Install the "NTA Fake Image" extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.extension-name) or from the Extensions view in Visual Studio Code.

2. Open a file in the editor where you want to insert a random image URL.

3. Place your cursor at the desired location in the file.

4. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) to open the Command Palette.

5. Type "NTA Fake Image" in the Command Palette and select the "NTA Fake Image: Insert Random Image URL" command. Alternatively, you can use the keybinding `Ctrl + Alt + I` (or `Cmd + Option + I` on macOS).

6. A random image URL will be fetched and inserted at the current cursor position. The URL will also be copied to your clipboard.

![Inserting Random Image URL](images/usage.gif)

## Configuration

There are currently no configuration options for this extension. The random image URL is fetched from the [Unsplash API](https://source.unsplash.com/random).

## Known Issues

- None.

## Support and Feedback

If you encounter any issues or have suggestions for improvements, please feel free to [open an issue on GitHub](https://github.com/NguyenTaiAnh/nta-fake-image-extension/issues). Your feedback is greatly appreciated!

## About

The NTA Fake Image Extension is an open-source project developed by [Your Name](https://github.com/NguyenTaiAnh). Contributions and feedback are welcome.

## License

The NTA Fake Image Extension is released under the [MIT License](LICENSE).

---

Thank you for using the NTA Fake Image Extension for Visual Studio Code! We hope you find it useful for quickly inserting random image URLs in your code. If you have any questions or need support, please don't hesitate to reach out.

Happy coding!
