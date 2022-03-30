import React from "react";
import "./app.css";
import GridRow from "./Components/GridRow";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      boardState: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
      ],
      turn: "x"
    };
  }

  // wheneveer you want to change the array in state
  updateBoard = (row, col) => {
    // Always make a new state array and assign it;

    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "x" ? "0" : "x",
      boardState: arr
    });
  };

  updateBoard(row, col, value) {}
  render() {
    return (
      <>
        <div className="container">
          {[0, 1, 2].map((row) => {
            return (
              <GridRow
                index={row}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default App;
