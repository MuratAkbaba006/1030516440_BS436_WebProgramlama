import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Game } from './Game';


class App extends Component{
    render()
    {
        return(<Game/>)
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));












