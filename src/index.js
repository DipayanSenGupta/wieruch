import React from 'react';
import ReactDOM from 'react-dom';
import { Parent } from './Parent';


class View extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    Hello from index
                </h1>
            </div>    
        );
    }
}

ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
);