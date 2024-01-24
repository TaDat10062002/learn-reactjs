import React from "react";
function ColorBox(props) {
    const { color } = props; // destruturing object

    return (
        <div className="box" style={{ backgroundColor: color }}></div>
    )
}

export default ColorBox;