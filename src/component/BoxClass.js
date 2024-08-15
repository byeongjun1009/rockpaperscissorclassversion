import React, { Component } from 'react'

export default class
    extends Component {

    result;
    render() {
        if (this.props.title === "computer" && this.props.result !== "") {
    
            if (this.props.result === "tie") {
                this.result = "tie"
            } else {
                this.result = this.props.result === "win" ? "lose" : "win"
            }
        } else {
            this.result = this.props.result
        }
        return (
            <div className={`box ${this.result}`}>
                <h1>{this.props.title}</h1>
                <img src={this.props.choice && this.props.choice.img} alt="null" />
                <h2>{this.result}</h2>
            </div>
        )
    }
}
