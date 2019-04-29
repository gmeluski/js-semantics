const urlify = (string, trueLength) => {
  const asArray = string.split('').slice(0, trueLength);
  const spaceRegex = /\s/;
  const copy = [];
  asArray.forEach((character, index) => {
    const copyCharacter = (spaceRegex.test(character)) ? '%20' : character;
    copy.push(copyCharacter);
  })

  return copy.join("");
}


export default urlify;
