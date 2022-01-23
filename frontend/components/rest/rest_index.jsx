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

        const { fillInOneFieldBooking, currentUser, openModal } = this.props;
        const list1 = this.props.rests.slice(0, 5);
        const list1a = list1.map(rest => <RestIndexItem key={rest.id} rest={rest} 
        fillInOneFieldBooking={fillInOneFieldBooking} currentUser={currentUser} openModal={openModal}/>);

        const list2 = this.props.rests.slice(5, 10);
        const list2a = list2.map(rest => <RestIndexItem key={rest.id} rest={rest} 
        fillInOneFieldBooking={fillInOneFieldBooking} currentUser={currentUser} openModal={openModal} />);

        const list3 = this.props.rests.slice(10, 15);
        const list3a = list3.map(rest => <RestIndexItem key={rest.id} rest={rest} 
        fillInOneFieldBooking={fillInOneFieldBooking} currentUser={currentUser} openModal={openModal} />);
 
        return (
            <div>
                <div>
                    <div className="theme-header">Book for dinner tonight</div>
                        <ul className="index-row">
                          {list1a}
                        </ul>
                </div>
                <div>
                    <div className="theme-header">Outdoor Dining</div>
                    <ul className="index-row">
                        {list2a}
                    </ul>
                    </div>
                <div>
                <div className="theme-header">New to OpenSpot</div>
                    <ul className="index-row">
                        {list3a}
                    </ul>
                </div>
            </div>
        )   
    }
}

export default RestIndex;