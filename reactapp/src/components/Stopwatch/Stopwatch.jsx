import React from 'react';
class Stopwatch extends React.Component{
    constructor(){
        super();
        this.state={
            miliSec : 0,
            Sec: 0,
            min: 0,
            start: false,
            pause: false,
            resume: false,
            reset: false,
        }
    }
    startTimer = () => {
        this.interval=setInterval(() => {
            this.setState({
                start: false,
                pause: true,
                resume: false,
                reset: true,
                miliSec: this.
            })
        })
    }
}