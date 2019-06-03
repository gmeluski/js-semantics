const addTally = (compressedString, character, count) => {
  return `${compressedString}${character}${count}`
}

const stringCompression = (string) => {
  // how to check
  // ok my notebook is downstairs
  // ugh.

  let compressedString = '';
  let lastCharacter = '';
  let characterCount = 1;

  let iterator = string[Symbol.iterator]();
  let character = iterator.next();

  while(!character.done) {
    const currentCharacter = character.value;
    if (lastCharacter === currentCharacter) {
      characterCount++;
    } else if (lastCharacter !== '') {
      compressedString = addTally(compressedString.slice(), lastCharacter, characterCount)
      characterCount = 1;
    }

    // before we move on
    lastCharacter = character.value;
    character = iterator.next();
  }

  compressedString = addTally(compressedString.slice(), lastCharacter, characterCount);
  return compressedString;
}

export default stringCompression;

