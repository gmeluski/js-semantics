const findPosition = (characterToFind, stringToSearch) => {
  let i = 0

  while (i < stringToSearch.length && stringToSearch[i] !== characterToFind) {
    i++;
  }

  return i;
}

const isSubstring = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  const indexToCheck = 0;
  const characterToCheck = stringOne[indexToCheck];

  const toStart = findPosition(characterToCheck, stringTwo)

  // find the first instance of this letter
  return false;
}


export default isSubstring;
