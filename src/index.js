import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import SelectQuiz from './components/selectquiz/selectquiz';
import Quiz from './components/quiz/quiz';


class QuizPage extends React.Component {

    state = {
        page: "selectQuiz",
        quizData: [
            {
                name: "Music",
                questions: [
                    {
                        question: "When was created La Vida de Boheme?",
                        answers: ["1998", "1355", "2002", "2015"],
                        correctAnswer: "2002",
                    },
                    {
                        question: "Who are The Beatles?",
                        answers: ["A band of USA", "A group of people", "The most Historic band in the world", "I don't know"],
                        correctAnswer: "The most Historic band in the world"
                    }
                ]
            },
        ],
    }

    handleQuiz = (event) => {
        let selectedQuiz = event.target.value;

        this.setState({
            page: selectedQuiz,
        });
    }

    handleBack = () => {
        this.setState({
            page: "selectQuiz"
        });
    }

    renderPage = () => {
        if (this.state.page === "selectQuiz") {
            return <SelectQuiz selectQuiz={this.handleQuiz}/>;
        }

        if (this.state.page === "quizmusic") {
            return <Quiz dataQuiz={this.state.quizData[0]} handleBack={this.handleBack} />;
        }
    }
    
    render() {
        return(
            <div id="main-container">
                <Navbar />
                {this.renderPage()}
            </div>
        );
    }
}

ReactDOM.render(
    <QuizPage />,
    document.getElementById("root"),
);