// Written by DARCY LUGT-FALK

// an example:
/* 
    wordwang({
        wwTapeLength:10,
        wwCode:"cool a autoschadehersteller International beanie!Ik"
    })
*/
// returns [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
function wordwang(state) {
  var headPos = 0;
  var instructionPos = 0;
  var tapeLength = parseInt(state.wwTapeLength);
  var instructions = state.wwCode;
  var tape = new Array(tapeLength).fill(0);
  var inst = wwConvToInst(instructions);
  console.log(inst);
  console.log(tape);
  prog: {
    while (instructionPos <= inst.length - 1) {
      ///console.log("")
      var currentInstruction = inst[instructionPos];
      //console.log(`tape after instructionPos ${instructionPos}:`)
      switch (currentInstruction[0]) {
        case 0:
          try {
            tape[headPos] = (tape[headPos] + 1) % 2;
          } catch (error) {
            break prog;
          }

          instructionPos += 1;
          //console.log("instruction: 0")

          break;
        case 1:
          headPos += 1;
          instructionPos += 1;
          //console.log("instruction: 1")
          break;
        case 2:
          headPos -= 1;
          instructionPos += 1;
          //console.log("instruction: 2")
          break;
        case 3:
          if (tape[headPos] == 1) {
            instructionPos = currentInstruction[1] - 1;
          } else {
            instructionPos += 1;
          }
          break;
        default:
          instructionPos += 1;
          break;
      }
      //console.log(`tape is at: ${headPos}`)
      //console.log(`${tape}`)
    }
  }
  //tape.pop()
  return tape.slice(0, tapeLength);
}
// splits the string by spaces, then splits the strings into another array by "!"
function wwSplitWordsOut(_i) {
  var output = [];
  _i.split(" ").forEach((el) => {
    output.push(el.split("!"));
  });
  return output;
}

function wwConvToInst(_i) {
  var outInstructions = [];
  var splitWordsList = wwSplitWordsOut(_i);
  // goes through and calculates what function to use
  splitWordsList.forEach(function (el, index) {
    var instructionType = Math.round(Math.sqrt(el[0].length + index)) % 4;
    //console.log(instructionType)
    var instructionList = [instructionType];
    if (el.length > 1) {
      instructionList.push(el[1].length);
    }
    outInstructions.push(instructionList);
  });
  console.log(outInstructions);
  return outInstructions;
}
