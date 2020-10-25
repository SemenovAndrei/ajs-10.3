/* eslint-disable camelcase */
import read from './reader';
import json from './parser mock';
import GameSaving from './gameSaving';

/**
 * @class GameSavingLoader
 */
class GameSavingLoader_mock {
  /**
   * return new GameSaving
   */
  static async load(data) {
    try {
      const readData = await read(data);
      const jsonData = json(readData);
      return new GameSaving(JSON.parse(jsonData));
    } catch (err) {
      return err;
    }
  }
}

export default GameSavingLoader_mock;
