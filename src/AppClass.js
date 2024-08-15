import React, { Component } from 'react'
import Box from './component/Box';
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

    constructor(props) {
        super(props)
        this.state={
            userChoice: null,
            computerChoice: null,
            result: ""
        }
    }
    
    choice = {
        rock: {
            name: "rock",
            img: "https://thumb.photo-ac.com/a2/a2d422319008d3fed821408e028e022a_t.jpeg"
        },
        paper: {
            name: "paper",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sUsLBJm68ApB4lAuLQnedEDXVDm1D3EzwQ&s"
        },
        scissor: {
            name: "scissor",
            img: "https://cdn.funshop.co.kr/products/0000048148/vs_image800.jpg"
        }
    };

    play = (userChoice) => {
        let computerChoice = this.randomChoice()
        this.setState({userChoice: this.state.userChoice = this.choice[userChoice], computerChoice: this.choice.computerChoice = this.choice[computerChoice], result: this.state.result = this.judgement(userChoice, computerChoice)})

      }
    
      randomChoice = () => {
        let itemArray = Object.keys(this.choice)
        let randomNum = Math.floor(Math.random() * itemArray.length)
        return itemArray[randomNum]
      }
    
      judgement = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
          return "tie"
        }
        if (userChoice === "rock") {
          return computerChoice === "scissor" ? "win" : "lose"
        }
        if (userChoice === "paper") {
          return computerChoice === "rock" ? "win" : "lose"
        }
        if (userChoice === "scissor") {
          return computerChoice === "paper" ? "win" : "lose"
        }
      }

    render() {


        return (
            <div className='app'>
                <div className='main'>
                    <BoxClass title="you" choice={this.state.userChoice} result={this.state.result} />
                    <BoxClass title="computer" choice={this.state.computerChoice} result={this.state.result} />
                </div>
                <div className='main'>
                    <button onClick={() => this.play("scissor")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
