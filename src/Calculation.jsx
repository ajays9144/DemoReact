import React, { Component } from 'react'

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    let division  = a / b;
    division = division.toFixed(2);
    return division;
}

class Calculation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Sum of two no is {addNumbers(10, 20)}</li>
                    <li>Subtract of two no is {subtractNumbers(20, 10)}</li>
                    <li>Multiple of two no is {multiplyNumbers(10, 5)}</li>
                    <li>Divide of two no is {divideNumbers(13, 3)}</li>
                </ul>
            </div>
        )
    }
}

export default Calculation