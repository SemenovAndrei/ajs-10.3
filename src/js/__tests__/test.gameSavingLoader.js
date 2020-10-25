import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

describe('success load()', () => {
  test('load data', async () => {
    const expected = await GameSavingLoader.load(data);
    const result = new GameSaving(JSON.parse(data));
    expect(expected).toEqual(result);
  });
});

describe('fail load()', () => {
  test('load data', async () => {
    const expected = await GameSavingLoader.load();
    const result = new Error('data empty');
    expect(expected).toEqual(result);
  });
});
