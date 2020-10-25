import read from '../reader';
import json from '../parser';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';


test('parser', async () => {
  const readData = await Promise.resolve(read(data));
  expect(json(readData)).resolves.toBe(data);
});
