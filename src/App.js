import React, { useState } from "react"
import Score from "./Score"
import Buttons from "./Buttons"
import Result from "./Result"
import "./App.css"
import { Paper } from "@material-ui/core"

function App() {
    const picks = ["Rock", "Paper", "Scissors"]

    const [state, setState] = useState({
        score: {
            you: 0,
            cpu: 0
        },
        lastGame: {
            you: null,
            cpu: null
        }
    })

    const nextGame = yourPick => {
        const cpuPick = picks[Math.floor(Math.random() * 3)]
        setState({
            score: {
                you:
                    state.score.you +
                    (gameResult(yourPick, cpuPick) === "WON" ? 1 : 0),
                cpu:
                    state.score.cpu +
                    (gameResult(yourPick, cpuPick) === "LOST" ? 1 : 0)
            },
            lastGame: { you: yourPick, cpu: cpuPick }
        })
        console.log(state)
        console.log(yourPick, cpuPick)
    }

    const gameResult = (yourPick, cpuPick) => {
        if (yourPick === "Rock" && cpuPick === "Rock") return "DRAW"
        if (yourPick === "Rock" && cpuPick === "Paper") return "LOST"
        if (yourPick === "Rock" && cpuPick === "Scissors") return "WON"
        if (yourPick === "Paper" && cpuPick === "Rock") return "WON"
        if (yourPick === "Paper" && cpuPick === "Paper") return "DRAW"
        if (yourPick === "Paper" && cpuPick === "Scissors") return "LOST"
        if (yourPick === "Scissors" && cpuPick === "Rock") return "LOST"
        if (yourPick === "Scissors" && cpuPick === "Paper") return "WON"
        if (yourPick === "Scissors" && cpuPick === "Scissors") return "DRAW"
    }
    return (
        <div className="App">
            <header className="App-header">
                <Paper
                    style={{ backgroundColor: "#999", padding: 20, width: 600 }}
                >
                    <Score score={state.score} />
                    <Buttons nextGame={nextGame} />
                    <Result lastGame={state.lastGame} gameResult={gameResult} />
                </Paper>
            </header>
        </div>
    )
}

export default App
