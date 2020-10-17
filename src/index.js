import React from 'react';
import ReactDOM from 'react-dom';

class Quiz extends React.Component {
    
    render() {
        return(
            <div>
                <h1>Hello !</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Quiz />,
    document.getElementById("root"),
);