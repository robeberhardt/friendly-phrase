import { adjectives } from './words/adjectives';
import { animals } from './words/animals';
import { colors } from './words/colors';

export class FriendlyPhrase {
  /**
   * @Method: Returns a random adjective from the words list.
   * @Return {string}
   */
  static adjective(): string {
    return adjectives[this.random(adjectives.length)];
  }

  /**
   * @Method: Returns a random color from the words list.
   * @Return {string}
   */
  static color(): string {
    return colors[this.random(colors.length)];
  }

  /**
   * @Method: Returns a random animal from the words list.
   * @Return {string}
   */
  static animal(): string {
    return animals[this.random(animals.length)];
  }

  /**
   * @Method: Returns a three-word passphrase with a separator string
   * between each word - order is adjective-color-animal
   * @Return {string}
   */
  static phrase(sep: string = ' '): string {
    return `${this.adjective()}${sep}${this.color()}${sep}${this.animal()}`;
  }

  private static random(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
