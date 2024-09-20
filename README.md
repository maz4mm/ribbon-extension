# Revision Display Extension

This Chrome extension displays the revision number (SHA) of the current page on meetsmore.com using a ribbon.

## Features

- Displays a ribbon with the current revision SHA on meetsmore.com pages
- Clicking the SHA in the ribbon opens the corresponding GitHub commit page

## How to Use

1. Build the repo
2. Add the extension in Chrome (you need to enable dev extension)
3. Navigate to a meetsmore.com page
4. The ribbon will automatically appear in the bottom-left corner of the page
5. Click the SHA in the ribbon to view the corresponding commit on GitHub
6. Use the extension popup to toggle the ribbon visibility

## How to Build

1. Ensure you have Node.js and npm installed on your system

2. Clone the repository:
   ```
   git clone [repository-url]
   cd [repository-name]
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Build the extension:
   ```
   npm run build
   ```

   This command will:
   - Compile TypeScript files to JavaScript
   - Copy necessary files to the `dist` folder

5. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `dist` folder from your project directory

## Development

- Use `npm run build` to compile changes
- Use `npm run lint` to check for linting errors
- Use `npm run format` to format the code using Prettier

## Packaging for Distribution

To create a distributable version of the extension:

1. Run the build process:
   ```
   npm run build
   ```

2. Package the extension:
   ```
   npm run package
   ```

   This will create a ZIP file in the `web-ext-artifacts` directory, which can be submitted to the Chrome Web Store.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]