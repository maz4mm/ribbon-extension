# Revision Display Extension

This Chrome extension displays the revision number (SHA) of the current page on meetsmore.com using a ribbon.

## Features

- Displays a ribbon with the current revision SHA on meetsmore.com pages
- Clicking the SHA in the ribbon opens the corresponding GitHub commit page
- Toggle the ribbon visibility using the extension popup
- Easy access to options page from the extension popup

## How to Use

1. Build the repo
2. Add the extension in Chrome (you need to enable dev extension)
3. Navigate to a meetsmore.com page
4. The ribbon will automatically appear in the bottom-left corner of the page
5. Click the SHA in the ribbon to view the corresponding commit on GitHub
6. Use the extension popup to toggle the ribbon visibility or access options

## How to Build

1. Ensure you have Node.js installed on your system

2. Clone the repository:
   ```
   git clone [repository-url]
   cd [repository-name]
   ```

3. Install dependencies:
   You can use either npm or pnpm to install dependencies and build the project.

   Using npm:
   ```
   npm install
   ```

   Using pnpm:
   ```
   pnpm install
   ```

4. Build the extension:
   Using npm:
   ```
   npm run build
   ```

   Using pnpm:
   ```
   pnpm run build
   ```

   This command will:
   - Compile TypeScript files to JavaScript
   - Copy necessary files to the `dist` folder

5. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `dist` folder from your project directory

## Development

- Use `npm run build` or `pnpm run build` to compile changes
- Use `npm run lint` or `pnpm run lint` to check for linting errors
- Use `npm run format` or `pnpm run format` to format the code using Prettier

## Packaging for Distribution

To create a distributable version of the extension:

1. Run the build process:
   Using npm:
   ```
   npm run build
   ```

   Using pnpm:
   ```
   pnpm run build
   ```

2. Package the extension:
   Using npm:
   ```
   npm run package
   ```

   Using pnpm:
   ```
   pnpm run package
   ```

   This will create a ZIP file in the `web-ext-artifacts` directory, which can be submitted to the Chrome Web Store.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]