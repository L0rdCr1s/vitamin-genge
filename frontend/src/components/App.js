import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Container from './Container'
import { Provider } from 'react-redux'
import { tmms_store } from './Data'
import Auth from './content/Auth'


export default class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Provider store={tmms_store}>
                    <Container />
                </Provider>
            </BrowserRouter>
        );
    }
}

const renderJpgs = () => {
    if (document.getElementById('app')) {
        ReactDOM.render(<App />, document.getElementById('app'));
    }
}
renderJpgs()
