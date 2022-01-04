import React from 'react';
import RestIndexItem from './rest_index_item';

class RestIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRests();
    }

    render(){
        if (this.props.rests.length === 0) return null;
        const list = this.props.rests.slice(0, 5);
        const list1 = list.map(rest => <RestIndexItem rest={rest} />);

        // debugger
        return (
            <div>
                <h1>hello</h1>
                <ul className="index-row">
                    {list1}
                </ul>
                {/* <RestIndexItem /> */}
            </div>
        )   
    }


}

export default RestIndex;