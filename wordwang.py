# written by DARCYLF in 2020

import math

#inputString = "extraterrestrial yes perfect!ok aanrijdingsformulier no"

inputString = "cool a autoschadehersteller International beanie!I"

headPos = 0
instructionPos = 0

tapeLength = 10
tape = [0 for i in range(tapeLength)]

def splitWordsOut(_i):
    output = []
    # the first step is to split the input string by space, effectively splitting it by word.
    for i in _i.split(" "):
        # then split by !
        output.append(i.split("!"))
    
    return output


def convertToInstructions(_i):
    outInstructions = []
    splitWordsList = splitWordsOut(_i)
    for index, i in enumerate(splitWordsList):
        instructiontype = round(math.sqrt(len(i[0]) + index)) % 4
        instructionList = [instructiontype]
        if len(i)>1:
            instructionList.append(len(i[1]))
        outInstructions.append(instructionList)
    return outInstructions

    
convertedInstructions = convertToInstructions(inputString)
print(convertedInstructions)
# run the actual program, probs using while true i'd guess.

while instructionPos<=len(convertedInstructions)-1:
    print("")
    currentInstruction = convertedInstructions[instructionPos]
    print(f"tape after step {instructionPos}:")
    
    if currentInstruction[0] == 0:
        # flip the value of the current tape position
        try:
            tape[headPos] = (tape[headPos] + 1) % 2
        except:
            break
        instructionPos += 1
        print("instruction: 0")
    if currentInstruction[0] == 1:
        # move the tape-head right
        headPos += 1
        instructionPos += 1
        print("instruction: 1")
    if currentInstruction[0] == 2:
        # move the tape-head left
        headPos -= 1
        instructionPos += 1
        print("instruction: 2")
    if currentInstruction[0] == 3:
        # check if current tape pos is 1, then move to either instruction n or the next one.
        if tape[headPos]:
            instructionPos = currentInstruction[1]-1
        else:
            instructionPos += 1
        print(f"instruction: 3 {currentInstruction[1]-1}")
    print(f"tape-head is at: {headPos}")
    print(f"{tape}")
    

# x fix the program not actually exiting, just throwing an error
    