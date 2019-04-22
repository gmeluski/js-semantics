
// key question: it IS permutaiton, not contains a permutation, right?
//

const getNewSearch = (searchArray, foundIndex) => {
  const ELEMENTS_TO_REMOVE = 1;
  let toChange = searchArray.slice();
  toChange.splice(foundIndex, ELEMENTS_TO_REMOVE)
  return toChange;
}

const findMatchIndex = (characterToMatch, toSearch) => {
  for (let i = 0; i < toSearch.length; i++) {
    const currentTestCharacter = toSearch[i];
    if (characterToMatch === currentTestCharacter) {
      return i;
    }
  }

  return false;
}

const isPermutation = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  let searcher = second.split("")

  for (let i = 0; i < first.length; i++) {
    const characterToMatch = first.charAt(i);
    const matchIndex = findMatchIndex(characterToMatch, searcher.slice());
    if (!Number.isInteger(matchIndex)) {
      return false;
    } else {
      searcher = getNewSearch(searcher, matchIndex)
    }
  }

  return true;
}


export default isPermutation;
