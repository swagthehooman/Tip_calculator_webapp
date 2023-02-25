import React, {useState, useEffect} from "react"
import TipDisplay from "./components/TipDisplay"
import BillInfo from "./components/BillInfo"

function App() {
    const [bill, setBill]=useState('')
    const [people, setPeople]=useState('')
    const [tip, setTip]=useState('0.00')
    const [total, setTotal]=useState('0.00')

    function handleChange(event){
        const {name, value}=event.target

        if(name==='bill'){
            setBill(value)
        }
        else{
            setPeople(value)
        }
    }

    function handleTipClick(event){
        const buttonName=event.target.name
        const tipAmount=parseFloat(bill)*(parseFloat(buttonName))/100
        const totalAmount=parseFloat(bill)+parseFloat(tipAmount)
        if(people===''){
            alert('Enter number of people')
            return
        }
        setTip((tipAmount/people).toFixed(2))
        setTotal((totalAmount/people).toFixed(2))

    }

    function handleReset(){
        setBill('')
        setPeople('')
        setTip('0.00')
        setTotal('0.00')

    }

    return (
            <main>
            <img src="./images/logo.svg" alt="logo"/>
            <div className="container-main">
                <BillInfo people={people} bill={bill} change={handleChange} clicks={handleTipClick}/>
                <TipDisplay tip={tip} total={total} resetAction={handleReset}/>
            </div>
        </main>

    )
}

export default App
