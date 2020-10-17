import React from 'react';
import './quiz.css';

class Quiz extends React.Component {

    mouseDown = (event) => {
        let button = event.target;

        button.style.boxShadow = 'none';
    }

    mouseUp = (event) => {
        let button = event.target;

        button.style.boxShadow = "5px 5px black";
    }

    render() {
        return(
            <div id="quiz-container">
                <div id="title-and-button">
                    <button id="go-back-button" onClick={this.props.handleBack}>Go Back !</button>
                    <div id="quiz-title">
                        <h2>Quiz of {this.props.dataQuiz.name}</h2>
                    </div>
                </div>
                <div id="quiz-questions">
                    <p>{this.props.dataQuiz.questions[0].question}</p>
                    <ul>
                        {this.props.dataQuiz.questions[0].answers
                        .map(answer => {
                            return <li 
                                        className="answer-quiz"
                                        onMouseDown={this.mouseDown}
                                        onMouseUp={this.mouseUp}
                                    >
                                        {answer}
                                    </li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Quiz;