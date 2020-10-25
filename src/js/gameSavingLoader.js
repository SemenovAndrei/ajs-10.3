import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

/**
 * @class GameSavingLoader
 */
class GameSavingLoader {
  /**
   * return new Promise(string)
   */
  static async load(data) {
    try {
      const readData = await read(data);
      const jsonData = await json(readData);
      return new GameSaving(JSON.parse(jsonData));
    } catch (err) {
      return err;
    }
  }
}

export default GameSavingLoader;
