import GameSaving from '../gameSaving';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';


test('create new GameSaving', () => {
  const expected = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  expect(expected).toEqual(result);
});
