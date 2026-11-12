# Task 2 — watch.it

Responsive React recreation of the supplied movie-streaming wireframes.
reference images are in wireframes/. The six supplied descriptions are in src/movies.json.

## How to Run it on Windows/MacOS?

Install Node.js LTS from their website if needed. Extract the ZIP.
Open task-2-responsive-layouts in VS Code. Right-click that folder in the Explorer
and choose Open in Integrated Terminal. The folder must contain "package.json".

Run these separately:

1. Run `npm.cmd install`.
2. Run `npm.cmd run dev`. 


Open the local URL printed in the terminal. Ctrl+C stops the server.
On macOS/Linux use npm instead of npm.cmd.

Do not double-click index.html or use Live Server for this React source project becasue it will not run or open.


## Layout and structure

- Header and MovieCard are reusable function components in src/main.jsx.
- src/styles.css uses Grid for page layout and Flexbox for card contents.
- Below 720px: one column; genre navigation hidden; 16px large spacing.
- From 720px: two columns; navigation visible; 32px large spacing.
- From 1024px: featured card, two vertical cards, three horizontal cards;
  48px large spacing. Content is capped at 900px.
- Teko headings/buttons and Lato body text are loaded from Google Fonts.
- All colours come from the supplied palette. Shadows and fills are design
  choices because the reference wireframes are greyscale.
- Buttons use 2em relative to their context; movie-card text uses 1.5em.
- Each movie card displays a visible title heading. Titles also appear in search results and watch dialogs.
- Genre links jump to representative films. Search locates supplied film titles.
  Watch buttons explain that this demonstration does not provide video playback.

## AI acknowledgement
I have used ai to check the code and update/fix mistakes as I had multiple issues that I couldnt fix. One of the issues I used ai to help with was issues with the first movie and its location as I wanted the "watch now" to be centered but it didnt work properly on tablet mode.

