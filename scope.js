var buzzLength = 100;
for (var i = 0; i <= buzzLength; i++) {
  var moduloThree = (i % 3 === 0);
  var moduloFive = (i % 5 === 0);

  if (moduloThree && moduloFive) {
    console.log('fizzbuzz ', i);
  } else if (moduloThree) {
    console.log('fizz ', i);
  } else if (moduloFive) {
    console.log('buzz ', i);
  }

}
