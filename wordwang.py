# written by DARCYLF in 2020

import math

inputString = "extraterrestrial yes perfect!ok aanrijdingsformulier no"

headPos = 0
instructionPos = 0

tape = [0 for i in range(10)]

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

# run the actual program, probs using while true i'd guess.

while instructionPos<len(convertedInstructions)+1:
    currentInstruction = convertedInstructions[instructionPos]
    
    if currentInstruction[0] == 0:
        tape[headPos] = (tape[headPos] + 1) % 2
        print("0")
    if currentInstruction[0] == 1:
        headPos += 1
        print("1")
    if currentInstruction[0] == 2:
        headPos -= 1
        print("2")
    if currentInstruction[0] == 3:
        print("3")

    print(f"tape after step {instructionPos}: {tape}")
    instructionPos += 1
    