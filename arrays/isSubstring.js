const findPosition = (characterToFind, stringToSearch) => {
  let i = 0

  while (i < stringToSearch.length && stringToSearch[i] !== characterToFind) {
    i++;
  }

  return i;
}

const getSecondStringPosition = (stringLength, index, distance) => (
  (stringLength - index > distance) ? index + distance : index - (stringLength - distance)
)

const isSubstring = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }


  const distance = findPosition(stringOne[0], stringTwo)
  if (distance === stringOne.length) {
    return false;
  }

  let matches = true;
  let i = 0;
  while (matches && i < stringOne.length) {
    const secondStringIndex = getSecondStringPosition(stringTwo.length, i, distance)
    if (stringOne[i] !== stringTwo[secondStringIndex]) {
      matches = false;
    }
    i++;
  }

  return matches;
}


export default isSubstring;
