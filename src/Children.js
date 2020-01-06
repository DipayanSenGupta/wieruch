import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

export class Children extends React.Component{
    render(){
        return(
            <div>
                <List type="kutu">
                    <li>alo</li>
                    <li>vaalo</li>
                </List>

                <List type="putu">
                    <li>alo</li>
                </List>
            </div>
        )
    }
}