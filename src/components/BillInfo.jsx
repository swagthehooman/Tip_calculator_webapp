import React from "react";

function BillInfo(props){
    return (
        <div className="bill-container">
            <div className="input-container">
                <label>Bill</label>
                <br/>
                <img src="./images/icon-dollar.svg" alt="dollar sign" className="image-icon"/>
                <input  type="text" placeholder="0" className="input-box" name="bill" onChange={props.change} value={props.bill}/>
            </div>
            <div className="tip-percent-container">
                <label>Select Tip %</label>
                <br/>
                <div className="tip-button-container">
                    <button className="tip-button" name="5" onClick={props.clicks}>5%</button>
                    <button className="tip-button" name="10" onClick={props.clicks}>10%</button>
                    <button className="tip-button" name="15" onClick={props.clicks}>15%</button>
                    <button className="tip-button" name="25" onClick={props.clicks}>25%</button>
                    <button className="tip-button" name="50" onClick={props.clicks}>50%</button>
                    <button className="custom-tip-button" name="18" onClick={props.clicks}>Custom</button>
                </div>
            </div>
            <div className="input-container">
                <label>Number of people</label>
                <br/>
                 <img src="./images/icon-person.svg" alt="dollar sign" className="image-icon"/>
                <input type="text" placeholder="0" className="input-box" name="people" onChange={props.change} value={props.people}/>
            </div>
            
        </div>
    )
}

export default BillInfo