import React from 'react';

class RestShow extends React.Component {
    constructor(props){
        super(props)
    
    }

    componentDidMount(){
        // debugger
        this.props.fetchRest(this.props.match.params.restId);
    }

    render(){
        
       if (!this.props.rest) {
           return null;
       }
       const { rest } = this.props;

        return (
            <div className="rest_index">
                <div className="rest_header">
                    <h1>Header banner here</h1>
                </div>
                <div className="rest_body">
                    <div className="main_rest_content">
                        {rest.name}
                    </div>
                    <div className="right_content">
                        <div className="rsvp_container">

                    </div>
                </div>

                </div>

            </div>
        )
    }
}

export default RestShow;