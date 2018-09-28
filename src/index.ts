import { adjectives } from "./words/adjectives";
import { colors } from "./words/colors";
import { animals } from "./words/animals";

function randomPick(max: number): number {
  return Math.floor(Math.random() * max);
}

const friendly = {
  /**
   * @Method: Returns a random adjective from the words list.
   * @Return {string}
   */
  adjective: function(): string {
    return adjectives[randomPick(adjectives.length)];
  },

  /**
   * @Method: Returns a random color from the words list.
   * @Return {string}
   */
  color: function(): string {
    return colors[randomPick(colors.length)];
  },

  /**
   * @Method: Returns a random animal from the words list.
   * @Return {string}
   */
  animal: function(): string {
    return animals[randomPick(animals.length)];
  },

  /**
   * @Method: Returns a three-word passphrase with a separator string
   * between each word - order is adjective-color-animal
   * @Return {string}
   */
  phrase: function(sep: string = " "): string {
    return `${this.adjective()}${sep}${this.color()}${sep}${this.animal()}`;
  }
};

export default friendly;
