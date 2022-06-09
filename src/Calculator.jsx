import './App.css';
import React, { Component } from "react"


export default class Calculator extends Component {
    state = {
        num1: "",
        num2: "",
        result: "",
        operator: "+"
    }
    setNum = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleCalculate = (e) =>{
        e.preventDefault()
        let evalValue = eval(`${this.state.num1} ${this.state.operator} ${this.state.num2}`)
        this.setState(()=>{
            return {result: evalValue}
        })

    }
    render() {
        return (

            <>
                <div className="calculator">
                    <h1>Calculatorr</h1>

                    <form onSubmit={this.handleCalculate}>
                        <input type="number"
                            name="num1"
                            value={this.state.num1}
                            onChange={this.setNum}
                        />
                        <span>+</span>
                        <input type="number"
                            name="num2"
                            value={this.state.num2}
                            onChange={this.setNum}
                        />
                        <button>=</button>
                        <h3>--> {this.state.result}</h3>
                    </form>
                </div>

            </>
        )
    }
}