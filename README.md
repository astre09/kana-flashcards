# Kana Flashcards

A lightweight browser-based kana trainer built with plain HTML, CSS, and JavaScript.

## Features

- Separate **Hiragana** page
- Separate **Katakana** page
- **Combined** page
- Grid-style kana selection similar to a kana chart
- Toggle a whole row at once
- Toggle individual kana
- Floating/sticky **Start Test** button
- Shuffled flashcard testing
- Type romaji and press **Enter** to submit
- Press **Space** to reveal the answer and count the card as incorrect
- Progress tracking during the test
- Results screen with incorrect cards
- Retry only the incorrect cards
- Local history/stats stored in the browser
- Practice weak kana based on saved stats
- Includes basic kana, dakuten, handakuten, and yōon

## How to use

Use https://astre09.github.io/kana-flashcards/

OR to deploy locally:

1. Unzip the project.
2. Open `index.html` in your browser.
3. Pick a page: Hiragana, Katakana, or Combined.
4. Select rows or individual kana.
5. Click the floating **Start Test** button.

## Files

- `index.html` – main layout
- `styles.css` – styling and responsive layout
- `app.js` – kana data and app logic


## Flash Mode

Flash Mode is practice-only: it auto-advances on correct answers, loops shuffled rounds continuously, and does not alter persistent Stats. Space reveals the romaji without penalty.

- In Flash Mode, **Space toggles the romaji hint on and off**. Showing or hiding the hint has no penalty.


## Space-bar hint toggle

Space now toggles the romaji hint in both modes:

- **Space once:** show romaji.
- **Space again:** hide romaji.
- **Flash Mode:** hint use remains completely penalty-free and does not affect Stats.
- **Normal Mode:** using the hint at least once still marks that card as revealed/incorrect for scoring, even if you hide the hint again before answering.


## Footer

The app includes a small footer with:
- a **Source code** link to `https://github.com/astre09/kana-flashcards`
- a **Contact me** modal with Discord and email contact information
- copy-to-clipboard buttons for both contact methods
