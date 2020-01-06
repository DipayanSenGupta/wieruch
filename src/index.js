import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class View extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    o pote poti (from view)
                </h1>
                <Greeting name ="Alison" signedIn = { true }/>
                <article>
                    latest from view
                </article>
            </div>    
        );
    }
}

ReactDOM.render(
    <View />,
    document.getElementById('root')
);