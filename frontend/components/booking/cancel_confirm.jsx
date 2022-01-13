import React from 'react';
import { withRouter } from 'react-router-dom';

class Cancel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(()=>this.props.history.push("/"), 5000);
    }

    render(){
        return (
            <h1>Cancel!</h1>
        )
    }
}

export default withRouter(Cancel);