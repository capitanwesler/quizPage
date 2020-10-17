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
            {
                name: "Disney",
                questions: [
                    {
                        question: "When was released Micky Mouse?",
                        answers: ["1950", "3050", "2002", "3050"],
                        correctAnswer: "1950",
                    },
                    {
                        question: "It's the Mandalorian part of Start Wars Lore?",
                        answers: ["Yes", "No", "Maybe", "I don't know"],
                        correctAnswer: "Yes",
                    }
                ]
            },
            {
                name: "Stars",
                questions: [
                    {
                        question: "Who's the main character in the film Edge of the Night?",
                        answers: ["Tom Cruise", "Sherlock Holmes", "Obama", "Trump"],
                        correctAnswer: "Tom Cruise",
                    },
                    {
                        question: "When is the birthday of Nicolas Cage?",
                        answers: ["05 of March", "05 of October", "05", "I don't know"],
                        correctAnswer: "05 of March",
                    }
                ]
            },
            {
                name: "Anime",
                questions: [
                    {
                        question: "Who is the main character of Boku no Hero?",
                        answers: ["Deku", "Bakugo", "All Might", "Uraraka"],
                        correctAnswer: "Deku",
                    },
                    {
                        question: "Toppen Tengen Gurren Lagan is the best anime?",
                        answers: ["Yes", "Of COURSE", "nO", "I DON'T KNOW"],
                        correctAnswer: "Yes",
                    }
                ]
            }
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

        if (this.state.page === "quizdisney") {
            return <Quiz dataQuiz={this.state.quizData[1]} handleBack={this.handleBack} />;
        }

        if (this.state.page === "quizhollywood") {
            return <Quiz dataQuiz={this.state.quizData[2]} handleBack={this.handleBack} />;
        }

        if (this.state.page === "quizanime") {
            return <Quiz dataQuiz={this.state.quizData[3]} handleBack={this.handleBack} />;
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