import './App.css';
import Bets from "./components/Bets/Bets";

import Rock from "./assets/Rock.svg";
import Paper from "./assets/Paper.svg";
import Scissors from "./assets/Scissors.svg";

function App() {
    const BETS = [
        {
            title: "Rock",
            key: "rock",
            image: Rock
        },
        {
            title: "Paper",
            key: "paper",
            image: Paper
        },
        {
            title: "Scissors",
            key: "scissors",
            image: Scissors
        }
    ];

    return (
        <div className="App">
            <div className="container">
                <div className="description">
                    <h1>ROCK – PAPER – SCISSORS</h1>
                    <p>Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and
                        no tools. The idea is to make shapes with an outstretched hand where each shape will have a
                        certain degree of power and will lead to an outcome.</p>
                </div>
                <Bets bets={BETS}/>
            </div>
        </div>
    );
}

export default App;
