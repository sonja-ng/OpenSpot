import React from 'react';

class UserNavBar extends React.Component {
    componentDidMount(){
        this.props.enableScrolling();
    }

    render() {
        return (
            <div className="right_navbar">
                <button onClick={this.props.logout} className="user_icon"><i className="fas fa-user-circle"></i></button>
                <span className="calendar_icon"><i className="far fa-calendar"></i></span>
                <span className="bell_icon"><i className="far fa-bell"></i></span>
                <div>
                    <span className="search_icon"><i className="fas fa-search"></i></span>
                </div>
            </div>
        )
    }
}

export default UserNavBar;