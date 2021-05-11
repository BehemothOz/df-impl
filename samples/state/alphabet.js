import { shuffle, randomInteger } from "./helpers";

const letters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

class AlphabetState {
  constructor() {
    this.data = letters.split("");
  }

  get alphabet() {
    return this.data;
  }

  shuffleFull() {
    return shuffle([...this.alphabet]);
  }

  shuffleRandomItems() {
    const random = randomInteger(0, this.alphabet.length);
    const shuffledPart = shuffle(this.alphabet.slice(0, random));

    const newAlphabet = [...this.alphabet];
    newAlphabet.splice(0, shuffledPart.length, ...shuffledPart);

    return newAlphabet;
  }
}

export default AlphabetState;
