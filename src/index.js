import React from 'react';
import ReactDOM from 'react-dom';
import { Children } from './Children';


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
    <Children/>,
    document.getElementById('root')
);