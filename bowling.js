
function inputValidate(inputArr) {
  let count = 0;
  let jump = 1;
  console.log(inputArr.length);
  if (inputArr.length < 11) {
    console.log('array size less');
    return false;
  }
  for (let i = 0; i < inputArr.length - 1; i += jump) {
    if (inputArr[i] < 0 && inputArr[i] > 10) {
      console.log('invalid input. frame negative');
      return false;
    } else if (inputArr[i] === 10) {
      count += 1;
      jump = 1;
    } else if (inputArr[i] + inputArr[i + 1] > 10) {
      console.log('invalid input. Frame invalid');
      return false;
    } else {
      jump = 2;
      count += 1;
    }
    if (count === 9) {
      if (inputArr.length - i - 1 > 3) {
        console.log(inputArr.length, i, 'invalid input. size invalid');
        return false;
      }
      break;
    }
  }
  if (count < 10) {
    return false;
  }
  return true;
}

console.log(inputValidate([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
// console.log(inputValidate([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 3]));
// console.log(inputValidate([10, 10, 10, 10, 10, 10, 10, 10, 10, 4, 5]));
// console.log(inputValidate([10, 10, 10, 10, 10, 10, 10, 10, 10]));
// console.log(inputValidate([10, 9, 11, 10, 10, 10, 3, 2, 10, 10, 10, 4, 5]));


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
// console.log(deter([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 5, 4]) === 3);
// console.log(deter([10, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]) === 2);
// console.log(deter([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]) === 2);

function calculate(inputArr) {
  let check = inputValidate(inputArr);
  if (check === false) {
    return false;
  }
  const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let lastframelength = deter(inputArr);
  console.log('lastframelength', lastframelength);
  console.log(scores);
  let scoreIterator = 0;
  let jumpForInputIterator = 1;
  for (let i = 0; i < inputArr.length - lastframelength; i += jumpForInputIterator) {
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
    scores[scoreIterator] += inputArr[i];
  }
  console.log(scores);
  let sum = scores.reduce((a, b) => a + b, 0);
  console.log(sum);
  return sum;
}
// calculate([10, 10, 10, 3, 7, 3, 6, 3, 6, 3, 6, 10, 10, 10, 10, 2]);

//   for(let i = inputArr.length - lastframelength -1; i<inputArr.length)
//   return 0;
// }

module.exports = calculate;
