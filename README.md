#  Pure JavaScript Scoreboard Counter

This project is a clean, single-page application that functions as a basketball scoreboard, built entirely with vanilla HTML, CSS, and JavaScript. It allows users to track and update scores for two teams in real-time.

---

##  Live Demo

**[ Visit the Live Site Here](https://scoreboard-counter-basketball.netlify.app/)**

---

##  Key Technologies and Implementation Details

### Core JavaScript Logic

* **State Initialization:** The application initializes the scores for both teams (`home` and `guest`) by reading the initial values directly from the DOM using `document.getElementById("teamId").textContent` and `parseInt()`. This data is stored in a JavaScript object literal (`scores`) for easy management.
* **Central Update Function:** The `updateScore` function handles all score modifications.
    * It takes the `team` (string key) and `score` (integer value) as arguments.
    * It updates the application's internal state (`scores[team] += score`).
    * It then updates the corresponding DOM element's text content (`document.getElementById(team).textContent`) to reflect the new total.
* **Conditional Logic:** The `highlight` function implements simple conditional logic (`if/else`) to visually indicate the current leading team. The leading team's title is colored blue, while the other team remains white.

### HTML & Event Handling

* **In-line Event Listeners:** Score buttons utilize **in-line `onclick` attributes** in the HTML to directly call the `updateScore` function, passing the target team (`'home'` or `'guest'`) and the score value (`1`, `2`, or `3`).
* **Element Identification:** The `id` attribute is extensively used (`home`, `guest`, `homeTitle`, `guestTitle`) to provide JavaScript with clear anchors for reading, updating scores, and applying styling.

### Styling (CSS)

* **Custom Font:** A unique, retro scoreboard look is achieved by importing and applying the **'Cursed Timer ULiL'** font to the score displays.
* **Layout:** **Flexbox** is used for the main container to ensure the Home and Away sections are centered and horizontally spaced (`justify-content: space-around`).
* **Score Box Styling:** The score display boxes are clearly distinguished using a large, bright color (`#f94f6d`) on a dark background (`#080001`).
