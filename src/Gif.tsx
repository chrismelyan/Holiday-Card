import React from 'react';
import './App.css'

const Gif = () => {
    return (
        <div>
            <img className={'gif'} src={'https://i.gifer.com/origin/93/933dc98b8e6b16193d647716b506a903.gif'}/>
            <h4 style={{color: 'darkred'}}>Самураи своих не бросают!</h4>
            <h4 style={{color: 'darkred'}}>Летим дальше!</h4>
        </div>
    );
};

export default Gif;