let firstNumber = parseInt(prompt("Enter the first integer:"))
let secendNumber = parseInt(prompt("Enter the second integer:"))

if (firstNumber>secendNumber)
    document.write(`The larger integer is:  ${firstNumber}`)
else if(secendNumber>firstNumber)
    document.write(`The larger integer is:  ${secendNumber}`)
else
document.write(`both number are equal ${firstNumber}`)