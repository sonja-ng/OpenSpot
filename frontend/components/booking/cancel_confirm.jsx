import React from 'react';
import { withRouter } from 'react-router-dom';

class Cancel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        setTimeout(()=>this.props.history.push("/"), 3000);
    }

    render(){
        return (
            <div className="mod-bg">
                <div className="mod">
                    <div className="mod-rest-row">
                            <div className="mod-rest">Your booking has been cancelled!</div>
                    </div>
                </div>
                
                <div className="flex-row-mod">
                        <div className="mod-details">You are being redirected back to the homepage.</div>
                    </div>
            </div>
        )
    }
}

export default withRouter(Cancel);