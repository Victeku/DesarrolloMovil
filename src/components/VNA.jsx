import React ,{Component} from 'react';

class VNA extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'MEDFGHJKJ VOY'
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default VNA;