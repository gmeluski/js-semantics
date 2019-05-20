const getSorted = (string) => {
  const asArray = string.split("")
  asArray.sort();
  return asArray;
}

const handleLongerOriginal = (sortedOriginal, sortedMatch) => {
  // make sure every character in the shorter string is found in the original
  let matchIndex = 0;
  let originalIndex = 0;

  let mismatchFlag = false;
  while (matchIndex < sortedMatch.length && !mismatchFlag) {
    const originalCharacter = sortedOriginal[originalIndex];
    const matchCharacter = sortedMatch[matchIndex];
    if (matchCharacter === originalCharacter) {
      matchIndex++;
      originalIndex++;
    }

    if (matchCharacter !== originalCharacter) {
      // fast forward if we are on the insertion space
      if (sortedOriginal[originalIndex + 1] === matchCharacter) {
        originalIndex++;
      } else {
        mismatchFlag = true;
      }
    }

  }

  return !mismatchFlag;
}

const oneAway = (original, match) => {
  const originalCount = original.length;
  const matchCount = match.length;

  const countDifference = originalCount - matchCount;

  if (Math.abs(countDifference) > 1) {
    return false;
  }

  const sortedOriginal = getSorted(original);
  const sortedMatch = getSorted(match);

  if (countDifference === 1) {
    // make sure every character in the shorter string is found in the original
    return handleLongerOriginal(sortedOriginal, sortedMatch);
  }

  if (countDifference === -1) {
    // ensure that there is a match, off by one
  }

  if (countDifference === 0) {
    // either exact match or a one swap is ok
  }
}

export default oneAway;
