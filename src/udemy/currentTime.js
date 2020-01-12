import React from 'react';
function getTime(){
    return (new Date()).toLocaleTimeString()
}
export const CurrentTime = () => {
    return (
        <div>
            <div>Curent Time</div>
            <h3>{getTime()}</h3>
        </div>
    );
}