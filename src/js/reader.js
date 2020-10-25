export default function read(data) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => ((input) => {
      if (data && data.length > 0) {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        resolve(buffer);
      } else {
        reject(new Error('data empty'));
      }
    })(data), 1000);
  });
}
