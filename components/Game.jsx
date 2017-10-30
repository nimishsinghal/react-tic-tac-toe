import React,  from 'react';
import PropTypes from 'prop-types';

import Board from './Board';

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
            {
                squares: squares
            }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
      }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        return (
            <Board
                squares={current.squares}
                onClick={i => this.handleClick(i)}
            />
        );
    }
};


Game.PropTypes = {
    onClick: PropTypes.func
};


export default Game;
