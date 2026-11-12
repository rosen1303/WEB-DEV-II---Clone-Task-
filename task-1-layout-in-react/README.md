# Task 1 — Erased Tapes

A React recreation of the supplied blog wireframe. Includes the original
assets, source text, wireframe and written specification.

## How to run it on Windows or macOS

1. Install the LTS version of Node.js. You can do this by using their wesbsite https://nodejs.org if needed.
2. Extract the ZIP. Open the `task-1-layout-in-react` folder in VS Code.
3. Select **Terminal → New Terminal**. Make sure the terminal is in the folder where all files are located
   containing `package.json`, otherwise it will not provide the local link needed to run the website
4. Run `npm install` (first run only; internet connection is required for that step).
5. Run `npm run dev`.
6. Open the local URL printed in the terminal. Copy and paste the link in google chrome or any other browser, preferably without extensions as the console might display errors.

Keep the terminal running while viewing the page. Press Ctrl+C to stop it.
NOTE! Opening the source `index.html` by double-clicking will not run the React project, it has to be run though VS Code.

To produce a production build, run `npm run build`. Run `npm run preview` to
serve that build locally.On Windows, if PowerShell blocks npm, use npm.cmd instead—for example, npm.cmd install and npm.cmd run dev. Google Fonts requires internet; fallback fonts work
when the font service is unavailable.

## Organisation

- `src/main.jsx`: function components for navigation, social links, header,
  article, gallery, author, comments and footer.
- `src/styles.css`: desktop styling and additional smaller-screen rules like for phone sizes.
- `src/content.json`: text from the supplied `assets/text-content.md`.
- `assets/`: original supplied images and text.
- `wireframes/`: original desktop reference.

The desktop article uses CSS columns; the album collage uses Grid; the header,
social links and author section use Flexbox. Comments are the supplied static
content. Social icons link to the platforms' homepages, not invented profiles.

AI acknowledgement
I have used AI to check the code for any mistakes that I might have. One issue I had and had toruble fixing was the X icon next to the autho was invisible. Colours of the icon had to be changed appropriately to be visible on the website. 
