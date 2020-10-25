// eslint-disable-next-line camelcase
import GameSavingLoader_mock from '../gameSavingLoader_mock';
import GameSaving from '../gameSaving';
import json from '../parser mock';

jest.mock('../parser mock');

beforeEach(() => {
  jest.resetAllMocks();
});

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const data1 = '{"id":1,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
const data2 = '{"id":1,"created":1546300800,';
const data3 = '';

describe('success load()', () => {
  test('load data', async () => {
    json.mockReturnValue(data);
    const expected = await GameSavingLoader_mock.load(data);
    const result = new GameSaving(JSON.parse(data));
    expect(expected).toEqual(result);
  });
});

describe('success load()', () => {
  test('load data1', async () => {
    json.mockReturnValue(data1);
    const expected = await GameSavingLoader_mock.load(data1);
    const result = new GameSaving(JSON.parse(data1));
    expect(expected).toEqual(result);
  });
});

describe('fail load()', () => {
  test('load data2', async () => {
    json.mockReturnValue(data2);
    const expected = await GameSavingLoader_mock.load(data2);
    const result = new Error('Unexpected end of JSON input');
    expect(expected).toEqual(result);
  });
});

describe('fail load()', () => {
  test('load data3', async () => {
    json.mockReturnValue(data3);
    const expected = await GameSavingLoader_mock.load(data3);
    const result = new Error('data empty');
    expect(expected).toEqual(result);
  });
});
