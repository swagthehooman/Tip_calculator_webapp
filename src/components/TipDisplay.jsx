import React from "react";

function TipDisplay(props){
    return (
        <div className="tip-container"> 
        <div>
            <div className="tip-amount">
                <div className="tip-title">
                    <p>Tip Amount</p>
                    <p style={{color:"hsl(184, 14%, 56%)"}}>/ person</p>
                </div>
                <p className="amount">${props.tip}</p>
            </div>
            <div className="tip-amount">
                <div className="tip-title">
                    <p>Total</p>
                    <p style={{color:"hsl(184, 14%, 56%)"}}>/ person</p>
                </div>
                <p className="amount">${props.total}</p>
            </div>
        </div>
        <button className="reset-button" onClick={props.resetAction}>Reset</button>
        </div>
    )
}

export default TipDisplay