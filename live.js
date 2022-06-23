// program for a simple calculator
let message=alert("welcome to George calculator")

// // take the operator input
const FirstNum=parseInt(prompt("enter a number"))
const secondNum=parseInt(prompt("enter second number"))
let sign=prompt ("enter a operator")

const sum_no=FirstNum+secondNum
const substract_no=FirstNum-secondNum
const divide_no=FirstNum/secondNum
const Multiply_N0=FirstNum*secondNum
if(sign=='+')
{
alert( `${FirstNum} + ${secondNum} = ${sum_no}`)

}
else if(sign==='-'){
    alert( `${FirstNum} - ${secondNum} = ${substract_no}`)
}
else if(sign==='*'){
    alert( `${FirstNum} * ${secondNum} = ${Multiply_N0}}`)
}
else if (sign==='/'){
    alert( `${FirstNum} / ${secondNum} = ${divide_no}`)
}
else{
    alert("invalid operator")
}

