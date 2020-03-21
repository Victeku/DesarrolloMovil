import React ,{Component} from 'react';

class ClaseDigital extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'PERO DEBO CONECTARME AL CLASSROOM'
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default ClaseDigital;