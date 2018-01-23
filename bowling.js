// function score(inputArr) {
//   // validation(inputArr);
//   calculate(inputArr);
// }

// module.exports = score;


// determine the length of the last frame
function inputValidate(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] < 0) {
      return false;
    }
    if()
  }
}

function deter(inputArr) {
  let count = 0;
  let s = 0;
  for (let i = 0; i < inputArr.length; i += 1) {
    if (inputArr[i] === 10) {
      count += 1;
    } else {
      count += 0.5;
    }
    if (count === 9) {
      s = i;
    }
  }
  return inputArr.length - 1 - s;
}

// onsole.log();
function calculate(inputArr) {
  const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let lastframelength = deter(inputArr);
  console.log('lastframelength', lastframelength);
  // let strike = [];
  // for (let i = 0; i < inputArr.length - lastframelength; i += 1) {
  //   if (inputArr[i] === 10) {
  //     strike.push(i);
  //   }
  //   for (let i = 0; i < strike.length; i += 1) {
  //     scores[strike[i]] = inputArr[strike[i] + 1] + inputArr[strike[i] + 2] + 10;
  //   }
  // }
  // console.log(strike);
  console.log(scores);
  let scoreIterator = 0;
  let jumpForInputIterator = 1;
  for (let i = 0; i < inputArr.length - lastframelength; i += jumpForInputIterator) {
    console.log(i);
    let frame = inputArr[i] + inputArr[i + 1];
    if (inputArr[i] === 10) {
      jumpForInputIterator = 1;
      scores[scoreIterator] = inputArr[i] + inputArr[i + 1] + inputArr[i + 2];
      scoreIterator += 1;
    } else if (frame === 10) {
      scores[scoreIterator] = frame + inputArr[i + 2];
      jumpForInputIterator = 2;
      scoreIterator += 1;
    } else {
      scores[scoreIterator] = frame;
      jumpForInputIterator = 2;
      scoreIterator += 1;
    }
  }


  for (let i = inputArr.length - lastframelength; i < inputArr.length; i += 1) {
    scores[scoreIterator] = scores[scoreIterator] + inputArr[i];
  }
  console.log(scores);
  return 0;
}
calculate([10, 10, 10, 3, 7, 3, 6, 3, 6, 3, 6, 10, 10, 10, 10, 2]);

//   for(let i = inputArr.length - lastframelength -1; i<inputArr.length)
//   return 0;
// }
