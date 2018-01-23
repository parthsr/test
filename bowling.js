// function score(inputArr) {
//   // validation(inputArr);
//   calculate(inputArr);
// }

// module.exports = score;

function calculate(inputArr) {
  const scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let strike = [];
  for (let i = 0; i < inputArr.length - 3; i += 1) {
    if (inputArr[i] === 10) {
      strike.push(i);
    }
    for (let i = 0; i < strike.length; i += 1) {
      scores[strike[i]] = inputArr[strike[i] + 1] + inputArr[strike[i] + 2] + 10;
    }
  }
  console.log(strike);
  console.log(scores);
  for(int i=0;i<inputArr.length-4;i+=1){
    if()
  }
  return 0;
}

calculate([10, 4, 10, 4, 10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10]);
