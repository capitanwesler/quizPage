import React from 'react';
import './selectquiz.css';

class SelectQuiz extends React.Component {

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
            <div id="selectquiz-container">
                <button 
                    className="btn-quiz" 
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    type="button"
                    value="quizmusic"
                    onClick={this.props.selectQuiz}
                >
                    Quiz of Music
                </button>
                <button 
                    className="btn-quiz" 
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    type="button"
                    value="quizdisney"
                    onClick={this.props.selectQuiz}
                >
                    Quiz of Disney
                </button>
               <button 
                    className="btn-quiz" 
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    type="button"
                    value="quizhollywood"
                    onClick={this.props.selectQuiz}
                >
                    Quiz of HollyWood
                </button>
                <button 
                    className="btn-quiz" 
                    onMouseDown={this.mouseDown}
                    onMouseUp={this.mouseUp}
                    type="button"
                    value="quizanime"
                    onClick={this.props.selectQuiz}
                >
                    Quiz of Anime
                </button>
            </div>
        );
    }
}

export default SelectQuiz;