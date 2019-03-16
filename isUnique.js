const checkAhead = (characterToSearch, subString) => {
  let match = false;
  let index = 0;

  while (index < subString.length && !match) {
    match = Boolean(subString[index] === characterToSearch);
    index++;
  }

  return match;
}

const isUnique = (stringToTest) => {

  let foundDuplicate = false;
  let index = 0;

  while (index < stringToTest.length && !foundDuplicate) {

    const currentCharacter = stringToTest[index]
    const subString = stringToTest.slice(index)
    foundDuplicate = checkAhead(currentCharacter, subString);
    index++;
  }

  return foundDuplicate;
}


export default isUnique
