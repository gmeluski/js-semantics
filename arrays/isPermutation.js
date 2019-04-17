
// key question: it IS permutaiton, not contains a permutation, right?
//

const getNewSearch = (searchArray, foundIndex) => {
  const ELEMENTS_TO_REMOVE = 1;
  let toChange = searchArray.slice();
  toChange.splice(foundIndex, ELEMENTS_TO_REMOVE)
  return toChange;
}

const findInString = (characterToMatch, stringToSearch) => {
  for (let j = 0; j < stringToSearch.length; j++) {
    const currentTestCharacter = stringToSearch.charAt(j);
    if (characterToMatch === currentTestCharacter) {
      return true;
    }
  }

  return false;
}

const isPermutation = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    const characterToMatch = first.charAt(i);
    const match = findInString(characterToMatch, second);
    if (!match) {
      return false;
    }
  }

  return true;
}


export default isPermutation;
