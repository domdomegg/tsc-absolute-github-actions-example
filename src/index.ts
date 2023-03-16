import { readFileSync } from 'node:fs';

// This is an example TypeScript file, with some intentional errors so you can see them in the GitHub UI
const main = () => {
  const myFile = readFileSync('./some-file.txt', { encoding: 'utf-8' });

  if (myFile.length() === 0) {
    throw new Error('File is empty');
  }

  if (myFile.startsWith('an error string', '0')) {
    throw new Error('File contained error');
  }
};

main();
