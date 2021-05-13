import React, { Component } from 'react'


let currentDate = new Date(2021, 5, 2, 1);
let greeting = "";
const cssStyle = {};

if (currentDate.getHours() >= 1 && currentDate.getHours() < 12) {
    greeting = "Good Morning";
    cssStyle.color = "Green";
} else if (currentDate.getHours() >= 12 && currentDate.getHours() < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
} else {
    greeting = "Good Night";
    cssStyle.color = "Black";
}

class Challenge extends Component {

    render() {
        return (
            <div>
                <h1 >Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>

        )
    }
}

export default Challenge;