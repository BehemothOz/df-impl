import Own from "../src";
import List from "./List";
import AlphabetState from "./state/alphabet";

if (module.hot) {
  module.hot.accept();
}

const state = new AlphabetState();

const $root = document.getElementById("root");
const $button = document.querySelector(".button");

let timeoutID = null;

/*
  Handling event to start and stop a timer
  TODO: Remove in next step (third task)
*/
$button.addEventListener("click", () => {
  if (timeoutID) {
    $button.textContent = "Start Interval";

    clearInterval(timeoutID);
    timeoutID = null;
    return;
  }

  $button.textContent = "Stop Interval";

  timeoutID = setInterval(() => {
    // eslint-disable-next-line react/no-deprecated
    Own.render(<List alphabet={state.shuffleRandomItems()} />, $root);
  }, 5000);
});

// eslint-disable-next-line react/no-deprecated
Own.render(<List alphabet={state.alphabet} />, $root);
