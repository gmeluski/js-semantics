const testPairings = (pairings, stringLength) => {
  Object.keys(pairs).forEach((key) => {

    if (pairs[key].length === 1) {
      unbalancedCount++;
    }
  })
}

const palindromePermutation = (input) => {
  const noSpaceInput = input.replace(/\s/g, '').toLowerCase();
  const asArray = noSpaceInput.split("")

  asArray.sort((firstCharacter, secondCharacter) => (
    firstCharacter.localeCompare(secondCharacter)
  ))

  const isEven = (asArray.length % 2) === 0;
  let lastCharacter = '';
  let unbalancedCount = 0;
  let isBalanced = true;

  asArray.forEach((character, index) => {
    if (!lastCharacter) {
      lastCharacter = character;
    } else if (character === lastCharacter) {
      // reset last character
      lastCharacter = '';
    } else {
      // increment unbalanced count
      unbalancedCount++;
      lastCharacter = '';
      // evaluate unbalanced count
      if (isEven || unbalancedCount > 1) {
        isBalanced = false // should never be unbalanced
      }
    }

  })

  return isBalanced;
}

export default palindromePermutation;
