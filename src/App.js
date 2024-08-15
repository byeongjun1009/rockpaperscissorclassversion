import { useState } from 'react';
import './App.css';
import Box from './component/Box';

/**
 * 1. 박스 2개: you, computer
 * 2. 가위, 바위 보 마다 사진 바껴야 함
 * 3. 버튼 3개
 * 4. 컴퓨터는 랜덤 선택
 * 5. 승패 무승부 판단
 * 6. 이기면 초록색, 지면 빨간색, 비기면 검정색
 */
const choice = {
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

function App() {
  const [userChoice, setUserChoice] = useState(null); 
  const [computerChoice, setcomputerChoice] = useState(null); 
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserChoice(choice[userChoice])
    let computerChoice = randomChoice()
    setcomputerChoice(choice[computerChoice])
    setResult(judgement(userChoice, computerChoice))
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomNum = Math.floor(Math.random() * itemArray.length)
    return itemArray[randomNum]
  }

  const judgement = (userChoice, computerChoice) => {
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

  return (
    <div className='app'>
      <div className='main'>
        <Box title="you" choice={userChoice} result={result} />
        <Box title="computer" choice={computerChoice} result={result} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
