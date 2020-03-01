import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';

class Container extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return (
            <Dashboard id="dashboard"/>
        )
    }
}

export default Container;