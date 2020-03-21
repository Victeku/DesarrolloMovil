import React ,{Component} from 'react';

class vacacion extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'DE  DFGHJVACIONES'
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default vacacion;